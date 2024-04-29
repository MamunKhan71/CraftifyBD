import { createContext, useEffect, useState } from "react";
export const ContentContext = createContext()
const ContentProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .then(setLoading(false))
    }, [])
    const value = { products, loading }
    return (
        <ContentContext.Provider value={value}>
            {children}
        </ContentContext.Provider>
    );
};

export default ContentProvider;