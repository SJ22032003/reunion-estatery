import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Stack,
  Button,
} from "@mui/material";
import Logo from "../../assets/logo.png";
import { navbar, auth } from "../../data/SelectOptions";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  myLogo: {
    width: "40px",
    margin: "8px 0 0 0",
  },
}));

function NavbarDesktop() {
  const classes = useStyles();
  const handleNavTab = () => {};

  return (
    <nav>
      <AppBar position="static" sx={{ background: "#fbfaff" }} elevation={0}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit">
            <Typography variant="h5">
              <img src={Logo} alt="logo" className={classes.myLogo} />
            </Typography>
          </IconButton>
          <Typography
            sx={{
              color: "#282251",
              fontSize: "clamp(20px,1.4vw,22px)",
              fontWeight: "600",
              flexGrow: "0.06",
            }}
          >
            Estatery
          </Typography>
          <Stack direction="row" spacing="3">
            {navbar.map((nav, index) => {
              return (
                <NavLink to={`/${nav}`} style={{ margin: "0 10px 0 0" }}>
                  <Button
                    onClick={handleNavTab}
                    key={`${nav}${index}`}
                    sx={{
                      textTransform: "none",
                      color: "#383843",
                      fontSize: "clamp(12px,1.1vw,15px)",
                      fontWeight: "600",
                      "&:hover": {
                        backgroundColor: "#e7e6f9",
                        color: "#7367f8",
                      },
                    }}
                  >
                    {nav}
                  </Button>
                </NavLink>
              );
            })}
          </Stack>
          <Stack
            direction="row"
            spacing="2"
            sx={{ flexGrow: "1", justifyContent: "flex-end" }}
          >
            {auth.map((item, index) => {
              return (
                <Button
                  key={`${item}${index}`}
                  sx={{
                    textTransform: "none",
                    fontSize: "clamp(10px,1vw,13px)",
                    border: item === "Login" ? "2px solid #ddd" : "none",
                    borderRadius: "5px",
                    fontWeight: "600",
                    margin: "auto 5px",
                    padding: "8px 15px",
                    color: item === "Login" ? "#7367f8" : "#fff",
                    backgroundColor: item === "Signup" ? "#6f64f4" : "#fafafc",
                    "&:hover": {
                      backgroundColor: item === "Signup" && "#7367f8",
                    },
                  }}
                >
                  {item}
                </Button>
              );
            })}
          </Stack>
        </Toolbar>
      </AppBar>
    </nav>
  );
}

export default NavbarDesktop;
