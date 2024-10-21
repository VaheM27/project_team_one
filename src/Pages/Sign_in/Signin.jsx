import Signin_img from "../../assets/images/Signin_img.png";
import Google from "../../assets/images/google.png";
import Gmail from "../../assets/images/gmail.png";

import "./Signin.scss";
import { useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setEmail({
      ...email,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail({
      email: "",
      password: "",
    });
  };

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
            <form className="inputs" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                value={email.email}
                onChange={handleChange}
                required
                placeholder="Email"
              />
              <input
                type="password"
                name="password"
                value={email.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
              <div className="buttonsBig">
                <button className="firstBut">Sign In</button>
                <button className="secBut">Register Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
