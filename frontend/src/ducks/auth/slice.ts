import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "app/store";
import { initialState } from "./initialState";
import { AuthState } from "./type";

// 非同期処理の関数作成


// sliceの作成
export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        setLoginInfo(state: AuthState, action) {
            return {
                ...state,
                loginInfo: {
                    ...state.loginInfo,
                    userName: action.payload,
                },
            };
        },
    },
});

export const {
    setLoginInfo,
} = authSlice.actions;

export const selectLoginInfo = (state: RootState) => state.auth.loginInfo;
export default authSlice.reducer;