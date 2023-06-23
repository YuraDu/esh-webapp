import React from "react";
import { Typography } from "@mui/material";

import logo from "./../assets/logo.svg";

export const Logo: React.FC = () => {
  return (
    <Typography variant="h6" component="div">
      <img
        src={logo}
        alt="Logo"
        style={{ height: "30px", marginRight: "10px" }}
      />
    </Typography>
  );
};
