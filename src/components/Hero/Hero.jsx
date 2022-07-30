import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'


const Hero = () => {

  const transition = {type: 'spring', duration: 3};
  const mobile = window.innerWidth<=768 ? true: false
  return (
    <div className='hero' id='inicio'>
      
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{left: mobile? "165px" : "238px"}}
            whileInView={{left: '8px'}}
            transition={{...transition, type:'tween'}}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Forma </span>
            <span>Tu</span>
          </div>
          <div>
            <span>Cuerpo ideal</span>
          </div>
          <div>
            <span>Aquí te ayudaremos a moldear y construir tu cuerpo ideal, y vivir tu vida al máximo</span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay='4' preFix="+"/>
            </span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={800} delay='4' preFix="+"/>
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={0} delay='4' preFix="+"/>
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Lead More</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className='btn'>Join Now</button>

        <motion.div 
          initial={{ right: '-1rem'}}
          whileInView={{ right: '4rem'}}
          transition={transition}
          className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span><span>116 bpm</span>
        </motion.div>

      {/* hero images */}
      <img src={hero_image} alt="" className='hero-image'/>
      <motion.img 
        initial={{ right: '11rem'}}
        whileInView={{ right: '20rem'}}
        transition={transition}
        src={hero_image_back} alt="" className='hero-image-back'/>

      {/* calories */}
      <motion.div
        initial={{ right: '37rem'}}
        whileInView={{ right: '28rem'}}
        transition={transition}
        className="calories">
        <img src={Calories} alt="" />
        <div>
          <span>Calorías quemadas</span>
          <span>220 kcal</span>
        </div>
      </motion.div>

      </div>
    </div>
  )
}

export default Hero