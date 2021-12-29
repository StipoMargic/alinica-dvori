import React from "react";
import "./style.css";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";

const About = () => {
  return (
    <section className="about py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
<br/>
            <br/>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </div>
          <div className="col-lg-7 images">
              <img src={img1} alt=""/>
              <img src={img2} alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
