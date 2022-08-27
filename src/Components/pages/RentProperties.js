import React from "react";
import { Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setLoader } from "../../redux/Action";
import PropertiesCard from "../Common/PropertiesCard";
import NoResult from "../Common/NoResult";
import Loader from "../Common/Loader";

function RentProperties() {
  const dispatch = useDispatch();
  const myProperties = useSelector((state) => state.PropertyReducer.properties);
  const myFavorite = useSelector(
    (state) => state.FavoriteReducer.myFavProperties
  );
  const loader = useSelector((state) => state.PropertyReducer.loader);

  // We dont have a backend so we are saving favorites in different array and comparing with myProperties  array
  let properties = [];
  for (let property of myProperties) {
    for (let favorite of myFavorite) {
      if (property.id === favorite.id) {
        property.favorite = favorite.favorite;
        break;
      }
    }
    properties.push(property);
  }
 
  // Static Data usually don't take time to load
  setTimeout(() => {
    dispatch(setLoader(false));
  }, 800);

  if (loader) {
    return <Loader />;
  } else {
    return (
      <>
        {properties.length > 0 ? (
          properties.map((property) => {
            return (
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                my={2}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <PropertiesCard property={property} />
              </Grid>
            );
          })
        ) : (
          <NoResult />
        )}
      </>
    );
  }
}

export default RentProperties;
