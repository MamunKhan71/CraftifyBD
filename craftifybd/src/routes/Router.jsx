import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AboutUs from "../pages/AboutUs";
import ErrorPage from "../pages/ErrorPage";
import FAQ from "../pages/FAQs";
import ProductDetails from "../pages/ProductDetails";
import ProductList from "../pages/ProductList";
import UserProfile from "../pages/UserProfile";
import AddProducts from "../pages/AddProducts";
import ProtectedContent from "./ProtectedContent";
import MyProducts from "../pages/MyProducts";
import LoginProtection from "./LoginProtection";
const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <LoginProtection><Login /></LoginProtection>
            },
            {
                path: '/register',
                element: <LoginProtection><Register /></LoginProtection>
            },
            {
                path: '/about-us',
                element: <AboutUs />
            },
            {
                path: '/faq',
                element: <FAQ />
            },
            {
                path: '/products',
                element: <ProductList />
            },
            {
                path: '/myproducts',
                element: <ProtectedContent><MyProducts /></ProtectedContent>
            },
            {
                path: '/products/:id',
                element: <ProtectedContent><ProductDetails /></ProtectedContent>
            },
            {
                path: '/profile',
                element: <UserProfile />
            },
            {
                path: '/addproducts',
                element: <ProtectedContent><AddProducts /></ProtectedContent>
            }
        ]
    },
]);

export default Router;