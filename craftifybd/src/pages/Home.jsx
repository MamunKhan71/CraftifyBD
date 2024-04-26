import Category from "../components/Category";
import ClientReviews from "../components/ClientReviews";
import CraftItems from "../components/CraftItems";
import Hero from "../components/Hero";

const Home = () => {
    return (
        <div className="space-y-24">
            <Hero />
            <Category />
            <CraftItems />
            {/* <ClientReviews /> */}
        </div>
    );
};

export default Home;