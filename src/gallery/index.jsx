import React, {useState} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.css";
import Modal from "../Modal";

function importAll(r) {
  let images = {};
  r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../assets/images/gallery', false, /\.(png|jpe?g|svg)$/));

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
          {Object.values(images).map(image => {
            return <img src={image} key={image.toString()} onClick={() => handleClick(image)} />
          })}
        </Slider>
      </div>
      {isOpen && <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} image={clickedImage} /> }
    </section>
  );
};

export default Gallery;
