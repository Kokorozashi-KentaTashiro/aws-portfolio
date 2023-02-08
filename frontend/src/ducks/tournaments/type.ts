export type TournamentsState = {
  tournamentsInfo: TornamentInfo[];
};

/** 大会情報 */
export type TornamentInfo = {
  title: string;
  eventDate: string;
  place: string;
  applicationStartDate: string;
  applicationEndDate: string;
};
