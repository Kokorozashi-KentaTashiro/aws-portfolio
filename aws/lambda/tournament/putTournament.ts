import * as AWS from "aws-sdk";
const dynamodb = new AWS.DynamoDB.DocumentClient();
import { TABLE_NAME, TOURNAMENT_SORTKEY } from "../common/constants";

export const putTournament = async (body: any) => {
  // DynamoDBレコード作成
  const result = await dynamodb
    .put({
      TableName: TABLE_NAME,
      Item: {
        partitionKey: body.title,
        sortKey: TOURNAMENT_SORTKEY,
        eventDate: body.eventDate,
        place: body.place,
        applicationStartDate: body.applicationStartDate,
        applicationEndDate: body.applicationEndDate,
      },
    })
    .promise();

  return result;
};
