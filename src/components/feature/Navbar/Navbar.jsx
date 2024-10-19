import React from "react";

import navItems from '../../feature/Navbar/navitems';

import Logo from "../../../assets/images/FASCO.png";
import grayShirt from "../../../assets/images/image 2 28.png";
import brownShirt from "../../../assets/images/image 227.png";
import fourGirl from "../../../assets/images/images (1).png";
import twoGirl from "../../../assets/images/images (2).png";
import recycleBin from "../../../assets/images/recycleBin.png";
import scroll from "../../../assets/images/scroll.png";

import styles from "./Navbar.module.scss";
import "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.home}>
      <div className="container">
        <nav>
          <img src={Logo} alt="Logo" />
          <div className={styles.nav_items}>
        <ul>
          {navItems.map((item, index) =>{
            return (
              <li key={index}><NavLink to={item.path}>{item.navName}</NavLink></li>
            )
          })}
        </ul>
            <button>Sign Up</button>
          </div>
        </nav>
        <section className={styles.nav_sec}>
          <div className={styles.grayBack}>
            <img src={grayShirt} alt="nav-sec-img" />
          </div>
          <div className={styles.nav_sec_info}>
            <img src={fourGirl} alt="nav-sec-info-img" />
            <div className={styles.nav_sec_info_texts}>
              <p className={styles.ultimate}>ULTIMATE</p>
              <p className={styles.sale}>SALE</p>
              <p className={styles.newColect}>NEW COLLECTION</p>
              <button>SHOP NOW</button>
            </div>
            <img src={twoGirl} alt="nav-sec-info-img" />
          </div>
          <div className={styles.grayBack}>
            <img
              src={brownShirt}
              alt="nav-sec-img"
              className={styles.brownShirt}
            />
          </div>
        </section>
      </div>
      <div className={styles.absolute_div}>
        <img src={recycleBin} alt="recycleBin" className={styles.recycleBin} />
        <img src={scroll} alt="scroll" />
      </div>
    </div>
  );
};

export default Navbar;
