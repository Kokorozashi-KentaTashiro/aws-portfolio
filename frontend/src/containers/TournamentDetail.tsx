import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "components/Layout";

import { todayDate } from "common/utility";
import { TOURNAMNT_APPLICATION_INFO } from "common/PAGES";
import { CommonContainer, CommonButton } from "common/commonMaterial";
import { selectTournamentDetailInfo } from "ducks/tournamentDetail/slice";
import { TornamentDetailInfo } from "ducks/tournamentDetail/type";

const TournamentDetail = () => {
  // 変数
  const navigate = useNavigate();
  const tournamentDetailInfo: TornamentDetailInfo = useSelector(
    selectTournamentDetailInfo
  );

  // 関数
  const onClickApply = () => {
    navigate(TOURNAMNT_APPLICATION_INFO.URL);
  };

  console.log(new Date(tournamentDetailInfo.applicationEndDate) < todayDate);

  return (
    <>
      <Layout>
        <CommonContainer>
          <div>{tournamentDetailInfo.title}</div>
          <div>{tournamentDetailInfo.eventDate}</div>
          <div>{tournamentDetailInfo.place}</div>
          <div>{tournamentDetailInfo.applicationStartDate}</div>
          <div>{tournamentDetailInfo.applicationEndDate}</div>
          {todayDate > new Date(tournamentDetailInfo.applicationEndDate) ? (
            <></>
          ) : todayDate <
            new Date(tournamentDetailInfo.applicationStartDate) ? (
            <></>
          ) : (
            <CommonButton variant="contained" onClick={onClickApply}>
              応募
            </CommonButton>
          )}
        </CommonContainer>
      </Layout>
    </>
  );
};

export default TournamentDetail;
