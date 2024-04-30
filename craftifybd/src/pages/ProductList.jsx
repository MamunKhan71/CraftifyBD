import { useContext, useEffect, useState } from "react";
import { IoFilter } from "react-icons/io5";
import { MdDashboardCustomize } from "react-icons/md";
import { MdDoneAll } from "react-icons/md";
import { ContentContext } from "../provider/ContentProvider";
import { Link } from "react-router-dom";
const ProductList = () => {
    const { products, loading } = useContext(ContentContext)
    const [product, setProduct] = useState([])
    useEffect(() => {
        setProduct(products)
    }, [products])
    const handleFilter = () => {
        fetch('https://craftifybd.vercel.app/productfilter')
            .then(res => res.json())
            .then(data => setProduct(data))
    }
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
                        <li><button onClick={() => setProduct(products)}><MdDoneAll />All</button></li>
                        <li><button onClick={handleFilter}><MdDashboardCustomize />Customization</button></li>
                    </ul>
                </div>
            </div>
            {
                loading ?
                    <span className="loading loading-infinity loading-lg"></span>
                    :
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Item Name</th>
                                    <th>Price</th>
                                    <th>Processing Time</th>
                                    <th>Stock</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    product.map(product => <>
                                        <tr>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={product.itemPhoto} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{product.itemName}</div>
                                                        <div className="text-sm opacity-50">{product.subCategory}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {product.price}
                                            </td>
                                            <td>{product.processingTime}</td>
                                            <td>{product.stockStatus}</td>
                                            <th>
                                                <Link to={`/products/${product._id}`} className="btn btn-sm">View Details</Link>
                                            </th>
                                        </tr>
                                    </>)
                                }
                            </tbody>
                        </table>
                    </div>

            }
        </div>
    );
};

export default ProductList;