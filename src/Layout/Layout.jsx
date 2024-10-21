import { Outlet } from "react-router-dom"
import Navbar from "../components/feature/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout