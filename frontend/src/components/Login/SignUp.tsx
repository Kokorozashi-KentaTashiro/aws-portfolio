import { FC } from "react";
import { Auth } from "aws-amplify";
import { useDispatch, useSelector } from "react-redux";

import { CommonButton } from "common/commonMaterial";
import { TextField } from "@mui/material";
import { Card } from "@mui/material";

import {
  setSignUpFamiliyName,
  setSignUpGivenName,
  setSignUpEmail,
  setSignUpPhone,
  setSignUpPassword,
  setSignUpVerifyCode,
  selectSignUpInfo,
} from "ducks/auth/slice";
import { SignUpInfo } from "ducks/auth/type";
import { AppDispatch } from "app/store";
import {
  verifyCardSx,
  createCardSx,
  signUpTextSx,
  signUpButtonSx,
} from "themes/Login/signUpTheme";

const SignUp: FC = () => {
  // 変数
  const dispatch = useDispatch<AppDispatch>();
  const signUpInfo: SignUpInfo = useSelector(selectSignUpInfo);

  // 関数
  const onSignUp = () => {
    Auth.signUp({
      username: signUpInfo.email,
      password: signUpInfo.password,
      attributes: {
        email: signUpInfo.email,
        family_name: signUpInfo.familiyName,
        given_name: signUpInfo.givenName,
        phone_number: `+81${signUpInfo.phone}`,
      },
      autoSignIn: {
        enabled: true,
      },
    });
  };

  const onVerify = () => {
    Auth.confirmSignUp(signUpInfo.email, signUpInfo.verifyCode);
  };

  return (
    <>
      {signUpInfo.createStatus ? (
        <>
          <Card sx={verifyCardSx}>
            <TextField
              id="user-verify-code"
              label="認証番号"
              variant="standard"
              value={signUpInfo.verifyCode}
              onChange={(e) => {
                dispatch(setSignUpVerifyCode(e.target.value));
              }}
              sx={signUpTextSx}
            />
          </Card>
          <CommonButton
            variant="contained"
            onClick={onVerify}
            sx={signUpButtonSx}
          >
            Verify
          </CommonButton>
        </>
      ) : (
        <>
          <Card sx={createCardSx}>
            <TextField
              id="user-familiy-name"
              label="姓"
              variant="standard"
              value={signUpInfo.familiyName}
              onChange={(e) => {
                dispatch(setSignUpFamiliyName(e.target.value));
              }}
              sx={signUpTextSx}
            />
            <TextField
              id="user-given-name"
              label="名"
              variant="standard"
              value={signUpInfo.givenName}
              onChange={(e) => {
                dispatch(setSignUpGivenName(e.target.value));
              }}
              sx={signUpTextSx}
            />
            <TextField
              id="user-email"
              label="メールアドレス"
              variant="standard"
              value={signUpInfo.email}
              onChange={(e) => {
                dispatch(setSignUpEmail(e.target.value));
              }}
              sx={signUpTextSx}
            />
            <TextField
              id="user-phone"
              label="電話番号"
              variant="standard"
              value={signUpInfo.phone}
              onChange={(e) => {
                dispatch(setSignUpPhone(e.target.value));
              }}
              sx={signUpTextSx}
            />
            <TextField
              id="user-password"
              label="パスワード"
              variant="standard"
              type="password"
              autoComplete="current-password"
              value={signUpInfo.password}
              onChange={(e) => {
                dispatch(setSignUpPassword(e.target.value));
              }}
              sx={signUpTextSx}
            />
          </Card>
          <CommonButton
            variant="contained"
            onClick={onSignUp}
            sx={signUpButtonSx}
          >
            Sign Up
          </CommonButton>
        </>
      )}
    </>
  );
};

export default SignUp;

// Sign Up周りの実装
// https://docs.amplify.aws/lib/auth/emailpassword/q/platform/js/#sign-up
