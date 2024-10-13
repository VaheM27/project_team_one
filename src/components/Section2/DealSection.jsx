import React from "react";
import Slider from "../Section2/Slider";

import "./DealSection.scss";

import image1 from "../../assets/images/images (2).png";
import image2 from "../../assets/images/image1.png";
import image3 from "../../assets/images/image2.png";

const images = [image1, image2, image3];

const DealsSection = () => {
  return (
    <div className="deals-section">
      <div className="deals-left">
        <h2 className="deals-title">Deals Of The Month</h2>
        <p className="deals-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </p>
        <button className="buy-now-btn">Buy Now</button>
        <p className="hurry-text">Hurry, Before It's Too Late!</p>
        <div className="timer">
          <span>Days: 10</span>
          <span>Hours: 5</span>
          <span>Minutes: 30</span>
          <span>Seconds: 45</span>
        </div>
      </div>
      <div className="deals-right">
        <Slider images={images} />
      </div>
    </div>
  );
};

export default DealsSection;
