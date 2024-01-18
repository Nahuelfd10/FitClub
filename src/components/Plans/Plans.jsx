import React, { useState, useEffect } from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const handleWhatsAppClick = (message) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://api.whatsapp.com/send?phone=+5492262317841&text=${encodedMessage}`;
  window.open(whatsappLink, "_blank");
};

const Plans = () => {
  /* const [dollarRate, setDollarRate] = useState(null); */
  const [dollarBlueRate, setDollarBlueRate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  /* Obtener valor dolar oficial */
  /* useEffect(() => {
    // Aquí puedes realizar una llamada a una API de tipo cambio para obtener el valor del dólar
    // Ejemplo de API: https://api.exchangerate-api.com/v4/latest/USD
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((response) => response.json())
      .then((data) => setDollarRate(data.rates.ARS))
      .catch((error) => console.error("Error fetching exchange rate:", error));
  }, []);
  

  /* Obtener valor dolar blue */
  const fetchData = () => {
    fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
      .then((response) => response.json())
      .then((data) => {
        const dolarBlueInfo = data.find(
          (info) => info.casa.nombre === "Dolar Blue"
        );
        if (dolarBlueInfo) {
          // Reemplaza la coma por el punto y convierte a número
          const blueRate = parseFloat(
            dolarBlueInfo.casa.venta.replace(",", ".")
          );

          // Multiplica por 1000 para convertir de centavos a pesos
          const rateInPesos = Math.round(blueRate * 1000);

          setDollarBlueRate(rateInPesos);
        } else {
          console.error("No se encontró información del Dolar Blue en la API.");
        }
      })
      .catch((error) =>
        console.error("Error fetching Dolar Blue rate:", error)
      );
  };

  useEffect(() => {
    // Realizar la primera consulta al cargar el componente
    fetchData();

    // Programar la consulta cada vez que cambia el mes
    const intervalId = setInterval(() => {
      const newMonth = new Date().getMonth();
      if (newMonth !== currentMonth) {
        setCurrentMonth(newMonth);
        fetchData();
      }
    }, 1000 * 60 * 60 * 24); // Intervalo de 24 horas para verificar cada día si cambió el mes

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
