import { useContext, useEffect, useState } from "react";
import Banner from "../components/Banner";
import CallToAction from "../components/CallToAction";
import Category from "../components/Category";
import ContactUs from "../components/ContactUs";
// import ClientReviews from "../components/ClientReviews";
import CraftItems from "../components/CraftItems";
import FeaturedProducts from "../components/FeaturedProducts";
import Header from "../components/Header";
import Hero from "../components/Hero";
import OurFeatures from "../components/OurFeatures";
import Stats from "../components/Stats";
import { ContentContext } from "../provider/ContentProvider";

const Home = () => {
    const [product, setProduct] = useState([])
    const { products } = useContext(ContentContext)
    useEffect(() => {
        products
    }, [])
    return (
        <div className="space-y-24">
            {/* <Header/> */}
            <Banner />
            <Stats />
            <Category />
            <CraftItems />
            {/* <FeaturedProducts /> */}
            <OurFeatures />
            <ContactUs />
            <CallToAction />
            {/* <ClientReviews /> */}
        </div>
    );
};

export default Home;