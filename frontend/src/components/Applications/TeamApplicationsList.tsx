import React, { FC } from "react";
import { useSelector } from "react-redux";

import { selectApplicantGroupsInfo } from "ducks/applications/slice";
import { ApplicantGroupInfo } from "ducks/applications/type";

import { schoolYears, sexies } from "common/constants";

const TeamApplicationsList: FC = () => {
  /** 変数 */
  const applicantGroupsInfo: ApplicantGroupInfo[] = useSelector(
    selectApplicantGroupsInfo
  );
  return (
    <>
      {applicantGroupsInfo.map(
        (applicantGroupInfo: ApplicantGroupInfo, index: number) => {
          return applicantGroupInfo.teamApplicationsInfo.map(
            (teamApplicationInfo) => {
              return (
                <p>{`${teamApplicationInfo.captain ? "★" : "●"}${
                  teamApplicationInfo.order
                }
                ${teamApplicationInfo.lastName}${
                  teamApplicationInfo.firstName
                }/${schoolYears[teamApplicationInfo.schoolYear].label}年生/${
                  sexies[applicantGroupInfo.teamDetailInfo.teamSex].label
                }（birth：${teamApplicationInfo.birthDay}）（チームTEL：${
                  applicantGroupInfo.teamDetailInfo.teamPhone
                }）（監督TEL：${
                  applicantGroupInfo.directerInfo.directerPhone
                }）`}</p>
              );
            }
          );
        }
      )}
    </>
  );
};

export default TeamApplicationsList;
