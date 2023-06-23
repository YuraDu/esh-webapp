import React, { useState } from "react";
import { Toolbar, IconButton, Tooltip, Menu, MenuItem } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

import { useTranslation } from "react-i18next";
export const LanguageSelector: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { i18n } = useTranslation();

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

  return (
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
  );
};
