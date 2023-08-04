import React from "react";
import "./Reasons.css";
import image1 from "../../assets/im1.jpg";
import image2 from "../../assets/im2.jpg";
import image3 from "../../assets/im3.jpg";
import image4 from "../../assets/im4.jpg";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src="https://iili.io/HtFAawl.jpg" alt="" />
        <img src="https://iili.io/HtFAct2.jpg" alt="" />
        <img src="https://iili.io/HtFAEP9.jpg" alt="" className="img3" />
        <img src="https://iili.io/HtFAVcu.jpg" alt="" />
      </div>
      <div className="right-r">
        <span>Acerca de mi</span>
        <div>
          <span className="stroke-text">Por Que</span>
          <span> Elegirme?</span>
        </div>

        <div className="details-r">
          <div>
            <img src="https://iili.io/HtFAitp.png" alt="" />
            <span>+10 años de experiencia</span>
          </div>
          <div>
            <img src="https://iili.io/HtFAitp.png" alt="" />
            <span>Programas 100% personalizados</span>
          </div>
          <div>
            <img src="https://iili.io/HtFAitp.png" alt="" />
            <span>Seguimientos diarios</span>
          </div>
          <div>
            <img src="https://iili.io/HtFAitp.png" alt="" />
            <span>+1000 clientes asesorados</span>
          </div>
          <div>
            <img src="https://iili.io/HtFAitp.png" alt="" />
            <span>Alimentacion flexible</span>
          </div>
        </div>
        {/*  <span
          style={{
            color: "var(--gray)",
            fontWeight: "normal",
          }}
        >
          OUR PARTNERS
        </span>
        <div className="partners">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Reasons;
