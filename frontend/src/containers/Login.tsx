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
          <Grid item xs={4}>
            サインインする
          </Grid>
          <CommonButton
            variant="contained"
            onClick={() => Auth.federatedSignIn()}
          >
            Sign In
          </CommonButton>
        </CommonBox>
      </CommonContainer>
    </>
  );
};

export default Login;
