import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  ActionReducerMapBuilder,
} from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { API } from "aws-amplify";

import { initialState } from "./initialState";
import { ApplicationsState } from "./type";
import {
  API_NAME,
  TEAMS_RESOURCE,
  SINGLES_APPLICATIONS_RESOURCE,
  TEAM_APPLICATIONS_RESOURCE,
} from "common/constants";

// 非同期処理の関数作成
export const fetchAsyncGetTeams = createAsyncThunk(
  `${TEAMS_RESOURCE}/get`,
  async (args: string, thunkAPI) => {
    const req = {
      body: { tournamentTitle: args },
    };
    try {
      return await API.post(API_NAME, TEAMS_RESOURCE, req);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const fetchAsyncGetSinglesApplications = createAsyncThunk(
  `${SINGLES_APPLICATIONS_RESOURCE}/get`,
  async (
    args: { tournamentTitle: string; team: number; teamSex: number },
    thunkAPI
  ) => {
    const req = {
      body: {
        tournamentTitle: args.tournamentTitle,
        team: args.team,
        teamSex: args.teamSex,
      },
    };
    try {
      return await API.post(API_NAME, SINGLES_APPLICATIONS_RESOURCE, req);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const fetchAsyncGetTeamApplications = createAsyncThunk(
  `${TEAM_APPLICATIONS_RESOURCE}/get`,
  async (
    args: { tournamentTitle: string; team: number; teamSex: number },
    thunkAPI
  ) => {
    const req = {
      body: {
        tournamentTitle: args.tournamentTitle,
        team: args.team,
        teamSex: args.teamSex,
      },
    };
    try {
      return await API.post(API_NAME, TEAM_APPLICATIONS_RESOURCE, req);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// sliceの作成
export const applicationsSlice = createSlice({
  name: "applications",
  initialState,
  reducers: {
    setApplicationsTournamentTitle(state: ApplicationsState, action) {
      state.tournamentTitle = action.payload;
    },
    setApplicationsTournamentClass(state: ApplicationsState, action) {
      state.tournamentClass = action.payload;
    },
    initApplicantGroupsInfo(state: ApplicationsState) {
      state.applicantGroupsInfo = [];
    },
  },
  extraReducers(builder: ActionReducerMapBuilder<ApplicationsState>) {
    builder
      .addCase(
        fetchAsyncGetTeams.fulfilled,
        (state: ApplicationsState, action: PayloadAction<any>) => {
          console.log("applications/fetchAsyncGetTeams：fulfilled");
          return {
            ...state,
            teamsInfo: action.payload,
          };
        }
      )
      .addCase(
        fetchAsyncGetTeams.rejected,
        (state: ApplicationsState, action: PayloadAction<any>) => {
          console.log("applications/fetchAsyncGetTeams：rejected");
        }
      )
      .addCase(
        fetchAsyncGetTeams.pending,
        (state: ApplicationsState, action: PayloadAction<any>) => {}
      )
      .addCase(
        fetchAsyncGetSinglesApplications.fulfilled,
        (state: ApplicationsState, action: PayloadAction<any>) => {
          console.log(action.payload);
          return {
            ...state,
            applicantGroupsInfo: action.payload,
          };
        }
      )
      .addCase(
        fetchAsyncGetSinglesApplications.rejected,
        (state: ApplicationsState, action: PayloadAction<any>) => {
          console.log(
            "applications/fetchAsyncGetSinglesApplications：rejected"
          );
        }
      )
      .addCase(
        fetchAsyncGetSinglesApplications.pending,
        (state: ApplicationsState, action: PayloadAction<any>) => {}
      )
      .addCase(
        fetchAsyncGetTeamApplications.fulfilled,
        (state: ApplicationsState, action: PayloadAction<any>) => {
          console.log(action.payload);
          return {
            ...state,
            applicantGroupsInfo: action.payload,
          };
        }
      )
      .addCase(
        fetchAsyncGetTeamApplications.rejected,
        (state: ApplicationsState, action: PayloadAction<any>) => {
          console.log("applications/fetchAsyncGetTeamApplications：rejected");
        }
      )
      .addCase(
        fetchAsyncGetTeamApplications.pending,
        (state: ApplicationsState, action: PayloadAction<any>) => {}
      );
  },
});

export const {
  setApplicationsTournamentTitle,
  setApplicationsTournamentClass,
  initApplicantGroupsInfo,
} = applicationsSlice.actions;
export const selectTournamentTitle = (state: RootState) =>
  state.applications.tournamentTitle;
export const selectTournamentClass = (state: RootState) =>
  state.applications.tournamentClass;
export const selectTeamsInfo = (state: RootState) =>
  state.applications.teamsInfo;
export const selectApplicantGroupsInfo = (state: RootState) =>
  state.applications.applicantGroupsInfo;
export default applicationsSlice.reducer;
