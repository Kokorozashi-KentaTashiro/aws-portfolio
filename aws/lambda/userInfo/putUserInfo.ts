import * as AWS from "aws-sdk";
const dynamodb = new AWS.DynamoDB.DocumentClient();
import {
  TABLE_NAME,
  TOURNAMENT_SORTKEY,
  USERINFO_SORTKEY,
} from "../common/constants";

export const putUserInfo = async (body: any) => {
  // DynamoDBレコード作成
  const result = await dynamodb
    .put({
      TableName: TABLE_NAME,
      Item: {
        partitionKey: body.userId,
        sortKey: USERINFO_SORTKEY,
        lastName: body.lastName,
        firstName: body.firstName,
        email: body.email,
        phone: body.phone,
      },
    })
    .promise();

  return result;
};
