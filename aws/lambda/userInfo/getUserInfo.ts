import console = require("console");
import * as AWS from "aws-sdk";
const dynamodb = new AWS.DynamoDB.DocumentClient();
import { TABLE_NAME, USERINFO_SORTKEY } from "../common/constants";

export const getUserInfo = async (body: any) => {
  console.log("【getUserInfo/start】");
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
          console.log(`【getUserInfo/error】${err}`);
        } else {
          console.log(`【getUserInfo/success】${res}`);
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

  return result;
};
