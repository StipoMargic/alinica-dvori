import React, {useEffect, useState} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.css";
import img1 from "../assets/images/luxury/1.jpg";
import img2 from "../assets/images/luxury/2.jpg";
import img3 from "../assets/images/luxury/3.jpg";
import img4 from "../assets/images/luxury/4.jpg";
import img5 from "../assets/images/luxury/5.jpg";
import Modal from "../Modal";

const images = [img1, img2, img3, img4, img5];
const getSettings = () => ({
  infinite: true,
  slidesToShow: 3,
  autoplay: true,
  slidesToScroll: 1,
  pauseOnHover: false,
  autoplaySpeed: 2000,
});

const InsideTheLuxury = () => {
  const [mainPicture, setMainPicture,] = useState(images[0]);
  const [thumbnails, setThumbnails] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const thumb = images.filter(img => img !== mainPicture)
    setThumbnails(thumb);
  }, [mainPicture])
  const settings = getSettings();
  return (
    <section className="inside-the-luxury">
      <div style={{backgroundImage: "url(1.jpg)"}} className="luxury-bg" />
      <h2 className="text-center py-5">INSIDE THE LUXURY</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="main-pic">
              <img style={{zIndex: 300, cursor: "pointer"}} onClick={() => setIsOpen(true)}
                   src={mainPicture} alt=""/>
            </div>
            <div className="luxury-thumbnails">
              <Slider {...settings}>
                {thumbnails.map(image => <img onClick={() => setMainPicture(image)} key={image}
                                              src={image}/>)}
              </Slider>
            </div>
          </div>
          <div className="col-lg-6">
            <p> The entire house is brand new (2018) and this will be our third season. Almost the
              whole interior(and a good part of exterior) has been handcrafted by Mario, your host.
              <br/><br/>
              House features two bedrooms, with a maximum capacity of 6 people. Parking is just in
              front of the house, and the beautiful olive gardens surround the entire property. The
              ground floor has a bedroom, a bathroom, and a kitchen. The second floor features a
              living room, bedroom, toilet, and two balconies. A stone staircase connects the
              floors, and the kitchen is fully equipped, with everything you might need. The living
              room has a big screen TV along with a PS4 gaming console (there are also TVs in
              bedrooms and kitchen).
            </p>
          </div>
        </div>
      </div>
      {isOpen && <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} image={mainPicture} />}
    </section>
  );
};

export default InsideTheLuxury;
