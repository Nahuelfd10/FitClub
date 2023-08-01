import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/MatiasFitCoachNar.png";
import Bars from "../../assets/bars.png";
import CloseIcon from "../../assets/CloseIcon.png";
import { Link } from "react-scroll";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isIconClose, setIsIconClose] = useState(false);
  const handleMenuClick = () => {
    setMenuOpened(!menuOpened);
    setIsIconClose(!isIconClose);
  };
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      <div
        className="menu"
        style={{
          backgroundColor: "var(--appColor)",
          padding: "0.5rem",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => handleMenuClick()}
      >
        {/* icono */}
        <img
          src={isIconClose ? CloseIcon : Bars}
          alt=""
          style={{
            width: "1.5rem",
            height: "1.5rem",
            filter: "brightness(0) invert(1)",
          }}
        />
      </div>
      <ul className="header-menu">
        <li>
          <Link activeClass="active" to="header" spy={true} smooth={true}>
            Inicio
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="programas" spy={true} smooth={true}>
            Programas
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="reasons" spy={true} smooth={true}>
            Acerca de mí
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="planes" spy={true} smooth={true}>
            Planes
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="testimonios" spy={true} smooth={true}>
            Resultados
          </Link>
        </li>
      </ul>

      {menuOpened && (
        <ul className="header-menu responsive">
          <li>
            <Link
              onClick={() => handleMenuClick()}
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleMenuClick()}
              activeClass="active"
              to="programas"
              spy={true}
              smooth={true}
            >
              Programas
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleMenuClick()}
              activeClass="active"
              to="reasons"
              spy={true}
              smooth={true}
            >
              Acerca de mí
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleMenuClick()}
              activeClass="active"
              to="planes"
              spy={true}
              smooth={true}
            >
              Planes
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleMenuClick()}
              activeClass="active"
              to="testimonios"
              spy={true}
              smooth={true}
            >
              Resultados
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
