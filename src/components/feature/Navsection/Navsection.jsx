import { Link } from "react-router-dom";
import grayShirt from "../../../assets/images/image 2 28.png";
import brownShirt from "../../../assets/images/image 227.png";
import fourGirl from "../../../assets/images/images (1).png";
import twoGirl from "../../../assets/images/images (2).png";
import recycleBin from "../../../assets/images/recycleBin.png";
import scroll from "../../../assets/images/scroll.png";

import styles from "./Navsection.module.scss";
import ROUTES from "../../../Routes";

const Navsection = () => {
  return (
    <div>
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
           
              <Link to={ROUTES.SHOP} className="uniqeClassOne">
                <button>Shop Now</button>
              </Link>
          
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

      <div className={styles.absolute_div}>
        <Link to={ROUTES.SHOP} className="uniqeClassOne">
          <img
            src={recycleBin}
            alt="recycleBin"
            className={styles.recycleBin}
          />
        </Link>

        <a href="#nav">
          <img src={scroll} alt="scroll" />
        </a>
      </div>
    </div>
  );
};

export default Navsection;
