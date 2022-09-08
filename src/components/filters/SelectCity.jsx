import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';

const cityList = [
  { label: "Bangalore", cityID: 1 },
  { label: "Pune", cityID: 2 },
  { label: "Hyderabad", cityID: 3 },
  { label: "Mumbai", cityID: 4 },
  { label: "Chennai", cityID: 5 },
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
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Select City" />}
      />
    </Box>
  );
}