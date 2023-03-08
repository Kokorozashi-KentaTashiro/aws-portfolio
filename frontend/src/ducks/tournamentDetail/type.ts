export type TournamentDetailState = {
  tournamentDetailInfo: TornamentDetailInfo;
};

/** 大会要項情報 */
export type TornamentDetailInfo = {
  tournamentTitle: string;
  tournamentClass: number;
  eventDate: string;
  place: string;
  applicationStartDate: string;
  applicationEndDate: string;
};
