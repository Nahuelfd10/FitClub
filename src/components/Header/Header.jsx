import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll'

const Header = () => {

  const mobile = window.innerWidth <= 768 ? true : false
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="" className='logo' />
      {(menuOpened === false && mobile === true) ? (
        <div
          style={{
            backgroundColor: 'var(--appColor)',
            padding: "0.5rem",
            borderRadius: "5px"
          }}

          onClick={() => setMenuOpened(true)}
        >
          <img src={Bars} alt="" style={{ width: '1.5rem', heigth: '1.5rem' }} />
        </div>
      ) : (
        <ul className='header-menu'>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to='header'
              spy={true}
              smooth={true}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
             onClick={() => setMenuOpened(false)}
             activeClass="active"
             to='programas'
             spy={true}
             smooth={true} 
            >Programas</Link>
          </li>
          <li>
            <Link
            onClick={() => setMenuOpened(false)}
            activeClass="active"
            to='reasons'
            spy={true}
            smooth={true} 
            >Why us</Link>
          </li>
          <li>
            <Link
            onClick={() => setMenuOpened(false)}
            activeClass="active"
            to='planes'
            spy={true}
            smooth={true} 
            >Planes</Link>
          </li>
          <li>
            <Link
            onClick={() => setMenuOpened(false)}
            activeClass="active"
            to='testimonios'
            spy={true}
            smooth={true} 
            >Testimonios</Link>
          </li>
        </ul>
      )}

    </div>
  )
}

export default Header