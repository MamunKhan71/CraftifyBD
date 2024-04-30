import { PiNewspaperFill } from "react-icons/pi";
import { TbFileScissors } from "react-icons/tb";
import { FaPaperPlane } from "react-icons/fa";
import { SiMedibangpaint } from "react-icons/si";
import { BsFillLampFill } from "react-icons/bs";
import { GiCrackedGlass } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Category = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div className="lg:p-4 space-y-8 lg:space-y-24">
            <p className="text-2xl text-center font-semibold mb-2">Browse By Category</p>
            <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    category.map(cat => <><Card title={cat.categoryName} image={cat.categoryImage} /></>)
                }
            </div>
        </div>
    );
};

const Card = ({ title, image }) => {
    return (
        <Link to={`/productcategory/${title}`}
            style={{ backgroundImage: `url("${image}")` }}
            className={`bg-cover w-full shadow-md rounded relative overflow-hidden group bg-white flex flex-col items-center justify-center`}
        >
            <div className="bg-black opacity-70 p-24 w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
                <h3 className="font-medium text-xl text-center text-white group-hover:text-white relative z-10 duration-300">
                    {title}
                </h3>
            </div>
        </Link>
    );
};

export default Category;