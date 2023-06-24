import React from "react";
import "./Footer.css";

import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer className="footer" lang={i18n.language}>
      <div className="footer-links">
        <a href="#privacy" className="footer-link" aria-label={t("privacy")}>
          <span className="footer-caption">{t("privacy")}</span>
        </a>
        <a
          href="#accessibility"
          className="footer-link"
          aria-label={t("accessibility")}
        >
          <span className="footer-caption">{t("accessibility")}</span>
        </a>
        <span className="footer-caption">{t("footer-caption")}</span>
      </div>
    </footer>
  );
};

export default Footer;
