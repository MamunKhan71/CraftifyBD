import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa";
import Swal from 'sweetalert2'
import { AuthContext } from "../provider/AuthProvider";
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
const EditUserProfile = ({ users }) => {
    const [sliderValue, setSliderValue] = useState(1)
    const {
        register,
        handleSubmit,
    } = useForm();
    const handleUserData = data => {
        const userName = data.name
        const userPhone = data.phone
        const userLocation = data.location
        const userWebsite = data.website
        const gender = data.gender
        const description = data.description
        const updateUser = {
            userName: userName || "",
            userPhone: userPhone || "",
            userLocation: userLocation || "",
            userWebsite: userWebsite || "",
            userGender: gender || "",
            userInfo: description || ""
        }
        fetch(`https://craftifybd.vercel.app/updateuser/${users._id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        }).then(() => {
            Toast.fire({
                icon: "success",
                title: "Profile Updated Successfully!"
            });
        }).catch(() => {
            Toast.fire({
                icon: "error",
                title: "Profile Could not be Updated!"
            });
        })


    }
    return (
        <div>
            <>
                {/* Card Section */}
                <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-neutral-200 text-center my-12">
                        Update Your Profile
                    </h2>
                    {/* Card */}
                    <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-900">
                        <form onSubmit={handleSubmit(handleUserData)}>
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
                                        <input {...register('name')}
                                        defaultValue={users.userName}
                                            id="af-submit-application-email"
                                            type="text"
                                            className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                        />
                                    </div>
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
                                    <input {...register('phone')}
                                    defaultValue={users.userPhone}
                                        id="af-submit-application-price"
                                        type="number"
                                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                    />
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="af-submit-application-full-name"
                                        className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
                                    >
                                        Location
                                    </label>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-9">
                                    <div className="sm:flex">
                                        <input {...register('location')}
                                        defaultValue={users.userLocation}
                                            id="af-submit-application-email"
                                            type="text"
                                            className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="af-submit-application-full-name"
                                        className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
                                    >
                                        Website
                                    </label>
                                </div>

                                {/* End Col */}
                                <div className="sm:col-span-9">
                                    <div className="sm:flex">
                                        <input {...register('website')}
                                        defaultValue={users.userWebsite}
                                            id="af-submit-application-email"
                                            type="text"
                                            className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <div className="inline-block">
                                        <label
                                            htmlFor="af-submit-application-bio"
                                            className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
                                        >
                                            Gender
                                        </label>
                                    </div>
                                </div>
                                <div className="sm:col-span-9">
                                    <div className="grid sm:grid-cols-2 gap-2">
                                        <label htmlFor="hs-radio-in-form" className="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                            <input value={"Male"} {...register('gender')} type="radio" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-radio-in-form" />
                                            <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">Male</span>
                                        </label>
                                        <label htmlFor="hs-radio-checked-in-form" className="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                            <input value={"Female"} {...register('gender')} type="radio" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-radio-checked-in-form" />
                                            <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">Female</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <div className="inline-block">
                                        <label
                                            htmlFor="af-submit-application-bio"
                                            className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
                                        >
                                            About Me
                                        </label>
                                    </div>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-9">
                                    <textarea {...register('description')}
                                        id="af-submit-application-bio"
                                        className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                        rows={6}
                                        placeholder="Add a cover letter or anything else you want to share."
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                            {/* End Section */}

                            <button
                                type="submit"
                                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                            >
                                Update Info
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

export default EditUserProfile;