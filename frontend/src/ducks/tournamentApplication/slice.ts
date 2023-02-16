import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  ActionReducerMapBuilder,
} from "@reduxjs/toolkit";
import { API } from "aws-amplify";

import { RootState } from "app/store";
import { initialState } from "./initialState";
import { TornamentApplicationState, TornamentApplicationInfo } from "./type";
import { API_NAME, APPLICATIONS_RESOURCE } from "common/constants";

// 非同期処理の関数作成
export const fetchAsyncPutApplications = createAsyncThunk(
  `${APPLICATIONS_RESOURCE}/put`,
  async (
    args: {
      tournamentName: string;
      tornamentApplicationsInfo: TornamentApplicationInfo[];
    },
    thunkAPI
  ) => {
    const req = {
      body: {
        tournamentName: args.tournamentName,
        tornamentApplicationsInfo: args.tornamentApplicationsInfo,
      },
    };
    try {
      return await API.put(API_NAME, APPLICATIONS_RESOURCE, req);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// sliceの作成
export const tournamentApplicationSlice = createSlice({
  name: "tournamentApplication",
  initialState,
  reducers: {
    initTornamentApplicationState(state: TornamentApplicationState) {
      return {
        ...initialState,
      };
    },
    addApplicationInfo(state: TornamentApplicationState) {
      state.tornamentApplicationsInfo.push({
        lastName: "",
        firstName: "",
        school: 0,
        schoolYear: 0,
        sex: 0,
      });
    },
    setLastName(state: TornamentApplicationState, action) {
      const tornamentApplicationInfo =
        state.tornamentApplicationsInfo[action.payload.index];
      tornamentApplicationInfo.lastName = action.payload.value;
    },
    setFirstName(state: TornamentApplicationState, action) {
      const tornamentApplicationInfo =
        state.tornamentApplicationsInfo[action.payload.index];
      tornamentApplicationInfo.firstName = action.payload.value;
    },
    setSchool(state: TornamentApplicationState, action) {
      const tornamentApplicationInfo =
        state.tornamentApplicationsInfo[action.payload.index];
      tornamentApplicationInfo.school = action.payload.value;
    },
    setSchoolYear(state: TornamentApplicationState, action) {
      const tornamentApplicationInfo =
        state.tornamentApplicationsInfo[action.payload.index];
      tornamentApplicationInfo.schoolYear = action.payload.value;
    },
    setSex(state: TornamentApplicationState, action) {
      const tornamentApplicationInfo =
        state.tornamentApplicationsInfo[action.payload.index];
      tornamentApplicationInfo.sex = action.payload.value;
    },

    setApplicationInfo(state: TornamentApplicationState, action) {
      return {
        ...state,
        tornamentApplicationsInfo: action.payload,
      };
    },
  },
  extraReducers(builder: ActionReducerMapBuilder<TornamentApplicationState>) {
    builder
      .addCase(
        fetchAsyncPutApplications.fulfilled,
        (state: TornamentApplicationState, action: PayloadAction<any>) => {
          console.log(
            "tournamentApplication/fetchAsyncPutApplications：fulfilled"
          );
        }
      )
      .addCase(
        fetchAsyncPutApplications.rejected,
        (state: TornamentApplicationState, action: PayloadAction<any>) => {
          console.log(
            "tournamentApplication/fetchAsyncPutApplications：rejected"
          );
        }
      )
      .addCase(
        fetchAsyncPutApplications.pending,
        (state: TornamentApplicationState, action: PayloadAction<any>) => {}
      );
  },
});

export const {
  initTornamentApplicationState,
  addApplicationInfo,
  setLastName,
  setFirstName,
  setSchool,
  setSchoolYear,
  setSex,
} = tournamentApplicationSlice.actions;
export const selectTournamentApplicationInfo = (state: RootState) =>
  state.tournamentApplication.tornamentApplicationsInfo;
export default tournamentApplicationSlice.reducer;
