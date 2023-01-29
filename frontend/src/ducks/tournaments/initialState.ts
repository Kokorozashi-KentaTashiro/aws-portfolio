import { TournamentsState } from "./type";
export const initialState: TournamentsState = {
  tournamentsInfo: [
    {
      date: "2022/12/25",
      title: "カデット大会",
      place: "千葉市ポートアリーナ",
      reception: false,
    },
    {
      date: "2023/2/11",
      title: "佐倉市大会",
      place: "佐倉市体育館",
      reception: true,
    },
    {
      date: "2023/2/11",
      title: "インターハイ予選",
      place: "千葉市ポートアリーナ",
      reception: true,
    },
  ],
};
