import React, { createContext, useState } from 'react';

export const ConverterContext = createContext();
export const ConverterContextProv = ({ children }) => {

    const [selectedCurrencyFrom, setSelectedCurrencyFrom] = useState("EUR");
    const [selectedCurrencyTo, setSelectedCurrencyTo] = useState("EGP");
    const [amount, setAmount] = useState(0);
    const [history, setHistory] = useState([]);

    return (
        <ConverterContext.Provider value={ {
            from: [selectedCurrencyFrom, setSelectedCurrencyFrom],
            to: [selectedCurrencyTo, setSelectedCurrencyTo],
            ConvertAmount: [amount, setAmount],
            historyArr: [history, setHistory]
        } }>
            { children }
        </ConverterContext.Provider>
    )
};