import { FC, ChangeEvent } from "react";
import dayjs from "dayjs";

import {
  TextField,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import {
  singlesApplicantTableSx,
  singlesApplicantTableHeadeSx,
  singlesApplicantTableHeadRowSx,
  singlesApplicantTableBodyRowSx,
  singlesApplicantTableBodyCellSx,
  singlesApplicantTableIncrementRowSx,
  AddIcon,
  DeleteIcon,
} from "themes/TournamentApplication/singlesApplicationTheme";

import { schoolYears } from "common/constants";

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
      <TableContainer component={Paper} sx={singlesApplicantTableSx}>
        <Table aria-label="customized table">
          <TableHead sx={singlesApplicantTableHeadeSx}>
            <TableRow sx={singlesApplicantTableHeadRowSx}>
              <TableCell align="center">参加者氏名（姓）</TableCell>
              <TableCell align="center">参加者氏名（名）</TableCell>
              <TableCell align="center">生年月日</TableCell>
              <TableCell align="center">学年</TableCell>
              <TableCell align="center">delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {singlesApplicationsInfo.map((singlesApplicationInfo, index) => (
              <TableRow key={index} sx={singlesApplicantTableBodyRowSx}>
                <TableCell align="center" sx={singlesApplicantTableBodyCellSx}>
                  <TextField
                    id="application-lastName"
                    variant="outlined"
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
                </TableCell>
                <TableCell align="center" sx={singlesApplicantTableBodyCellSx}>
                  <TextField
                    id="application-firstName"
                    variant="outlined"
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
                </TableCell>
                <TableCell align="center" sx={singlesApplicantTableBodyCellSx}>
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
                </TableCell>
                <TableCell align="center" sx={singlesApplicantTableBodyCellSx}>
                  <FormControl variant="outlined">
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
                </TableCell>
                <TableCell align="center" sx={singlesApplicantTableBodyCellSx}>
                  {index >= 1 && (
                    <DeleteIcon
                      icon="mingcute:minus-circle-fill"
                      onClick={() => {
                        dispatch(deleteSinglesApplicationInfo(index));
                      }}
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
            <TableRow key="increment" sx={singlesApplicantTableIncrementRowSx}>
              <AddIcon
                icon="material-symbols:add-circle-rounded"
                onClick={onClickSinglesIncrement}
              />
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default SinglesApplication;
