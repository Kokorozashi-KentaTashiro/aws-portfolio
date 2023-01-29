export type TornamentApplicationState = {
  tornamentApplicationsInfo: TornamentApplicationInfo[];
};

/** 大会応募情報 */
export type TornamentApplicationInfo = {
  lastName: string;
  firstName: string;
  school: number;
  schoolYear: number;
  sex: number;
};