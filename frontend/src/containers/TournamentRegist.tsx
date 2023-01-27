import { FC, ChangeEvent } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Layout from "components/Layout";

import { CommonContainer, CommonButton } from "common/commonMaterial";
import { TornamentRegistInfo } from "ducks/tournamentRegist/type";
import { selectTournamentRegistInfo, setTitle, setEventDate, setPlace, setLimitDate } from "ducks/tournamentRegist/slice";

const TournamentRegist: FC = () => {
  // 変数
  const dispatch = useDispatch();
  const tournamentRegistInfo: TornamentRegistInfo = useSelector(selectTournamentRegistInfo);

  // 関数
  const changeEventDate = (newValue: Dayjs | null) => {
    if (newValue) {
      const newValueStr = newValue.format('YYYY-MM-DD');
      dispatch(setEventDate(newValueStr));
    } else {
      dispatch(setEventDate(""));
    }
  };

  const changeLimitDate = (newValue: Dayjs | null) => {
    if (newValue) {
      const newValueStr = newValue.format('YYYY-MM-DD');
      dispatch(setLimitDate(newValueStr));
    } else {
      dispatch(setLimitDate(""));
    }
  };

  const changeTitleVal = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle(e.target.value));
  };

  const changePlaceVal = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPlace(e.target.value));
  };

  const onClickConfirm = () => {
    alert("ここでAPIGatewayを呼び出してDynamoDBにデータ登録");
  };
    
  return (
    <>
      <Layout>
        <CommonContainer>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TextField id="tournament-title" label="大会名" variant="standard" value={tournamentRegistInfo.title} onChange={changeTitleVal}/>
            <DesktopDatePicker
              label="開催日時"
              inputFormat="YYYY/MM/DD"
              value={dayjs(tournamentRegistInfo.eventDate)}
              onChange={changeEventDate}
              renderInput={(params) => <TextField {...params} />}
            />
            <TextField id="tournament-place" label="開催場所" variant="standard" value={tournamentRegistInfo.place} onChange={changePlaceVal}/>
            <DesktopDatePicker
              label="申込期限"
              inputFormat="YYYY/MM/DD"
              value={dayjs(tournamentRegistInfo.limitDate)}
              onChange={changeLimitDate}
              renderInput={(params) => <TextField {...params} />}
            />
            <CommonButton variant="contained" onClick={onClickConfirm}>
              確定
            </CommonButton>
          </LocalizationProvider>
        </CommonContainer>
      </Layout>
    </>
  )
}

export default TournamentRegist

// 日付選択のform
// https://mui.com/x/react-date-pickers/getting-started/