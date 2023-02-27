import { FC, useEffect } from "react";
import { Card, CardContent } from "@mui/material";
import Layout from "components/Layout";
import styled from "@emotion/styled";

import { todayDate } from "common/utility";
import { CommonContainer, CommonButton } from "common/commonMaterial";
import { fetchAsyncGetTournaments } from "ducks/tournaments/slice";
import { useTournamentsHook } from "hooks/tournamentsHook";

import { tournamentClasses } from "common/constants";

export const TournamntCard = styled(Card)`
  width: 100%;
  min-height: 200px;
  margin: 10px 10%;
  cursor: pointer;
`;

const Tournaments: FC = () => {
  // ReactHook
  const { dispatch, tournamentsInfo, page, onClickCard, onClickButton } =
    useTournamentsHook();

  // useEffect
  useEffect(() => {
    console.log("Tournaments：rendering");
    dispatch(fetchAsyncGetTournaments());
  }, [page, dispatch]);

  return (
    <>
      <Layout>
        <CommonContainer>
          {tournamentsInfo.map((tournamentInfo) => {
            return (
              <TournamntCard variant="outlined">
                <CardContent onClick={() => onClickCard(tournamentInfo)}>
                  <p>タイトル：{tournamentInfo.title}</p>
                  <p>
                    大会区分：{tournamentClasses[tournamentInfo.class].label}
                  </p>
                  <p>開催日：{tournamentInfo.eventDate}</p>
                  <p>開催場所：{tournamentInfo.place}</p>
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
