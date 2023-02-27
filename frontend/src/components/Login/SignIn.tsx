import { FC } from "react";
import { Auth } from "aws-amplify";
import { useDispatch, useSelector } from "react-redux";

import { CommonBox, CommonButton } from "common/commonMaterial";
import { TextField } from "@mui/material";
import { Card } from "@mui/material";

import {
  setSignInEmail,
  setSignInPassword,
  selectSignInInfo,
} from "ducks/auth/slice";
import { SignInInfo } from "ducks/auth/type";

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
      <Card
        sx={{
          display: "flex",
          flexFlow: "column",
          alignItems: "center",
          justifyContent: "center",
          width: { xs: 300, md: 400 },
          height: { xs: 250, md: 300 },
        }}
      >
        <TextField
          id="user-email"
          label="メールアドレス"
          variant="standard"
          value={signInInfo.email}
          onChange={(e) => {
            dispatch(setSignInEmail(e.target.value));
          }}
          sx={{
            margin: 2,
          }}
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
          sx={{
            margin: 2,
          }}
        />
      </Card>
      <CommonButton
        variant="contained"
        onClick={onSignIn}
        sx={{
          marginTop: 2,
          width: { xs: 100, md: 120 },
          height: { xs: 40, md: 50 },
        }}
      >
        Sign In
      </CommonButton>
    </>
  );
};

export default SignIn;
