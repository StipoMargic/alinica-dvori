import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.css";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";


const getSettings = () => ({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  pauseOnHover: false,
  autoplay: true,
  centerMode: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

const Gallery = () => {
  const  settings = getSettings();

  return (
    <section className="gallery py-5">
      <h2 className="text-center py-5">GALLERY</h2>
      <div className="gallery-wrapper">
        <Slider {...settings}>
          <img src={img1} alt=""/>
          <img src={img2} alt=""/>
          <img src={img3} alt=""/>
          <img src={img4} alt=""/>
          <img src={img5} alt=""/>
        </Slider>
      </div>
    </section>
  );
};

export default Gallery;
