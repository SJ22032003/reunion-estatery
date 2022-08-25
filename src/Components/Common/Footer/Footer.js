import React from "react";
import {
  Typography,
  AppBar,
  Toolbar,
} from "@mui/material";

function Footer() {
  return (
    <>
      <AppBar position="static" sx={{ background: "#fbfaff" }} elevation={0}>
        <Toolbar sx={{display:'flex',justifyContent:'center'}}>
          <Typography
            sx={{
              color: "#282251",
              fontSize: "clamp(12px,1.4vw,15px)",
              fontWeight: "600",
              flexGrow: "0.06",
            }}
            variant="h3"
          >
            Estatery @2022
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Footer;
