import { FC } from "react";
import Layout from "components/Layout";
import { useSelector } from "react-redux";

import { selectApplicantGroupsInfo } from "ducks/applications/slice";
import { ApplicantGroupInfo } from "ducks/applications/type";
import ApplicationsList from "components/Applications/ApplicationsList";
import TeamsList from "components/Applications/TeamsList";

const Applications: FC = () => {
  /** 変数 */
  const applicantGroupsInfo: ApplicantGroupInfo[] = useSelector(
    selectApplicantGroupsInfo
  );

  return (
    <>
      <Layout>
        {applicantGroupsInfo.length === 0 ? (
          <TeamsList />
        ) : (
          <ApplicationsList />
        )}
      </Layout>
    </>
  );
};

export default Applications;
