export type TornamentApplicationState = {
  tournamentTitle: string;
  tournamentClass: number;
  teamInfo: TeamInfo;
  directerInfo: DirecterInfo;
  singlesApplicationsInfo: SinglesApplicationInfo[];
  teamApplicationsInfo: TeamApplicationInfo[];
};

/** チーム情報 */
export type TeamInfo = {
  team: number;
  teamZone: number;
  teamRank: number;
  teamSex: number;
  teamAddress: string;
  teamPhone: string;
  teamFax: string;
  teamManager: string;
};

/** 監督情報 */
export type DirecterInfo = {
  directerName: string;
  directerPhone: string;
  directerEmail: string;
  advisorName: string;
};

/** シングルス応募情報 */
export type SinglesApplicationInfo = {
  lastName: string;
  firstName: string;
  schoolYear: number;
  birthDay: string;
};

/** 団体戦応募情報 */
export type TeamApplicationInfo = {
  lastName: string;
  firstName: string;
  schoolYear: number;
  birthDay: string;
  captain: boolean;
};
