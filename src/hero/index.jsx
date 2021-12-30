import React from "react";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../assets/images/hero/1.jpg";
import img2 from "../assets/images/hero/2.jpg";
import img3 from "../assets/images/hero/3.jpg";
import logo from "../assets/images/logo.png";

const Hero = () => {
  const settings = {
autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    pauseOnHover: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 3
  };

  return (
    <>
      <div className="hero">
        <img src={logo} alt="logo" className="logo"/>
        <div className="hero-overlay"/>
        <h1>The perfect vacation in a peaceful atmosphere</h1>
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
