import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const SignOut = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { userSignOut } = useContext(AuthContext)
    return (
        <div className="grid place-content-center">
            <button
                onClick={() => setIsOpen(true)}
                className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
                Logout
            </button>
            <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} userSignOut={userSignOut} />
        </div>
    );
};

const SpringModal = ({ isOpen, setIsOpen, userSignOut }) => {

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
                    >
                        <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
                        <div className="relative z-10">
                            <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                                <FiAlertCircle />
                            </div>
                            <h3 className="text-3xl font-bold text-center mb-2">
                                Are you sure want to logout?
                            </h3>
                            <p className="text-center mb-6">
                                Thank you for using our platform. We hope to see you again soon.
                            </p>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                                >
                                    Nah, go back
                                </button>
                                <button
                                    onClick={() => {
                                        userSignOut()
                                        setIsOpen(false)
                                    }}
                                    className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                                >
                                    Logout!
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SignOut;