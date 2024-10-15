import React from 'react'
import LogoData from './LogoData'

import "./Logos.scss"

const Logos = () => {
    return (
        <div className='container logoMain'>
            {LogoData.map((item) => {
                return (
                    <img src={item.img} alt="logo" />
                )
            })}

        </div>
    )
}

export default Logos
