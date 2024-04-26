import { FiSend } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="z-10 relative">
            <div className="navbar bg-base-100 px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                            <li><a>Home</a></li>
                            <li><NavLink to={`/about-us`}>About Us</NavLink></li>
                            <li><a>All Art & craft Items</a></li>
                            <li>
                                <a>My Action</a>
                                <ul className="p-2">
                                    <li><a>Add Craft Item</a></li>
                                    <li><a>My Art & Craft List</a></li>
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
                        <li><a>Home</a></li>
                        <li><NavLink to={`/about-us`}>About Us</NavLink></li>
                        <li><a>All Art & craft Items</a></li>
                        <li>
                            <details className="">
                                <summary>My Action</summary>
                                <ul className="p-2">
                                    <li><a>Add Craft Item</a></li>
                                    <li><a>My Art & Craft List</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        <button
                            className={`px-4 py-2 rounded-full flex items-center gap-2 text-slate-500 shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)] transition-all hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] hover:text-violet-500`}>
                            <FiSend />
                            <Link to="/login">Login</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;