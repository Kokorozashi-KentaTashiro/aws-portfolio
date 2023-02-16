import { FC, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Layout from "components/Layout";
import { TextField } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { schools, schoolYears, sexies } from "common/constants";

import {
  CommonContainer,
  CommonTableRow,
  CommonTableCell,
  CommonButton,
} from "common/commonMaterial";
import { AppDispatch } from "app/store";

import {
  selectTournamentApplicationInfo,
  initTornamentApplicationState,
  addApplicationInfo,
  setLastName,
  setFirstName,
  setSchool,
  setSchoolYear,
  setSex,
  fetchAsyncPutApplications,
} from "ducks/tournamentApplication/slice";
import { TornamentApplicationInfo } from "ducks/tournamentApplication/type";
import { selectTournamentDetailInfo } from "ducks/tournamentDetail/slice";
import { TornamentDetailInfo } from "ducks/tournamentDetail/type";
import { TOURNAMNTS_INFO } from "common/PAGES";
import { setPage } from "ducks/effect/slice";

const TournamentApplication: FC = () => {
  // 変数
  const tornamentDetailInfo: TornamentDetailInfo = useSelector(
    selectTournamentDetailInfo
  );
  const tornamentApplicationsInfo: TornamentApplicationInfo[] = useSelector(
    selectTournamentApplicationInfo
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  // 関数
  const onClickApply = () => {
    let args = {
      tournamentName: tornamentDetailInfo.title,
      tornamentApplicationsInfo: tornamentApplicationsInfo,
    };
    dispatch(fetchAsyncPutApplications(args));
    dispatch(initTornamentApplicationState());
    navigate(TOURNAMNTS_INFO.URL);
    dispatch(setPage(TOURNAMNTS_INFO.URL));
  };

  const onClickIncrement = () => {
    dispatch(addApplicationInfo());
  };

  return (
    <Layout>
      <CommonContainer>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <CommonTableRow>
                <CommonTableCell align="left">参加者氏名（姓）</CommonTableCell>
                <CommonTableCell align="left">参加者氏名（名）</CommonTableCell>
                <CommonTableCell align="left">学校名</CommonTableCell>
                <CommonTableCell align="left">学年</CommonTableCell>
                <CommonTableCell align="left">性別</CommonTableCell>
              </CommonTableRow>
            </TableHead>
            <TableBody>
              {tornamentApplicationsInfo.map(
                (tornamentApplicationInfo, index) => (
                  <CommonTableRow key={index}>
                    <CommonTableCell align="left">
                      <TextField
                        id="application-lastName"
                        variant="standard"
                        value={tornamentApplicationInfo.lastName}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          dispatch(
                            setLastName({
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
                        value={tornamentApplicationInfo.firstName}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          dispatch(
                            setFirstName({
                              index: index,
                              value: e.target.value,
                            })
                          );
                        }}
                      />
                    </CommonTableCell>
                    <CommonTableCell align="left">
                      <FormControl
                        variant="standard"
                        sx={{ m: 1, minWidth: 120 }}
                      >
                        <InputLabel id="select"></InputLabel>
                        <Select
                          labelId="select"
                          id="select"
                          value={tornamentApplicationInfo.school}
                          onChange={(e) => {
                            dispatch(
                              setSchool({ index: index, value: e.target.value })
                            );
                          }}
                        >
                          {schools.map((school, key) => (
                            <MenuItem key={key} value={school.index}>
                              {school.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </CommonTableCell>
                    <CommonTableCell align="left">
                      <FormControl
                        variant="standard"
                        sx={{ m: 1, minWidth: 120 }}
                      >
                        <InputLabel id="select"></InputLabel>
                        <Select
                          labelId="select"
                          id="select"
                          value={tornamentApplicationInfo.schoolYear}
                          onChange={(e) => {
                            dispatch(
                              setSchoolYear({
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
                      <FormControl
                        variant="standard"
                        sx={{ m: 1, minWidth: 120 }}
                      >
                        <InputLabel id="select"></InputLabel>
                        <Select
                          labelId="select"
                          id="select"
                          value={tornamentApplicationInfo.sex}
                          onChange={(e) => {
                            dispatch(
                              setSex({
                                index: index,
                                value: e.target.value,
                              })
                            );
                          }}
                        >
                          {sexies.map((sex, key) => (
                            <MenuItem key={key} value={sex.index}>
                              {sex.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </CommonTableCell>
                  </CommonTableRow>
                )
              )}
              <CommonTableRow
                key="increment"
                onClick={onClickIncrement}
                sx={{ cursor: "pointer" }}
              >
                ＋
              </CommonTableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <CommonButton variant="contained" onClick={onClickApply}>
          確定
        </CommonButton>
      </CommonContainer>
    </Layout>
  );
};

export default TournamentApplication;
