import Navbar from "./components/feature/Navbar/Navbar";

import "./App.scss";
import Signin from "./components/feature/Sign_in/Signin";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Signin />
      {/* <Router>
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
      </Router> */}
    </div>
  );
}

export default App;
