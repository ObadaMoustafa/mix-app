import React, { useContext, useEffect, useState } from "react";
import { ConverterContext } from "../../context/ConverterContext";
import { useFetchCurrencyData } from "../../hooks/useFetchCurrencyData";
import Input from "../inputs/Input";
import CurrencyList from "../inputs/CurrencyList";
import SubmitButton from "../inputs/SubmitButton";
import ConverterResult from "./ConverterResult";

function ConverterForm() {
    const [endpoint, setEndpoint] = useState(null);
    const { data, conversionResult, isLoading, setIsLoading, errMsg } =
        useFetchCurrencyData("codes", endpoint);
    const { from, to, ConvertAmount, historyArr } =
        useContext(ConverterContext);

    // extracting values from context
    const [selectedCurrencyFrom, setSelectedCurrencyFrom] = from;
    const [selectedCurrencyTo, setSelectedCurrencyTo] = to;
    const [amount, setAmount] = ConvertAmount;
    const setHistory = historyArr[1];

    // switch button helper
    // const [switchValue, setSwitchValue] = useState(null);

    function handleSubmitPairConversion(e) {
        e.preventDefault();
        setIsLoading(true);

        // need to send request like that to the hook to store it with final result
        const request = {
            selectedCurrencyFrom,
            selectedCurrencyTo,
            amount,
        };
        setEndpoint(request);
        setAmount(0);
    }

    function handleSwitchValue() {
        const switchValue = [selectedCurrencyFrom, selectedCurrencyTo];
        setSelectedCurrencyFrom(switchValue[1]);
        setSelectedCurrencyTo(switchValue[0]);
    }

    useEffect(() => {
        if (conversionResult) setHistory(prev => [...prev, conversionResult]);
    }, [conversionResult, setHistory]);

    return (
        <form onSubmit={handleSubmitPairConversion} className='exchange-form'>
            <div className='convert-options'>
                <Input />
                <CurrencyList
                    label='from'
                    selectedCurrency={selectedCurrencyFrom}
                    setSelectedCurrency={setSelectedCurrencyFrom}
                    data={data}
                />
                <div
                    className='switch-btn'
                    onClick={handleSwitchValue}
                    title='switch currencies'>
                    <i className='bi bi-arrow-left-right'></i>
                </div>

                <CurrencyList
                    label='to'
                    selectedCurrency={selectedCurrencyTo}
                    setSelectedCurrency={setSelectedCurrencyTo}
                    data={data}
                />
            </div>
            <div className='get-convert-result'>
                <ConverterResult
                    conversionResult={conversionResult}
                    isLoading={isLoading}
                    errMsg={errMsg}
                />
                <SubmitButton
                    disabled={amount > 0 ? false : true}
                    text='Convert'
                />
            </div>
        </form>
    );
}

export default ConverterForm;
