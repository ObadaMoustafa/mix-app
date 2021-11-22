import React, { useContext } from "react";
import { ConverterContext } from "../../context/ConverterContext";
import { useFetchCurrencyData } from "../../hooks/useFetchCurrencyData";
import CurrencyList from "../inputs/CurrencyList";
import SubmitButton from "../inputs/SubmitButton";

function RatesForm({ setEndpoint }) {
    const { data } = useFetchCurrencyData("codes");
    const { from } = useContext(ConverterContext);
    // extracting values from context
    const [selectedCurrencyFrom, setSelectedCurrencyFrom] = from;

    function handleSubmit(e) {
        e.preventDefault();
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
