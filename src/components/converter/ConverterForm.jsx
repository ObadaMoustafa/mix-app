import React, { useContext, useEffect, useState } from "react";
import { ConverterContext } from "../../context/ConverterContext";
import { useFetchCurrencyData } from "../../hooks/useFetchCurrencyData";
import Input from "../inputs/Input";
import CurrencyList from "../inputs/CurrencyList";
import SubmitButton from "../inputs/SubmitButton";

function ConverterForm() {
    const [endpoint, setEndpoint] = useState(null);
    const { data, conversionResult } = useFetchCurrencyData("codes", endpoint);
    const { from, to, ConvertAmount } = useContext(ConverterContext);

    // extracting values from context
    const [selectedCurrencyFrom, setSelectedCurrencyFrom] = from;
    const [selectedCurrencyTo, setSelectedCurrencyTo] = to;
    const [amount, setAmount] = ConvertAmount;

    // result amount to still fixed amount after getting the result
    const [resultAmount, setResultAmount] = useState(null);

    // switch button helper
    const [switchValue, setSwitchValue] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        setEndpoint(`${selectedCurrencyFrom}/${selectedCurrencyTo}/${amount}`);
        setResultAmount(amount);
        setAmount(0);

        //** here I can manage to add every operation in a label array
    }

    function handleSwitchValue() {
        setSwitchValue(selectedCurrencyFrom);
        setSelectedCurrencyFrom(selectedCurrencyTo);
    }

    useEffect(() => {
        if (switchValue) setSelectedCurrencyTo(switchValue);
    }, [setSelectedCurrencyTo, switchValue]);

    if (switchValue) console.log("switchValue", switchValue);
    if (switchValue) console.log("switchValue type", typeof switchValue);
    if (conversionResult) console.log("conversionResult", conversionResult);
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
                            {resultAmount} {conversionResult.from} = <br />
                            <span>
                                {conversionResult.conversion_result}{" "}
                                {conversionResult.to}
                            </span>
                        </p>
                        <br />
                        <p className='one-currency-rate'>
                            conversion rate:{" "}
                            <span>
                                1 {conversionResult.from} ={" "}
                                {conversionResult.conversion_rate}{" "}
                                {conversionResult.to}
                            </span>
                        </p>

                        <p>
                            Last updated:{" "}
                            <span>
                                {conversionResult.last_updated.substring(0, 26)}
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
