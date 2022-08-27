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
  const loader = useSelector((state) => state.PropertyReducer.loader);

  // Static Data usually don't take time to load
  setTimeout(() => {
    dispatch(setLoader(false));
  }, 1000);

  console.log(myProperties);

  if (loader) {
    return <Loader />;
  } else {
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
}

export default RentProperties;
