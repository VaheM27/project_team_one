import React from 'react';
import Slider from '../Section2/Slider';
import Timer from '../Section2/Timer';
import styles from './DealSection.module.scss';

import image1 from '../../assets/images/images (2).png';
import image2 from '../../assets/images/image1.png';
import image3 from '../../assets/images/image2.png';

const images = [image1, image2, image3];

const DealSection = () => {
  return (
    <div className="container">
      <div className={styles.dealsSection} >
        <div className={styles.dealsLeft}>
          <h2 className={styles.dealsTitle}>Deals Of The Month</h2>
          <p className={styles.dealsDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
          </p>
          <button className={styles.buyNowBtn}>Buy Now</button>
          <p className={styles.hurryText}>Hurry, Before It's Too Late!</p>
          <div className={styles.timer}>
            <Timer />
          </div>
          <div className={styles.timerText}>
            <p>Days</p>
            <p>Hr</p>
            <p>Mins</p>
            <p>Sec</p>
          </div>
        </div>
        <div className={styles.dealsRight} >
          <Slider images={images} />
        </div>
      </div>
      <p id="newArrivals"className={styles.text}>barev</p>
    </div>
  );
};

export default DealSection
