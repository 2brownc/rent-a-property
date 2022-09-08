import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import SelectCity from './SelectCity';
import SelectBedrooms from './SelectBedrooms';
import SelectPrice from './SelectPrice';
import SelectAreaRange from './SelectAreaRange';

export default function Filters() {
  return (
    <Box my={3}>
      <Grid
        container
        spacing={3}
      >
        <Grid item xs={6}>
          <SelectCity />
        </Grid>
        <Grid item xs={6}>
          <SelectPrice />
        </Grid>
        <Grid item xs={6}>
          <SelectBedrooms />
        </Grid>
        <Grid item xs={6}>
          <SelectAreaRange />
        </Grid>
      </Grid>
    </Box>
  );
}