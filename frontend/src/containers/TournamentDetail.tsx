import Layout from "components/Layout";

import { todayDate } from "common/utility";
import { CommonContainer, CommonButton } from "common/commonMaterial";
import { useTournamentDetailHook } from "hooks/tournamentDetailHook";

const TournamentDetail = () => {
  // ReactHook
  const { tournamentDetailInfo, onClickApply } = useTournamentDetailHook();

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
