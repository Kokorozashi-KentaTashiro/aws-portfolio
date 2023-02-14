import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { TOURNAMNT_APPLICATION_INFO } from "common/PAGES";
import { selectTournamentDetailInfo } from "ducks/tournamentDetail/slice";
import { TornamentDetailInfo } from "ducks/tournamentDetail/type";

export const useTournamentDetailHook = () => {
  // 変数
  const navigate = useNavigate();
  const tournamentDetailInfo: TornamentDetailInfo = useSelector(
    selectTournamentDetailInfo
  );

  // 関数
  const onClickApply = () => {
    navigate(TOURNAMNT_APPLICATION_INFO.URL);
  };

  return {
    navigate,
    tournamentDetailInfo,
    onClickApply,
  };
};
