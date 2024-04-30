import { PiNewspaperFill } from "react-icons/pi";
import { TbFileScissors } from "react-icons/tb";
import { FaPaperPlane } from "react-icons/fa";
import { SiMedibangpaint } from "react-icons/si";
import { BsFillLampFill } from "react-icons/bs";
import { GiCrackedGlass } from "react-icons/gi";
import { Link } from "react-router-dom";
const Category = () => {
    return (
        <div className="p-4 space-y-24">
            <p className="text-2xl text-center font-semibold mb-2">Browse By Category</p>
            <div className="grid gap-12 grid-cols-2 lg:grid-cols-3">
                <Card title="Card Making" Icon={PiNewspaperFill} />
                <Card title="Scrapbooking" Icon={TbFileScissors} />
                <Card title="Paper Quilling & origami" Icon={FaPaperPlane} />
                <Card title="Glass Painting" Icon={SiMedibangpaint} />
                <Card title="Lampworking" Icon={BsFillLampFill} />
                <Card title="Glass Dying & Staining" Icon={GiCrackedGlass} />
            </div>
        </div>
    );
};

const Card = ({ title, Icon, href }) => {
    return (
        <Link to={`/productcategory/${title}`}
            href={href}
            className="w-full shadow-md p-4 rounded relative overflow-hidden group bg-white flex flex-col items-center justify-center"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
            <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
            <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
                {title}
            </h3>
        </Link>
    );
};

export default Category;