import Banner from "../components/Banner";
import Category from "../components/Category";
import ContactUs from "../components/ContactUs";
// import ClientReviews from "../components/ClientReviews";
import CraftItems from "../components/CraftItems";
import FeaturedProducts from "../components/FeaturedProducts";
import Header from "../components/Header";
import Hero from "../components/Hero";
import OurFeatures from "../components/OurFeatures";

const Home = () => {
    return (
        <div className="space-y-24">
            {/* <Header/> */}
            <Banner />
            <Category />
            <CraftItems />
            {/* <FeaturedProducts /> */}
            <OurFeatures />
            <ContactUs />
            {/* <ClientReviews /> */}
        </div>
    );
};

export default Home;