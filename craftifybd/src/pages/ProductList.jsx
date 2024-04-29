import { Rating } from "@smastrom/react-rating";
import { IoMdTime } from "react-icons/io";
import '@smastrom/react-rating/style.css'
import { useContext, useEffect, useState } from "react";
import { IoFilter } from "react-icons/io5";
import { MdDashboardCustomize } from "react-icons/md";
import { MdDoneAll } from "react-icons/md";
import { ContentContext } from "../provider/ContentProvider";
import { Link } from "react-router-dom";
const ProductList = () => {
    const [rating, setRating] = useState(4);
    const { products, loading } = useContext(ContentContext)
    return (
        <div>
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                    Browse all the products
                </h2>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                    Answers to the most frequently asked questions.
                </p>
            </div>
            <div className="flex justify-end w-full items-center my-6">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1"><IoFilter /> Filter by</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a><MdDoneAll />All</a></li>
                        <li><a><MdDashboardCustomize />Customization</a></li>
                    </ul>
                </div>
            </div>
            {
                loading ?
                    <span className="loading loading-infinity loading-lg"></span>
                    : <div className="grid grid-cols-4 gap-6">
                        {
                            products.map(product => <>
                                <div className="card bg-base-100 shadow-lg transition hover:scale-105 hover:shadow-lg">
                                    <div className="relative">
                                        <figure className="px-5 pt-5">
                                            <img src="/images/product1.jpg" alt="Shoes" className="rounded-xl h-72 w-full object-cover" />
                                        </figure>
                                        <div className="flex gap-2 absolute top-7 right-7">
                                            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 dark:text-blue-500">
                                                <span className="size-1.5 inline-block rounded-full bg-blue-800 dark:bg-blue-500"></span>
                                                <span className="text-blue-800 dark:text-blue-500">In Stock</span>
                                            </span>
                                            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 dark:text-blue-500">
                                                < IoMdTime />
                                                <span className="text-blue-800 dark:text-blue-500">2 days</span>
                                            </span>
                                        </div>
                                        <span className="absolute bottom-3 left-8 inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 dark:text-blue-500">
                                            <span className="size-1.5 inline-block rounded-full bg-blue-800 dark:bg-blue-500"></span>
                                            {product.subCategory}
                                        </span>
                                    </div>
                                    <div className="card-body items-start">
                                        <div className="flex justify-between w-full">
                                            <h2 className="card-title">{product.itemName}</h2>
                                            <div className="flex gap-2 items-center">
                                                <Rating
                                                    style={{ maxWidth: 100 }}
                                                    value={Math.floor(product.rating)}
                                                    readOnly={true}
                                                /> {product.rating}
                                            </div>
                                        </div>
                                        <p className="text-justify text-gray-500">{product.itemDescription.slice(0, 70)}...</p>
                                        <p className="inline-flex gap-2 items-center text-3xl font-bold">$ {product.price}</p>
                                        <div className="card-actions w-full">
                                            <Link to={`/products/${product._id}`} className="w-full rounded px-5 py-2.5 overflow-hidden group bg-blue-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-800 text-white hover:ring-2 hover:ring-offset-2 btn hover:ring-blue-400 transition-all ease-out duration-300">
                                                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                                <span className="relative">View Details</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                            )
                        }
                    </div>
            }
        </div>
    );
};

export default ProductList;