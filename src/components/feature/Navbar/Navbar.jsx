import React from 'react'

import Logo from "../../../assets/images/FASCO.png";




import styles from "./Navbar.module.scss"
import "./Navbar.module.scss"
import navItems from '../Navbar/navitems'
import { NavLink } from 'react-router-dom';
import ROUTES from '../../../Routes';


const Navbar = () => {
  return (
    <div className={styles.home} id='nav'>
      <div className='container'>
        <nav>
          <img src={Logo} alt="Logo" />
          <div className={styles.nav_items}>
            <ul>
            <li><NavLink to='/'>Home</NavLink></li>
              {navItems.map ((item) => {
                return (
                  <li key={item.id}><a href={item.id}>{item.navName}</a></li>
                )
              })}
              <li><NavLink to={ROUTES.SIGN_IN}>Sign in</NavLink></li>
            </ul>
            <button><NavLink to={ROUTES.SIGN_UP}>Sign Up</NavLink></button>
          </div>
        </nav>

      </div>
    </div>
  )
}

export default Navbar
