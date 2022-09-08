import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Filters from '../components/filters/Filters';
import Catalog from '../components/catalog/Catalog';

export default function Search() {
  return (
    <>
      <Box
        py={3}
      >
        <Filters />
      </Box>
      <Box
        py={3}
      >
        <Catalog />
      </Box>
    </>
  );
}