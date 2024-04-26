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
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
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
                path: '/details',
                element: <ProductDetails />
            },
            {
                path: '/products',
                element: <ProductList />
            }
        ]
    },
]);

export default Router;