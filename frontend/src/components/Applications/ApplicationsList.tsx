import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "app/store";

import { CommonButton } from "common/commonMaterial";
import {
  selectTournamentClass,
  initApplicantGroupsInfo,
} from "ducks/applications/slice";

import SinglesApplicationsList from "./SinglesApplicationsList";
import TeamApplicationsList from "./TeamApplicationsList";

const ApplicationsList: FC = () => {
  /** 変数 */
  const dispatch = useDispatch<AppDispatch>();
  const tournamentClass: number = useSelector(selectTournamentClass);

  return (
    <>
      {tournamentClass === 0 && <TeamApplicationsList />}
      {tournamentClass === 1 && <SinglesApplicationsList />}

      <CommonButton
        variant="contained"
        onClick={() => {
          dispatch(initApplicantGroupsInfo());
        }}
      >
        戻る
      </CommonButton>
    </>
  );
};

export default ApplicationsList;
