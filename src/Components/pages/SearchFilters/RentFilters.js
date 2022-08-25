import React from "react";
import { Grid, Button, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Select from "react-select";
import LocationLogo from "../../assets/location.png";
import PriceLogo from "../../assets/pricetag.png";
import BedLogo from "../../assets/beds.png";
import propertyType from "../../assets/propertyType.png";
import { useDispatch } from "react-redux";
import { getFilters } from "../../../redux/Action";
import { removeFilters } from "../../../redux/Action";
import { getFilteredProperties } from "../../utils/util";
import { useSelector } from "react-redux";
import {
  locations,
  prices,
  bedrooms,
  propertyTypes,
} from "../../data/SelectOptions";

const useStyles = makeStyles((theme) => ({
  inputField: {
    width: "100%",
    textAlign: "left",
    margin: "6px 0 0 10px",
    fontSize: "clamp(15px,2vw,20px)",
  },
  filterIcon: {
    width: "30px",
  },
}));

function RentFilters() {
  const classes = useStyles();
  const myPropertyData = useSelector(
    (state) => state.PropertyReducer.properties
  );
  const dispatch = useDispatch();

  const [selectedFilters, setSelectedFilters] = React.useState({
    location: null,
    price: null,
    beds: null,
    propertyType: null,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const myData = getFilteredProperties(myPropertyData, selectedFilters);
    dispatch(getFilters(myData));
  };

  const handleClear = (e) => {
    dispatch(removeFilters());
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      border: 0,
      boxShadow: "none",
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      backgroundColor: "#e7e6f9",
      color: "#7367f8",
      borderRadius: "50%",
      padding: "3px",
      marginRight: "10px",
    }),
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Grid
          container
          sx={{
            height: "100%",
            margin: "40px auto",
            maxWidth: "1200px",
            borderRadius: "8px",
            backgroundColor: "#fff",
            padding: "18px 8px",
          }}
        >
          <Grid
            item
            container
            xs={12}
            sx={{
              borderRadius: { xs: "10px", md: "0" },
            }}
          >
            <Grid
              item
              xs={12}
              md={4}
              lg={2.5}
              sx={{ borderRight: { xs: "none", md: "2px solid #E3E3E3" } }}
            >
              <Box
                sx={{
                  maxWidth: "100%",
                  display: "flex",
                  height: "100%",
                  alignItems: "center",
                  padding: "5px 10px",
                }}
              >
                <img
                  src={LocationLogo}
                  alt="location"
                  className={classes.filterIcon}
                />
                <Select
                  className={classes.inputField}
                  value={locations.find(
                    (location) => location.value === locations.value
                  )}
                  options={locations}
                  placeholder="Location"
                  onChange={(e) => {
                    setSelectedFilters({
                      ...selectedFilters,
                      location: e.value,
                    });
                  }}
                  styles={customStyles}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              lg={2.5}
              sx={{ borderRight: { xs: "none", md: "2px solid #E3E3E3" } }}
            >
              <Box
                sx={{
                  maxWidth: "100%",
                  display: "flex",
                  height: "100%",
                  alignItems: "center",
                  padding: "5px 10px",
                }}
              >
                <img src={PriceLogo} alt="$" className={classes.filterIcon} />
                <Select
                  className={classes.inputField}
                  value={prices.find((price) => price.value === prices.value)}
                  options={prices}
                  placeholder="Prices"
                  onChange={(e) => {
                    setSelectedFilters({
                      ...selectedFilters,
                      price: e.value,
                    });
                  }}
                  styles={customStyles}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              lg={2.5}
              sx={{ borderRight: { xs: "none", md: "2px solid #E3E3E3" } }}
            >
              <Box
                sx={{
                  maxWidth: "100%",
                  display: "flex",
                  height: "100%",
                  alignItems: "center",
                  padding: "5px 10px",
                }}
              >
                <img src={BedLogo} alt="bed" className={classes.filterIcon} />
                <Select
                  className={classes.inputField}
                  value={bedrooms.find((bed) => bed.value === bedrooms.value)}
                  options={bedrooms}
                  placeholder="Bedrooms"
                  onChange={(e) => {
                    setSelectedFilters({
                      ...selectedFilters,
                      beds: e.value,
                    });
                  }}
                  styles={customStyles}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4} lg={2.5}>
              <Box
                sx={{
                  display: "flex",
                  height: "100%",
                  alignItems: "center",
                  padding: "5px 10px",
                }}
              >
                <img
                  src={propertyType}
                  alt="property type"
                  className={classes.filterIcon}
                />
                <Select
                  className={classes.inputField}
                  value={propertyTypes.find(
                    (type) => type.value === propertyTypes.value
                  )}
                  options={propertyTypes}
                  placeholder="Type"
                  onChange={(e) => {
                    setSelectedFilters({
                      ...selectedFilters,
                      propertyType: e.value,
                    });
                  }}
                  styles={customStyles}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              lg={2}
              sx={{
                display: { xs: "flex", md: "flex" },
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                className={classes.btn}
                sx={{
                  backgroundColor: "#7065ed",
                  borderRadius: "10px",
                  marginRight: "5px",
                  fontSize: "clamp(13px, 1.2vw, 16px)",
                  padding: "10px 20px",
                  color: "#FFFFFF",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#7065ed",
                    filter: "brightness(110%)",
                  },
                }}
                onClick={handleSearch}
              >
                Search
              </Button>
              <Button title="clear" onClick={handleClear}>
                <HighlightOffIcon sx={{ color: "#7065ed" }} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default RentFilters;
