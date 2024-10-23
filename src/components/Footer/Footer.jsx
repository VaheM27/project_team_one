import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="top-section">
          <div className="brand">Fasco</div>
          <div className="nav-links">
            <ul>
              <li>
              Support Center
              </li>
              <li>
                Invoicing
              </li>
              <li>
                Contract
              </li>
              <li>
                Careers
              </li>
              <li>
                Blog
              </li>
              <li>
                FAQ
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          Copyright © 2022 Xpro. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer
