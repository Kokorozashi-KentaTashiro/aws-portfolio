import { FC, useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from 'react-redux';

import Layout from "components/Layout";
import { TextField } from "@mui/material";
import { styled } from '@mui/material/styles';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { CommonContainer, CommonTableRow, CommonTableCell, CommonButton } from "common/commonMaterial";
import { selectTournamentApplicationInfo, addApplicationInfo, setApplicationInfo } from "ducks/tournamentApplication/slice";
import { TornamentApplicationInfo } from "ducks/tournamentApplication/type";
import SelectBox from "common/SelectBox";

const TournamentApplication: FC = () => {
    // 変数
    const tornamentApplicationsInfo: TornamentApplicationInfo[] = useSelector(selectTournamentApplicationInfo);
    const dispatch = useDispatch();

    const schools = [
        {
            index: 0,
            label: "成田市立西中学校",
        },
        {
            index: 1,
            label: "栄中学校",
        },
        {
            index: 2,
            label: "私立和洋国府台中学校",
        },
    ];

    const schoolYears = [
        {
            index: 0,
            label: "1",
        },
        {
            index: 1,
            label: "2",
        },
        {
            index: 2,
            label: "3",
        },
    ];

    const sexies = [
        {
            index: 0,
            label: "男",
        },
        {
            index: 1,
            label: "女",
        },
    ];


    // 関数
    const onClickApply = () => {
        alert("API経由でDynamoDBに登録するよ～");
    };

    const onClickIncrement = () => {
        dispatch(addApplicationInfo());
    }
      
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
              {tornamentApplicationsInfo.map((tornamentApplicationInfo, index) => (
                <CommonTableRow key={index}>
                  <CommonTableCell align="left">
                    <TextField id="application-lastName" variant="standard" value={tornamentApplicationInfo.lastName}/>
                  </CommonTableCell>
                  <CommonTableCell align="left">
                    <TextField id="application-firstName" variant="standard" value={tornamentApplicationInfo.firstName}/>
                  </CommonTableCell>
                  <CommonTableCell align="left">
                    <SelectBox minWidth={120} value={tornamentApplicationInfo.school} choices={schools}/>
                  </CommonTableCell>
                  <CommonTableCell align="left">
                    <SelectBox minWidth={120} value={tornamentApplicationInfo.schoolYear} choices={schoolYears}/>
                  </CommonTableCell>
                  <CommonTableCell align="left">
                    <SelectBox minWidth={120} value={tornamentApplicationInfo.sex} choices={sexies}/>
                  </CommonTableCell>
                 </CommonTableRow>
              ))}
             <CommonTableRow key="increment" onClick={onClickIncrement} sx={{ cursor: "pointer"}}>
                ＋
             </CommonTableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <CommonButton variant="contained" onClick={onClickApply}>確定</CommonButton>
      </CommonContainer>
    </Layout>
  )
}

export default TournamentApplication