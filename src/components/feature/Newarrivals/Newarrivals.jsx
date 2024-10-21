import "./Newarrivals.scss";
import NewData from "./NewData";

const Newarrivals = () => {
  return (
    <div className="container">
      <div className="newArrivals" >
        <div className="newArrivals_first">
          <p className="new">New Arrivals</p>
          <p className="lorem">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus saepe, ducimus recusandae reprehenderit iure dolores
            libero consequatur quos enim accusantium.
          </p>
        </div>
        <ul>
          <li>Men’s Fashion</li>
          <li className="second">Women’s Fashion</li>
          <li>Women Accessories</li>
          <li>Men Accessories</li>
          <li>Discount Deals</li>
        </ul>
        <div className="data">
          {NewData.map((item) => {
            return (
              <div key={item.id} className="post">
                <img src={item.img} alt="" />
                <div className="littleDiv">
                <p>{item.title}</p>
                <img src={item.stars} alt="" />
                </div>
                <p className="views">{item.views}</p>
                <div className="lastDiv">
                    <p className="price">{item.price}</p>
                    <p className="posit">{item.position}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button  id='packages'>View More</button>
      </div>
    </div>
  );
};

export default Newarrivals
