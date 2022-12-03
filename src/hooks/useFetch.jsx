import { useEffect, useState } from "react";
export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const getData = async () => {
        try {
            const response = await fetch(url);
            const jsonResponse = await response.json();
            setData(jsonResponse);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }

    }
    useEffect(() => {
        getData();
    }, [url])
    return { data, loading };
}


