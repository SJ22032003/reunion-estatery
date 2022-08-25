import React from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import PropertiesCard from "../Common/PropertiesCard";

function RentProperties() {
  const myProperties = useSelector((state) => state.PropertyReducer.properties);

  return (
    <>
      {myProperties.map((property) => {
        return (
          <Grid
            item
            sx={12}
            md={6}
            lg={4}
            my={2}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <PropertiesCard property={property} />
          </Grid>
        );
      })}
    </>
  );
}

export default RentProperties;
