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
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Logo from "./../assets/logo.svg";

import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e: any) => {
    const language = e.target.value;

    i18n.changeLanguage(language);
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
      sx={{ backgroundColor: "#EBC9E7", color: "#2E2F38", width: "100%" }}
      elevation={0}
      position="static"
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/blog"
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary="Blog" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/post"
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary="Post" />
            </ListItem>
          </List>
        </Drawer>
        <List sx={{ display: { xs: "none", md: "flex" } }}>
          <ListItem button component={Link} to="/">
            <ListItemText primary={t("home")} />
          </ListItem>
          <ListItem button component={Link} to="/blog">
            <ListItemText primary={t("blog")} />
          </ListItem>
          <ListItem button component={Link} to="/post">
            <ListItemText primary={t("post")} />
          </ListItem>
        </List>
        <Toolbar>
          <div>
            <Select
              value={i18n.language}
              onChange={handleLanguageChange}
              style={{ color: "white" }}
            >
              <MenuItem value="eng">Eng</MenuItem>
              <MenuItem value="heb">Heb</MenuItem>
              <MenuItem value="rus">Rus</MenuItem>
            </Select>
          </div>
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
