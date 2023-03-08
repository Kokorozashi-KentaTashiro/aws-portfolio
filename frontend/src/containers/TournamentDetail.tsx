import Layout from "components/Layout";

import { todayDate } from "common/utility";
import {
  CommonContainer,
  CommonButton,
  CommonLink,
} from "common/commonMaterial";
import { useTournamentDetailHook } from "hooks/tournamentDetailHook";

const TournamentDetail = () => {
  // ReactHook
  const { tournamentDetailInfo, onClickApply, onClickLink } =
    useTournamentDetailHook();

  return (
    <>
      <Layout>
        <CommonContainer>
          <div>{tournamentDetailInfo.tournamentTitle}</div>
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
          <CommonLink
            underline="hover"
            onClick={onClickLink}
            sx={{ marginTop: { xs: 1, md: 2 } }}
          >
            参加者情報はこちら
          </CommonLink>
        </CommonContainer>
      </Layout>
    </>
  );
};

export default TournamentDetail;
