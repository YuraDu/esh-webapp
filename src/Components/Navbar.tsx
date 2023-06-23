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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { Logo } from "./Logo";

import { useTranslation } from "react-i18next";
import { LanguageSelector } from "./LanguageSelector";

const Navbar: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { t, i18n } = useTranslation();

  const listItemStyle = {
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
        flexDirection: `${
          i18n.resolvedLanguage === "heb" ? "row-reverse" : ""
        }`,
      }}
      elevation={0}
      position="static"
    >
      <Toolbar>
        {i18n.resolvedLanguage !== "heb" && <Logo />}

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
        {i18n.resolvedLanguage === "heb" && <Logo />}
        <LanguageSelector />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
