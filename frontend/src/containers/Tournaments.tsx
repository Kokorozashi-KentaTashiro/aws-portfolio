import { FC, useEffect } from "react";
import { Card, CardContent } from "@mui/material";
import Layout from "components/Layout";
import styled from "@emotion/styled";

import { todayDate } from "common/utility";
import { CommonContainer, CommonButton } from "common/commonMaterial";
import { fetchAsyncGetTournaments } from "ducks/tournaments/slice";
import { useTournamentsHook } from "hooks/tournamentsHook";

export const TournamntCard = styled(Card)`
  width: 100%;
  min-height: 200px;
  margin: 10px 10%;
  cursor: pointer;
`;

const Tournaments: FC = () => {
  // ReactHook
  const { dispatch, tournamentsInfo, onClickCard, onClickButton } =
    useTournamentsHook();

  // useEffect
  useEffect(() => {
    dispatch(fetchAsyncGetTournaments());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <CommonContainer>
          {tournamentsInfo.map((tournamentInfo) => {
            return (
              <TournamntCard variant="outlined">
                <CardContent onClick={() => onClickCard(tournamentInfo)}>
                  <p>{tournamentInfo.title}</p>
                  <p>{tournamentInfo.eventDate}</p>
                  <p>{tournamentInfo.place}</p>
                  {todayDate > new Date(tournamentInfo.applicationEndDate) ? (
                    <p>受付終了</p>
                  ) : todayDate <
                    new Date(tournamentInfo.applicationStartDate) ? (
                    <p>受付開始待ち</p>
                  ) : (
                    <p>受付中</p>
                  )}
                </CardContent>
              </TournamntCard>
            );
          })}
          <CommonButton variant="contained" onClick={() => onClickButton()}>
            登録
          </CommonButton>
        </CommonContainer>
      </Layout>
    </>
  );
};

export default Tournaments;
