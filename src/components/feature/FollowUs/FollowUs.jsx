import React from 'react'

import styles from "./FollowUs.module.scss"
import "./FollowUs.module.scss"
import FollowUsData from './FollowUsData'

const FollowUs = () => {
    return (
        <div className={styles.main}>
            <h1>Follow Us On Instagram</h1>
            <p>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Scelerisque duis ultrices
                sollicitudin aliquam sem. Scelerisque duis
                ultrices sollicitudin
            </p>
            <div className={styles.image_box}>
                {FollowUsData.map((item) => {
                    return (
                        <img src={item.img} alt={item.img} key={item.id} />
                    )
                })}
            </div>
        </div>
    )
}

export default FollowUs
