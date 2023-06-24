import React, { useState } from "react";
import { Toolbar, IconButton, Tooltip, Menu, MenuItem } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

import { useTranslation } from "react-i18next";

export const LanguageSelector: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { i18n, t } = useTranslation();

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
      {/* Language selection button */}
      <Tooltip title={t("selectLanguage")}>
        <IconButton
          color="inherit"
          onClick={handleLanguageIconClick}
          aria-label={t("selectLanguage")}
          sx={{ p: 1 }}
        >
          <LanguageIcon />
        </IconButton>
      </Tooltip>
      {/* Language selection menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleLanguageMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {/* Language options */}
        <MenuItem onClick={() => handleLanguageChange("eng")}>
          {t("english")}
        </MenuItem>
        <MenuItem onClick={() => handleLanguageChange("heb")}>
          {t("hebrew")}
        </MenuItem>
        <MenuItem onClick={() => handleLanguageChange("rus")}>
          {t("russian")}
        </MenuItem>
      </Menu>
    </Toolbar>
  );
};
