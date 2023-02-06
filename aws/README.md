# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

## aws CLIの環境構築  
　https://aws.amazon.com/jp/getting-started/guides/setup-environment/  

## CDKチュートリアル  
　https://aws.amazon.com/jp/getting-started/guides/setup-cdk/  

## 環境変数をenvに切り出す方法  
　https://maku77.github.io/nodejs/env/dotenv.html  

## lambdaのバックエンド用資材を作成する方法  
　cd ./lambda  
　npm run build  
　./lambda/build/index.jsをlambdaにアップロード  

## lambdaのバックエンド用layer資材を作成する方法
　cd ./lambda  
　npm install --production  
　./lambda/node_modules⇒./lambdaLayer/nodejs/  
　↑の通りコピー  
  cdkにてlambda.LayerVersionのfromAssetに./lambdaLayerを設定  
