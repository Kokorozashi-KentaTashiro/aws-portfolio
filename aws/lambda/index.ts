import * as AWS from "aws-sdk"
import { APIGatewayEvent } from 'aws-lambda';
import { TABLE_NAME } from './common/constants';

const dynamodb = new AWS.DynamoDB.DocumentClient();

// https://abillyz.com/vclbuff/studies/352
// npm run buildで「./build/*」以外をビルドするように設定
export const handler = async (event: APIGatewayEvent) => {

    let reqBody;

    if (event.body) {
        reqBody = JSON.parse(event.body);
    } else {
        return;
    }


    // return用の変数宣言
    let statusCode = 200;
    let headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    };
    let response = {result: "None"};

    // DynamoDBレコード作成
    const result = await dynamodb.put({
        TableName: TABLE_NAME,
        Item: {
            "partitionKey": reqBody.partitionKey,
            "sortKey": "testSortKey",
            "column1": "testColumn1",
        }
    }).promise();


    // return
    return {
        statusCode,
        headers,
        body: JSON.stringify(response),
    };
}