import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import { useSelector, useDispatch } from 'react-redux';


import {
  area,
  setArea,
} from '../../features/catalog/catalogSlice';


const Input = styled(MuiInput)`
  width: 100px;
`;

export default function SelectPrice() {
  const areaValue = useSelector(area);
  const dispatch = useDispatch();

  const minArea = 0;
  const maxArea = 5000;
  const step = 100;
  const minDistance = 500;

  const valuetext = (value) => {
    return `${value} sq.ft`;
  }

  const [value, setValue] = React.useState(areaValue);

  React.useEffect(() => {
    setValue(areaValue)
  }, [areaValue]);

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      dispatch(setArea([Math.min(newValue[0], value[1] - minDistance), value[1]]));
    } else {
      dispatch(setArea([value[0], Math.max(newValue[1], value[0] + minDistance)]));
    }
  };

  return (
    <Box>
      <Typography id="area-slider" gutterBottom>
        Area sq.ft
      </Typography>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item>
          <SquareFootIcon />
        </Grid>
        <Grid item>
          <Input
            value={`${value[0]} ~ ${value[1]}`}
            size="small"
            inputProps={{
              readOnly: true,
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
        <Grid item xs>
          <Slider
            getAriaLabel={() => 'Minimum distance'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
            min={minArea}
            max={maxArea}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
