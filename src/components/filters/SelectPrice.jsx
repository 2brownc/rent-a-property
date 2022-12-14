import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

import { useSelector, useDispatch } from 'react-redux';
import {
  price,
  setPrice,
} from '../../features/catalog/catalogSlice';

const Input = styled(MuiInput)`
  width: 100px;
`;

export default function SelectPrice() {
  const priceValue = useSelector(price);
  const dispatch = useDispatch();

  const minPrice = 0;
  const maxPrice = 500000;
  const step = 50000;


  const handleSliderChange = (event, newValue) => {
    dispatch(setPrice(newValue));
  };

  const handleInputChange = (event) => {
    dispatch(setPrice(event.target.value === '' ? '' : Number(event.target.value)));
  };

  const handleBlur = () => {
    if (priceValue < 0) {
      dispatch(setPrice(0));
    } else if (priceValue > maxPrice) {
      dispatch(setPrice(maxPrice));
    }
  };

  return (
    <Box>
      <Typography id="input-slider" gutterBottom>
        Max Price
      </Typography>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item>
          <CurrencyRupeeIcon />
        </Grid>
        <Grid item>
          <Input
            value={priceValue}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: step,
              min: minPrice,
              max: maxPrice,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof priceValue === 'number' ? priceValue : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min={minPrice}
            max={maxPrice}
            step={step}
          />
        </Grid>

      </Grid>
    </Box>
  );
}
