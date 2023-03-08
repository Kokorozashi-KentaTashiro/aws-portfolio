export type TournamentsState = {
  tournamentsInfo: TornamentInfo[];
};

/** 大会情報 */
export type TornamentInfo = {
  tournamentTitle: string;
  tournamentClass: number;
  eventDate: string;
  place: string;
  applicationStartDate: string;
  applicationEndDate: string;
};
