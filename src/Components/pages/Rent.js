import React from "react";
import { Grid, Typography, TextField } from "@mui/material";

function Rent() {
  return (
    <main>
      <section>
        <Grid container my={7}>
          <Grid item md={9} sm={12}>
            <Typography
              variant="h1"
              sx={{
                fontSize: "clamp(35px,3.3vw,45px)",
                fontWeight: "bold",
                margin: "8px 0 0 0",
                textAlign: { xs: "center" , md: "left"},
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
        <Grid container my={4}>
          <Grid item md={3} xs={12}>
            
          </Grid>
        </Grid>
      </section>
      {/* List */}
      <section></section>
    </main>
  );
}

export default Rent;
