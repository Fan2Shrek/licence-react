import { Outlet } from "react-router-dom";
import Navbar from "../components/Layout/navbar";
import Footer from "../components/Layout/footer";

const Layout = (props) => {
    console.log(props)

    return <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
}

export default Layout;
