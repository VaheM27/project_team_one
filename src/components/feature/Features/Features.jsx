import React from 'react'
import FeaturesData from './FeaturesData'

import "./Features.scss"

const Features = () => {
    return (
        <div className='container features_main'>
            {FeaturesData.map((item) => {
                return (
                    <div className="features_box" key={item.id}>
                        <img src={item.img} alt="features_image`" />
                        <div className="features_box_info">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Features
