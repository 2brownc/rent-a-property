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
  { label: '1 bed' },
  { label: '2 beds' },
  { label: '3 beds' },
  { label: '4 beds' }
];

export default function SelectBedrooms() {
  const [bedrooms, setBedrooms] = useState([]);

  const handleChange = ({ target }) => {
    console.log("bed", target.value);
    setBedrooms(
      target.value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="bedrooms-select-label">Bedrooms</InputLabel>
        <Select
          labelId="bedrooms-select-label"
          id="bedrooms-checkbox"
          multiple
          value={bedrooms}
          onChange={handleChange}
          input={<OutlinedInput label="Bedrooms" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {numBedrooms.map((bedroom) => (
            <MenuItem key={bedroom.id} value={bedroom.label}>
              <Checkbox checked={bedrooms.indexOf(bedroom.label) > -1} />
              <ListItemText primary={bedroom.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

