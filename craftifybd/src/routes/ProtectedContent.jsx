import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ProtectedContent = ({ children }) => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate(null)
    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [user, navigate])

    return user ? children : null

};

export default ProtectedContent;