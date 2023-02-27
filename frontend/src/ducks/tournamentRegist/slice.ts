import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  ActionReducerMapBuilder,
} from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { API } from "aws-amplify";

import { initialState } from "./initialState";
import { TournamentRegistState, TornamentRegistInfo } from "./type";
import { API_NAME, TOURNAMENT_RESOURCE } from "common/constants";

// 非同期処理の関数作成
export const fetchAsyncPutTournament = createAsyncThunk(
  `${TOURNAMENT_RESOURCE}/put`,
  async (tournamentRegistInfo: TornamentRegistInfo, thunkAPI) => {
    const req = {
      body: {
        title: tournamentRegistInfo.title,
        class: tournamentRegistInfo.class,
        eventDate: tournamentRegistInfo.eventDate,
        place: tournamentRegistInfo.place,
        applicationStartDate: tournamentRegistInfo.applicationStartDate,
        applicationEndDate: tournamentRegistInfo.applicationEndDate,
      },
    };
    try {
      return await API.put(API_NAME, TOURNAMENT_RESOURCE, req);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// sliceの作成
export const tournamentRegistSlice = createSlice({
  name: "tournamentRegist",
  initialState,
  reducers: {
    initTournamentRegistState(state: TournamentRegistState) {
      return {
        ...initialState,
      };
    },
    setTitle(state: TournamentRegistState, action) {
      return {
        ...state,
        tournamentRegistInfo: {
          ...state.tournamentRegistInfo,
          title: action.payload,
        },
      };
    },
    setClass(state: TournamentRegistState, action) {
      return {
        ...state,
        tournamentRegistInfo: {
          ...state.tournamentRegistInfo,
          class: action.payload,
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
    setApplicationStartDate(state: TournamentRegistState, action) {
      return {
        ...state,
        tournamentRegistInfo: {
          ...state.tournamentRegistInfo,
          applicationStartDate: action.payload,
        },
      };
    },
    setApplicationEndDate(state: TournamentRegistState, action) {
      return {
        ...state,
        tournamentRegistInfo: {
          ...state.tournamentRegistInfo,
          applicationEndDate: action.payload,
        },
      };
    },
  },
  extraReducers(builder: ActionReducerMapBuilder<TournamentRegistState>) {
    builder
      .addCase(
        fetchAsyncPutTournament.fulfilled,
        (state: TournamentRegistState, action: PayloadAction<any>) => {
          console.log("tournamentRegist/fetchAsyncPutTournament：fulfilled");
        }
      )
      .addCase(
        fetchAsyncPutTournament.rejected,
        (state: TournamentRegistState, action: PayloadAction<any>) => {
          console.log("tournamentRegist/fetchAsyncPutTournament：rejected");
        }
      )
      .addCase(
        fetchAsyncPutTournament.pending,
        (state: TournamentRegistState, action: PayloadAction<any>) => {}
      );
  },
});

export const {
  initTournamentRegistState,
  setTitle,
  setClass,
  setEventDate,
  setPlace,
  setApplicationStartDate,
  setApplicationEndDate,
} = tournamentRegistSlice.actions;
export const selectTournamentRegistInfo = (state: RootState) =>
  state.tournamentRegist.tournamentRegistInfo;
export default tournamentRegistSlice.reducer;
