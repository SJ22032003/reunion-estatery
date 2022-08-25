import React from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { getSearch, removeFilters } from "../../redux/Action";
import useCheckSize from "../Hooks/useCheckSize";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function RentSearch() {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState("");
  const size = useCheckSize();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
    dispatch(getSearch(search));
  };

  const handleClear = (e) => {
    e.preventDefault();
    setSearch("");
    dispatch(removeFilters());
  };

  return (
    <Grid
      container
      sx={{
        marginTop: "4rem",
        display: { sm: "flex" },
        justifyContent: "center",
      }}
    >
      <Grid item md={6} sm={12}>
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
      <Grid item md={6} sm={12}>
        <center>
          <form
            onSubmit={(e) => handleSearch(e)}
            style={{ float: size < 940 ? "unset" : "right" }}
          >
            <TextField
              value={search}
              label="Search with Property Name"
              variant="outlined"
              size="small"
              color="secondary"
              sx={{ backgroundColor: "#fff", margin: "12px auto" }}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button
              size="small"
              onClick={handleClear}
              sx={{ marginTop: "16px", color: "#7367f8", right: "0px" }}
            >
              <HighlightOffIcon />
            </Button>
          </form>
        </center>
      </Grid>
    </Grid>
  );
}

export default RentSearch;
