import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
import * as cognito from "aws-cdk-lib/aws-cognito";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";

import * as path from "path";

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
      }
    );

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
    const tournamentsResource = restApi.root.addResource("tournaments");

    // ApiGateway: メソッド作成
    tournamentsResource.addMethod("GET", new apigateway.LambdaIntegration(lambdaFunction));

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
  }
}
