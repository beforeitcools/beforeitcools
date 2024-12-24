import Footer from "../component/Common/Footer";
import Header from "../component/Common/Header";
import Navbar from "../component/Common/Navbar";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return(
        <>
            {/* <Header/> */}
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout;