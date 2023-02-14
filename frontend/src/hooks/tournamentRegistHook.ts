import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dayjs } from "dayjs";

import { TornamentRegistInfo } from "ducks/tournamentRegist/type";
import {
  selectTournamentRegistInfo,
  setTitle,
  setEventDate,
  setPlace,
  setApplicationStartDate,
  setApplicationEndDate,
  fetchAsyncPostTournament,
} from "ducks/tournamentRegist/slice";
import { AppDispatch } from "app/store";

export const useTournamentRegistHook = () => {
  // 変数
  const dispatch = useDispatch<AppDispatch>();
  const tournamentRegistInfo: TornamentRegistInfo = useSelector(
    selectTournamentRegistInfo
  );

  // 関数
  const changeEventDate = (newValue: Dayjs | null) => {
    if (newValue) {
      const newValueStr = newValue.format("YYYY-MM-DD");
      dispatch(setEventDate(newValueStr));
    } else {
      dispatch(setEventDate(""));
    }
  };

  const changeApplicationStartDate = (newValue: Dayjs | null) => {
    if (newValue) {
      const newValueStr = newValue.format("YYYY-MM-DD");
      dispatch(setApplicationStartDate(newValueStr));
    } else {
      dispatch(setApplicationStartDate(""));
    }
  };

  const changeApplicationEndDate = (newValue: Dayjs | null) => {
    if (newValue) {
      const newValueStr = newValue.format("YYYY-MM-DD");
      dispatch(setApplicationEndDate(newValueStr));
    } else {
      dispatch(setApplicationEndDate(""));
    }
  };

  const changeTitleVal = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle(e.target.value));
  };

  const changePlaceVal = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPlace(e.target.value));
  };

  const onClickConfirm = () => {
    dispatch(fetchAsyncPostTournament(tournamentRegistInfo));
  };

  return {
    dispatch,
    tournamentRegistInfo,
    changeEventDate,
    changeApplicationStartDate,
    changeApplicationEndDate,
    changeTitleVal,
    changePlaceVal,
    onClickConfirm,
  };
};
