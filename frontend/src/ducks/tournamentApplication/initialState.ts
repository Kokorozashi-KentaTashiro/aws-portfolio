import {
  TornamentApplicationState,
  TeamInfo,
  DirecterInfo,
  SinglesApplicationInfo,
  TeamApplicationInfo,
} from "./type";

/** チーム情報 */
export const initialTeamInfo: TeamInfo = {
  team: 0,
  teamZone: 0,
  teamRank: 0,
  teamSex: 0,
  teamAddress: "",
  teamPhone: "",
  teamFax: "",
  teamManager: "",
};

/** 監督情報 */
export const initialDirecterInfo: DirecterInfo = {
  directerName: "",
  directerPhone: "",
  directerEmail: "",
  advisorName: "",
};

export const initialSinglesApplicationInfo: SinglesApplicationInfo = {
  lastName: "",
  firstName: "",
  schoolYear: 0,
  birthDay: "",
};

export const initialTeamApplicationInfo: TeamApplicationInfo = {
  lastName: "",
  firstName: "",
  schoolYear: 0,
  birthDay: "",
  captain: false,
};

export const initialState: TornamentApplicationState = {
  tournamentTitle: "",
  tournamentClass: 0,
  teamInfo: initialTeamInfo,
  directerInfo: initialDirecterInfo,
  singlesApplicationsInfo: [initialSinglesApplicationInfo],
  teamApplicationsInfo: [
    initialTeamApplicationInfo,
    initialTeamApplicationInfo,
    initialTeamApplicationInfo,
    initialTeamApplicationInfo,
    initialTeamApplicationInfo,
    initialTeamApplicationInfo,
  ],
};
