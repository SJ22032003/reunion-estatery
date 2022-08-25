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
  Grid,
} from "@mui/material";
import Logo from "../../assets/logo.png";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles((theme) => ({
  myLogo: {
    width: "40px",
    margin: "8px 0 0 0",
  },
}));

function NavbarMobile() {
  const classes = useStyles();
  const [navTabs, setNavTabs] = useState([
    "Rent",
    "Buy",
    "Sell",
    "Manage",
    "Resource",
  ]);
  const [authIn, setAuthIn] = useState(["Login", "Signup"]);
  const [activeNavbar, setActiveNavbar] = useState(false);

  const handleNavbar = () => {
    if (activeNavbar === false) {
      setActiveNavbar(true);
    } else {
      setActiveNavbar(false);
    }
  };

  return (
    <nav>
      <AppBar position="static" sx={{ background: "#fbfaff" }} elevation={0}>
        <Toolbar sx={{ position: "relative" }}>
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
              flexGrow: "1",
            }}
          >
            Estatery
          </Typography>
          <IconButton size="large" edge="start" onClick={handleNavbar}>
            <Typography varient="h5">
              <MenuIcon sx={{ color: "#7367f8" }} />
            </Typography>
          </IconButton>

          {activeNavbar && (
            <Stack
              sx={{
                position: "absolute",
                backgroundColor: "#fbfaff",
                width: "100%",
                zIndex: "99",
                top: "85px",
                left: "1px",
              }}
            >
              {navTabs.map((nav, index) => {
                return (
                  <NavLink to={`/${nav}`} style={{ margin: "5px 10px" }}>
                    <Button
                      onClick={handleNavbar}
                      key={`${nav}${index}`}
                      sx={{
                        width: "100%",
                        textTransform: "none",
                        color: "#383843",
                        fontSize: "clamp(15px,1.4vw,20px)",
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
              <Grid
                container
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {authIn.map((item, index) => {
                  return (
                    <Grid item sx={6} my={1}>
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
                          backgroundColor:
                            item === "Signup" ? "#6f64f4" : "#fafafc",
                          "&:hover": {
                            backgroundColor: item === "Signup" && "#7367f8",
                          },
                        }}
                      >
                        {item}
                      </Button>
                    </Grid>
                  );
                })}
              </Grid>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
    </nav>
  );
}

export default NavbarMobile;
