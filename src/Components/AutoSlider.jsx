import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BootLogo from "../assets/BootLogo.png";
import Css from "../assets/CSS.png";

function AutoSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className="slider-container overflow-hidden bg-neutral-800 max-sm:w-full h-[200px]  flex justify-center items-center">
    <Slider {...settings}>
      <div>
        <img src={Css} alt="" />
      </div>
      <div>
      <img src={BootLogo} alt="" />

      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  </div>
  );
}

export default AutoSlider;
