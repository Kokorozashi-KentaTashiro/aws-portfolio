export type TournamentDetailState = {
  tournamentDetailInfo: TornamentDetailInfo;
};

/** 大会要項情報 */
export type TornamentDetailInfo = {
  title: string;
  date: string;
  place: string;
  reception: boolean;
};