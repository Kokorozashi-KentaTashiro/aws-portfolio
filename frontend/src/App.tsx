import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Amplify, Auth, Hub } from "aws-amplify";
import { amplifyConfig } from "./constants/amplifyConfig";

import {
  selectLoginInfo,
  setUserId,
  setEmail,
  fetchAsyncGetUserInfo,
} from "ducks/auth/slice";
import { LoginInfo } from "ducks/auth/type";
import Login from "containers/Login";
import { PAGEINFOS } from "common/PAGES";
import { AppDispatch } from "app/store";
import UserRegist from "containers/UserRegist";

Amplify.configure(amplifyConfig);

const App = () => {
  // Redux変数
  const dispatch = useDispatch<AppDispatch>();
  const loginInfo: LoginInfo = useSelector(selectLoginInfo);

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
        case "cognitoHostedUI":
          getUser().then((userData) => {
            dispatch(setUserId(userData.username));
            dispatch(
              setEmail(userData.signInUserSession.idToken.payload.email)
            );
            dispatch(fetchAsyncGetUserInfo(userData.username));
          });
          break;
        case "signOut":
          dispatch(setUserId(""));
          dispatch(setEmail(""));
          break;
        case "signIn_failure":
        case "cognitoHostedUI_failure":
          console.log("Sign in failure", data);
          break;
      }
    });

    getUser().then((userData) => {
      dispatch(setUserId(userData.username));
      dispatch(setEmail(userData.signInUserSession.idToken.payload.email));
      dispatch(fetchAsyncGetUserInfo(userData.username));
    });
  }, [dispatch]);

  const getUser = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      // デバッグ用
      Auth.currentSession().then((data) => {
        // console.log(`token: ${data.getIdToken().getJwtToken()}`);
      });
      console.log(userData);
      return userData;
    } catch (e) {
      return console.log("Not signed in");
    }
  };

  return (
    <BrowserRouter>
      {loginInfo.userId ? (
        loginInfo.userInfoStatus ? (
          <Routes>
            {PAGEINFOS.map((PAGEINFO) => {
              return (
                <Route
                  key={PAGEINFO.CONTEXT}
                  path={PAGEINFO.URL}
                  element={PAGEINFO.ELEMENT}
                />
              );
            })}
          </Routes>
        ) : (
          <UserRegist />
        )
      ) : (
        <Login />
      )}
    </BrowserRouter>
  );
};

export default App;

// ルーティング設定（react-router-dom）
// https://reffect.co.jp/react/react-router-6

// cognitoの認証フォーム実装（AmplifyのAuth API使用）
// https://dev.classmethod.jp/articles/react-cognito-signin/
// Hub.listen：cognitoのログイン状況ステータスを監視する。
// federatedSignIn：ログインを実施する。（Loginコンポーネントで使用）
// signOut：ログアウトを実施する。（Headerコンポーネントで使用）
// currentAuthenticatedUser：ログインユーザー情報(セッション)確認
