import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa";
import Swal from 'sweetalert2'
export const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});
const UpdateProduct = ({ products }) => {
    console.log(products);
    const [product, setProduct] = useState([])
    const [selectedStock, setSelectedStock] = useState(products.stockStatus);
    const [selectedCustomization, setSelectedCustomization] = useState(products.customization);
    console.log(selectedStock, selectedCustomization);
    useEffect(() => {
        setProduct(products)
    }, [products])
    const [sliderValue, setSliderValue] = useState(products.rating)
    const [photo, setPhoto] = useState(products.itemPhoto)
    const {
        register,
        handleSubmit,
    } = useForm();
    const handleProductData = data => {
        const itemName = data.itemName;
        const subCategory = data.subCategory;
        const price = data.price;
        const rating = data.rating;
        const customization = data.customization;
        const processingTime = data.processingTime;
        const stockStatus = data.stock;
        const itemDescription = data.description;

        const newProduct = {
            itemPhoto: photo || product.itemPhoto,
            itemName: itemName || product.itemName,
            subCategory: subCategory || product.subCategory,
            price: price || product.price,
            rating: rating || product.rating,
            customization: customization || product.customization,
            processingTime: processingTime || product.processingTime,
            stockStatus: stockStatus || product.stockStatus,
            itemDescription: itemDescription || product.itemDescription,
        };

        fetch(`http://localhost:5000/userproducts/${product._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        }).then((res) => {
            if (res.status) {
                Toast.fire({
                    icon: "success",
                    title: "data updated successfully"
                });
            } else {
                Toast.fire({
                    icon: "error",
                    title: "Data could not be updated!"
                });
            }
        })


    }
    return (
        <div>
            <>
                {/* Card Section */}
                <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-neutral-200 text-center my-12">
                        Update craft Item
                    </h2>
                    {/* Card */}
                    <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-900">
                        <form onSubmit={handleSubmit(handleProductData)}>
                            {/* Section */}
                            <div className="space-y-6 grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
                                <div className="sm:col-span-12">
                                    <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                                        Item Details
                                    </h2>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="af-submit-application-email"
                                        className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
                                    >
                                        Item Name
                                    </label>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-9">
                                    <input {...register('itemName')} defaultValue={product?.itemName}
                                        id="af-submit-application-email"
                                        type="text"
                                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                    />
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="af-submit-application-email"
                                        className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
                                    >
                                        Item Photo Url
                                    </label>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-9">
                                    <div className="flex rounded-lg shadow-sm">
                                        <div className="px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 dark:bg-neutral-700 dark:border-neutral-600">
                                            <span className="text-sm text-gray-500 dark:text-neutral-400">
                                                http://
                                            </span>
                                        </div>
                                        <input {...register('photo')}
                                            type="text"
                                            onChange={e => setPhoto(e.target.value)}
                                            defaultValue={product.itemPhoto || ""}
                                            name="hs-input-with-add-on-url"
                                            id="hs-input-with-add-on-url"
                                            className="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                            placeholder="www.example.com"
                                        />
                                    </div>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-3">
                                    <div className="inline-block">
                                        <label
                                            htmlFor="af-submit-application-bio"
                                            className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
                                        >
                                            Subcategory Name
                                        </label>
                                    </div>
                                </div>
                                <div className="sm:col-span-9">
                                    <select defaultValue={products.subCategory} {...register('subCategory')} className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                                        <option value={`Card Making`}>Card Making</option>
                                        <option value={`Scrapbooking`}>Scrapbooking</option>
                                        <option value={`Paper Quilling & origami`}>Paper Quilling & origami</option>
                                        <option value={`glass Painting`}>Glass Painting</option>
                                        <option value={`Lampworking`}>Lampworking</option>
                                        <option value={`Glass Dying & Staining`}>Glass Dying & Staining</option>
                                    </select>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-3">
                                    <div className="inline-block">
                                        <label
                                            htmlFor="af-submit-application-price"
                                            className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
                                        >
                                            Price
                                        </label>
                                    </div>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-9">
                                    <input {...register('price')}
                                        defaultValue={product.price}
                                        id="af-submit-application-price"
                                        type="number"
                                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                    />
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="af-submit-application-email"
                                        className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
                                    >
                                        Rating
                                    </label>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-9">
                                    <input {...register('rating')} type="range" min={1} max={5} defaultValue={sliderValue} className="range range-xs" step={1} onChange={(e) => setSliderValue(e.target.value)} />
                                    <div className="w-full flex justify-between text-xs px-2">
                                        <span><FaStar className="text-lg text-amber-500" /></span>
                                        <span><FaStar className="text-lg text-amber-500" /></span>
                                        <span><FaStar className="text-lg text-amber-500" /></span>
                                        <span><FaStar className="text-lg text-amber-500" /></span>
                                        <span><FaStar className="text-lg text-amber-500" /></span>
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <div className="inline-block">
                                        <label
                                            htmlFor="af-submit-application-bio"
                                            className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
                                        >
                                            Customization
                                        </label>
                                    </div>
                                </div>
                                <div className="sm:col-span-9">
                                    <div className="grid sm:grid-cols-2 gap-2">
                                        <label htmlFor="hs-radio-in-form" className="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                            <input value={`Yes`} defaultChecked={selectedCustomization === "Yes"} {...register('customization')} type="radio" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-radio-in-form" />
                                            <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">Yes</span>
                                        </label>
                                        <label htmlFor="hs-radio-checked-in-form" className="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                            <input value={`No`} defaultChecked={selectedCustomization === "No"} {...register('customization')} type="radio" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-radio-checked-in-form" />
                                            <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">No</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="af-submit-application-email"
                                        className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
                                    >
                                        Processing Time
                                    </label>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-9">
                                    <input {...register('processingTime')}
                                        defaultValue={product.processingTime}
                                        id="af-submit-application-email"
                                        type="text"
                                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                    />
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="af-submit-application-email"
                                        className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
                                    >
                                        Stock Status
                                    </label>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-9 ">
                                    <ul className="flex flex-col sm:flex-row">
                                        <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-white">
                                            <div className="relative flex items-start w-full">
                                                <div className="flex items-center h-5">
                                                    <input {...register('stock')} defaultChecked={selectedStock === 'In Stock'}
                                                        id="hs-horizontal-list-group-item-radio-1"
                                                        type="radio" value={`In Stock`}
                                                        className="border-gray-200 rounded-full disabled:opacity-50 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                    />
                                                </div>
                                                <label
                                                    htmlFor="hs-horizontal-list-group-item-radio-1"
                                                    className="ms-3 block w-full text-sm text-gray-600 dark:text-neutral-500"
                                                >
                                                    In Stock
                                                </label>
                                            </div>
                                        </li>
                                        <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-white">
                                            <div className="relative flex items-start w-full">
                                                <div className="flex items-center h-5">
                                                    <input {...register('stock')}
                                                        defaultChecked={selectedStock === 'Made to order'}
                                                        id="hs-horizontal-list-group-item-radio-2"
                                                        type="radio"
                                                        value={`Made to order`}
                                                        className="border-gray-200 rounded-full disabled:opacity-50 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                    />
                                                </div>
                                                <label
                                                    htmlFor="hs-horizontal-list-group-item-radio-2"
                                                    className="ms-3 block w-full text-sm text-gray-600 dark:text-neutral-500"
                                                >
                                                    Made to order
                                                </label>
                                            </div>
                                        </li>
                                        <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-white">
                                            <div className="relative flex items-start w-full">
                                                <div className="flex items-center h-5">
                                                    <input {...register('stock')}
                                                        defaultChecked={selectedStock === 'Out of stock'}
                                                        id="hs-horizontal-list-group-item-radio-3"
                                                        type="radio"
                                                        value={`Out of stock`}
                                                        className="border-gray-200 rounded-full disabled:opacity-50 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                    />
                                                </div>
                                                <label
                                                    htmlFor="hs-horizontal-list-group-item-radio-3"
                                                    className="ms-3 block w-full text-sm text-gray-600 dark:text-neutral-500"
                                                >
                                                    Out of stock
                                                </label>
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-3">
                                    <div className="inline-block">
                                        <label
                                            htmlFor="af-submit-application-bio"
                                            className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
                                        >
                                            Item Description
                                        </label>
                                    </div>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-9">
                                    <textarea {...register('description')}
                                        defaultValue={product.itemDescription}
                                        id="af-submit-application-bio"
                                        className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                        rows={6}
                                        placeholder="Add a cover letter or anything else you want to share."
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                            >
                                Update Product
                            </button>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </form>

                    </div>
                    {/* End Card */}
                </div>
                {/* End Card Section */}
            </>

        </div>
    );
};

export default UpdateProduct;
