import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent } from "@mui/material";
import Layout from "components/Layout";
import styled from "@emotion/styled";

import { TOURNAMNT_REGIST_INFO, TOURNAMNT_DETAIL_INFO } from "common/PAGES";
import { CommonContainer, CommonButton } from "common/commonMaterial";
import { selectTournamentsInfo } from "ducks/tournaments/slice";
import { TornamentInfo } from "ducks/tournaments/type";
import { setTournamentDetailInfo } from "ducks/tournamentDetail/slice";

export const TournamntCard = styled(Card)`
  width: 100%;
  height: 200px;
  margin: 10px 10%;
  cursor: pointer;
`;

const Tournaments: FC = () => {
  // 変数
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tournamentsInfo: TornamentInfo[] = useSelector(selectTournamentsInfo);

  // 関数
  const onClickCard = (tournamentInfo: TornamentInfo) => {
    dispatch(setTournamentDetailInfo(tournamentInfo));
    navigate(TOURNAMNT_DETAIL_INFO.URL);
  };

  const onClickButton = () => {
    navigate(TOURNAMNT_REGIST_INFO.URL);
  };

  return (
    <>
      <Layout>
        <CommonContainer>
          {tournamentsInfo.map((tournamentInfo) => {
            return (
              <TournamntCard variant="outlined">
                <CardContent onClick={() => onClickCard(tournamentInfo)}>
                  <p>{tournamentInfo.title}</p>
                  <p>{tournamentInfo.date}</p>
                  <p>{tournamentInfo.place}</p>
                  {tournamentInfo.reception ? <p>受付中</p> : <p>受付終了</p>}
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
