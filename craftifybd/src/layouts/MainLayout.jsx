import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
    return (
        <div className="container mx-auto my-6 poppins">
            <Navbar />
            <Outlet />
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default MainLayout;