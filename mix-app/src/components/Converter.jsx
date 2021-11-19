import React, { useContext } from "react";
import CurrencyList from "./inputs/CurrencyList";
import "../style/converter.css";
import { ConverterContext } from "../context/ConverterContext";
import { useFetchCurrencyData } from "../hooks/useFetchCurrencyData";

function Converter(props) {
    const { data } = useFetchCurrencyData("codes");
    const { from, to, ConvertAmount } = useContext(ConverterContext);
    const [selectedCurrencyFrom, setSelectedCurrencyFrom] = from;
    const [selectedCurrencyTo, setSelectedCurrencyTo] = to;
    const [amount, setAmount] = ConvertAmount;

    function handleChangeAmount(e) {
        setAmount(e.target.value);
    }
    return (
        <div className='exchange-box'>
            <div>
                <i className='bi bi-currency-exchange'></i> Convert
            </div>

            <form action=''>
                <div>
                    <CurrencyList
                        label='from'
                        selectedCurrency={selectedCurrencyFrom}
                        setSelectedCurrency={setSelectedCurrencyFrom}
                        data={data}
                    />
                    <CurrencyList
                        label='to'
                        selectedCurrency={selectedCurrencyTo}
                        setSelectedCurrency={setSelectedCurrencyTo}
                        data={data}
                    />
                </div>
                <label htmlFor='amount'> Amount </label>
                <input
                    type='number'
                    value={amount}
                    onChange={handleChangeAmount}
                />
            </form>
        </div>
    );
}

export default Converter;
