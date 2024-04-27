import { createContext, useState } from "react";
import auth from "../utils/firebase.config";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    }
    const handleEmailLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authValues = { handleEmailLogin, googleSignIn, githubSignIn }
    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;