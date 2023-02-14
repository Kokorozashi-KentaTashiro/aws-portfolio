import { FC } from "react";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Layout from "components/Layout";

import { CommonContainer, CommonButton } from "common/commonMaterial";
import { useTournamentRegistHook } from "hooks/tournamentRegistHook";

const TournamentRegist: FC = () => {
  // ReactHook
  const {
    tournamentRegistInfo,
    changeEventDate,
    changeApplicationStartDate,
    changeApplicationEndDate,
    changeTitleVal,
    changePlaceVal,
    onClickConfirm,
  } = useTournamentRegistHook();

  return (
    <>
      <Layout>
        <CommonContainer>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TextField
              id="tournament-title"
              label="大会名"
              variant="standard"
              value={tournamentRegistInfo.title}
              onChange={changeTitleVal}
            />
            <DesktopDatePicker
              label="開催日"
              inputFormat="YYYY/MM/DD"
              value={dayjs(tournamentRegistInfo.eventDate)}
              onChange={changeEventDate}
              renderInput={(params) => <TextField {...params} />}
            />
            <TextField
              id="tournament-place"
              label="開催場所"
              variant="standard"
              value={tournamentRegistInfo.place}
              onChange={changePlaceVal}
            />
            <DesktopDatePicker
              label="申込開始日"
              inputFormat="YYYY/MM/DD"
              value={dayjs(tournamentRegistInfo.applicationStartDate)}
              onChange={changeApplicationStartDate}
              renderInput={(params) => <TextField {...params} />}
            />
            <DesktopDatePicker
              label="申込終了日"
              inputFormat="YYYY/MM/DD"
              value={dayjs(tournamentRegistInfo.applicationEndDate)}
              onChange={changeApplicationEndDate}
              renderInput={(params) => <TextField {...params} />}
            />
            <CommonButton variant="contained" onClick={onClickConfirm}>
              確定
            </CommonButton>
          </LocalizationProvider>
        </CommonContainer>
      </Layout>
    </>
  );
};

export default TournamentRegist;

// 日付選択のform
// https://mui.com/x/react-date-pickers/getting-started/
