import { FC, ChangeEvent } from "react";
import dayjs from "dayjs";

import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import { schoolYears, sexies } from "common/constants";

import { CommonTableRow, CommonTableCell } from "common/commonMaterial";

import {
  setTeamLastName,
  setTeamFirstName,
  setTeamSchoolYear,
  setTeamCaptain,
  deleteTeamApplicationInfo,
} from "ducks/tournamentApplication/slice";

import { useTournamentApplicationHook } from "hooks/tournamentApplicationHook";

const TeamApplication: FC = () => {
  // ReactHook
  const {
    teamApplicationsInfo,
    dispatch,
    onClickTeamIncrement,
    changeTeamBirthDay,
  } = useTournamentApplicationHook();

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <CommonTableRow>
              <CommonTableCell align="left">参加者氏名（姓）</CommonTableCell>
              <CommonTableCell align="left">参加者氏名（名）</CommonTableCell>
              <CommonTableCell align="left">生年月日</CommonTableCell>
              <CommonTableCell align="left">学年</CommonTableCell>
              <CommonTableCell align="left">主将</CommonTableCell>
              <CommonTableCell align="left">delete</CommonTableCell>
            </CommonTableRow>
          </TableHead>
          <TableBody>
            {teamApplicationsInfo.map((teamApplicationInfo, index) => (
              <CommonTableRow key={index}>
                <CommonTableCell align="left">
                  <TextField
                    id="application-lastName"
                    variant="standard"
                    value={teamApplicationInfo.lastName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      dispatch(
                        setTeamLastName({
                          index: index,
                          value: e.target.value,
                        })
                      );
                    }}
                  />
                </CommonTableCell>
                <CommonTableCell align="left">
                  <TextField
                    id="application-firstName"
                    variant="standard"
                    value={teamApplicationInfo.firstName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      dispatch(
                        setTeamFirstName({
                          index: index,
                          value: e.target.value,
                        })
                      );
                    }}
                  />
                </CommonTableCell>
                <CommonTableCell align="left">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      label="生年月日"
                      inputFormat="YYYY/MM/DD"
                      value={dayjs(teamApplicationInfo.birthDay)}
                      onChange={(newDay) => {
                        changeTeamBirthDay(index, newDay);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                      leftArrowButtonText="前月"
                      rightArrowButtonText="次月"
                    />
                  </LocalizationProvider>
                </CommonTableCell>
                <CommonTableCell align="left">
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="select"></InputLabel>
                    <Select
                      labelId="select"
                      id="select"
                      value={teamApplicationInfo.schoolYear}
                      onChange={(e) => {
                        dispatch(
                          setTeamSchoolYear({
                            index: index,
                            value: e.target.value,
                          })
                        );
                      }}
                    >
                      {schoolYears.map((schoolYear, key) => (
                        <MenuItem key={key} value={schoolYear.index}>
                          {schoolYear.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </CommonTableCell>
                <CommonTableCell align="left">
                  <Checkbox
                    checked={teamApplicationInfo.captain}
                    onChange={(e) => {
                      dispatch(
                        setTeamCaptain({
                          index: index,
                          value: e.target.checked,
                        })
                      );
                    }}
                  ></Checkbox>
                </CommonTableCell>
                <CommonTableCell align="left">
                  {index >= 6 && (
                    <Grid
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        dispatch(deleteTeamApplicationInfo(index));
                      }}
                    >
                      －
                    </Grid>
                  )}
                </CommonTableCell>
              </CommonTableRow>
            ))}
            {teamApplicationsInfo.length <= 7 && (
              <CommonTableRow
                key="increment"
                onClick={onClickTeamIncrement}
                sx={{ cursor: "pointer" }}
              >
                ＋
              </CommonTableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TeamApplication;
