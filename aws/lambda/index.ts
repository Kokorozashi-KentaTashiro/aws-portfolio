import axios from 'axios';

export const handler = async function () {
    const response = await axios.get('https://amazon.co.jp/');
    return JSON.stringify({
        message: `status code: ${response.status}`
    });
}