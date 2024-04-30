import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import { Toast } from "./AddProducts";
const Register = () => {

    const { createUser, profileUpdater, user, userSignOut, googleSignIn, githubSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const [passInfo, setPassInfo] = useState(null)
    const [password, setPassword] = useState('');
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const {
        register,
        handleSubmit,
        resetField
    } = useForm();

    const checkPass = (password) => {
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(password)) {
            setPassInfo("Valid Password");
            return true;
        } else {
            setPassInfo("Invalid Password");
        }
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const name = result.user.displayName
                const email = result.user.email
                const photoURL = result.user.photoURL
                const creationTime = result.user.metadata.creationTime
                const uid = result.user.uid
                const newUser = {
                    _id: uid,
                    userName: name,
                    userEmail: email,
                    userPhoto: photoURL,
                    userCreated: creationTime,
                }
                fetch('https://craftifybd.vercel.app/addusers', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                }).then(() => {
                    Toast.fire({
                        icon: "success",
                        title: "Account Created, Please Login!"
                    }).then(() => {
                        userSignOut()
                        navigate('/login')
                    })
                })

            })
            .catch((error) => {
                toast.error("Something went wrong!")
            })
    }
    const handleGithubSignIn = () => {
        githubSignIn()
            .then((result) => {
                console.log(result);
                const name = result.user.displayName
                const email = result.user.email
                const photoURL = result.user.photoURL
                const creationTime = result.user.metadata.creationTime
                const uid = result.user.uid
                const newUser = {
                    _id: uid,
                    userName: name,
                    userEmail: email,
                    userPhoto: photoURL,
                    userCreated: creationTime,
                }
                fetch('https://craftifybd.vercel.app/addusers', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                }).then(() => {
                    Toast.fire({
                        icon: "success",
                        title: "Account Created, Please Login!"
                    }).then(() => {
                        userSignOut()
                        navigate('/login')
                    })
                })
            })
            .catch((error) => {
                toast.error("Something went wrong!")
            })
    }
    const handleRegister = (data) => {
        const email = data.email
        const password = data.password
        console.log(email, password);
        if (checkPass(password)) {
            const photoUrl = data.photourl ? data.photourl : ''
            const userName = data.name ? data.name : ''
            createUser(email, password)
                .then((result) => {
                    console.log(result);
                    const name = userName
                    const email = result.user.email
                    const photoURL = photoUrl
                    const creationTime = result.user.metadata.creationTime
                    const uid = result.user.uid
                    const newUser = {
                        _id: uid,
                        userName: name,
                        userEmail: email,
                        userPhoto: photoURL,
                        userCreated: creationTime,
                    }
                    fetch('https://craftifybd.vercel.app/addusers', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newUser)
                    }).then(() => {
                        Toast.fire({
                            icon: "success",
                            title: "Account Created, Please Login!"
                        }).then(() => {
                            profileUpdater(name, photoUrl)
                                .then(userSignOut())
                                .then(() => {
                                    Toast.fire({
                                        icon: "success",
                                        title: "Account Created, Please Login!"
                                    })
                                })
                                .then(navigate('/login'))
                        })
                    })
                })
                .catch(() => Toast.fire({
                    icon: "error",
                    title: "Email already exists!"
                }))
        } else {
            Toast.fire({
                icon: "info",
                title: "Enter a valid password"
            })
                .then(() => { resetField('password') })
        }

    }
    return (
        <>
            <div
                className="flex justify-center py-12 px-4 sm:px-6 lg:px-8 relative items-center"
            >
                <div className="absolute  inset-0 z-0" />
                <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
                    <div className="text-center">
                        <h2 className="mt-6 text-3xl font-bold text-gray-900">Register</h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Please sign up your account
                        </p>
                    </div>
                    <div className="flex flex-row justify-center items-center space-x-3">
                        <button onClick={handleGoogleSignIn} className="w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-white  bg-blue-900 hover:shadow-lg cursor-pointer transition ease-in duration-300">
                            <FaGoogle />
                        </button>
                        <button onClick={handleGithubSignIn} className="w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-white bg-blue-400 hover:shadow-lg cursor-pointer transition ease-in duration-300">
                            <FaGithub />
                        </button>
                        {/* <span className="w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-white bg-blue-500 hover:shadow-lg cursor-pointer transition ease-in duration-300">
                            <img
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yMy45OTQgMjR2LS4wMDFoLjAwNnYtOC44MDJjMC00LjMwNi0uOTI3LTcuNjIzLTUuOTYxLTcuNjIzLTIuNDIgMC00LjA0NCAxLjMyOC00LjcwNyAyLjU4N2gtLjA3di0yLjE4NWgtNC43NzN2MTYuMDIzaDQuOTd2LTcuOTM0YzAtMi4wODkuMzk2LTQuMTA5IDIuOTgzLTQuMTA5IDIuNTQ5IDAgMi41ODcgMi4zODQgMi41ODcgNC4yNDN2Ny44MDF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtLjM5NiA3Ljk3N2g0Ljk3NnYxNi4wMjNoLTQuOTc2eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIuODgyIDBjLTEuNTkxIDAtMi44ODIgMS4yOTEtMi44ODIgMi44ODJzMS4yOTEgMi45MDkgMi44ODIgMi45MDkgMi44ODItMS4zMTggMi44ODItMi45MDljLS4wMDEtMS41OTEtMS4yOTItMi44ODItMi44ODItMi44ODJ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                                className="w-4 h-4"
                            />
                        </span> */}
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                        <span className="h-px w-16 bg-gray-300" />
                        <span className="text-gray-500 font-normal">OR</span>
                        <span className="h-px w-16 bg-gray-300" />
                    </div>
                    <form onSubmit={handleSubmit(handleRegister)} className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="mt-8 content-center">
                            <label className="text-sm font-bold text-gray-700 tracking-wide">
                                Name
                            </label>
                            <input {...register('name')}
                                className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                type=""
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="relative">
                            <div className="absolute right-0 mt-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-green-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <label className="text-sm font-bold text-gray-700 tracking-wide">
                                Email
                            </label>
                            <input {...register('email')}
                                className=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                type=""
                                placeholder="mail@gmail.com"
                            />
                        </div>
                        <div className="mt-8 content-center">
                            <label className="text-sm font-bold text-gray-700 tracking-wide">
                                Photo Url
                            </label>
                            <input {...register('photourl')}
                                className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                type=""
                                placeholder="Enter your photo url"
                            />
                        </div>
                        <div>
                            <div className="max-w-sm">
                                <div className="flex mb-2">
                                    <div className="flex-1">
                                        <div>
                                            <div id="hs-strong-password" className="flex mt-2 -mx-1"></div>
                                            <input
                                                {...register('password')}
                                                onKeyUp={(e) => checkPass(e.target.value)}
                                                type="password"
                                                className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                                placeholder="Enter password"
                                                onChange={handlePasswordChange}
                                            />
                                        </div>
                                        {passInfo && <span className={`font-semibold text-sm flex justify-end animate__animated animate__headShake ${passInfo === 'Valid' ? "text-green-600" : "text-[#EB6753]"}`}>{passInfo}</span>}
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember_me"
                                    name="remember_me"
                                    type="checkbox"
                                    className="h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="remember_me"
                                    className="ml-2 block text-sm text-gray-900"
                                >
                                    Accept to the terms & conditions
                                </label>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center bg-indigo-500 text-gray-100 p-4  rounded-full tracking-wide
                          font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300"
                            >
                                Register
                            </button>
                        </div>
                        <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                            <span>Already have an account?</span>
                            <Link to={`/login`}
                                href="#"
                                className="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300"
                            >
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>

    );
};

export default Register;