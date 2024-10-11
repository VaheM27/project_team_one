import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SupportCenter from "./components/Footer/Pages/SupportCenter";
import Invoicing from "./components/Footer/Pages/Invoicing";
import Contract from "./components/Footer/Pages/Contract";
import Careers from "./components/Footer/Pages/Careers";
import Blog from "./components/Footer/Pages/Blog";
import FAQ from "./components/Footer/Pages/FAQ";
import Error404 from "./components/Footer/Pages/Error404";
import Footer from "./components/Footer/Footer";
import Signin from "./components/feature/Sign_in/Signin";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Signin />
      <Router>
        <Routes>
          <Route path="/support-center" element={<SupportCenter />} />
          <Route path="/invoicing" element={<Invoicing />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
