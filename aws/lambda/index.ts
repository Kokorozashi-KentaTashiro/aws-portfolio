import { APIGatewayEvent } from 'aws-lambda';
import { TOURNAMENT_RESOURCE, TOURNAMENTS_RESOURCE } from './common/constants';
import { postTournamentRegist } from "./postTournamentRegist";
import { getTournaments } from './getTournaments';


// https://abillyz.com/vclbuff/studies/352
// npm run buildで「./build/*」以外をビルドするように設定
export const handler = async (event: APIGatewayEvent) => {

    // requestBodyの取得
    let reqBody;
    if (event.body) {
        reqBody = JSON.parse(event.body);
    };

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
        case TOURNAMENT_RESOURCE:
            response = await postTournamentRegist(reqBody);
            break;
        case TOURNAMENTS_RESOURCE:
            response = await getTournaments();
            break;
        default:
            throw 'not found evenet resource;';
    };

    // return
    return {
        statusCode,
        headers,
        body: JSON.stringify(response),
    };
}