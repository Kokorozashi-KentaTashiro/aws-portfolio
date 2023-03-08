export type ApplicationsState = {
  tournamentTitle: string;
  tournamentClass: number;
  teamsInfo: TeamInfo[];
  applicantGroupsInfo: ApplicantGroupInfo[];
};

/** チーム一覧情報 */
export type TeamInfo = {
  team: number;
  teamSex: number;
};

/** 参加者情報グループ */
export type ApplicantGroupInfo = {
  teamDetailInfo: TeamDetailInfo;
  directerInfo: DirecterInfo;
  singlesApplicationsInfo: SinglesApplicationInfo[];
  teamApplicationsInfo: TeamApplicationInfo[];
};

/** チーム情報 */
export type TeamDetailInfo = {
  team: number;
  teamZone: number;
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
  order: number;
};
