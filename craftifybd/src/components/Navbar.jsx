import { useContext, useEffect, useState } from "react";
import { FiSend } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import SignOut from "./SignOut";
const Navbar = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="z-20 relative">
            <div className="navbar bg-base-100 px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to={`/about-us`}>About Us</NavLink></li>
                            <li><NavLink to="/products">All Art & Craft List</NavLink></li>
                            <li>
                                <a>My Action</a>
                                <ul className="p-2">
                                    <li><a>Add Craft Item</a></li>
                                    <li><NavLink to="/myproducts">My Art & Craft List</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-12" src="/images/favicon.png" alt="" />
                        <Link to={`/`}
                            className="text-2xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%"
                        >
                            CraftifyBD.com
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to={`/about-us`}>About Us</NavLink></li>
                        <li><NavLink to={`/faq`}>FAQ</NavLink></li>
                        <li><NavLink to="/products">All Art & Craft List</NavLink></li>
                        {
                            user && <li>
                                <details className="">
                                    <summary>My Action</summary>
                                    <ul className="p-2">
                                        <li><NavLink to={`/addproducts`}>Add Craft Item</NavLink></li>
                                        <li><NavLink to="/myproducts">My Art & Craft List</NavLink></li>
                                    </ul>
                                </details>
                            </li>
                        }
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? <div className="flex items-center gap-4 justify-between">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" data-tip={user.displayName} className="tooltip tooltip-bottom"><div className="avatar online" >
                                    <div className="w-12 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </div></div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-xl w-52">
                                    <li><NavLink to={`/profile`}>Profile</NavLink></li>
                                    <li><button>Logout</button></li>
                                </ul>
                            </div>
                            <div>
                                <SignOut />
                            </div>
                        </div> : <div>
                            <button
                                className={`px-4 py-2 rounded-full flex items-center gap-2 text-slate-500 shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)] transition-all hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] hover:text-violet-500`}>
                                <FiSend />
                                <Link to="/login">Login</Link>
                            </button>
                        </div>
                    }
                    <label className="swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" className="theme-controller" value="black" />

                        {/* sun icon */}
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;