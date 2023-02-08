import * as AWS from "aws-sdk"
const dynamodb = new AWS.DynamoDB.DocumentClient();
import { TABLE_NAME, GLOBAL_INDEX_SORTKEY_EVENTDATE, TOURNAMENT_SORTKEY } from './common/constants';

export const getTournaments = async () => {

    // DynamoDBレコード作成
    // https://qiita.com/sayama0402/items/fc7ce074f1f1747b1bef
    const queryResults: any = await dynamodb.query({
        TableName: TABLE_NAME,
        IndexName: GLOBAL_INDEX_SORTKEY_EVENTDATE,
        ExpressionAttributeNames: {
            "#sk": 'sortKey'
        },
        ExpressionAttributeValues: {
            ":sk" : TOURNAMENT_SORTKEY
        },
        KeyConditionExpression: '#sk = :sk'
    }).promise();



    const result = queryResults.Items.map((queryResult: any) => {
        return {
            title: queryResult.partitionKey,
            eventDate: queryResult.eventDate,
            place: queryResult.place,
            applicationStartDate: queryResult.applicationStartDate,
            applicationEndDate: queryResult.applicationEndDate,
        }
    });


    return result;

};