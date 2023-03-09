import React, { FC, ChangeEvent } from "react";

import {
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Box,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

import {
  directerInfoCardSx,
  directerCardMediaSx,
  directerCardContentSx,
  directerElementSx,
} from "themes/TournamentApplication/directerInfoTheme";

import {
  setDirecterName,
  setDirecterPhone,
  setDirecterEmail,
  setAdvisorName,
} from "ducks/tournamentApplication/slice";
import { useTournamentApplicationHook } from "hooks/tournamentApplicationHook";

const DirecterInfo: FC = () => {
  // ReactHook
  const { directerInfo, dispatch } = useTournamentApplicationHook();
  return (
    <>
      <Card sx={directerInfoCardSx}>
        <CardMedia sx={directerCardMediaSx}>監督情報</CardMedia>
        <CardContent sx={directerCardContentSx}>
          <FormControl variant="outlined" sx={directerElementSx}>
            <TextField
              id="directer-name"
              variant="outlined"
              label="監督名"
              value={directerInfo.directerName}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                dispatch(setDirecterName(e.target.value));
              }}
            />
          </FormControl>
          <FormControl variant="outlined" sx={directerElementSx}>
            <TextField
              id="directer-phone"
              variant="outlined"
              label="電話"
              value={directerInfo.directerPhone}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                dispatch(setDirecterPhone(e.target.value));
              }}
            />
          </FormControl>
          <FormControl variant="outlined" sx={directerElementSx}>
            <TextField
              id="directer-phone"
              variant="outlined"
              label="メールアドレス"
              value={directerInfo.directerEmail}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                dispatch(setDirecterEmail(e.target.value));
              }}
            />
          </FormControl>
          <FormControl variant="outlined" sx={directerElementSx}>
            <TextField
              id="advisor-name"
              variant="outlined"
              label="アドバイザー名"
              value={directerInfo.advisorName}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                dispatch(setAdvisorName(e.target.value));
              }}
            />
          </FormControl>
        </CardContent>
      </Card>
    </>
  );
};

export default DirecterInfo;
