import React, { useEffect, useState } from "react";
import CurrencyFlag from "react-currency-flags/dist/components";
import { useFetchCurrencyData } from "../../hooks/useFetchCurrencyData";
import "../../style/rates.css";

import RatesForm from "./RatesForm";

function Rates() {
    const [endpoint, setEndpoint] = useState(null);
    const { data, setIsLoading, rates, isLoading, errMsg } =
        useFetchCurrencyData("codes", null, endpoint);
    const [ratesElements, setRatesElements] = useState([]);
    useEffect(() => {
        const ratesElements = [];
        for (const key in rates) {
            ratesElements.push(
                <div key={key} className='one-currency-rate-container'>
                    <CurrencyFlag currency={key} size='xl' className='flag' />
                    <p>
                        {key} = {rates[key]}
                    </p>
                </div>
            );
        }
        setRatesElements(ratesElements);
    }, [rates]);

    return (
        //! don't change route-container, route-title and content-box this allows the content to be inside the white box
        //! if I need any thing under the white box I should put under router-container div
        <div className='route-container'>
            <div className='route-title'>
                <i className='bi bi-bank'></i> Rates
            </div>
            <div className='content-box'>
                <div>
                    <RatesForm
                        setEndpoint={setEndpoint}
                        data={data}
                        setIsLoading={setIsLoading}
                    />
                </div>
                <div className='all-rates'>
                    {errMsg && <p style={{ color: "red" }}>{errMsg}</p>}
                    {isLoading && <div className='lds-hourglass'></div>}
                    {ratesElements.length > 0 &&
                        !isLoading &&
                        ratesElements.map(currency => currency)}
                </div>
            </div>
        </div>
    );
}

export default Rates;
