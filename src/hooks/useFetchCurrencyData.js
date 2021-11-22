import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export function useFetchCurrencyData(url = null, url2 = null, url3 = null) {
    const [data, setData] = useState(null);
    const [conversionResult, setConversionResult] = useState(null);
    const [rates, setRates] = useState(null);


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
                const { selectedCurrencyFrom, selectedCurrencyTo, amount } = url2
                const { REACT_APP_EXCHANGE_RATE_APIKEY } = process.env
                const endpoint = `https://v6.exchangerate-api.com/v6/${REACT_APP_EXCHANGE_RATE_APIKEY}/pair/${selectedCurrencyFrom}/${selectedCurrencyTo}/${amount}`
                console.log("2nd endpoint =", endpoint)
                console.log("requester pair rates")
                try {
                    const res = await fetch(endpoint);
                    const jsonData = await res.json()
                    if (res.status !== 200) throw new Error(jsonData["error-type"])
                    const convertRequest = {
                        from: selectedCurrencyFrom,
                        to: selectedCurrencyTo,
                        amount: amount,
                        result: jsonData.conversion_result,
                        rate: jsonData.conversion_rate,
                        update: jsonData.time_last_update_utc,
                        id: uuid(),
                    };
                    console.log("convertRequest", convertRequest);
                    setConversionResult(convertRequest);
                } catch (error) {
                    console.error(error)
                }
            }
            getPairCurrencyResult();
        }

        if (url3) {
            async function getAllRates() {

                const { REACT_APP_EXCHANGE_RATE_APIKEY } = process.env
                const endpoint = `https://v6.exchangerate-api.com/v6/${REACT_APP_EXCHANGE_RATE_APIKEY}/latest/${url3}`
                console.log("3rd endpoint =", endpoint)
                console.log("requester latest rates")
                try {
                    const res = await fetch(endpoint);
                    const jsonData = await res.json()
                    if (res.status !== 200) throw new Error(jsonData["error-type"])
                    setRates(jsonData.conversion_rates);
                } catch (error) {
                    console.error(error)
                }
            }
            getAllRates();
        }
    }, [url, url2, url3])

    return { data, conversionResult, rates }
}

