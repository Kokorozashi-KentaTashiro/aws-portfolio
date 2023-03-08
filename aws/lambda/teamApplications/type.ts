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

/** 団体戦応募情報 */
export type TeamApplicationInfo = {
  lastName: string;
  firstName: string;
  schoolYear: number;
  birthDay: string;
  captain: boolean;
  order: number;
};

/** 参加者情報グループ */
export type ApplicantGroupInfo = {
  teamDetailInfo: TeamDetailInfo;
  directerInfo: DirecterInfo;
  teamApplicationsInfo: TeamApplicationInfo[];
};
