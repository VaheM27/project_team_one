import React, { useState } from 'react'

import peaky from "../../../assets/images/image.png"
import "./Peaky.scss"

const Peaky = () => {
    const [changeColor, setChangeColor] = useState(false)

    const handleclick = () => {
        setChangeColor(!changeColor)
        console.log(changeColor)
    }
    return (
        <div className='peakyMain' id='packages'>
            <img src={peaky} alt="peaky" />
            <div className='about_peaky'>
                <p>Women Collection</p>
                <h1>Peaky Blinders</h1>
                <span>DESCRIPTION</span>
                <p>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Scelerisque duis ultrices
                    sollicitudin aliquam sem.
                    Scelerisque duis ultrices sollicitudin.
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Scelerisque duis.
                </p>
                <div className="size">
                    <p>Size:</p>
                    <button className='size_m' onClick={handleclick}
                        style={changeColor ? { backgroundColor: "black", color: "white", } : { backgroundColor: "white", color: "black" }}>M</button>
                </div>
                <p className='price'>$100.<span>00</span></p>
                <button className='buy_now'>Buy Now</button>
            </div>
        </div>
    )
}

export default Peaky
