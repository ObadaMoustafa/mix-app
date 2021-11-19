import { useEffect, useState } from "react";

export function useFetchCurrencyData(url, url2 = null) {
    const [data, setData] = useState(null);
    const [pairResult, setPairResult] = useState(null);

    useEffect(() => {
        if (url) {
            async function getCodes() {

                const { REACT_APP_EXCHANGE_RATE_APIKEY } = process.env
                const endpoint = `https://v6.exchangerate-api.com/v6/${REACT_APP_EXCHANGE_RATE_APIKEY}/${url}`
                console.log("1st endpoint =", endpoint)
                console.log("requested usable codes")
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
        }
    }, [url])

    useEffect(() => {
        if (url2) {
            async function getCodes() {

                const { REACT_APP_EXCHANGE_RATE_APIKEY } = process.env
                const endpoint = `https://v6.exchangerate-api.com/v6/${REACT_APP_EXCHANGE_RATE_APIKEY}/pair/${url2}`
                console.log("2nd endpoint =", endpoint)
                console.log("requester pair rates")
                try {
                    const res = await fetch(endpoint);
                    const jsonData = await res.json()
                    if (res.status !== 200) throw new Error(jsonData["error-type"])
                    setPairResult(jsonData)
                } catch (error) {
                    console.error(error)
                }
            }
            getCodes();
        }
    }, [url2])

    return { data, pairResult }
}

