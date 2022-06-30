import {useEffect, useState} from "react";

export default function useRequest(request) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        setLoading(true)
        request()
            .then(response => setData(response.data))
            .catch(error => setError(error.message))
            .finally(() => setLoading(false))
    }, [])

    return [data, loading, error]
}