import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import '@smastrom/react-rating/style.css'
import { RiEye2Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { Toast } from "./AddProducts";
import UpdateProduct from "../components/UpdateProduct";
import Swal from "sweetalert2";
const MyProducts = () => {
    const [product, setProduct] = useState([])
    const { user } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(`https://craftifybd.vercel.app/userproducts/${user?.uid}`)
            .then((res) => res.json())
            .then(data => setProduct(data))
            .then(setLoading(false))
    }, [user])

    const handleDelete = (products) => {
        if (products.uid === user?.uid) {
            Swal.fire({
                title: 'Are you sure to delete?',
                text: 'Do you want to delete this from database?',
                icon: 'warning',
                confirmButtonText: 'Yes, delete it'
            }).then((res) => {
                if (res.isConfirmed) {
                    fetch(`https://craftifybd.vercel.app/userproducts/${products._id}`, {
                        method: "DELETE",
                    }).then(() => {
                        setProduct(product.filter(prod => prod._id !== products._id))
                        Toast.fire({
                            icon: "success",
                            title: "Data deleted successfully!"
                        });
                    })
                }
            })

        }
    }
    return (
        <div className="relative overflow-x-auto sm:rounded-lg min-h-screen">
            <h1 className="text-2xl font-bold text-center my-12">My Products</h1>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 shadow-md">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Item Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Processing Time
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Stock Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loading ? <span className="loading loading-infinity loading-lg"></span> : <>
                            {
                                product.map(product => <>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th
                                            scope="row"
                                            className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            <img
                                                className="w-10 h-10 rounded-full"
                                                src={product.itemPhoto ? product.itemPhoto : "/images/dummy.png"}
                                                alt="Jese image"
                                            />
                                            <div className="ps-3">
                                                <div className="text-base font-semibold">{product.itemName}</div>
                                                <div className="font-normal text-gray-500">
                                                    {product.subCategory}
                                                </div>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">${product.price}</td>
                                        <td className="px-6 py-4">{product.processingTime}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2" />{" "}
                                                {product.stockStatus}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col sm:inline-flex sm:flex-row rounded-lg shadow-sm">
                                                <button className="tooltip tooltip-top py-3 px-4 inline-flex items-center gap-x-2 -mt-px -ms-px first:rounded-t-md last:rounded-b-md sm:first:rounded-s-md sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-md text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" onClick={() => document.getElementById(`${product._id}`).showModal()}><RiEye2Line /></button>
                                                <dialog id={`${product._id}`} className="modal">
                                                    <div className="modal-box space-y-4">
                                                        <img className="rounded-2xl" src="/images/banner-1.jpg" alt="" />
                                                        <h1 className="text-left text-xl">{product.itemName}</h1>
                                                        <hr />
                                                        <div className="flex justify-between items-start w-full gap-4">
                                                            <div>
                                                                <p>Category</p>
                                                                <p>Price</p>
                                                                <p>Rating</p>
                                                                <p>Stock</p>
                                                                <p>Description</p>
                                                            </div>
                                                            <div>
                                                                <p>{product.subCategory}</p>
                                                                <p>{product.price}</p>
                                                                <p>{product.stockStatus}</p>
                                                                <p>{product.rating}</p>
                                                                <p>{product.itemDescription}</p>
                                                            </div>
                                                        </div>
                                                        <div className="modal-action">
                                                            <form method="dialog">
                                                                {/* if there is a button in form, it will close the modal */}
                                                                <button className="btn">Close</button>
                                                            </form>
                                                        </div>
                                                    </div>

                                                </dialog>
                                                <button className="w-full tooltip tooltip-top py-3 px-4 inline-flex items-center gap-x-2 -mt-px -ms-px first:rounded-t-md last:rounded-b-md sm:first:rounded-s-md sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-md text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" onClick={() => document.getElementById(`add${product._id}`).showModal()}><BiEditAlt /></button>
                                                <dialog id={`add${product._id}`} className="modal">
                                                    <div className="modal-box w-11/12 max-w-5xl">
                                                        <UpdateProduct products={product} />
                                                    </div>

                                                </dialog>
                                                <button onClick={() => handleDelete(product)}
                                                    data-tip="Delete" type="button"
                                                    className="tooltip tooltip-top py-3 px-4 inline-flex items-center gap-x-2 -mt-px -ms-px first:rounded-t-md last:rounded-b-md sm:first:rounded-s-md sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-md text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                                                >
                                                    <MdOutlineDeleteSweep />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </>)
                            }
                        </>
                    }
                </tbody>
            </table>
        </div>

    );
};

export default MyProducts;