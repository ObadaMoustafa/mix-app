import { useEffect, useState } from "react";

export function useFetchCurrencyData(url, url2 = null) {
    const [data, setData] = useState(null);
    const [conversionResult, setConversionResult] = useState(null);


    useEffect(() => {
        if (url) {
            async function getAvailableCodes() {

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
            getAvailableCodes();
        }

        if (url2) {
            async function getPairCurrencyResult() {

                const { REACT_APP_EXCHANGE_RATE_APIKEY } = process.env
                const endpoint = `https://v6.exchangerate-api.com/v6/${REACT_APP_EXCHANGE_RATE_APIKEY}/pair/${url2}`
                console.log("2nd endpoint =", endpoint)
                console.log("requester pair rates")
                try {
                    const res = await fetch(endpoint);
                    const jsonData = await res.json()
                    if (res.status !== 200) throw new Error(jsonData["error-type"])
                    const {
                        base_code,
                        target_code,
                        conversion_rate,
                        conversion_result,
                        time_last_update_utc,
                    } = jsonData;
                    setConversionResult({
                        from: base_code,
                        to: target_code,
                        conversion_rate,
                        conversion_result,
                        last_updated: time_last_update_utc,
                    });
                } catch (error) {
                    console.error(error)
                }
            }
            getPairCurrencyResult();
        }
    }, [url, url2])

    return { data, conversionResult }
}

