import React, { FC, ChangeEvent } from "react";

import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Card from "@mui/material/Card";

import {
  setTeam,
  setTeamZone,
  setTeamSex,
  setTeamAddress,
  setTeamPhone,
  setTeamFax,
  setTeamManager,
} from "ducks/tournamentApplication/slice";
import { useTournamentApplicationHook } from "hooks/tournamentApplicationHook";
import { teams, zones, sexies } from "common/constants";

const TeamInfo: FC = () => {
  // ReactHook
  const { teamInfo, dispatch } = useTournamentApplicationHook();
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
        <h3>チーム情報</h3>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="team">チーム・学校名</InputLabel>
          <Select
            labelId="team"
            id="チーム・学校名"
            value={teamInfo.team}
            onChange={(e) => {
              dispatch(setTeam(e.target.value));
            }}
          >
            {teams.map((team, key) => (
              <MenuItem key={key} value={team.index}>
                {team.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="teamZone">地区・支部名</InputLabel>
          <Select
            labelId="teamZone"
            id="地区・支部名"
            value={teamInfo.teamZone}
            onChange={(e) => {
              dispatch(setTeamZone(e.target.value));
            }}
          >
            {zones.map((zone, key) => (
              <MenuItem key={key} value={zone.index}>
                {zone.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="select">性別</InputLabel>
          <Select
            labelId="select"
            id="select"
            value={teamInfo.teamSex}
            onChange={(e) => {
              dispatch(setTeamSex(e.target.value));
            }}
          >
            {sexies.map((sex, key) => (
              <MenuItem key={key} value={sex.index}>
                {sex.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          id="team-address"
          variant="standard"
          label="住所"
          value={teamInfo.teamAddress}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setTeamAddress(e.target.value));
          }}
        />
        <TextField
          id="team-phone"
          variant="standard"
          label="電話"
          value={teamInfo.teamPhone}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setTeamPhone(e.target.value));
          }}
        />
        <TextField
          id="team-fax"
          variant="standard"
          label="FAX"
          value={teamInfo.teamFax}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setTeamFax(e.target.value));
          }}
        />
        <TextField
          id="team-manager"
          variant="standard"
          label="所属長名"
          value={teamInfo.teamManager}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setTeamManager(e.target.value));
          }}
        />
      </Card>
    </>
  );
};

export default TeamInfo;
