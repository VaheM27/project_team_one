import "./Signin.scss";

import Signin_img from "../../../Assets/Images/Signin_img.png";
import Google from "../../../Assets/Images/google.png";
import Gmail from "../../../Assets/Images/gmail.png";

const Signin = () => {
  return (
    <div className=".container">
      <div className="signInBox">
        <div className="signInLeft">
          <img src={Signin_img} alt="" />
        </div>
        <div className="signInRigth">
          <p>FASCO</p>
          <div className="signInBlock">
            <p>Sign In To FASCO</p>
            <div className="buttons">
              <button>
                <img src={Google} alt="" />
                Sign up with Google
              </button>
              <button>
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
