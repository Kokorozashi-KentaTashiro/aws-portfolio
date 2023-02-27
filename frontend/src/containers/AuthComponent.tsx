import { FC, useState } from "react";

import { CommonContainer, CommonBox, CommonLink } from "common/commonMaterial";

import SignUp from "components/Login/SignUp";
import SignIn from "components/Login/SignIn";

const AuthComponent: FC = () => {
  // 変数
  const [signFlg, setSignFlg] = useState<boolean>(false);

  // 関数

  // 仮想DOM
  // <CommonButton variant="contained" onClick={() => Auth.federatedSignIn()}>
  //   ログイン
  // </CommonButton>;

  return (
    <>
      <CommonContainer maxWidth="lg">
        <CommonBox sx={{ width: { xs: 300, md: 400 } }}>
          {signFlg ? <SignUp /> : <SignIn />}
          <CommonLink
            underline="hover"
            onClick={() => setSignFlg(!signFlg)}
            sx={{ marginTop: { xs: 4, md: 6 } }}
          >
            {signFlg ? "ログインはこちら" : "新規登録はこちら"}
          </CommonLink>
        </CommonBox>
      </CommonContainer>
    </>
  );
};

export default AuthComponent;
