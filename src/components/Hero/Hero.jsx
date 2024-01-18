import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import { Link } from "react-scroll";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="inicio">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span> Cambiá facilmente tus habitos </span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Forma </span>
            <span>Tu</span>
          </div>
          <div>
            <span>Cuerpo ideal</span>
          </div>
          <div>
            <span>Cambiaremos tu vida, disfrutando el proceso.</span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={10} start={1} delay="4" preFix="+" />
            </span>
            <span>Entrenando</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={800} delay="4" preFix="+" />
            </span>
            <span>Transformaciones</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={0} delay="4" preFix="+" />
            </span>
            <span>Programas</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <a
            href="https://wa.me/5492262317841?text=%22%C2%A1Hola!%20Estoy%20interesado/a%20en%20conocer%20m%C3%A1s%20sobre%20tus%20servicios%20de%20entrenamiento.%20%C2%BFPodr%C3%ADas%20proporcionarme%20m%C3%A1s%20informaci%C3%B3n?%22"
            target="_blank"
            rel="noreferrer"
            className="hero-buttons"
          >
            <button className="btn">Comenzá ahora</button>
          </a>
          <Link to="testimonios" spy={true} smooth={true}>
            <button className="btn second-btn">Ver cambios</button>
          </Link>
        </div>
      </div>
      <div className="right-h">
        {/* <button className="btn">Join Now</button> */}

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src="https://iili.io/HtFAuFn.png" alt="" />
          <span>Ritmo cardíaco</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img src="https://iili.io/HtFA79f.png" alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src="https://iili.io/HtFAR8G.png"
          alt=""
          className="hero-image-back"
        />

        {/* calories */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src="https://iili.io/HtFEbLb.png" alt="" />
          <div>
            <span>Calorías quemadas</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
