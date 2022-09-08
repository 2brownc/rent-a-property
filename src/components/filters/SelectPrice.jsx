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
  const maxPrice = 10000000;
  const step = 50000;
  const [value, setValue] = React.useState(priceValue);

  React.useEffect(() => {
    setValue(priceValue);
  }, [priceValue]);

  const handleSliderChange = (event, newValue) => {
    dispatch(setPrice(newValue));
  };

  const handleInputChange = (event) => {
    dispatch(setPrice(event.target.value === '' ? '' : Number(event.target.value)));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > maxPrice) {
      setValue(maxPrice);
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
            value={value}
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
            value={typeof value === 'number' ? value : 0}
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
