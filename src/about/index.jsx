import React from "react";
import "./style.css";
import img1 from "../assets/images/about/1.jpg";
import img2 from "../assets/images/about/2.jpg";

const About = () => {
  return (
    <section className="about py-5">
      <div style={{backgroundImage: "url(1.jpg)"}} className="about-bg" />
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <p>
              Villa is surrounded by two levels of olive gardens for your relaxation and kids play.
              The area around the pool has a 6 person sitting area, shower place, 6x lounge chairs,
              and outdoor kitchen equipped with all necessary appliances: ice maker, coffee machine,
              barbecue, hob, sink and refrigerated display cabine for drinks and so on. ( new
              pictures coming soon )
              From the pool there is a spectacular view of the green slopes and surrounding mountain
              range. The pool itself is 7x3.5meters with 160cm depth and it's heated on 25°C for
              your maximum comfort.
              <br/><br/>
              There are two mountain bikes at your disposal.
              All facilities are only for your personal use and not sharing anything with anyone
              else.
            </p>
          </div>
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
