import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { MdEditSquare } from "react-icons/md";
import EditUserProfile from "../components/EditUserProfile";
const UserProfile = () => {
    const { user } = useContext(AuthContext)
    const [users, setUser] = useState([])
    useEffect(() => {
        fetch(`https://craftifybd.vercel.app/userprofile/${user?.uid}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [user])
    const name = users?.userName?.split(' ')
    return (
        <div className="poppins my-24">
            <>
                {
                    users ? <section className="w-full overflow-hidden dark:bg-gray-900">
                        <div className="flex flex-col">
                            {/* Cover Image */}
                            <img
                                src="/images/bg.svg"
                                alt="User Cover"
                                className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem] object-cover"
                            />
                            {/* Profile Image */}
                            <div className="sm:w-[80%] xs:w-[90%] mx-auto flex">
                                <img
                                    src={users.userPhoto}
                                    alt="User Profile"
                                    className="rounded-md lg:w-[12rem] object-cover lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]"
                                />
                                {/* FullName */}
                                <h1 className="w-full text-left my-4 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
                                    {users.userName}
                                </h1>

                            </div>
                            <div className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
                                {/* Description */}
                                <p className="w-fit text-gray-700 dark:text-gray-400 text-md">
                                    {users.userInfo}
                                </p>
                                {/* Detail */}
                                <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
                                    <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                                        <div className="w-full">
                                            <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                                                <div className="flex flex-col pb-3">
                                                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                                                        First Name
                                                    </dt>
                                                    <dd className="text-lg font-semibold">{name?.[0]}</dd>
                                                </div>
                                                <div className="flex flex-col py-3">
                                                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                                                        Last Name
                                                    </dt>
                                                    <dd className="text-lg font-semibold">{name?.[1]}</dd>
                                                </div>
                                                <div className="flex flex-col py-3">
                                                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                                                        Account Created
                                                    </dt>
                                                    <dd className="text-lg font-semibold">{users.userCreated}</dd>
                                                </div>
                                                <div className="flex flex-col py-3">
                                                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                                                        Gender
                                                    </dt>
                                                    <dd className="text-lg font-semibold">{users.userGender}</dd>
                                                </div>
                                            </dl>
                                        </div>
                                        <div className="w-full">
                                            <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                                                <div className="flex flex-col pb-3">
                                                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                                                        Location
                                                    </dt>
                                                    <dd className="text-lg font-semibold">
                                                        {users.userLocation}
                                                    </dd>
                                                </div>
                                                <div className="flex flex-col pt-3">
                                                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                                                        Phone Number
                                                    </dt>
                                                    <dd className="text-lg font-semibold">{users.userPhone}</dd>
                                                </div>
                                                <div className="flex flex-col pt-3">
                                                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                                                        Email
                                                    </dt>
                                                    <dd className="text-lg font-semibold">
                                                        {users.userEmail}
                                                    </dd>
                                                </div>
                                                <div className="flex flex-col pt-3">
                                                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                                                        Website
                                                    </dt>
                                                    <dd className="text-lg font-semibold">
                                                        {users.userWebsite}
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}><MdEditSquare /> Edit Profile</button>
                                <dialog id="my_modal_4" className="modal">
                                    <div className="modal-box w-11/12 max-w-5xl">
                                        <div>
                                            <EditUserProfile users={users}></EditUserProfile>
                                        </div>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button, it will close the modal */}
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </section> : <div className="h-screen w-full flex items-center justify-center"><span className="loading loading-infinity loading-lg"></span></div>
                }
            </>

        </div>
    );
};

export default UserProfile;