import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/feature/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Newnavbar from "../components/Newnavbar/Newnavbar";

const Layout = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div>
      {location.pathname === '/shop' ? <Newnavbar /> : <Navbar />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
