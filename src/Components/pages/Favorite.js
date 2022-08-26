import React from "react";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import PropertiesCard from "../Common/PropertiesCard";

function Favorite() {
  const myFavorite = useSelector((state) =>
    state.PropertyReducer.properties.filter((property) => property.favorite)
  );

  return (
    <Grid container>
      {myFavorite.length > 0 ? (
        myFavorite.map((property) => {
          return (
            <Grid
              item
              lg={4}
              md={3}
              xs={12}
              my={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <PropertiesCard property={property} />
            </Grid>
          );
        })
      ) : (
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="body2" color="textSecondary" my={1}>
              You have no favorite properties.
            </Typography>
        </Grid>
      )}
    </Grid>
  );
}

export default Favorite;
