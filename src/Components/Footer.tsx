import React from "react";
import "./Footer.css";

import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-links">
          <a
            style={
              i18n.resolvedLanguage === "heb" ? { alignSelf: "flex-end" } : {}
            }
            href="#"
            className="footer-link"
          >
            <span className="footer-caption">{t("privacy")}</span>
          </a>
          <a
            style={
              i18n.resolvedLanguage === "heb" ? { alignSelf: "flex-end" } : {}
            }
            href="#"
            className="footer-link"
          >
            <span className="footer-caption">{t("accessibility")}</span>
          </a>
          <span className="footer-caption">{t("footer-caption")}</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
