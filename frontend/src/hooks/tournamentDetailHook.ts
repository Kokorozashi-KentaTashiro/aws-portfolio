import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AppDispatch } from "app/store";
import {
  TOURNAMNT_APPLICATION_INFO,
  APPLICATIONS_VIEW_INFO,
} from "common/PAGES";
import { selectTournamentDetailInfo } from "ducks/tournamentDetail/slice";
import { TornamentDetailInfo } from "ducks/tournamentDetail/type";
import {
  setTournamentTitle,
  setTournamentClass,
} from "ducks/tournamentApplication/slice";
import {
  setApplicationsTournamentTitle,
  setApplicationsTournamentClass,
} from "ducks/applications/slice";
import { setPage } from "ducks/effect/slice";

export const useTournamentDetailHook = () => {
  // 変数
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const tournamentDetailInfo: TornamentDetailInfo = useSelector(
    selectTournamentDetailInfo
  );

  // 関数
  const onClickApply = () => {
    dispatch(setTournamentTitle(tournamentDetailInfo.tournamentTitle));
    dispatch(setTournamentClass(tournamentDetailInfo.tournamentClass));
    navigate(TOURNAMNT_APPLICATION_INFO.URL);
    dispatch(setPage(TOURNAMNT_APPLICATION_INFO.URL));
  };

  const onClickLink = () => {
    dispatch(
      setApplicationsTournamentTitle(tournamentDetailInfo.tournamentTitle)
    );
    dispatch(
      setApplicationsTournamentClass(tournamentDetailInfo.tournamentClass)
    );
    navigate(APPLICATIONS_VIEW_INFO.URL);
    dispatch(setPage(APPLICATIONS_VIEW_INFO.URL));
  };

  return {
    navigate,
    tournamentDetailInfo,
    onClickApply,
    onClickLink,
  };
};
