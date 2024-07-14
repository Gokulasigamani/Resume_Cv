import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BootLogo from "../assets/BootLogo.png";
import Css from "../assets/CSS.png";
import Express from "../assets/Express.png";
import Html from "../assets/Html.png";
import Mongo from "../assets/Mongo.png";
import ReactLogo from "../assets/React.png";
import Tailwind from "../assets/Tailwind.png";

function AutoSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1, // Changed to 1 for smoother transition
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  const imageStyle = {
    width: "100px", // Set the desired width
    height: "100px", // Set the desired height
    objectFit: "contain" // Ensures the image fits within the specified dimensions
  };

  return (
    <div className="max-sm:w-full py-5  back overflow-hidden  mt-5 ">
      <Slider {...settings}>
        <div className="p-2 flex items-center justify-center">
          <img src={Css} alt="CSS" style={imageStyle} />
        </div>
        <div className="p-2 flex items-center justify-center">
          <img src={BootLogo} alt="Bootstrap" style={imageStyle} />
        </div>
        <div className="p-2 flex items-center justify-center">
          <img src={Express} alt="Express" style={imageStyle} />
        </div>
        <div className="p-2 flex items-center justify-center">
          <img src={Mongo} alt="MongoDB" style={imageStyle} />
        </div>
        <div className="p-2 flex items-center justify-center">
          <img src={ReactLogo} alt="React" style={imageStyle} />
        </div>
        <div className="p-2 flex items-center justify-center">
          <img src={Tailwind} alt="Tailwind CSS" style={imageStyle} />
        </div>
        <div className="p-2 flex items-center justify-center">
          <img src={Html} alt="HTML" style={imageStyle} />
        </div>
      </Slider>
    </div>
  );
}

export default AutoSlider;
