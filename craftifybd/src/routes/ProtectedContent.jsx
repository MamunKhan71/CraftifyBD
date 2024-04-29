import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const ProtectedContent = ({ children }) => {
    const { user } = useContext(AuthContext)
    const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));
    const navigate = useNavigate()
    useEffect(() => {
        if (!isAuth) {
            navigate('/login');
        }
    }, [isAuth, navigate]);
    return isAuth ? children : null;

};

export default ProtectedContent;