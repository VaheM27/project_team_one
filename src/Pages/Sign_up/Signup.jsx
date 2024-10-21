import Sign_upIMG from "../../assets/images/Sign_upIMG.png";
import Google from "../../assets/images/google.png";
import Gmail from "../../assets/images/gmail.png";

import styles from "./Signup.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../Routes";

const Signup = () => {
  const [email, setEmail] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    password: "",
    confirmPass: "",
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
      fName: "",
      lName: "",
      email: "",
      phone: "",
      password: "",
      confirmPass: "",
    });
  };

  return (
    <div className="container">
      <div className={styles.signInBox}>
        <div className={styles.signInLeft}>
          <img src={Sign_upIMG} alt="" />
        </div>
        <div className={styles.signInRigth}>
          <p>FASCO</p>
          <div className={styles.signInBlock}>
            <p className={styles.create}>Create Account</p>
            <div className={styles.buttons}>
              <button className={styles.button}>
                <img src={Google} alt="" />
                Sign up with Google
              </button>
              <button className={styles.button}>
                <img src={Gmail} alt="" />
                Sign up with Email
              </button>
            </div>
            <div className={styles.orDiv}>
              <hr />
              <p className={styles.or}>Or</p>
              <hr />
            </div>
            <form className={styles.inputs} onSubmit={handleSubmit}>
              <div className={styles.onlyInputs}>
                <div className={styles.inputLeft}>
                  <input
                    type="text"
                    name="fName"
                    value={email.fName}
                    onChange={handleChange}
                    required
                    placeholder="First Name"
                  />
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
                </div>
                <div className={styles.inputRight}>
                  <input
                    type="text"
                    name="lName"
                    value={email.lName}
                    onChange={handleChange}
                    required
                    placeholder="Last Name"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={email.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number"
                  />
                  <input
                    type="password"
                    name="confirmPass"
                    value={email.confirmPass}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                  />
                </div>
              </div>
              <div className={styles.buttonsBig}>
                <button className={styles.firstBut}>Create Account</button>
              </div>
            </form>
            <p className={styles.already}>Already have an account? <Link to={ROUTES.SIGN_IN}>Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
