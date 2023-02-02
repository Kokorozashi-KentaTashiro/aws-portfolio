// https://abillyz.com/vclbuff/studies/352
// npm run buildで「./build/*」以外をビルドするように設定
export const handler = async function () {
    let response = {result:'成功'};
    let statusCode = 200;
    let headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    };
    return {
        statusCode,
        headers,
        body: JSON.stringify(response),
    };
}