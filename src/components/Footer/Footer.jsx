import React from "react";
import "./Footer.css";
import Instagram from "../../assets/instagram.png";
import Logo from "../../assets/MatiasFitCoachNar.png";
import whatsappIcon from "../../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <a
            href="https://www.instagram.com/matiasfitcoach/?hl=es"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://iili.io/HtFAh9j.png" alt="" />
          </a>
          <a
            href="https://wa.me/5492262317841?text=%22%C2%A1Hola!%20Estoy%20interesado/a%20en%20conocer%20m%C3%A1s%20sobre%20tus%20servicios%20de%20entrenamiento.%20%C2%BFPodr%C3%ADas%20proporcionarme%20m%C3%A1s%20informaci%C3%B3n?%22"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://iili.io/HtFAbln.png" alt="WhatsApp" />
          </a>
        </div>
        <div className="logo-f">
          <img src="https://iili.io/HtFALoN.png" alt="" />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
