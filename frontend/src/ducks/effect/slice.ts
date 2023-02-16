import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "app/store";
import { initialState } from "./initialState";
import { EffectState } from "./type";

// 非同期処理の関数作成

// sliceの作成
export const effectSlice = createSlice({
  name: "effect",
  initialState,
  reducers: {
    setPage(state: EffectState, action) {
      return {
        ...state,
        page: action.payload,
      };
    },
  },
});

export const { setPage } = effectSlice.actions;
export const selectPage = (state: RootState) => state.effect.page;
export default effectSlice.reducer;
