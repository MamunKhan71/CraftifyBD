import { createContext, useState, useEffect } from "react";
import auth from "../utils/firebase.config";
import { signInWithEmailAndPassword, GoogleAuthProvider, signOut, signInWithPopup, GithubAuthProvider, updateProfile, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return unsubscribe;
    }, [])
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    const handleEmailLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const profileUpdater = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        })
    }
    const userSignOut = () => {
        localStorage.removeItem('isAuth')
        return signOut(auth)
    }
    const authValues = { handleEmailLogin, googleSignIn, githubSignIn, createUser, profileUpdater, userSignOut, user }
    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;