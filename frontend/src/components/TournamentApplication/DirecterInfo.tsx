import React, { FC, ChangeEvent } from "react";

import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";

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
      <Card
        sx={{
          display: "flex",
          flexFlow: "column",
          alignItems: "center",
          justifyContent: "center",
          width: { xs: 300, md: 400 },
          minHeight: { xs: 100, md: 200 },
          marginTop: { xs: 10, md: 15 },
          padding: { xs: 1, md: 2 },
        }}
      >
        <h3>監督情報</h3>
        <TextField
          id="directer-name"
          variant="standard"
          label="監督名"
          value={directerInfo.directerName}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setDirecterName(e.target.value));
          }}
        />
        <TextField
          id="directer-phone"
          variant="standard"
          label="電話"
          value={directerInfo.directerPhone}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setDirecterPhone(e.target.value));
          }}
        />
        <TextField
          id="directer-phone"
          variant="standard"
          label="メールアドレス"
          value={directerInfo.directerEmail}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setDirecterEmail(e.target.value));
          }}
        />
        <TextField
          id="advisor-name"
          variant="standard"
          label="アドバイザー名"
          value={directerInfo.advisorName}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setAdvisorName(e.target.value));
          }}
        />
      </Card>
    </>
  );
};

export default DirecterInfo;
