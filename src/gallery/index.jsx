import React, {useState} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.css";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import Modal from "../Modal";

const images = [img1, img2, img3, img4, img5];

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
  const [isOpen, setIsOpen] = useState(false);
  const [clickedImage, setClickedImage] = useState(null);

  const handleClick = (image) => {
    setClickedImage(image)
    setIsOpen(true)
  }

  return (
    <section className="gallery py-5">
      <h2 className="text-center py-5">GALLERY</h2>
      <div className="gallery-wrapper">
        <Slider {...settings}>
          {images.map(image => {
            return <img src={image} key={image.toString()} onClick={() => handleClick(image)} />
          })}
        </Slider>
      </div>
      {isOpen && <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} image={clickedImage} /> }
    </section>
  );
};

export default Gallery;
