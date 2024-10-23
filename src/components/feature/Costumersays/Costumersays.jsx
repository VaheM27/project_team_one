import React, { useReducer } from "react";
import { initialState, reducer } from "./reducer";
import Slider from "react-slick";

import "./Costumersays.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Costumersays = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "60px",
    pauseOnHover: true,
    autoplaySpeed: 1500,
    draggable: true,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <div className="text">
        <p className="first">This Is What Our Customers Say</p>
        <p className="sec">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis
        </p>
      </div>

      <div className="slider-container">
        <Slider {...settings}>
          {state.images.map((item) => {
            return (
              <div key={item.id} className="mainDiv">
                <div className="leftSide">
                  <img src={item.image} alt="" />
                </div>
                <div className="rightSide">
                  <p className="quote">{item.quote}</p>
                  <img src={item.rating} alt="" className="rating" />
                  <hr />
                  <p className="name">{item.name}</p>
                  <p className="prof"> {item.profession}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Costumersays;
