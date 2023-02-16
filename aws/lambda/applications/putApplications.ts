import * as AWS from "aws-sdk";
import console = require("console");
const dynamodb = new AWS.DynamoDB.DocumentClient();
const ses = new AWS.SES();
import {
  TABLE_NAME,
  TOURNAMENT_SORTKEY,
  USERINFO_SORTKEY,
} from "../common/constants";

export const putApplications = async (body: any) => {
  const { tournamentName, tornamentApplicationsInfo } = body;

  // dynamoDbの登録ロジック
  tornamentApplicationsInfo.forEach(async (tornamentApplicationInfo: any) => {
    console.log("【putApplications/start】");
    await dynamodb
      .put(
        {
          TableName: TABLE_NAME,
          Item: {
            partitionKey: `${tornamentApplicationInfo.lastName} ${tornamentApplicationInfo.firstName}`,
            sortKey: tournamentName,
            lastName: tornamentApplicationInfo.lastName,
            firstName: tornamentApplicationInfo.firstName,
            school: tornamentApplicationInfo.school,
            schoolYear: tornamentApplicationInfo.schoolYear,
            sex: tornamentApplicationInfo.sex,
          },
        },
        (err, res) => {
          if (err) {
            console.log(`【putApplications/error】${err}`);
          } else {
            console.log(`【putApplications/success】${res}`);
          }
        }
      )
      .promise();
  });

  // // メール送信ロジック（定期配信はEventBridge⇒Lambda,随時配信はReact⇒Lambda）
  // const params = {
  //   Source: "kenta.tashiro@kokorozashi-japan.co.jp",
  //   Destination: {
  //     ToAddresses: ["reona.suzuki@kokorozashi-japan.co.jp"],
  //   },
  //   Message: {
  //     Subject: {
  //       Data: "こんにちは、こんにちは！",
  //       Charset: "utf-8",
  //     },
  //     Body: {
  //       Text: {
  //         Data: "こんにちは、テストメールです",
  //         Charset: "utf-8",
  //       },
  //     },
  //   },
  // };

  // await ses
  //   .sendEmail(params, (err, res) => {
  //     if (err) {
  //     }
  //   })
  //   .promise();

  // // ID作成ロジック（cognito⇒Lambdaのところに追加）
  // await ses
  //   .verifyEmailIdentity(
  //     {
  //       EmailAddress: "reona.suzuki@kokorozashi-japan.co.jp",
  //     },
  //     (err, res) => {
  //       if (err) {
  //       }
  //     }
  //   )
  //   .promise();

  return { result: "ok" };
};
