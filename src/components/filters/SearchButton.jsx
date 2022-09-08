import React from 'react';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';

import {
  city,
  price,
  area,
  bedrooms,
  filterCatalog
} from '../../features/catalog/catalogSlice';

export default function SearchButton() {
  const cityValue = useSelector(city);
  const priceValue = useSelector(price);
  const bedroomsValue = useSelector(bedrooms);
  const areaValue = useSelector(area);

  const dispatch = useDispatch();

  const handleSearchClick = () => {
    dispatch(filterCatalog({
      cityValue,
      priceValue,
      bedroomsValue,
      areaValue
    }));
  };
  return (
    <Button
      fullWidth
      variant="contained"
      onClick={handleSearchClick}
    >
      Search
    </Button>
  );
}