import { createSlice, current } from '@reduxjs/toolkit';
import { data } from '../../data/data';

function getAllCities() {
  const list = [];
  for (const item of data) {
    if (!list.includes(item.city)) {
      list.push(item.city)
    }
  }

  return list;
}

const initialState = {
  catalog: data,
  city: getAllCities()[0],
  cityList: getAllCities(),
  price: 300000,
  area: [500, 5000],
  bedrooms: []
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setCity: (state, action) => {
      const city = action.payload;

      return {
        ...state,
        city,
      };
    },
    setPrice: (state, action) => {
      const price = action.payload;

      return {
        ...state,
        price,
      };
    },
    setArea: (state, action) => {
      const area = action.payload;

      return {
        ...state,
        area,
      };
    },
    setBedrooms: (state, action) => {
      const bedrooms = action.payload;

      return {
        ...state,
        bedrooms,
      };
    },
    filterCatalog: (state, action) => {
      const city = action.payload.cityValue;
      const price = action.payload.priceValue;
      const area = action.payload.areaValue;
      const bedrooms = action.payload.bedroomsValue;

      console.log("filter catalog", city, price, area, bedrooms)

      let catalog = data;

      //filter by city
      if (city != null) {
        catalog = catalog.filter((item) => {
          return item.city === city;
        });
      }

      //filter by max price
      catalog = catalog.filter((item) => {
        return item.price <= price;
      });

      //filter by area
      catalog = catalog.filter((item) => {
        return item.area >= area[0] && item.area <= area[1];
      });

      //filter by bedrooms
      if (bedrooms.length > 0) {
        catalog = catalog.filter((item) => {
          for (const numRooms of bedrooms) {
            if (Number(numRooms[0]) === item.bedrooms) {
              return true;
            }
          }

          return false;
        });
      }

      // save the filtered catalog to the state      
      return {
        ...state,
        catalog,
      };

    },
  },
});

export const {
  filterCatalog,
  setPrice,
  setArea,
  setBedrooms,
  setCity,
} = catalogSlice.actions;

export default catalogSlice.reducer;

export const price = (state) => state.catalog.price;
export const area = (state) => state.catalog.area;
export const bedrooms = (state) => state.catalog.bedrooms;
export const city = (state) => state.catalog.city;
export const cityList = (state) => state.catalog.cityList;
export const catalog = (state) => state.catalog.catalog;