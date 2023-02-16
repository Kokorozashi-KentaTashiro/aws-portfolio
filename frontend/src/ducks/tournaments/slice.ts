import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  ActionReducerMapBuilder,
} from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { API } from "aws-amplify";

import { initialState } from "./initialState";
import { TournamentsState } from "./type";
import { API_NAME, TOURNAMENTS_RESOURCE } from "common/constants";

// 非同期処理の関数作成
export const fetchAsyncGetTournaments = createAsyncThunk(
  "tournaments/get",
  async (args, thunkAPI) => {
    const req = {
      body: {},
    };
    try {
      return await API.get(API_NAME, TOURNAMENTS_RESOURCE, req);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// sliceの作成
export const tournamentsSlice = createSlice({
  name: "tournaments",
  initialState,
  reducers: {},
  extraReducers(builder: ActionReducerMapBuilder<TournamentsState>) {
    builder
      .addCase(
        fetchAsyncGetTournaments.fulfilled,
        (state: TournamentsState, action: PayloadAction<any>) => {
          console.log("tournaments/fetchAsyncGetTournaments：fulfilled");
          return {
            ...state,
            tournamentsInfo: action.payload,
          };
        }
      )
      .addCase(
        fetchAsyncGetTournaments.rejected,
        (state: TournamentsState, action: PayloadAction<any>) => {
          console.log("tournaments/fetchAsyncGetTournaments：rejected");
        }
      )
      .addCase(
        fetchAsyncGetTournaments.pending,
        (state: TournamentsState, action: PayloadAction<any>) => {}
      );
  },
});

export const selectTournamentsInfo = (state: RootState) =>
  state.tournaments.tournamentsInfo;
export default tournamentsSlice.reducer;
