export type TournamentRegistState = {
  tournamentRegistInfo: TornamentRegistInfo;
};

/** 大会登録情報 */
export type TornamentRegistInfo = {
  title: string;
  eventDate: string;
  place: string;
  applicationStartDate: string;
  applicationEndDate: string;
};