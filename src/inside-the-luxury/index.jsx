import React, {useEffect, useState} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.css";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";

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
              <img src={mainPicture} alt=""/>
            </div>
            <div className="luxury-thumbnails">
            <Slider {...settings}>
              {thumbnails.map(image => <img onClick={() => setMainPicture(image)} key={image} src={image}/>)}
            </Slider>
            </div>
          </div>
          <div className="col-lg-6">
            m, by injected humour, or randomised words which don't look even slightly believable. If
            you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
            embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
            Internet tend to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
            The generated Lorem Ipsum is therefore always free from repetition, inj
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsideTheLuxury;
