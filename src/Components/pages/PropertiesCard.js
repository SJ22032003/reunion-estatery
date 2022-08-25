import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Divider,
  Grid,
  Stack,
  Chip,
} from "@mui/material";
import { setPrice } from "../utils/util";
import { makeStyles } from "@mui/styles";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import BedLogo from "../assets/beds.png";
import bathroom from "../assets/bathroom.png";
import areaLogo from "../assets/areaSubLogo.png";

const useStyles = makeStyles((theme) => ({
  price: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#383843",
  },
  CardSubIcon: {
    width: "20px",
  },
}));

function PropertiesCard({ property }) {
  const classes = useStyles();
  const {
    name,
    price,
    beds,
    address,
    bathrooms,
    type,
    area,
    image,
    city,
    popular,
  } = property;
  return (
    <Box sx={{ width: { xs: "350px", sm: "400px", md: "350px" } }}>
      <Card sx={{ height: "fit-content" }} elevation={0}>
        <CardMedia component="img" height="180px" image={image} alt={name} />
        {popular && (
          <Stack direction="row" spacing={1} sx={{ position: "relative" }}>
            <Chip
              label="Popular"
              color="primary"
              sx={{
                position: "absolute",
                top: "-20px",
                backgroundColor: "#7065ed",
              }}
              icon={<AutoAwesomeIcon />}
            />
          </Stack>
        )}
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            style={{
              fontSize: "clamp(25px,1.7vw,29px)",
              fontWeight: "bold",
              color: "#7065ed",
            }}
          >
            ${setPrice(price)}
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ display: "inline" }}
            >
              /month
            </Typography>
          </Typography>
          <Typography
            variant="body2"
            className={classes.name}
            sx={{ fontSize: "clamp(25px,1.6vw,30px)", fontWeight: "bold" }}
          >
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" my={1}>
            {address} {city}
          </Typography>
          <Divider />
          <Grid container sx={{ marginTop: "15px" }}>
            <Grid item xs={4}>
              <img src={BedLogo} alt="beds" className={classes.CardSubIcon} />
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ display: "inline" }}
              >
                {" "}
                {beds} Beds
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img src={bathroom} alt="beds" className={classes.CardSubIcon} />
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ display: "inline" }}
              >
                {" "}
                {bathrooms} Baths
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img src={areaLogo} alt="beds" className={classes.CardSubIcon} />
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ display: "inline" }}
              >
                {" "}
                {area}
                <sup>2</sup>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

export default PropertiesCard;
