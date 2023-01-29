import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "app/store";
import { initialState } from "./initialState";
import { TornamentApplicationState } from "./type";

// 非同期処理の関数作成

// sliceの作成
export const tournamentApplicationSlice = createSlice({
  name: "tournamentApplication",
  initialState,
  reducers: {
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
      tornamentApplicationInfo.lastName = action.payload.lastName;
    },
    setFirstName(state: TornamentApplicationState, action) {
      const tornamentApplicationInfo =
        state.tornamentApplicationsInfo[action.payload.index];
      tornamentApplicationInfo.firstName = action.payload.firstName;
    },
    setSchool(state: TornamentApplicationState, action) {
      const tornamentApplicationInfo =
        state.tornamentApplicationsInfo[action.payload.index];
      tornamentApplicationInfo.school = action.payload.school;
    },
    setSchoolYear(state: TornamentApplicationState, action) {
      const tornamentApplicationInfo =
        state.tornamentApplicationsInfo[action.payload.index];
      tornamentApplicationInfo.schoolYear = action.payload.schoolYear;
    },
    setSex(state: TornamentApplicationState, action) {
      const tornamentApplicationInfo =
        state.tornamentApplicationsInfo[action.payload.index];
      tornamentApplicationInfo.sex = action.payload.sex;
    },

    setApplicationInfo(state: TornamentApplicationState, action) {
      return {
        ...state,
        tornamentApplicationsInfo: action.payload,
      };
    },
  },
});

export const {
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
