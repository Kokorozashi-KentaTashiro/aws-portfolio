import { APIGatewayEvent } from "aws-lambda";
import {
  USERINFO_RESOURCE,
  TOURNAMENT_RESOURCE,
  TOURNAMENTS_RESOURCE,
  EVENET_HTTP_POST,
} from "./common/constants";
import { getUserInfo } from "./userInfo/getUserInfo";
import { putTournament } from "./tournament/putTournament";
import { getTournaments } from "./tournaments/getTournaments";
import { putUserInfo } from "./userInfo/putUserInfo";

// https://abillyz.com/vclbuff/studies/352
// npm run buildで「./build/*」以外をビルドするように設定
export const handler = async (event: APIGatewayEvent) => {
  // requestBodyの取得
  let reqBody;
  if (event.body) {
    reqBody = JSON.parse(event.body);
  }

  // return用の変数宣言
  let statusCode = 200;
  let headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };
  let response;

  // apiGateWayのresource名を取得
  let resource = event.resource;
  let httpMethod = event.httpMethod;

  // 実処理
  switch (resource) {
    case `/${USERINFO_RESOURCE}`:
      if (httpMethod === EVENET_HTTP_POST) {
        response = await getUserInfo(reqBody);
      } else {
        response = await putUserInfo(reqBody);
      }
      break;

    case `/${TOURNAMENT_RESOURCE}`:
      response = await putTournament(reqBody);
      break;

    case `/${TOURNAMENTS_RESOURCE}`:
      response = await getTournaments();
      break;
    default:
      throw "not found evenet resource;";
  }

  // return
  return {
    statusCode,
    headers,
    body: JSON.stringify(response),
  };
};
