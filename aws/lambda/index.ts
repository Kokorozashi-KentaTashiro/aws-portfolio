import axios from 'axios';

// https://abillyz.com/vclbuff/studies/352
// npm run buildで「./build/*」以外をビルドするように設定
export const handler = async function () {
    let axiosExe = await axios.get('https://amazon.co.jp/');
    let response = { result: 'OK' };
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