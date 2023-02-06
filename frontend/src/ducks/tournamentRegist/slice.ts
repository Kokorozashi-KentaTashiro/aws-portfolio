import { createSlice, createAsyncThunk, PayloadAction, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { API } from "aws-amplify";

import { initialState } from "./initialState";
import { TournamentRegistState } from "./type";
import { API_NAME, TOURNAMENTS_GET_URL } from "common/constants";


// 非同期処理の関数作成
export const fetchAsyncGetTournaments = createAsyncThunk(
  "tournaments/getTournaments",
  async (args, thunkAPI) => {
    const req = {};
    try {
      return await API.get(API_NAME, TOURNAMENTS_GET_URL, req);
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
        fetchAsyncGetTournaments.fulfilled,
        (state: TournamentRegistState, action: PayloadAction<any>) => {
          console.log(action.payload);
        }
      )
      .addCase(
        fetchAsyncGetTournaments.rejected,
        (state: TournamentRegistState, action: PayloadAction<any>) => {
          console.log(action.payload);
        }
      )
      .addCase(
        fetchAsyncGetTournaments.pending,
        (state: TournamentRegistState, action: PayloadAction<any>) => {
          console.log("loading");
        }
      )
  },
});

export const {
  setTitle,
  setEventDate,
  setPlace,
  setApplicationStartDate,
  setApplicationEndDate,
} = tournamentRegistSlice.actions;
export const selectTournamentRegistInfo = (state: RootState) =>
  state.tournamentRegist.tournamentRegistInfo;
export default tournamentRegistSlice.reducer;
