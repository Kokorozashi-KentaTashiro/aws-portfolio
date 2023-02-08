import { TournamentRegistState } from "./type";
import { todayStr } from "common/utility";

export const initialState: TournamentRegistState = {
  tournamentRegistInfo: {
    title: "",
    eventDate: todayStr,
    place: "",
    applicationStartDate: todayStr,
    applicationEndDate: todayStr,
  },
};
