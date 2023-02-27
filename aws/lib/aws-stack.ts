import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
import * as cognito from "aws-cdk-lib/aws-cognito";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import * as iam from "aws-cdk-lib/aws-iam";

import * as path from "path";

import {
  GLOBAL_INDEX_SORTKEY_EVENTDATE,
  EVENET_HTTP_GET,
  EVENET_HTTP_POST,
  EVENET_HTTP_PUT,
  USERINFO_RESOURCE,
  TOURNAMENT_RESOURCE,
  TOURNAMENTS_RESOURCE,
  APPLICATIONS_RESOURCE,
} from "../lambda/common/constants";

export class AwsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // S3： バケット作成
    const bucket = new s3.Bucket(this, "tashiroCdkBucket", {
      bucketName: "tashiro-cdk-s3",
    });

    // CloudFront: ディストリビューションの作成
    // https://docs.aws.amazon.com/cdk/api/v1/docs/aws-cloudfront-readme.html
    new cloudfront.Distribution(this, "tashiroCdkDistribution", {
      comment: `target s3 "${bucket.bucketName}"`,
      defaultBehavior: { origin: new origins.S3Origin(bucket) },
    });

    // Cognito
    // https://qiita.com/takmot/items/fb00c56404d7df76ab00
    const userPool = new cognito.UserPool(this, "tashiroCdkUserPool", {
      userPoolName: "tashiro-cdk-userPool",
      // ログインに使用する項目を指定
      signInAliases: {
        email: true,
      },
      selfSignUpEnabled: true,
      userVerification: {
        emailSubject: "【千葉卓球連盟】ユーザー認証",
        emailBody:
          "このたびは千葉県卓球連盟アプリにご登録いただきありがとうございます。\r\nこのメールの認証コードをブラウザ画面に入力して会員登録を完了してください。\r\n認証コード： {####}",
        emailStyle: cognito.VerificationEmailStyle.CODE,
      },
    });

    const userPoolClient = new cognito.UserPoolClient(
      this,
      "tashiroCdkUserPoolClient",
      {
        userPoolClientName: "tashiro-cdk-userPoolClient",
        userPool: userPool,
        authFlows: {
          custom: true,
          userSrp: true,
        },
        supportedIdentityProviders: [
          cognito.UserPoolClientIdentityProvider.COGNITO,
        ],
        oAuth: {
          callbackUrls: ["http://localhost:3000"],
          logoutUrls: ["http://localhost:3000"],
        },
      }
    );

    userPool.addDomain("tashiroCdkUserPoolDomain", {
      cognitoDomain: {
        domainPrefix: "tashiro-cdk-userpool-domain",
      },
    });

    // DynamoDB: テーブル作成
    const table = new dynamodb.Table(this, "tashiroCdkTable", {
      tableName: "tashiro-cdk-table",
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      partitionKey: {
        name: "partitionKey",
        type: dynamodb.AttributeType.STRING,
      },
      sortKey: {
        name: "sortKey",
        type: dynamodb.AttributeType.STRING,
      },
    });

    // DynamoDB: インデックス作成
    // https://itotetsu.hatenablog.com/entry/amazon-dynamodb-via-aws-cdk
    table.addGlobalSecondaryIndex({
      indexName: GLOBAL_INDEX_SORTKEY_EVENTDATE,
      partitionKey: { name: "sortKey", type: dynamodb.AttributeType.STRING },
      sortKey: { name: "eventDate", type: dynamodb.AttributeType.STRING },
    });

    // Lambda実行用のIAMロールを作成（CloudWatch, DynamoDB, SES）
    // https://qiita.com/yamato1491038/items/6a3eb65688389a5d6e31
    const lambdaRole = new iam.Role(this, "tashiroCdkLamdbaRole", {
      roleName: "tashiro-cdk-lamdba-role",
      assumedBy: new iam.ServicePrincipal("lambda.amazonaws.com"),
    });
    lambdaRole.addManagedPolicy(
      iam.ManagedPolicy.fromManagedPolicyArn(
        this,
        "AWSLambdaBasicExecutionRole",
        "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
      )
    );
    lambdaRole.addManagedPolicy(
      iam.ManagedPolicy.fromManagedPolicyArn(
        this,
        "AmazonSESFullAccess",
        "arn:aws:iam::aws:policy/AmazonSESFullAccess"
      )
    );

    // Lambda： Layer作成
    // https://dev.classmethod.jp/articles/aws-cdk-node-modules-lambda-layer/
    const lambdaLayer = new lambda.LayerVersion(this, "tashiroCdkLambdaLayer", {
      layerVersionName: "tashiro-cdk-lambdaLayer",
      code: lambda.AssetCode.fromAsset("./lambdaLayer"),
      compatibleRuntimes: [lambda.Runtime.NODEJS_18_X],
    });

    // Lambda: 関数作成
    // https://aws.amazon.com/jp/blogs/news/lambda-managed-by-cdk/
    const lambdaFunction = new lambda.Function(
      this,
      "tashiroCdkLambdaFunction",
      {
        functionName: "tashiro-cdk-lambdaFunction",
        runtime: lambda.Runtime.NODEJS_18_X,
        handler: "tashiro-cdk-lambdaFunction/index.handler",
        code: lambda.Code.fromAsset(path.join(__dirname, "../lambda/build")),
        layers: [lambdaLayer],
        environment: {
          TABLE_NAME: "tashiro-cdk-table",
          PRIMARY_KEY: "partitionKey",
        },
        role: lambdaRole,
      }
    );

    // Lambda: dynamoDBアクセス権限付与
    // https://dev.classmethod.jp/articles/aws-cdk-101-typescript/
    table.grantFullAccess(lambdaFunction);

    // ApiGateway: REST API作成
    // https://dev.classmethod.jp/articles/cors-on-rest-api-of-api-gateway/
    const restApi = new apigateway.RestApi(this, "tashiroCdkRestApi", {
      restApiName: "tashiro-cdk-restApi",
      deployOptions: {
        stageName: "dev",
      },
      defaultCorsPreflightOptions: {
        allowOrigins: apigateway.Cors.ALL_ORIGINS,
        allowMethods: apigateway.Cors.ALL_METHODS,
        allowHeaders: apigateway.Cors.DEFAULT_HEADERS,
        statusCode: 200,
      },
    });

    // ApiGateway: リソース作成
    const userInfoResource = restApi.root.addResource(USERINFO_RESOURCE);
    const tournamentResource = restApi.root.addResource(TOURNAMENT_RESOURCE);
    const tournamentsResource = restApi.root.addResource(TOURNAMENTS_RESOURCE);
    const applicationsResource = restApi.root.addResource(
      APPLICATIONS_RESOURCE
    );

    // ApiGateway: メソッド作成
    userInfoResource.addMethod(
      EVENET_HTTP_POST,
      new apigateway.LambdaIntegration(lambdaFunction)
    );
    userInfoResource.addMethod(
      EVENET_HTTP_PUT,
      new apigateway.LambdaIntegration(lambdaFunction)
    );
    tournamentResource.addMethod(
      EVENET_HTTP_PUT,
      new apigateway.LambdaIntegration(lambdaFunction)
    );
    tournamentsResource.addMethod(
      EVENET_HTTP_GET,
      new apigateway.LambdaIntegration(lambdaFunction)
    );
    applicationsResource.addMethod(
      EVENET_HTTP_POST,
      new apigateway.LambdaIntegration(lambdaFunction)
    );
    applicationsResource.addMethod(
      EVENET_HTTP_PUT,
      new apigateway.LambdaIntegration(lambdaFunction)
    );
  }
}
