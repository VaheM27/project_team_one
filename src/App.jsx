import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/feature/Navbar/Navbar";
import Features from "./components/feature/Features/Features";
import Logos from "./components/feature/Logos/Logos";
import DealSection from "./components/Section2/DealSection";
import Newarrivals from "./components/feature/Newarrivals/Newarrivals";
import FollowUs from "./components/feature/FollowUs/FollowUs";
import SupportCenter from "./Pages/SupportCenter";
import Invoicing from "./Pages/Invoicing";
import Careers from "./Pages/Careers";
import Contract from "./Pages/Contract";
import Blog from "./Pages/Blog";
import FAQ from "./Pages/FAQ";
import Error404 from "./Pages/Error404";
import LastSec from "./components/LastSec/LastSec";
import Footer from "./components/Footer/Footer";
import Peaky from "./components/feature/Peaky/Peaky";
import Costumersays from "./components/feature/Costumersays/Costumersays";

import "./App.scss";
import ROUTES from "./Routes";
import Layout from "./Layout/Layout";
import Signin from "./components/feature/Sign_in/Signin";
import Home from "./Pages1/Home/Home";

const App = () => {
  return (
    // <div className="App">
    //   <Navbar />
    //   <Logos />
    //   <DealSection />
    //   <Newarrivals />
    //   <Peaky />
    //   <Features />
    //   <FollowUs />
    //   <Costumersays />
    //   <Router>
    //     <Routes>
    //       {/* <Route path="/" element={<Navbar/>} /> */}
    //       <Route path="/support-center" element={<SupportCenter />} />
    //       <Route path="/invoicing" element={<Invoicing />} />
    //       <Route path="/contract" element={<Contract />} />
    //       <Route path="/careers" element={<Careers/>} />
    //       <Route path="/blog" element={<Blog />} />
    //       <Route path="/faq" element={<FAQ />} />
    //       <Route path="*" element={<Error404 />} />
    //     </Routes>
    //     <LastSec />
    //     <Footer />
    //   </Router>
    // </div>

    <div className="App">

      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.DEALS} element={<DealSection />} />
          <Route path={ROUTES.NEW_ARRIVALS} element={<Newarrivals/>} />
          <Route path={ROUTES.PACKAGES} element={<Peaky />} />
          <Route path={ROUTES.SIGN_IN} element={<Signin />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
