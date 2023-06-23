import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Select,
  MenuItem,
  Tooltip,
  Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";

import Logo from "./../assets/logo.svg";

import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { t, i18n } = useTranslation();

  const handleLanguageIconClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    handleLanguageMenuClose();
  };

  const listItemStyle = {
    // width: "60px",
    // height: "40px",
    display: "flex",
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpenDrawer(open);
    };

  return (
    <AppBar
      sx={{
        backgroundColor: "#ffffff",
        color: "#2E2F38",
        width: "100%",
        padding: "0 4rem",
      }}
      elevation={0}
      position="static"
    >
      <Toolbar>
        <Typography variant="h6" component="div">
          <img
            src={Logo}
            alt="Logo"
            style={{ height: "30px", marginRight: "10px" }}
          />
        </Typography>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}>
          <List>
            <ListItem
              button
              component={Link}
              to="/"
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary={t("home")} />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/blog"
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary={t("blog")} />
            </ListItem>
          </List>
        </Drawer>
        <List sx={{ display: { xs: "none", md: "flex" } }}>
          <ListItem button component={Link} to="/">
            <ListItemText primary={t("home")} />
          </ListItem>
          <ListItem sx={listItemStyle} button component={Link} to="/blog">
            <ListItemText primary={t("blog")} />
          </ListItem>
        </List>
        <Toolbar sx={{ marginLeft: "auto" }}>
          <Tooltip title="Select Language">
            <IconButton
              color="inherit"
              onClick={handleLanguageIconClick}
              sx={{ p: 1 }}
            >
              <LanguageIcon />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleLanguageMenuClose}
          >
            <MenuItem onClick={() => handleLanguageChange("eng")}>Eng</MenuItem>
            <MenuItem onClick={() => handleLanguageChange("heb")}>Heb</MenuItem>
            <MenuItem onClick={() => handleLanguageChange("rus")}>Rus</MenuItem>
          </Menu>
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
