export type TournamentDetailState = {
  tournamentDetailInfo: TornamentDetailInfo;
};

/** 大会要項情報 */
export type TornamentDetailInfo = {
  title: string;
  eventDate: string;
  place: string;
  applicationStartDate: string;
  applicationEndDate: string;
};
