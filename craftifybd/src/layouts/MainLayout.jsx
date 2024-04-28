import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { themeChange } from 'theme-change'
import { useEffect } from "react";
const MainLayout = () => {
    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
    }, [])
    return (
        <div className="container mx-auto my-6 poppins">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;