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
            <h5 className="text-center mb-5">get a discount with direct booking from the host</h5>
          </div>
          <div className="row">
            <div className="col-lg-6 text-center">
              <div className="icon"><FaUserCircle/>Mijo Matijević</div>
              <div className="icon"><FaPhoneAlt/>+385 91/111-6044</div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="icon"><FaEnvelope/> <a href="mailto:mijomatijevic1@gmail.com">mijomatijevic1@gmail.com</a></div>
              <div className="icon"><FaMapMarker/>Ulica Mile Gojsalic 57, Kostanje, Croatia</div>
            </div>
          </div>
      </div>
      <div className="copyright">&copy; {new Date().getFullYear().toString()}<span>Developed by <a
        href="https://web.facebook.com/stipo.margic/" target="_blank">Stipo Margić</a></span></div>
    </section>
  );
};

  export default Contact;
