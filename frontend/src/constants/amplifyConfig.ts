export const amplifyConfig = {
  aws_project_region: process.env.REACT_APP_AWS_REGION,
  aws_cognito_region: process.env.REACT_APP_AWS_REGION,
  aws_user_pools_id: process.env.REACT_APP_COGNITO_USERPOOL_ID,
  aws_user_pools_web_client_id: process.env.REACT_APP_COGNITO_CLIENT_ID,
  oauth: {
    domain: process.env.REACT_APP_COGNITO_DOMAIN,
    scope: ["openid"],
    redirectSignIn: process.env.REACT_APP_COGNITO_REDIRECT_URL,
    redirectSignOut: process.env.REACT_APP_COGNITO_REDIRECT_URL,
    responseType: "code",
  },
};
