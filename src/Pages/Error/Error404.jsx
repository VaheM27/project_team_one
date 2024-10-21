import React from "react";
import { Link } from "react-router-dom";
import "./Error404.scss";

const Error404 = () => {
  return (
    <div className="error-404">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
};

export default Error404
