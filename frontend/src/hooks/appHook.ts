import { useLayoutEffect } from "react";
import { Hub } from "aws-amplify";
import { useDispatch, useSelector } from "react-redux";
import { Auth } from "aws-amplify";

import {
  selectSignInInfo,
  setUserId,
  setUserInfoEmail,
  fetchAsyncGetUserInfo,
  initAuthState,
  initSignInInfo,
  initSignUpInfo,
  setSignUpUserId,
  setSignUpCreateStatus,
} from "ducks/auth/slice";
import { SignInInfo } from "ducks/auth/type";
import { AppDispatch } from "app/store";
import { fetchAsyncPutUserInfo } from "ducks/auth/slice";

export const useAppHook = () => {
  // Redux変数
  const dispatch = useDispatch<AppDispatch>();
  const signInInfo: SignInInfo = useSelector(selectSignInInfo);

  // 関数
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

  // useEffect
  useLayoutEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      console.log(`event：${event}`);
      console.dir(data);
      switch (event) {
        // SignIn
        case "signIn":
          dispatch(initSignInInfo());
          getUser().then((userData) => {
            dispatch(setUserId(userData.username));
            dispatch(
              setUserInfoEmail(userData.signInUserSession.idToken.payload.email)
            );
            dispatch(fetchAsyncGetUserInfo(userData.username));
          });
          break;

        case "signIn_failure":
          console.log("Sign in failure", data);
          break;

        // SignUp
        case "signUp":
          dispatch(setSignUpCreateStatus(true));
          dispatch(setSignUpUserId(data.userSub));
          break;

        case "signUp_failure":
          console.log("Sign up failure", data);
          break;

        case "autoSignIn":
          dispatch(
            fetchAsyncPutUserInfo({
              isAdmin: false,
              userId: data.username,
              lastName: data.attributes.family_name,
              firstName: data.attributes.given_name,
              email: data.attributes.email,
              phone: data.attributes.phone_number,
            })
          );
          dispatch(setUserId(data.username));
          dispatch(setUserInfoEmail(data.attributes.email));
          dispatch(fetchAsyncGetUserInfo(data.username));
          dispatch(initSignUpInfo());
          break;

        case "autoSignIn_failure":
          console.log("autoSign in failure", data);
          break;

        // signOut
        case "signOut":
          dispatch(initAuthState());
          break;
      }
    });

    getUser().then((userData) => {
      dispatch(setUserId(userData.username));
      dispatch(
        setUserInfoEmail(userData.signInUserSession.idToken.payload.email)
      );
      dispatch(fetchAsyncGetUserInfo(userData.username));
    });
  }, [dispatch]);

  return {
    signInInfo,
  };
};
