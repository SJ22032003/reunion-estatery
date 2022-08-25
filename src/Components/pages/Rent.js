import React from "react";
import { Grid } from "@mui/material";
import RentFilters from "./SearchFilters/RentFilters";
import RentProperties from "./RentProperties";
import RentSearch from "./RentSearch";

function Rent() {
  return (
    <main>
      <section>
        {/* Search Bar */}
        <RentSearch />
      </section>
      {/* Filter */}
      <section>
        <Grid container>
          <Grid item md={3} xs={12} sx={{ minWidth: "100%" }}>
            <center>
              <RentFilters />
            </center>
          </Grid>
        </Grid>
      </section>
      {/* List */}
      <section>
        <Grid
          container
          my={4}
          sx={{ display: { xs: "flex", md: "" }, justifyContent: "center" }}
        >
          <RentProperties />
        </Grid>
      </section>
    </main>
  );
}

export default Rent;
