import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import { IoMdTime } from "react-icons/io";
import '@smastrom/react-rating/style.css'
import { BiSolidCustomize } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ContentContext } from "../provider/ContentProvider";

const CraftItems = () => {
  const [rating, setRating] = useState(4);
  const [product, setProduct] = useState([])
  const { products } = useContext(ContentContext)
  useEffect(() => {
    setProduct(products.slice(0, 6))
  }, [products])
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold text-center">Our Category</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {
          product.map(product => <>
            <div className="card bg-base-100 shadow-lg transition hover:scale-105 hover:shadow-lg">
              <div className="relative">
                <figure className="px-5 pt-5">
                  <img src={product.itemPhoto} alt="Shoes" className="rounded-xl h-72 w-full object-cover" />
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
          </>)
        }

      </div>
      <div className="flex items-center justify-center ">
        <Link to="/products" className="rounded px-5 py-2.5 overflow-hidden group bg-blue-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-800 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300">
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">View More</span>
        </Link>
      </div>
    </div>
  );
};

export default CraftItems;