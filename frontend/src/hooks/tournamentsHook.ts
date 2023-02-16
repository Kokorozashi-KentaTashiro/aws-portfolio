import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "app/store";
import { TOURNAMNT_REGIST_INFO, TOURNAMNT_DETAIL_INFO } from "common/PAGES";
import { selectTournamentsInfo } from "ducks/tournaments/slice";
import { TornamentInfo } from "ducks/tournaments/type";
import { setTournamentDetailInfo } from "ducks/tournamentDetail/slice";
import { selectPage, setPage } from "ducks/effect/slice";

export const useTournamentsHook = () => {
  // 変数
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const tournamentsInfo: TornamentInfo[] = useSelector(selectTournamentsInfo);
  const page: string = useSelector(selectPage);

  // 関数
  const onClickCard = (tournamentInfo: TornamentInfo) => {
    dispatch(setTournamentDetailInfo(tournamentInfo));
    navigate(TOURNAMNT_DETAIL_INFO.URL);
    dispatch(setPage(TOURNAMNT_DETAIL_INFO.URL));
  };

  const onClickButton = () => {
    navigate(TOURNAMNT_REGIST_INFO.URL);
    dispatch(setPage(TOURNAMNT_REGIST_INFO.URL));
  };

  return {
    navigate,
    dispatch,
    tournamentsInfo,
    page,
    onClickCard,
    onClickButton,
  };
};
