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
import Grid from "@mui/material/Grid";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import { schoolYears } from "common/constants";

import { CommonTableRow, CommonTableCell } from "common/commonMaterial";

import {
  setSinglesLastName,
  setSinglesFirstName,
  setSinglesSchoolYear,
  deleteSinglesApplicationInfo,
} from "ducks/tournamentApplication/slice";

import { useTournamentApplicationHook } from "hooks/tournamentApplicationHook";

const SinglesApplication: FC = () => {
  // ReactHook
  const {
    singlesApplicationsInfo,
    dispatch,
    onClickSinglesIncrement,
    changeSinglesBirthDay,
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
              <CommonTableCell align="left">delete</CommonTableCell>
            </CommonTableRow>
          </TableHead>
          <TableBody>
            {singlesApplicationsInfo.map((singlesApplicationInfo, index) => (
              <CommonTableRow key={index}>
                <CommonTableCell align="left">
                  <TextField
                    id="application-lastName"
                    variant="standard"
                    value={singlesApplicationInfo.lastName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      dispatch(
                        setSinglesLastName({
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
                    value={singlesApplicationInfo.firstName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      dispatch(
                        setSinglesFirstName({
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
                      value={dayjs(singlesApplicationInfo.birthDay)}
                      onChange={(newDay) => {
                        changeSinglesBirthDay(index, newDay);
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
                      value={singlesApplicationInfo.schoolYear}
                      onChange={(e) => {
                        dispatch(
                          setSinglesSchoolYear({
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
                  {index >= 1 && (
                    <Grid
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        dispatch(deleteSinglesApplicationInfo(index));
                      }}
                    >
                      －
                    </Grid>
                  )}
                </CommonTableCell>
              </CommonTableRow>
            ))}
            <CommonTableRow
              key="increment"
              onClick={onClickSinglesIncrement}
              sx={{ cursor: "pointer" }}
            >
              ＋
            </CommonTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default SinglesApplication;
