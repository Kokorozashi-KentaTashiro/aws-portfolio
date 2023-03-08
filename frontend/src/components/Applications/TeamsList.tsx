import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "app/store";

import {
  selectTournamentTitle,
  selectTournamentClass,
  selectTeamsInfo,
  fetchAsyncGetTeams,
  fetchAsyncGetSinglesApplications,
  fetchAsyncGetTeamApplications,
} from "ducks/applications/slice";
import { TeamInfo } from "ducks/applications/type";
import { selectTournamentDetailInfo } from "ducks/tournamentDetail/slice";
import { TornamentDetailInfo } from "ducks/tournamentDetail/type";
import { teams, sexies } from "common/constants";
import { CommonContainer, CommonLink } from "common/commonMaterial";

const TeamsList: FC = () => {
  /** 変数 */
  const dispatch = useDispatch<AppDispatch>();
  const tournamentTitle: string = useSelector(selectTournamentTitle);
  const tournamentClass: number = useSelector(selectTournamentClass);
  const teamsInfo: TeamInfo[] = useSelector(selectTeamsInfo);
  const tornamentDetailInfo: TornamentDetailInfo = useSelector(
    selectTournamentDetailInfo
  );

  // 関数
  const onClickLink = async (team: number, teamSex: number) => {
    switch (tournamentClass) {
      case 0:
        await dispatch(
          fetchAsyncGetTeamApplications({ tournamentTitle, team, teamSex })
        );
        break;
      case 1:
        await dispatch(
          fetchAsyncGetSinglesApplications({ tournamentTitle, team, teamSex })
        );
        break;
    }
  };

  // useEffect
  useEffect(() => {
    (async () => {
      await dispatch(fetchAsyncGetTeams(tornamentDetailInfo.tournamentTitle));
    })();
    console.log("TeamsList：rendering");
  }, [dispatch]);

  return (
    <>
      {teamsInfo.map((teamInfo, index) => {
        return (
          <>
            <CommonContainer>
              <CommonLink
                onClick={() => {
                  onClickLink(teamInfo.team, teamInfo.teamSex);
                }}
              >
                {`${teams[teamInfo.team].label} ${
                  sexies[teamInfo.teamSex].label
                }`}
              </CommonLink>
            </CommonContainer>
          </>
        );
      })}
    </>
  );
};

export default TeamsList;
