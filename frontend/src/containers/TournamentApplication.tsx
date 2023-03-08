import { FC, useState } from "react";

import Layout from "components/Layout";

import { CommonContainer, CommonButton } from "common/commonMaterial";

import SinglesApplication from "components/TournamentApplication/SinglesApplication";
import TeamApplication from "components/TournamentApplication/TeamApplication";
import { useTournamentApplicationHook } from "hooks/tournamentApplicationHook";
import TeamInfo from "components/TournamentApplication/TeamInfo";
import DirecterInfo from "components/TournamentApplication/DirecterInfo";

const TournamentApplication: FC = () => {
  // useState
  const [stage, setStage] = useState<number>(0);
  // ReactHook
  const { onClickApply, tournamentClass } = useTournamentApplicationHook();

  // 関数
  const onClickNextState0 = () => {
    setStage(1);
  };
  const onClickNextState1 = () => {
    setStage(2);
  };
  const onClickBackState1 = () => {
    setStage(0);
  };
  const onClickNextState2 = () => {
    setStage(3);
  };
  const onClickBackState2 = () => {
    setStage(1);
  };

  return (
    <Layout>
      <CommonContainer>
        {stage === 0 && (
          <>
            <TeamInfo />
            <CommonButton variant="contained" onClick={onClickNextState0}>
              次へ
            </CommonButton>
          </>
        )}
        {stage === 1 && (
          <>
            <DirecterInfo />
            <CommonButton variant="contained" onClick={onClickNextState1}>
              次へ
            </CommonButton>
            <CommonButton variant="contained" onClick={onClickBackState1}>
              戻る
            </CommonButton>
          </>
        )}
        {stage === 2 && (
          <>
            {tournamentClass === 0 && <TeamApplication />}
            {tournamentClass === 1 && <SinglesApplication />}
            <CommonButton variant="contained" onClick={onClickNextState2}>
              次へ
            </CommonButton>
            <CommonButton variant="contained" onClick={onClickBackState2}>
              戻る
            </CommonButton>
          </>
        )}
        {stage === 3 && (
          <>
            <TeamInfo />
            <DirecterInfo />
            {tournamentClass === 0 && <TeamApplication />}
            {tournamentClass === 1 && <SinglesApplication />}
            <CommonButton variant="contained" onClick={onClickApply}>
              確定
            </CommonButton>
          </>
        )}
      </CommonContainer>
    </Layout>
  );
};

export default TournamentApplication;
