import React from "react";

import "./App.scss";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./Routes";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Signin from "./Pages/Sign_in/Signin";
import Signup from "./Pages/Sign_up/Signup";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.SIGN_IN} element={<Signin />}/>
          <Route path={ROUTES.SIGN_UP} element={<Signup />}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
