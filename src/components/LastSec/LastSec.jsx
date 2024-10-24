import React, { useState } from "react";
import left from "../../assets/images/LastSec1.png";
import Right from "../../assets/images/lastSec2.png";

import "./LastSec.scss";

function LastSec() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      return;
    }

    fetch("http://localhost:3006/subscribers", {
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setEmail("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container">
      <div className="subscription-container">
        <img src={left} alt="Left" className="left-image" />

        <div className="middle-box">
          <h2>Subscribe to Our Newsletter</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </p>

          <form onSubmit={handleSubmit} className="lastSec-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <button type="submit">Subscribe Now</button>
          </form>
        </div>

        <img src={Right} alt="Right" className="right-image" />
      </div>
    </div>
  );
}

export default LastSec
