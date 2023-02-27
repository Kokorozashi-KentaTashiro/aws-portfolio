import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  ActionReducerMapBuilder,
} from "@reduxjs/toolkit";
import { API } from "aws-amplify";

import { API_NAME, USERINFO_RESOURCE } from "common/constants";
import { RootState } from "app/store";
import { initialState } from "./initialState";
import { AuthState, UserInfo } from "./type";

// 非同期処理の関数作成
export const fetchAsyncGetUserInfo = createAsyncThunk(
  "userInfo/get",
  async (userId: string, thunkAPI) => {
    const req = {
      body: {
        userId: userId,
      },
    };
    try {
      return await API.post(API_NAME, USERINFO_RESOURCE, req);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const fetchAsyncPutUserInfo = createAsyncThunk(
  "userInfo/put",
  (userInfo: UserInfo, thunkAPI) => {
    console.log("userInfo/create");
    const req = {
      body: {
        userId: userInfo.userId,
        lastName: userInfo.lastName,
        firstName: userInfo.firstName,
        email: userInfo.email,
        phone: userInfo.phone,
      },
    };
    try {
      return API.put(API_NAME, USERINFO_RESOURCE, req);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// sliceの作成
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // 共通
    initAuthState(state: AuthState) {
      return {
        ...initialState,
      };
    },
    setUserId(state: AuthState, action) {
      return {
        ...state,
        signInInfo: {
          ...state.signInInfo,
          userId: action.payload,
        },
        userInfo: {
          ...state.userInfo,
          isAdmin: false,
          userId: action.payload,
        },
      };
    },
    // UserInfo
    setUserInfoLastName(state: AuthState, action) {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          lastName: action.payload,
        },
      };
    },
    setUserInfoFirstName(state: AuthState, action) {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          firstName: action.payload,
        },
      };
    },
    setUserInfoEmail(state: AuthState, action) {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          email: action.payload,
        },
      };
    },
    setUserInfoPhone(state: AuthState, action) {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          phone: action.payload,
        },
      };
    },
    // SignInInfo
    initSignInInfo(state: AuthState) {
      return {
        ...state,
        signInInfo: {
          ...initialState.signInInfo,
        },
      };
    },
    setSignInEmail(state: AuthState, action) {
      return {
        ...state,
        signInInfo: {
          ...state.signInInfo,
          email: action.payload,
        },
      };
    },
    setSignInPassword(state: AuthState, action) {
      return {
        ...state,
        signInInfo: {
          ...state.signInInfo,
          password: action.payload,
        },
      };
    },
    // SignUpInfo
    setSignUpUserId(state: AuthState, action) {
      return {
        ...state,
        signUpInfo: {
          ...state.signUpInfo,
          userId: action.payload,
        },
      };
    },
    initSignUpInfo(state: AuthState) {
      return {
        ...state,
        signUpInfo: {
          ...initialState.signUpInfo,
        },
      };
    },
    setSignUpFamiliyName(state: AuthState, action) {
      return {
        ...state,
        signUpInfo: {
          ...state.signUpInfo,
          familiyName: action.payload,
        },
      };
    },
    setSignUpGivenName(state: AuthState, action) {
      return {
        ...state,
        signUpInfo: {
          ...state.signUpInfo,
          givenName: action.payload,
        },
      };
    },
    setSignUpEmail(state: AuthState, action) {
      return {
        ...state,
        signUpInfo: {
          ...state.signUpInfo,
          email: action.payload,
        },
      };
    },
    setSignUpPhone(state: AuthState, action) {
      return {
        ...state,
        signUpInfo: {
          ...state.signUpInfo,
          phone: action.payload,
        },
      };
    },
    setSignUpPassword(state: AuthState, action) {
      return {
        ...state,
        signUpInfo: {
          ...state.signUpInfo,
          password: action.payload,
        },
      };
    },
    setSignUpVerifyCode(state: AuthState, action) {
      return {
        ...state,
        signUpInfo: {
          ...state.signUpInfo,
          verifyCode: action.payload,
        },
      };
    },
    setSignUpCreateStatus(state: AuthState, action) {
      return {
        ...state,
        signUpInfo: {
          ...state.signUpInfo,
          createStatus: action.payload,
        },
      };
    },
  },
  extraReducers(builder: ActionReducerMapBuilder<AuthState>) {
    builder
      .addCase(
        fetchAsyncGetUserInfo.fulfilled,
        (state: AuthState, action: PayloadAction<any>) => {
          console.log("auth/fetchAsyncGetUserInfo：fulfilled");

          let judgeStatus = false;
          if (action.payload.firstName) {
            judgeStatus = true;
          }

          let judgeEmail = action.payload.email
            ? action.payload.email
            : state.userInfo.email;

          return {
            ...state,
            signInInfo: {
              ...state.signInInfo,
              signInStatus: judgeStatus,
            },
            userInfo: {
              ...state.userInfo,
              isAdmin: action.payload.isAdmin,
              userId: action.payload.userId,
              lastName: action.payload.lastName,
              firstName: action.payload.firstName,
              email: judgeEmail,
              phone: action.payload.phone,
            },
          };
        }
      )
      .addCase(
        fetchAsyncGetUserInfo.rejected,
        (state: AuthState, action: PayloadAction<any>) => {
          console.log("auth/fetchAsyncGetUserInfo：rejected");
        }
      )
      .addCase(
        fetchAsyncGetUserInfo.pending,
        (state: AuthState, action: PayloadAction<any>) => {}
      )
      .addCase(
        fetchAsyncPutUserInfo.fulfilled,
        (state: AuthState, action: PayloadAction<any>) => {
          console.log("auth/fetchAsyncPutUserInfo：fulfilled");
          return {
            ...state,
            signInInfo: {
              ...state.signInInfo,
              userInfoStatus: true,
            },
          };
        }
      )
      .addCase(
        fetchAsyncPutUserInfo.rejected,
        (state: AuthState, action: PayloadAction<any>) => {
          console.log("auth/fetchAsyncPutUserInfo：rejected");
          console.log(action.payload);
        }
      )
      .addCase(
        fetchAsyncPutUserInfo.pending,
        (state: AuthState, action: PayloadAction<any>) => {}
      );
  },
});

export const {
  initAuthState,
  setUserId,
  setUserInfoLastName,
  setUserInfoFirstName,
  setUserInfoEmail,
  setUserInfoPhone,
  initSignInInfo,
  setSignInEmail,
  setSignInPassword,
  initSignUpInfo,
  setSignUpUserId,
  setSignUpFamiliyName,
  setSignUpGivenName,
  setSignUpEmail,
  setSignUpPhone,
  setSignUpPassword,
  setSignUpVerifyCode,
  setSignUpCreateStatus,
} = authSlice.actions;

export const selectSignInInfo = (state: RootState) => state.auth.signInInfo;
export const selectSignUpInfo = (state: RootState) => state.auth.signUpInfo;
export const selectUserInfo = (state: RootState) => state.auth.userInfo;
export default authSlice.reducer;
