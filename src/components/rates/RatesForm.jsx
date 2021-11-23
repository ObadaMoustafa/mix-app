import React, { useContext } from "react";
import { ConverterContext } from "../../context/ConverterContext";
import CurrencyList from "../inputs/CurrencyList";
import SubmitButton from "../inputs/SubmitButton";

function RatesForm({ setEndpoint, data, setIsLoading }) {
    const { from } = useContext(ConverterContext);
    // extracting values from context
    const [selectedCurrencyFrom, setSelectedCurrencyFrom] = from;

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        setEndpoint(selectedCurrencyFrom);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='rates-form'>
                <CurrencyList
                    label='Rates for'
                    selectedCurrency={selectedCurrencyFrom}
                    setSelectedCurrency={setSelectedCurrencyFrom}
                    data={data}
                />
                <SubmitButton amount={5} text='Submit' />
            </form>
        </>
    );
}

export default RatesForm;
