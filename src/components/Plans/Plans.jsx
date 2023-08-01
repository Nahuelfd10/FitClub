import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const handleWhatsAppClick = (message) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://api.whatsapp.com/send?phone=+5492262317841&text=${encodedMessage}`;
  window.open(whatsappLink, "_blank");
};

const Plans = () => {
  return (
    <div className="plans-container" id="planes">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header">
        <span className="stroke-text">comenzá</span>
        <span>el cambio</span>
        <span className="stroke-text">conmigo</span>
      </div>

      {/* plans card */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>*PRECIO FINAL MENSUAL CON MERCADO PAGO</span>
            </div>
            <button
              className="btn"
              onClick={() => handleWhatsAppClick(plan.whatsappMessage)}
            >
              Quiero empezar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
