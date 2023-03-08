import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  ActionReducerMapBuilder,
} from "@reduxjs/toolkit";
import { API } from "aws-amplify";

import { RootState } from "app/store";
import {
  initialSinglesApplicationInfo,
  initialTeamApplicationInfo,
  initialState,
} from "./initialState";
import {
  TornamentApplicationState,
  TeamInfo,
  DirecterInfo,
  SinglesApplicationInfo,
  TeamApplicationInfo,
} from "./type";
import {
  API_NAME,
  SINGLES_APPLICATIONS_RESOURCE,
  TEAM_APPLICATIONS_RESOURCE,
} from "common/constants";

// 非同期処理の関数作成
export const fetchAsyncPutSinglesApplications = createAsyncThunk(
  `${SINGLES_APPLICATIONS_RESOURCE}/put`,
  async (
    args: {
      tournamentTitle: string;
      tournamentClass: number;
      teamInfo: TeamInfo;
      directerInfo: DirecterInfo;
      singlesApplicationsInfo: SinglesApplicationInfo[];
    },
    thunkAPI
  ) => {
    const req = {
      body: {
        tournamentTitle: args.tournamentTitle,
        tournamentClass: args.tournamentClass,
        teamInfo: args.teamInfo,
        directerInfo: args.directerInfo,
        singlesApplicationsInfo: args.singlesApplicationsInfo,
      },
    };
    try {
      return await API.put(API_NAME, SINGLES_APPLICATIONS_RESOURCE, req);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const fetchAsyncPutTeamApplications = createAsyncThunk(
  `${TEAM_APPLICATIONS_RESOURCE}/put`,
  async (
    args: {
      tournamentTitle: string;
      tournamentClass: number;
      teamInfo: TeamInfo;
      directerInfo: DirecterInfo;
      teamApplicationsInfo: TeamApplicationInfo[];
    },
    thunkAPI
  ) => {
    const req = {
      body: {
        tournamentTitle: args.tournamentTitle,
        tournamentClass: args.tournamentClass,
        teamInfo: args.teamInfo,
        directerInfo: args.directerInfo,
        teamApplicationsInfo: args.teamApplicationsInfo,
      },
    };
    try {
      return await API.put(API_NAME, TEAM_APPLICATIONS_RESOURCE, req);
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
    // 共通
    initTournamentApplicationState(state: TornamentApplicationState) {
      state = initialState;
    },
    setTournamentTitle(state: TornamentApplicationState, action) {
      state.tournamentTitle = action.payload;
    },
    setTournamentClass(state: TornamentApplicationState, action) {
      state.tournamentClass = action.payload;
    },
    // チーム情報
    setTeam(state: TornamentApplicationState, action) {
      state.teamInfo.team = action.payload;
    },
    setTeamZone(state: TornamentApplicationState, action) {
      state.teamInfo.teamZone = action.payload;
    },
    setTeamSex(state: TornamentApplicationState, action) {
      state.teamInfo.teamSex = action.payload;
    },
    setTeamAddress(state: TornamentApplicationState, action) {
      state.teamInfo.teamAddress = action.payload;
    },
    setTeamPhone(state: TornamentApplicationState, action) {
      state.teamInfo.teamPhone = action.payload;
    },
    setTeamFax(state: TornamentApplicationState, action) {
      state.teamInfo.teamFax = action.payload;
    },
    setTeamManager(state: TornamentApplicationState, action) {
      state.teamInfo.teamManager = action.payload;
    },
    // 監督情報
    setDirecterName(state: TornamentApplicationState, action) {
      state.directerInfo.directerName = action.payload;
    },
    setDirecterPhone(state: TornamentApplicationState, action) {
      state.directerInfo.directerPhone = action.payload;
    },
    setDirecterEmail(state: TornamentApplicationState, action) {
      state.directerInfo.directerEmail = action.payload;
    },
    setAdvisorName(state: TornamentApplicationState, action) {
      state.directerInfo.advisorName = action.payload;
    },

    // シングルス応募情報
    addSinglesApplicationInfo(state: TornamentApplicationState) {
      state.singlesApplicationsInfo.push(initialSinglesApplicationInfo);
    },
    deleteSinglesApplicationInfo(state: TornamentApplicationState, action) {
      state.singlesApplicationsInfo.splice(action.payload, 1);
    },
    setSinglesLastName(state: TornamentApplicationState, action) {
      const tornamentApplicationInfo =
        state.singlesApplicationsInfo[action.payload.index];
      tornamentApplicationInfo.lastName = action.payload.value;
    },
    setSinglesFirstName(state: TornamentApplicationState, action) {
      const tornamentApplicationInfo =
        state.singlesApplicationsInfo[action.payload.index];
      tornamentApplicationInfo.firstName = action.payload.value;
    },
    setSinglesSchoolYear(state: TornamentApplicationState, action) {
      const tornamentApplicationInfo =
        state.singlesApplicationsInfo[action.payload.index];
      tornamentApplicationInfo.schoolYear = action.payload.value;
    },
    setSinglesBirthDay(state: TornamentApplicationState, action) {
      const tornamentApplicationInfo =
        state.singlesApplicationsInfo[action.payload.index];
      tornamentApplicationInfo.birthDay = action.payload.value;
    },

    // 団体戦応募情報
    addTeamApplicationInfo(state: TornamentApplicationState) {
      state.teamApplicationsInfo.push(initialTeamApplicationInfo);
    },
    deleteTeamApplicationInfo(state: TornamentApplicationState, action) {
      state.teamApplicationsInfo.splice(action.payload, 1);
    },
    setTeamLastName(state: TornamentApplicationState, action) {
      const teamApplicationInfo =
        state.teamApplicationsInfo[action.payload.index];
      teamApplicationInfo.lastName = action.payload.value;
    },
    setTeamFirstName(state: TornamentApplicationState, action) {
      const teamApplicationInfo =
        state.teamApplicationsInfo[action.payload.index];
      teamApplicationInfo.firstName = action.payload.value;
    },
    setTeamSchoolYear(state: TornamentApplicationState, action) {
      const teamApplicationInfo =
        state.teamApplicationsInfo[action.payload.index];
      teamApplicationInfo.schoolYear = action.payload.value;
    },
    setTeamCaptain(state: TornamentApplicationState, action) {
      const teamApplicationInfo =
        state.teamApplicationsInfo[action.payload.index];
      teamApplicationInfo.captain = action.payload.value;
    },
    setTeamBirthDay(state: TornamentApplicationState, action) {
      const teamApplicationInfo =
        state.teamApplicationsInfo[action.payload.index];
      teamApplicationInfo.birthDay = action.payload.value;
    },
  },
  extraReducers(builder: ActionReducerMapBuilder<TornamentApplicationState>) {
    builder
      .addCase(
        fetchAsyncPutSinglesApplications.fulfilled,
        (state: TornamentApplicationState, action: PayloadAction<any>) => {
          return {
            ...initialState,
          };
        }
      )
      .addCase(
        fetchAsyncPutSinglesApplications.rejected,
        (state: TornamentApplicationState, action: PayloadAction<any>) => {
          console.log(
            "tournamentApplication/fetchAsyncPutSinglesApplications：rejected"
          );
        }
      )
      .addCase(
        fetchAsyncPutSinglesApplications.pending,
        (state: TornamentApplicationState, action: PayloadAction<any>) => {}
      )
      .addCase(
        fetchAsyncPutTeamApplications.fulfilled,
        (state: TornamentApplicationState, action: PayloadAction<any>) => {
          return {
            ...initialState,
          };
        }
      )
      .addCase(
        fetchAsyncPutTeamApplications.rejected,
        (state: TornamentApplicationState, action: PayloadAction<any>) => {
          console.log(
            "tournamentApplication/fetchAsyncPutTeamApplications：rejected"
          );
        }
      )
      .addCase(
        fetchAsyncPutTeamApplications.pending,
        (state: TornamentApplicationState, action: PayloadAction<any>) => {}
      );
  },
});

export const {
  // 共通
  initTournamentApplicationState,
  setTournamentTitle,
  setTournamentClass,
  // チーム情報
  setTeam,
  setTeamZone,
  setTeamSex,
  setTeamAddress,
  setTeamPhone,
  setTeamFax,
  setTeamManager,
  // 監督情報
  setDirecterName,
  setDirecterPhone,
  setDirecterEmail,
  setAdvisorName,
  // シングルス応募情報
  addSinglesApplicationInfo,
  deleteSinglesApplicationInfo,
  setSinglesLastName,
  setSinglesFirstName,
  setSinglesSchoolYear,
  setSinglesBirthDay,
  // 団体戦応募情報
  addTeamApplicationInfo,
  deleteTeamApplicationInfo,
  setTeamLastName,
  setTeamFirstName,
  setTeamSchoolYear,
  setTeamCaptain,
  setTeamBirthDay,
} = tournamentApplicationSlice.actions;
export const selectTournamentTitle = (state: RootState) =>
  state.tournamentApplication.tournamentTitle;
export const selectTournamentClass = (state: RootState) =>
  state.tournamentApplication.tournamentClass;
export const selectTeamInfo = (state: RootState) =>
  state.tournamentApplication.teamInfo;
export const selectDirecterInfo = (state: RootState) =>
  state.tournamentApplication.directerInfo;
export const selectSinglesApplicationsInfo = (state: RootState) =>
  state.tournamentApplication.singlesApplicationsInfo;
export const selectTeamApplicationsInfo = (state: RootState) =>
  state.tournamentApplication.teamApplicationsInfo;
export default tournamentApplicationSlice.reducer;
