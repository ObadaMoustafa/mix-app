import { useEffect, useState } from "react";

export function useFetchCurrencyData(url) {
    const [data, setData] = useState(null);
    useEffect(() => {
        async function getCodes() {

            const { REACT_APP_EXCHANGE_RATE_APIKEY } = process.env
            const endpoint = `https://v6.exchangerate-api.com/v6/${REACT_APP_EXCHANGE_RATE_APIKEY}/${url}`
            console.log("endpoint =", endpoint)
            try {
                const res = await fetch(endpoint);
                const jsonData = await res.json()
                if (res.status !== 200) throw new Error(jsonData["error-type"])
                setData(jsonData)
            } catch (error) {
                console.error(error)
            }
        }
        getCodes();
    }, [url])

    return { data }
}

