import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SupportCenter from "../src/Pages/SupportCenter";
import Invoicing from "../src//Pages/Invoicing";
import Contract from "../src/Pages/Contract";
import Careers from "../src/Pages/Careers";
import Blog from "../src/Pages/Blog";
import FAQ from "../src/Pages/FAQ";
import Error404 from "../src/Pages/Error404";
import Navbar from "./components/feature/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


import "./App.scss";
import DealSection from "./components/Section2/DealSection";
import Newarrivals from "./components/feature/Newarrivals/Newarrivals";

import Logos from "./components/feature/Logos/Logos";

import Peaky from "./components/feature/Peaky/Peaky";
import Features from "./components/feature/Features/Features";



const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Logos />
      <DealSection />
      <Newarrivals />
      <Peaky />
      <Features />
      <Router>
      <Routes>
        {/* <Route path="/" element={<Navbar/>} /> */}
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
