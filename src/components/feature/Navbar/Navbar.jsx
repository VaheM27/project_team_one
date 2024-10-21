import React from 'react'

import Logo from "../../../assets/images/FASCO.png";




import styles from "./Navbar.module.scss"
import "./Navbar.module.scss"
import navItems from '../Navbar/navitems'
import { NavLink } from 'react-router-dom';


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
              <li><NavLink to='/signin'>Sign in</NavLink></li>
            </ul>
            <button>Sign Up</button>
          </div>
        </nav>

      </div>
    </div>
  )
}

export default Navbar
