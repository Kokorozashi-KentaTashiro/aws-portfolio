import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Amplify } from "aws-amplify";
import { amplifyConfig } from "./constants/amplifyConfig";

import AuthComponent from "containers/AuthComponent";
import { PAGEINFOS } from "common/PAGES";

import { useAppHook } from "hooks/appHook";

Amplify.configure(amplifyConfig);

const App = () => {
  // ReactHook
  const { signInInfo } = useAppHook();

  return (
    <BrowserRouter>
      {signInInfo.signInStatus ? (
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
        <AuthComponent />
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
