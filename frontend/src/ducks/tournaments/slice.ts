import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "app/store";
import { initialState } from "./initialState";

// 非同期処理の関数作成


// sliceの作成
export const tournamentsSlice = createSlice({
    name:"tournaments",
    initialState,
    reducers: {},
});


export const selectTournamentsInfo = (state: RootState) => state.tournaments.tournamentsInfo;
export default tournamentsSlice.reducer;