import { FC } from "react";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Layout from "components/Layout";

import { CommonContainer, CommonButton } from "common/commonMaterial";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { tournamentClasses } from "common/constants";

import { useTournamentRegistHook } from "hooks/tournamentRegistHook";

const TournamentRegist: FC = () => {
  // ReactHook
  const {
    tournamentRegistInfo,
    changeEventDate,
    changeApplicationStartDate,
    changeApplicationEndDate,
    changeTitleVal,
    changeClassVal,
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
              sx={{ m: 1, width: { xs: 200, md: 300 } }}
            />

            <FormControl
              variant="standard"
              sx={{ m: 1, width: { xs: 200, md: 300 } }}
            >
              <InputLabel id="select">大会区分</InputLabel>
              <Select
                labelId="select"
                id="select"
                label="大会区分"
                value={tournamentRegistInfo.class}
                onChange={changeClassVal}
              >
                {tournamentClasses.map((tournamentClass, key) => (
                  <MenuItem key={key} value={tournamentClass.index}>
                    {tournamentClass.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <DesktopDatePicker
              label="開催日"
              inputFormat="YYYY/MM/DD"
              value={dayjs(tournamentRegistInfo.eventDate)}
              onChange={changeEventDate}
              renderInput={(params) => <TextField {...params} />}
              leftArrowButtonText="前月"
              rightArrowButtonText="次月"
            />

            <TextField
              id="tournament-place"
              label="開催場所"
              variant="standard"
              value={tournamentRegistInfo.place}
              onChange={changePlaceVal}
              sx={{ m: 1, width: { xs: 200, md: 300 } }}
            />

            <DesktopDatePicker
              label="申込開始日"
              inputFormat="YYYY/MM/DD"
              value={dayjs(tournamentRegistInfo.applicationStartDate)}
              onChange={changeApplicationStartDate}
              renderInput={(params) => <TextField {...params} />}
              leftArrowButtonText="前月"
              rightArrowButtonText="次月"
            />

            <DesktopDatePicker
              label="申込終了日"
              inputFormat="YYYY/MM/DD"
              value={dayjs(tournamentRegistInfo.applicationEndDate)}
              onChange={changeApplicationEndDate}
              renderInput={(params) => <TextField {...params} />}
              leftArrowButtonText="前月"
              rightArrowButtonText="次月"
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
