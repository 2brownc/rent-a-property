import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';

const cityList = [
  { label: "Bangalore" },
  { label: "Pune" },
  { label: "Hyderabad" },
  { label: "Mumbai" },
  { label: "Chennai" },
];

export default function SelectCity(/*cityList, city, setCity*/) {
  const [value, setValue] = useState(cityList[0]);
  const [inputValue, setInputValue] = useState('');

  return (
    <Box>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={cityList}
        sx={{ width: "100%" }}
        renderInput={(params) => <TextField {...params} label="Select City" />}
      />
    </Box>
  );
}