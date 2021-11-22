import React, { useContext, useEffect, useState } from "react";
import { ConverterContext } from "../../context/ConverterContext";
import { useFetchCurrencyData } from "../../hooks/useFetchCurrencyData";
import Input from "../inputs/Input";
import CurrencyList from "../inputs/CurrencyList";
import SubmitButton from "../inputs/SubmitButton";

function ConverterForm() {
    const [endpoint, setEndpoint] = useState(null);
    const { data, conversionResult } = useFetchCurrencyData("codes", endpoint);
    const { from, to, ConvertAmount, historyArr } =
        useContext(ConverterContext);

    // extracting values from context
    const [selectedCurrencyFrom, setSelectedCurrencyFrom] = from;
    const [selectedCurrencyTo, setSelectedCurrencyTo] = to;
    const [amount, setAmount] = ConvertAmount;
    const setHistory = historyArr[1];

    // switch button helper
    const [switchValue, setSwitchValue] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        const request = {
            selectedCurrencyFrom,
            selectedCurrencyTo,
            amount,
        };
        setEndpoint(request);
        setAmount(0);
    }

    function handleSwitchValue() {
        setSwitchValue(selectedCurrencyFrom);
        setSelectedCurrencyFrom(selectedCurrencyTo);
    }

    useEffect(() => {
        if (switchValue) setSelectedCurrencyTo(switchValue);
    }, [setSelectedCurrencyTo, switchValue]);

    // I need another useEffect not to be affected by other value changes.
    useEffect(() => {
        if (conversionResult) setHistory(prev => [...prev, conversionResult]);
    }, [conversionResult, setHistory]);

    return (
        <form onSubmit={handleSubmit} className='exchange-form'>
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
                {conversionResult ? (
                    <div className='convert-result-container'>
                        <p className='main-result'>
                            {conversionResult.amount} {conversionResult.from} ={" "}
                            <br />
                            <span>
                                {conversionResult.result} {conversionResult.to}
                            </span>
                        </p>
                        <br />
                        <p className='one-currency-rate'>
                            conversion rate:{" "}
                            <span>
                                1 {conversionResult.from} ={" "}
                                {conversionResult.rate} {conversionResult.to}
                            </span>
                        </p>

                        <p>
                            Last updated:{" "}
                            <span>
                                {conversionResult.update.substring(0, 26)}
                            </span>
                        </p>
                    </div>
                ) : (
                    <div className='converter-put-amount-msg'>
                        <p>
                            choose the amount and choose your pair to get the
                            result
                        </p>
                    </div>
                )}
                <SubmitButton amount={amount} text='Convert' />
            </div>
        </form>
    );
}

export default ConverterForm;
