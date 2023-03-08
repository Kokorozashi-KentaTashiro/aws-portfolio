import console = require("console");
import * as AWS from "aws-sdk";
const dynamodb = new AWS.DynamoDB.DocumentClient();
import { TABLE_NAME, USERINFO_SORTKEY } from "../common/constants";

export const getUserInfo = async (body: any) => {
  console.log("getUserInfo.ts/開始");
  const queryResult: any = await dynamodb
    .get(
      {
        TableName: TABLE_NAME,
        Key: {
          partitionKey: body.userId,
          sortKey: USERINFO_SORTKEY,
        },
      },
      (err, res) => {
        if (err) {
          console.log("getUserInfo.ts/ユーザー情報取得エラー");
        } else {
          console.log("getUserInfo.ts/ユーザー情報取得完了");
        }
      }
    )
    .promise();

  let result;

  if (queryResult.Item) {
    result = {
      isAdmin: false,
      userId: queryResult.Item.partitionKey,
      lastName: queryResult.Item.lastName,
      firstName: queryResult.Item.firstName,
      email: queryResult.Item.email,
      phone: queryResult.Item.phone,
    };
  } else {
    result = {
      isAdmin: false,
      userId: body.userId,
      lastName: "",
      firstName: "",
      email: "",
      phone: "",
    };
  }

  console.log("getUserInfo.ts/終了");
  return result;
};
