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
                                    <li><NavLink to="/products">My Art & Craft List</NavLink></li>
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
                                        <li><NavLink to="/products">My Art & Craft List</NavLink></li>
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
                                <div tabIndex={0} role="button"><div className="avatar online">
                                    <div className="w-12 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div></div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-xl w-52">
                                    <li><a>Profile</a></li>
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

                </div>
            </div>
        </div>
    );
};

export default Navbar;