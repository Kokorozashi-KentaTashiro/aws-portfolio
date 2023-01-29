export type TournamentsState = {
  tournamentsInfo: TornamentInfo[];
};

/** 大会情報 */
export type TornamentInfo = {
  date: string;
  title: string;
  place: string;
  reception: boolean;
};
