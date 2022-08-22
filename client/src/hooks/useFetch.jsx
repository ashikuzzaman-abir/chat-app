import React, {useState, useEffect} from 'react'
import axios from 'axios';

function useFetch(url, method="GET", body=null) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            try {
                const result = await axios({
                    method,
                    url,
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: body
                });
                setData(result.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchData();
    }, [url])


    return {data, loading, error}
}

export default useFetch