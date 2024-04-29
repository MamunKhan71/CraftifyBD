import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const LoginProtection = ({ children }) => {
    const { user } = useContext(AuthContext)

    const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));
    console.log(isAuth);
    const navigate = useNavigate()
    useEffect(() => {
        if (isAuth) {
            navigate('/');
        }
    }, [isAuth, navigate]);
    return isAuth ? navigate('/') : children;

};

export default LoginProtection;