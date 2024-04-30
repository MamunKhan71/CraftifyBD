import Banner from "../components/Banner";
import CallToAction from "../components/CallToAction";
import Category from "../components/Category";
import ContactUs from "../components/ContactUs";
import CraftItems from "../components/CraftItems";
import OurFeatures from "../components/OurFeatures";
import Stats from "../components/Stats";

const Home = () => {
    return (
        <div className="space-y-24">
            <Banner />
            <Stats />
            <Category />
            <CraftItems />
            <OurFeatures />
            <ContactUs />
            <CallToAction />
        </div>
    );
};

export default Home;