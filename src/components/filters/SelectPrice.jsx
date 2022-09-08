import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Input = styled(MuiInput)`
  width: 100px;
`;

export default function SelectPrice() {
  const minPrice = 0;
  const maxPrice = 10000000;
  const step = 50000;
  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
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
        Price
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <CurrencyRupeeIcon />
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
      </Grid>
    </Box>
  );
}
