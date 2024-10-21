import React from "react";

import "./App.scss";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./Routes";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Signin from "./Pages/Sign_in/Signin";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.SIGN_IN} element={<Signin />}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
