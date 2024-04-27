import { useState } from "react";
import { FaStar } from "react-icons/fa";
const AddProducts = () => {
    const [sliderValue, setSliderValue] = useState(1)
    console.log(sliderValue);
    return (
        <div>
            <>
                {/* Card Section */}
                <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-neutral-200 text-center my-12">
                        Add new craft Item
                    </h2>
                    {/* Card */}
                    <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-900">
                        <form>
                            {/* Section */}
                            <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
                                <div className="sm:col-span-12">
                                    <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                                        Personal Details
                                    </h2>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="af-submit-application-full-name"
                                        className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
                                    >
                                        Full name
                                    </label>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-9">
                                    <div className="sm:flex">
                                        <input
                                            id="af-submit-application-email"
                                            type="text"
                                            className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                        />
                                    </div>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="af-submit-application-email"
                                        className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
                                    >
                                        Email
                                    </label>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-9">
                                    <input
                                        id="af-submit-application-email"
                                        type="email"
                                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                    />
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-3">
                                    <div className="inline-block">
                                        <label
                                            htmlFor="af-submit-application-phone"
                                            className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
                                        >
                                            Phone
                                        </label>
                                    </div>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-9">
                                    <input
                                        id="af-submit-application-phone"
                                        type="text"
                                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                    />
                                </div>
                            </div>
                            {/* End Section */}
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
                                    <input
                                        id="af-submit-application-email"
                                        type="text"
                                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                    />
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
                                    <select className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                                        <option selected disabled>Select one</option>
                                        <option value={`Card Making`}>Card Making</option>
                                        <option value={`Scrapbooking`}>Scrapbooking</option>
                                        <option value={`Paper Quilling & origami`}>Paper Quilling & origami</option>
                                        <option>Glass Painting</option>
                                        <option>Lampworking</option>
                                        <option>Glass Dying & Staining</option>
                                    </select>
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="af-submit-application-email"
                                        className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
                                    >
                                        Price
                                    </label>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-9">
                                    <input
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
                                        Rating
                                    </label>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-9">
                                    <input type="range" min={1} max={5} value={sliderValue} className="range range-xs" step={1} onChange={(e) => setSliderValue(e.target.value)} />
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
                                        <label
                                            htmlFor="hs-radio-in-form"
                                            className="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                                        >
                                            <input
                                                type="radio"
                                                name="hs-radio-in-form"
                                                className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                id="hs-radio-in-form"
                                            />
                                            <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                                                Yes
                                            </span>
                                        </label>
                                        <label
                                            htmlFor="hs-radio-checked-in-form"
                                            className="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                                        >
                                            <input
                                                type="radio"
                                                name="hs-radio-in-form"
                                                className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                id="hs-radio-checked-in-form"
                                                defaultChecked=""
                                            />
                                            <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                                                No
                                            </span>
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
                                    <input
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
                                                    <input
                                                        id="hs-horizontal-list-group-item-radio-1"
                                                        name="hs-horizontal-list-group-item-radio"
                                                        type="radio"
                                                        className="border-gray-200 rounded-full disabled:opacity-50 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                        defaultChecked=""
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
                                                    <input
                                                        id="hs-horizontal-list-group-item-radio-2"
                                                        name="hs-horizontal-list-group-item-radio"
                                                        type="radio"
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
                                                    <input
                                                        id="hs-horizontal-list-group-item-radio-3"
                                                        name="hs-horizontal-list-group-item-radio"
                                                        type="radio"
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
                                    <textarea
                                        id="af-submit-application-bio"
                                        className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                        rows={6}
                                        placeholder="Add a cover letter or anything else you want to share."
                                        defaultValue={""}
                                    />
                                </div>

                                {/* End Col */}

                            </div>
                            {/* Section */}
                            <div className="py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
                                <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                                    Submit application
                                </h2>
                                <p className="mt-3 text-sm text-gray-600 dark:text-neutral-400">
                                    In order to contact you with future jobs that you may be interested
                                    in, we need to store your personal data.
                                </p>
                                <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                                    If you are happy for us to do so please click the checkbox below.
                                </p>
                                <div className="mt-5 flex">
                                    <input
                                        type="checkbox"
                                        className="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                        id="af-submit-application-privacy-check"
                                    />
                                    <label
                                        htmlFor="af-submit-application-privacy-check"
                                        className="text-sm text-gray-500 ms-2 dark:text-neutral-400"
                                    >
                                        Allow us to process your personal information.
                                    </label>
                                </div>
                            </div>
                            {/* End Section */}
                            <button
                                type="button"
                                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                            >
                                Add Product
                            </button>
                        </form>
                    </div>
                    {/* End Card */}
                </div>
                {/* End Card Section */}
            </>

        </div>
    );
};

export default AddProducts;