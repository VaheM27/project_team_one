import React from 'react'
import LogoData from './LogoData'

import styles from "./Logos.module.scss"
import "./Logos.module.scss"

const Logos = () => {
    return (
        <div className="container">
            <div className={`${styles.logoMain}`}>
                {LogoData.map((item) => {
                    return (
                        <img src={item.img} alt="logo" key={item.id} id='deals'/>
                    )
                })}

            </div>
        </div>
    )
}

export default Logos
