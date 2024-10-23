import Logo from "../../assets/images/FASCO.png";
import icon1 from "../../assets/images/SVG.png";
import icon2 from "../../assets/images/Link.png";
import icon3 from "../../assets/images/littlestar.png";
import icon4 from "../../assets/images/m-search-popup.png";


import "./Newnavbar.scss";
import newnavItems from "./Newnavitems";
import { Link } from "react-router-dom";
import NEWROUTES from "../../NewRoutes";

const Newnavbar = () => {
  return (
    <div className="container">
      <nav>
        <img src={Logo} alt="Logo" />
        <div className="newNav_items">
          <ul>
            {newnavItems.map((item) => {
              return <li><Link to={item.path}>{item.navName}</Link></li>;
            })}

            <li className="shop">Shop</li>
          </ul>
          <div className="littleButtons">
            <img src={icon1} alt="" className="firstlittle"/>
            <img src={icon2} alt="" />
            <img src={icon3} alt="" />
            <img src={icon4} alt="" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Newnavbar;
