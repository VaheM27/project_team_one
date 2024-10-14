import "./Signin.scss";

import Signin_img from "../../../assets/images/Signin_img.png";
import Google from "../../../assets/images/google.png";
import Gmail from "../../../assets/images/gmail.png";

const Signin = () => {
  return (
    <div className="container">
      <div className="signInBox">
        <div className="signInLeft">
          <img src={Signin_img} alt="" />
        </div>
        <div className="signInRigth">
          <p>FASCO</p>
          <div className="signInBlock">
            <p>Sign In To FASCO</p>
            <div className="buttons">
              <button className="button">
                <img src={Google} alt="" />
                Sign up with Google
              </button>
              <button className="button">
                <img src={Gmail} alt="" />
                Sign up with Email
              </button>
            </div>
            <div className="inputs">
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </div>
            <div className="buttonsBig">
              <button className="firstBut">Sign In</button>
              <button className="secBut">Register Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
