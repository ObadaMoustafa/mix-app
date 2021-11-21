import React, { useContext } from "react";
import { ConverterContext } from "../../context/ConverterContext";
import { useFetchCurrencyData } from "../../hooks/useFetchCurrencyData";
import CurrencyList from "../inputs/CurrencyList";
import Input from "../inputs/Input";
import SubmitButton from "../inputs/SubmitButton";

function RatesForm() {
    const { data } = useFetchCurrencyData("codes", null);
    const { from, ConvertAmount } = useContext(ConverterContext);
    const [amount] = ConvertAmount;

    // extracting values from context
    const [selectedCurrencyFrom, setSelectedCurrencyFrom] = from;
    return (
        <>
            <form action=''>
                <CurrencyList
                    label='Rates for'
                    selectedCurrency={selectedCurrencyFrom}
                    setSelectedCurrency={setSelectedCurrencyFrom}
                    data={data}
                />
                <Input />
                <SubmitButton amount={amount} text='Submit' />
            </form>
        </>
    );
}

export default RatesForm;
