import React, { useState } from "react";
import { data, heading, subheading } from "../../../../src/Constants/Data";

import "./Costumersays.scss";

const duplicatedTestimonials = [data[data.length - 1], ...data, data[0]];

const Costumersays = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === duplicatedTestimonials.length - 1 ? 1 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? duplicatedTestimonials.length - 2 : prevIndex - 1
    );
  };

  return (
    <div className="costumersays-section">
      <div className="container">
        <div className="costumer">
          <div className="text">
            <p className="first">{heading}</p>
            <p className="sec">{subheading}</p>
          </div>
        </div>
        <div className="slider">
          <button onClick={prevTestimonial} className="slider-button left">
            {"<"}
          </button>
          <div
            className="testimonial-container"
            style={{
              transform: `translateX(-${(currentIndex - 1) * 400}px)`,
              transition: "transform 0.5s ease",
            }}
          >
            {duplicatedTestimonials.map((data) => (
              <div
                key={data.id}
                className={`testimonial-item ${
                  currentIndex === data.id ? "active" : ""
                }`}
              >
                <div className="testimonial-content">
                  <img src={data.image} alt={data.name} />
                  <div className="testimonial-text">
                    <p>{data.quote}</p>
                    <div className="rating">{"⭐".repeat(data.rating)}</div>
                    <hr />
                    <p className="name">{data.name}</p>
                    <p className="profession">{data.profession}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={nextTestimonial} className="slider-button right">
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Costumersays
