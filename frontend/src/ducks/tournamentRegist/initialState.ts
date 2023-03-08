import { TournamentRegistState } from "./type";
import { todayStr } from "common/utility";

export const initialState: TournamentRegistState = {
  tournamentRegistInfo: {
    tournamentTitle: "",
    tournamentClass: 0,
    eventDate: todayStr,
    place: "",
    applicationStartDate: todayStr,
    applicationEndDate: todayStr,
  },
};
