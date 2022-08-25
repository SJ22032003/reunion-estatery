import React from "react";
import { Grid, Typography, TextField } from "@mui/material";
import RentFilters from "./SearchFilters/RentFilters";
import RentProperties from "./RentProperties";

function Rent() {
  return (
    <main>
      <section>
        <Grid container sx={{ marginTop: "4rem" }}>
          <Grid item md={9} sm={12}>
            <Typography
              variant="h1"
              sx={{
                fontSize: "clamp(35px,3.3vw,45px)",
                fontWeight: "bold",
                marginTop: "8px",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Search properties to rent
            </Typography>
          </Grid>
          <Grid item md={3} sm={12}>
            <center>
              <form onSubmit={(e) => e.preventDefault()}>
                <TextField
                  label="Search with Search Bar"
                  variant="outlined"
                  size="small"
                  color="secondary"
                  sx={{ backgroundColor: "#fff", margin: "12px auto" }}
                />
              </form>
            </center>
          </Grid>
        </Grid>
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
        <Grid container my={4} sx={{display:{xs:'flex',md:''},justifyContent:'center'}}>
          <RentProperties />
        </Grid>
      </section>
    </main>
  );
}

export default Rent;
