import { TournamentRegistState } from "./type";

const today = new Date();
const year = today.getFullYear().toString().padStart(4, '0');
const month = (today.getMonth() + 1).toString().padStart(2, '0');
const day = today.getDate().toString().padStart(2, '0');
const todayStr = `${year}-${month}-${day}`;

export const initialState: TournamentRegistState = {
  tournamentRegistInfo: {
    title: "",
    eventDate: todayStr,
    place: "",
    applicationStartDate: todayStr,
    applicationEndDate: todayStr,
  },
};
