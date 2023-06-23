import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-links">
          <a href="#" className="footer-link">
            <span className="footer-caption">Privacy policy</span>
          </a>
          <a href="#" className="footer-link">
            <span className="footer-caption">Accessibility Statement</span>
          </a>
          <span className="footer-caption">
            esh is a registered trademark of esh Org Ltd. and its affiliates.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
