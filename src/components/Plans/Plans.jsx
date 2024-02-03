import React, { useState, useEffect } from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const handleWhatsAppClick = (message) => {
  // ... (código de WhatsApp sin cambios)
};

const Plans = () => {
  const [dollarBlueRate, setDollarBlueRate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  // Función con fallback para obtener el valor del dólar blue
  const fetchDollarBlueRate = async () => {
    try {
      const response = await fetch("https://dolarapi.com/v1/dolares/blue");
      const data = await response.json();
      console.log({ data });
      const dolarBlueRate = parseFloat(data.compra);
      return dolarBlueRate;
    } catch (error) {
      console.error("Error fetching from Dolar API:", error);
      try {
        const response = await fetch("https://api.bluelytics.com.ar/v2/latest");
        const data = await response.json();
        console.log({ data });
        const dolarBlueRate = parseFloat(data.blue.value_buy);
        return dolarBlueRate;
      } catch (error) {
        console.error("Error fetching from bluelytics:", error);
        throw error;
      }
    }
  };

  useEffect(() => {
    // Realizar la primera consulta al cargar el componente
    fetchDollarBlueRate()
      .then((rate) => setDollarBlueRate(rate))
      .catch((error) =>
        console.error("Error fetching dollar blue rate:", error)
      );

    // Programar la consulta una vez al mes
    const intervalId = setInterval(() => {
      const newMonth = new Date().getMonth();
      if (newMonth !== currentMonth) {
        setCurrentMonth(newMonth);
        fetchDollarBlueRate()
          .then((rate) => setDollarBlueRate(rate))
          .catch((error) =>
            console.error("Error fetching dollar blue rate:", error)
          );
      }
    }, 1000 * 60 * 60 * 24 * 30); // Intervalo de 30 días para actualizar una vez al mes

    // Limpieza del intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, [currentMonth]);

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
        {plansData.map((plan) => (
          <div className="plan" key={plan.id}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {Math.round(plan.price * dollarBlueRate)}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature" key={i}>
                  <img src={whiteTick} alt="" />
                  <span>{feature}</span>
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
