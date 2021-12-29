import React from "react";
import {FaEnvelope, FaMapMarker, FaPhoneAlt, FaUserCircle} from "react-icons/fa";
import "./style.css";

const Contact = () => {
  return (
    <section className="contact">
        <div style={{backgroundImage: "url(1.jpg)"}} className="contact-bg" />
      <div className="container">
          <div className="row">
            <h2 className="text-center py-5">CONTACT US</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 text-center">
              <div className="icon"><FaUserCircle/> Mijo</div>
              <div className="icon"><FaPhoneAlt/> + 33333</div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="icon"><FaEnvelope/> mail</div>
              <div className="icon"><FaMapMarker/>adresa</div>
            </div>
          </div>
        </div>
    </section>
  );
};

  export default Contact;
