import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "app/store";
import { initialState } from "./initialState";
import { TournamentRegistState } from "./type";

// 非同期処理の関数作成


// sliceの作成
export const tournamentRegistSlice = createSlice({
    name:"tournamentRegist",
    initialState,
    reducers: {
        setTitle(state: TournamentRegistState, action) {
            return {
                ...state,
                tournamentRegistInfo: {
                    ...state.tournamentRegistInfo,
                    title: action.payload,
                },
            };
        },
        setEventDate(state: TournamentRegistState, action) {
            return {
                ...state,
                tournamentRegistInfo: {
                    ...state.tournamentRegistInfo,
                    eventDate: action.payload,
                },
            };
        },
        setPlace(state: TournamentRegistState, action) {
            return {
                ...state,
                tournamentRegistInfo: {
                    ...state.tournamentRegistInfo,
                    place: action.payload,
                },
            };
        },
        setLimitDate(state: TournamentRegistState, action) {
            return {
                ...state,
                tournamentRegistInfo: {
                    ...state.tournamentRegistInfo,
                    limitDate: action.payload,
                },
            };
        },

    },
});


export const {
    setTitle,
    setEventDate,
    setPlace,
    setLimitDate,
} = tournamentRegistSlice.actions;
export const selectTournamentRegistInfo = (state: RootState) => state.tournamentRegist.tournamentRegistInfo;
export default tournamentRegistSlice.reducer;