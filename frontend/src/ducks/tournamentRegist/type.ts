export type TournamentRegistState = {
  tournamentRegistInfo: TornamentRegistInfo;
};

/** 大会登録情報 */
export type TornamentRegistInfo = {
  title: string;
  class: number;
  eventDate: string;
  place: string;
  applicationStartDate: string;
  applicationEndDate: string;
};
