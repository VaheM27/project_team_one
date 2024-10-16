import React from 'react'
import LogoData from './LogoData'

import styles from "./Logos.module.scss"
import "./Logos.module.scss"

const Logos = () => {
    return (
        <div className={`container ${styles.logoMain}`}>
            {LogoData.map((item) => {
                return (
                    <img src={item.img} alt="logo" key={item.id}/>
                )
            })}

        </div>
    )
}

export default Logos
