import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';

import SelectCity from './SelectCity';
import SelectBedrooms from './SelectBedrooms';
import SelectPrice from './SelectPrice';
import SelectAreaRange from './SelectAreaRange';
import SearchButton from './SearchButton';

export default function Filters() {
  return (
    <Box my={3}>
      <Grid
        container
        spacing={3}
      >
        <Grid item md={6} xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <SelectCity />
              <SelectBedrooms />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <SelectPrice />
              <SelectAreaRange />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            direction="row-reverse"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid item xs={3}>
              <SearchButton />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
