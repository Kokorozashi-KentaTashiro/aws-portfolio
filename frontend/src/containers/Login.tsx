import { FC } from "react";
import { Auth } from "aws-amplify";

import { Grid } from "@mui/material";
import {
  CommonContainer,
  CommonBox,
  CommonButton,
} from "common/commonMaterial";

const Login: FC = () => {
  // 関数

  // 仮想DOM
  return (
    <>
      <CommonContainer maxWidth="lg">
        <CommonBox>
          <CommonButton
            variant="contained"
            onClick={() => Auth.federatedSignIn()}
          >
            ログイン
          </CommonButton>
        </CommonBox>
      </CommonContainer>
    </>
  );
};

export default Login;
