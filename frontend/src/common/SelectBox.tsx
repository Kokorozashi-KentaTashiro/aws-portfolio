import React from 'react'
import { FC } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// type

type Props = {
    minWidth: number;
    value: number;
    choices: {index: number, label: string}[];
};

const SelectBox: FC<Props> = ({
    minWidth, value, choices
}) => {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: {minWidth} }}>
      <InputLabel id="select"></InputLabel>
      <Select labelId="select" id="select" value={value}>
        {choices.map((choice) => (
          <MenuItem value={choice.index}>{choice.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectBox