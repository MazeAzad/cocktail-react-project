import React, { useContext, useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
const context = React.createContext();

const AppProvider = ({ children }) => {
    let url = " https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
    let [searchTerm, setSearchTerm] = useState("");

    const { data, loading } = useFetch(`${url}${searchTerm}`);


    return <context.Provider
        value={{
            searchTerm,
            setSearchTerm,
            loading,
            data
        }}
    >
        {children}
    </context.Provider >
}

const useGlobal = () => {
    return useContext(context);
}

export { AppProvider, useGlobal };