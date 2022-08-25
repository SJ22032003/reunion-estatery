import React from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import PropertiesCard from "../Common/PropertiesCard";
import NoResult from "../Common/NoResult";

function RentProperties() {
  const myProperties = useSelector((state) => state.PropertyReducer.properties);

  return (
    <>
      {myProperties.length > 0 ? (
        myProperties.map((property) => {
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

export default RentProperties;
