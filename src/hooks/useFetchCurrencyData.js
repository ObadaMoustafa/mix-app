import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export function useFetchCurrencyData(url = null, url2 = null, url3 = null) {
    const [data, setData] = useState(null);
    const [conversionResult, setConversionResult] = useState(null);
    const [rates, setRates] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errMsg, setErrMsg] = useState(null);


    useEffect(() => {
        if (url) {
            async function getAvailableCodes() {

                const { REACT_APP_EXCHANGE_RATE_APIKEY } = process.env
                const endpoint = `https://v6.exchangerate-api.com/v6/${REACT_APP_EXCHANGE_RATE_APIKEY}/${url}`
                try {
                    const res = await fetch(endpoint);
                    const jsonData = await res.json()
                    if (res.status !== 200) throw new Error(jsonData["error-type"])
                    setData(jsonData)
                    setErrMsg(null)
                } catch (error) {
                    console.log(error)
                    setErrMsg(error.toString())
                }
            }
            getAvailableCodes();
        }

        if (url2) {
            async function getPairCurrencyResult() {
                const { selectedCurrencyFrom, selectedCurrencyTo, amount } = url2
                const { REACT_APP_EXCHANGE_RATE_APIKEY } = process.env
                const endpoint = `https://v6.exchangerate-api.com/v6/${REACT_APP_EXCHANGE_RATE_APIKEY}/pair/${selectedCurrencyFrom}/${selectedCurrencyTo}/${amount}`
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

                    setConversionResult(convertRequest);
                    setErrMsg(null)
                } catch (error) {
                    console.error(error);
                    setErrMsg(error.toString())
                }
                finally {
                    setIsLoading(false)
                }
            }
            getPairCurrencyResult();
        }

        if (url3) {
            async function getAllRates() {

                const { REACT_APP_EXCHANGE_RATE_APIKEY } = process.env
                const endpoint = `https://v6.exchangerate-api.com/v6/${REACT_APP_EXCHANGE_RATE_APIKEY}/latest/${url3}`
                try {
                    const res = await fetch(endpoint);
                    const jsonData = await res.json()
                    if (res.status !== 200) throw new Error(jsonData["error-type"])
                    setRates(jsonData.conversion_rates);
                    setErrMsg(null)
                } catch (error) {
                    console.error(error)
                    setErrMsg(error.toString())
                } finally {
                    setIsLoading(false)
                }
            }
            getAllRates();
        }
    }, [url, url2, url3])

    return { data, conversionResult, rates, isLoading, setIsLoading, errMsg }
}

