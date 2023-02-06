import { API_NAME, API_ENDPOINT } from "common/constants";
export const amplifyConfig = {
  // Cognito ログインフォーム実装
  // https://dev.classmethod.jp/articles/react-cognito-signin/
  Auth: {
    region: process.env.REACT_APP_AWS_REGION,
    userPoolId: process.env.REACT_APP_COGNITO_USERPOOL_ID,
    userPoolWebClientId: process.env.REACT_APP_COGNITO_CLIENT_ID,
    oauth: {
      domain: process.env.REACT_APP_COGNITO_DOMAIN,
      scope: ["openid"],
      redirectSignIn: process.env.REACT_APP_COGNITO_REDIRECT_URL,
      redirectSignOut: process.env.REACT_APP_COGNITO_REDIRECT_URL,
      responseType: "code",
    },
  },
  // API GateWayの呼び出し処理実装
  // https://docs.amplify.aws/lib/restapi/getting-started/q/platform/js/
  API: {
    endpoints: [
      {
        name: API_NAME,
        endpoint: API_ENDPOINT,
      },
    ],
  },
};
