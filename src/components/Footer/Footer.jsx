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
                <Link to="/support-center">Support Center</Link>
              </li>
              <li>
                <Link to="/invoicing">Invoicing</Link>
              </li>
              <li>
                <Link to="/contract">Contract</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
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
