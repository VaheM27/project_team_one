import React from 'react'

import Logo from "../../../assets/images/FASCO.png";




import styles from "./Navbar.module.scss"
import "./Navbar.module.scss"
import navItems from '../Navbar/navitems'


const Navbar = () => {
  return (
    <div className={styles.home} id='nav'>
      <div className='container'>
        <nav>
          <img src={Logo} alt="Logo" />
          <div className={styles.nav_items}>
            <ul>
              {navItems.map ((item) => {
                return (
                  <li key={item.id}><a href={item.id}>{item.navName}</a></li>
                )
              })}
            </ul>
            <button>Sign Up</button>
          </div>
        </nav>

      </div>
    </div>
  )
}

export default Navbar
