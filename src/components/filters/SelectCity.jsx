import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';

import { useSelector, useDispatch } from 'react-redux';
import {
  city,
  setCity,
  cityList,
} from '../../features/catalog/catalogSlice';

export default function SelectCity(/*cityList, city, setCity*/) {
  const cityValue = useSelector(city);
  const cityListValue = useSelector(cityList);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  return (
    <Box>
      <Autocomplete
        value={cityValue}
        onChange={(event, newValue) => {
          dispatch(setCity(newValue));
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={cityListValue}
        sx={{ width: "100%" }}
        renderInput={(params) => <TextField {...params} label="Select City" />}
      />
    </Box>
  );
}