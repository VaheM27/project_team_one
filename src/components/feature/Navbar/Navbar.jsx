import React from 'react'

import Logo from "../../../assets/images/FASCO.png";
import grayShirt from "../../../assets/images/image 2 28.png"
import brownShirt from "../../../assets/images/image 227.png"
import fourGirl from "../../../assets/images/images (1).png"
import twoGirl from "../../../assets/images/images (2).png"


import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='container'>
      <nav>
        <img src={Logo} alt="Logo" />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Deals</li>
            <li>New Arrivals</li>
            <li>Packages</li>
            <li>Sign In</li>
          </ul>
          <button>Sign Up</button>
        </div>
      </nav>
      <section className='nav-sec'>
        <div className="grayBack">
          <img src={grayShirt} alt="nav-sec-img" />
        </div>
        <div className="nav-sec-info">
          <img src={fourGirl} alt="nav-sec-info-img" />
          <div className="nav-sec-info-texts">
            <p className='ultimate'>ULTIMATE</p>
            <p className='sale'>SALE</p>
            <p className='newColect'>NEW COLLECTION</p>
            <button>SHOP NOW</button>
          </div>
          <img src={twoGirl} alt="nav-sec-info-img" />
        </div>
        <div className="grayBack">
          <img src={brownShirt} alt="nav-sec-img" className='brownShirt' />
        </div>
      </section>

    </div>
  )
}

export default Navbar
