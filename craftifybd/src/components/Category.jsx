import { GiClayBrick, GiStoneTablet, GiPorcelainVase } from "react-icons/gi";
import { SiKingstontechnology } from "react-icons/si";
import { MdArchitecture, MdOutlineHomeWork } from "react-icons/md";
const Category = () => {
    return (
        <div className="p-4 space-y-24">
            <p className="text-2xl text-center font-semibold mb-2">Browse By Category</p>
            <div className="grid gap-12 grid-cols-2 lg:grid-cols-3">
                <Card title="Clay-made pottery" href="#" Icon={GiClayBrick} />
                <Card title="Stoneware" href="#" Icon={GiStoneTablet} />
                <Card title="Porcelain" href="#" Icon={GiPorcelainVase} />
                <Card title="Terra Cotta" href="#" Icon={SiKingstontechnology} />
                <Card title="Ceramics & Architectural" href="#" Icon={MdArchitecture} />
                <Card title="Home decor pottery" href="#" Icon={MdOutlineHomeWork} />
            </div>
        </div>
    );
};

const Card = ({ title, Icon, href }) => {
    return (
        <a
            href={href}
            className="w-full shadow-md p-4 rounded relative overflow-hidden group bg-white flex flex-col items-center justify-center"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
            <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
            <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
                {title}
            </h3>
        </a>
    );
};

export default Category;