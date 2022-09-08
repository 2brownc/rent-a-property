import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const propertyInfo = {
  propertyId: 123,
  price: 500000,
  address: "234 street, andheri west, Delhi",
  bedrooms: 3,
  bathrooms: 2,
  propertyArea: 4000,
  mainPicture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/248_Ashley_Ave_-_2017.jpg/763px-248_Ashley_Ave_-_2017.jpg',
  pictures: []
};

function PropertyCard({
  propertyId,
  price,
  address,
  bedrooms,
  bathrooms,
  propertyArea,
  mainPicture,
  pictures
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={mainPicture}
          alt="picture of the property"
        />
        <CardContent>
          <Box>
            <Typography gutterBottom variant="h5" component="div">
              {price}
            </Typography>
          </Box>
          <Box mb={1}>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={3}
              >
                <BedIcon />{bedrooms} bed
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
              >
                <BathtubIcon />{bathrooms} bath
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
              >
                <SquareFootIcon />{propertyArea} sq.ft.
              </Stack>
            </Stack>
          </Box>
          <Box>
            <Typography>
              {address}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-lable="like">
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card >
  );
}

export default function Catalog() {
  return (
    <Box sx={{ padding: 3 }}>
      <PropertyCard
        propertyId={propertyInfo.propertyId}
        price={propertyInfo.price}
        address={propertyInfo.address}
        bedrooms={propertyInfo.bedrooms}
        bathrooms={propertyInfo.bathrooms}
        propertyArea={propertyInfo.propertyArea}
        mainPicture={propertyInfo.mainPicture}
        pictures={propertyInfo.pictures}
      />
    </Box>
  );
}