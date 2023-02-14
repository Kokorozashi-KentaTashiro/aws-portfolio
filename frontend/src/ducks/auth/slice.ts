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
    setUserId(state: AuthState, action) {
      return {
        ...state,
        loginInfo: {
          ...state.loginInfo,
          userId: action.payload,
        },
        userInfo: {
          ...state.userInfo,
          isAdmin: false,
          userId: action.payload,
        },
      };
    },
    setLastName(state: AuthState, action) {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          lastName: action.payload,
        },
      };
    },
    setFirstName(state: AuthState, action) {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          firstName: action.payload,
        },
      };
    },
    setEmail(state: AuthState, action) {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          email: action.payload,
        },
      };
    },
    setPhone(state: AuthState, action) {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          phone: action.payload,
        },
      };
    },
  },
  extraReducers(builder: ActionReducerMapBuilder<AuthState>) {
    builder
      .addCase(
        fetchAsyncGetUserInfo.fulfilled,
        (state: AuthState, action: PayloadAction<any>) => {
          console.log("fetchAsyncGetUserInfo成功");
          console.log(action.payload);

          let judgeStatus = false;
          if (action.payload.firstName) {
            judgeStatus = true;
          }

          return {
            ...state,
            loginInfo: {
              ...state.loginInfo,
              userInfoStatus: judgeStatus,
            },
            userInfo: action.payload,
          };
        }
      )
      .addCase(
        fetchAsyncGetUserInfo.rejected,
        (state: AuthState, action: PayloadAction<any>) => {
          console.log("fetchAsyncGetUserInfo失敗");
        }
      )
      .addCase(
        fetchAsyncGetUserInfo.pending,
        (state: AuthState, action: PayloadAction<any>) => {
          console.log("fetchAsyncGetUserInfo実行中");
        }
      )
      .addCase(
        fetchAsyncPutUserInfo.fulfilled,
        (state: AuthState, action: PayloadAction<any>) => {
          return {
            ...state,
            loginInfo: {
              ...state.loginInfo,
              userInfoStatus: true,
            },
          };
        }
      )
      .addCase(
        fetchAsyncPutUserInfo.rejected,
        (state: AuthState, action: PayloadAction<any>) => {
          console.log("fetchAsyncPutUserInfo失敗");
          console.log(action.payload);
        }
      )
      .addCase(
        fetchAsyncPutUserInfo.pending,
        (state: AuthState, action: PayloadAction<any>) => {
          console.log("fetchAsyncPutUserInfo実行中");
        }
      );
  },
});

export const { setUserId, setLastName, setFirstName, setEmail, setPhone } =
  authSlice.actions;

export const selectLoginInfo = (state: RootState) => state.auth.loginInfo;
export const selectUserInfo = (state: RootState) => state.auth.userInfo;
export default authSlice.reducer;
