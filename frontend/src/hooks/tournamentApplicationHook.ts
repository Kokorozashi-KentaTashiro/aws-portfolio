import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "app/store";

import {
  selectTournamentApplicationInfo,
  addApplicationInfo,
  fetchAsyncPutApplications,
} from "ducks/tournamentApplication/slice";
import { TornamentApplicationInfo } from "ducks/tournamentApplication/type";
import { selectTournamentDetailInfo } from "ducks/tournamentDetail/slice";
import { TornamentDetailInfo } from "ducks/tournamentDetail/type";
import { TOURNAMNTS_INFO } from "common/PAGES";
import { setPage } from "ducks/effect/slice";

export const useTournamentApplicationHook = () => {
  // 変数
  const tornamentDetailInfo: TornamentDetailInfo = useSelector(
    selectTournamentDetailInfo
  );
  const tornamentApplicationsInfo: TornamentApplicationInfo[] = useSelector(
    selectTournamentApplicationInfo
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  // 関数

  const onClickApply = async () => {
    let args = {
      tournamentName: tornamentDetailInfo.title,
      tornamentApplicationsInfo: tornamentApplicationsInfo,
    };
    await dispatch(fetchAsyncPutApplications(args));
    await dispatch(setPage(TOURNAMNTS_INFO.URL));
    navigate(TOURNAMNTS_INFO.URL);
  };

  const onClickIncrement = () => {
    dispatch(addApplicationInfo());
  };

  return {
    tornamentDetailInfo,
    tornamentApplicationsInfo,
    dispatch,
    navigate,
    onClickApply,
    onClickIncrement,
  };
};
