import { FC } from "react";
import { Auth } from "aws-amplify";
import { useDispatch, useSelector } from "react-redux";

import { CommonButton } from "common/commonMaterial";
import { TextField } from "@mui/material";
import { Card } from "@mui/material";

import {
  setSignInEmail,
  setSignInPassword,
  selectSignInInfo,
} from "ducks/auth/slice";
import { SignInInfo } from "ducks/auth/type";

import {
  signInCardSx,
  signInTextSx,
  signInButtonSx,
} from "themes/Login/signInTheme";

const SignIn: FC = () => {
  // 変数
  const dispatch = useDispatch();
  const signInInfo: SignInInfo = useSelector(selectSignInInfo);

  // 関数
  const onSignIn = () => {
    Auth.signIn({
      username: signInInfo.email,
      password: signInInfo.password,
    });
  };

  return (
    <>
      <Card sx={signInCardSx}>
        <TextField
          id="user-email"
          label="メールアドレス"
          variant="standard"
          value={signInInfo.email}
          onChange={(e) => {
            dispatch(setSignInEmail(e.target.value));
          }}
          sx={signInTextSx}
        />
        <TextField
          id="user-password"
          label="パスワード"
          variant="standard"
          type="password"
          autoComplete="current-password"
          value={signInInfo.password}
          onChange={(e) => {
            dispatch(setSignInPassword(e.target.value));
          }}
          sx={signInTextSx}
        />
      </Card>
      <CommonButton variant="contained" onClick={onSignIn} sx={signInButtonSx}>
        Sign In
      </CommonButton>
    </>
  );
};

export default SignIn;
