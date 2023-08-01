import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

const handleWhatsAppClick = (message) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://api.whatsapp.com/send?phone=+5492262317841&text=${encodedMessage}`;
  window.open(whatsappLink, "_blank");
};

const Programs = () => {
  return (
    <div className="Programs" id="programas">
      {/* header */}
      <div className="programs-header">
        <span className="stroke-text">Explora los</span>
        <span>Programas</span>
        <span className="stroke-text">para formarte</span>
      </div>

      <div className="program-categories">
        {programsData.map((program, i) => (
          <div
            className="category"
            onClick={() => handleWhatsAppClick(program.whatsappMessage)}
            key={i}
          >
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Ir ahora</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
