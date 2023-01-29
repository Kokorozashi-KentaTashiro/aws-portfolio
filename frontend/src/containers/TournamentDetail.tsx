import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "components/Layout";

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

  return (
    <>
      <Layout>
        <CommonContainer>
          <div>{tournamentDetailInfo.title}</div>
          <div>{tournamentDetailInfo.date}</div>
          <div>{tournamentDetailInfo.place}</div>
          {tournamentDetailInfo.reception && (
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
