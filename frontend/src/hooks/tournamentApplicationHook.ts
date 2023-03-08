import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dayjs } from "dayjs";

import { AppDispatch } from "app/store";

import {
  selectTournamentTitle,
  selectTournamentClass,
  selectTeamInfo,
  selectDirecterInfo,
  selectSinglesApplicationsInfo,
  selectTeamApplicationsInfo,
  addSinglesApplicationInfo,
  addTeamApplicationInfo,
  fetchAsyncPutSinglesApplications,
  fetchAsyncPutTeamApplications,
  setSinglesBirthDay,
  setTeamBirthDay,
  initTournamentApplicationState,
} from "ducks/tournamentApplication/slice";
import {
  TeamInfo,
  DirecterInfo,
  SinglesApplicationInfo,
  TeamApplicationInfo,
} from "ducks/tournamentApplication/type";
import { selectTournamentDetailInfo } from "ducks/tournamentDetail/slice";
import { TornamentDetailInfo } from "ducks/tournamentDetail/type";
import { TOURNAMNTS_INFO } from "common/PAGES";
import { setPage } from "ducks/effect/slice";

export const useTournamentApplicationHook = () => {
  /** 変数 */
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  // 大会詳細情報
  const tornamentDetailInfo: TornamentDetailInfo = useSelector(
    selectTournamentDetailInfo
  );

  // 共通情報
  const tournamentTitle: string = useSelector(selectTournamentTitle);
  const tournamentClass: number = useSelector(selectTournamentClass);
  // チーム情報
  const teamInfo: TeamInfo = useSelector(selectTeamInfo);
  // 監督情報
  const directerInfo: DirecterInfo = useSelector(selectDirecterInfo);
  // シングルス応募情報
  const singlesApplicationsInfo: SinglesApplicationInfo[] = useSelector(
    selectSinglesApplicationsInfo
  );
  // 団体戦応募情報
  const teamApplicationsInfo: TeamApplicationInfo[] = useSelector(
    selectTeamApplicationsInfo
  );

  // 関数
  const onClickApply = async () => {
    if (tournamentClass === 0) {
      let args = {
        tournamentTitle: tournamentTitle,
        tournamentClass: tournamentClass,
        teamInfo: teamInfo,
        directerInfo: directerInfo,
        teamApplicationsInfo: teamApplicationsInfo,
      };
      await dispatch(fetchAsyncPutTeamApplications(args));
    }
    if (tournamentClass === 1) {
      let args = {
        tournamentTitle: tournamentTitle,
        tournamentClass: tournamentClass,
        teamInfo: teamInfo,
        directerInfo: directerInfo,
        singlesApplicationsInfo: singlesApplicationsInfo,
      };
      await dispatch(fetchAsyncPutSinglesApplications(args));
    }

    await dispatch(initTournamentApplicationState());
    await dispatch(setPage(TOURNAMNTS_INFO.URL));
    navigate(TOURNAMNTS_INFO.URL);
  };

  const onClickSinglesIncrement = () => {
    dispatch(addSinglesApplicationInfo());
  };

  const onClickTeamIncrement = () => {
    dispatch(addTeamApplicationInfo());
  };

  const changeSinglesBirthDay = (index: number, newValue: Dayjs | null) => {
    if (newValue) {
      const newValueStr = newValue.format("YYYY-MM-DD");
      dispatch(setSinglesBirthDay({ index: index, value: newValueStr }));
    } else {
      dispatch(setSinglesBirthDay(""));
    }
  };

  const changeTeamBirthDay = (index: number, newValue: Dayjs | null) => {
    if (newValue) {
      const newValueStr = newValue.format("YYYY-MM-DD");
      dispatch(setTeamBirthDay({ index: index, value: newValueStr }));
    } else {
      dispatch(setTeamBirthDay(""));
    }
  };

  return {
    dispatch,
    navigate,
    tournamentTitle,
    tournamentClass,
    teamInfo,
    directerInfo,
    tornamentDetailInfo,
    singlesApplicationsInfo,
    onClickSinglesIncrement,
    teamApplicationsInfo,
    onClickTeamIncrement,
    changeSinglesBirthDay,
    changeTeamBirthDay,
    onClickApply,
  };
};
