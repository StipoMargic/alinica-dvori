import React from "react";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1
  };

  return (
    <>
      <div className="hero">
        <div className="hero-overlay" />
        <h2>Oce li mrvica okrenit nes ispod peke?</h2>
          <Slider {...settings}>
            <img src={img1} alt=""/>
            <img src={img2} alt=""/>
            <img src={img3} alt=""/>
          </Slider>
      </div>
    </>
  );
};

export default Hero;
