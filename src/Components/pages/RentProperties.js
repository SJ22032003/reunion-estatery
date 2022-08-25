import React from "react";
import { Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import PropertiesCard from "./PropertiesCard";
import { getBed } from "../../redux/Action";

function RentProperties() {
  const myProperties = useSelector((state) => state.PropertyReducer.properties);
  const dispatch = useDispatch();

  return (
    <>
      {myProperties.map((property) => {
        return <Grid item sx={12} md={6} lg={4} my={2}>
          <PropertiesCard property={property} />
        </Grid>;
      })}
    </>
  );
}

export default RentProperties;
