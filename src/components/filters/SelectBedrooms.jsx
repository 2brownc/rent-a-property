import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useSelector, useDispatch } from 'react-redux';

import {
  bedrooms,
  setBedrooms,
} from '../../features/catalog/catalogSlice';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const numBedrooms = [
  '1 bed',
  '2 beds',
  '3 beds',
  '4 beds'
];

export default function SelectBedrooms() {
  const bedroomsValue = useSelector(bedrooms);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    dispatch(setBedrooms(target.value));
  };

  return (
    <Box>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel id="bedrooms-select-label">Bedrooms</InputLabel>
        <Select
          labelId="bedrooms-select-label"
          id="bedrooms-checkbox"
          multiple
          value={bedroomsValue}
          onChange={handleChange}
          input={<OutlinedInput label="Bedrooms" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {numBedrooms.map((bedroom) => (
            <MenuItem key={bedroom} value={bedroom}>
              <Checkbox checked={bedroomsValue.indexOf(bedroom) > -1} />
              <ListItemText primary={bedroom} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

