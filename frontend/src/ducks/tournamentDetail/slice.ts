import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "app/store";
import { initialState } from "./initialState";
import { TournamentDetailState } from "./type";

// 非同期処理の関数作成

// sliceの作成
export const tournamentDetailSlice = createSlice({
  name: "tournamentDetail",
  initialState,
  reducers: {
    setTournamentDetailInfo(state: TournamentDetailState, action) {
      return {
        ...state,
        tournamentDetailInfo: {
          ...action.payload,
        },
      };
    },
  },
});

export const { setTournamentDetailInfo } = tournamentDetailSlice.actions;
export const selectTournamentDetailInfo = (state: RootState) =>
  state.tournamentDetail.tournamentDetailInfo;
export default tournamentDetailSlice.reducer;
