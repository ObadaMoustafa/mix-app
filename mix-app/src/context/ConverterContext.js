import React, { createContext, useState } from 'react'
export const ConverterContext = createContext();

export const ConverterContextProv = ({ children }) => {

    const [selectedCurrencyFrom, setSelectedCurrencyFrom] = useState("EUR");
    const [selectedCurrencyTo, setSelectedCurrencyTo] = useState("USD");
    const [amount, setAmount] = useState(0);

    return (
        <ConverterContext.Provider value={ {
            from: [selectedCurrencyFrom, setSelectedCurrencyFrom],
            to: [selectedCurrencyTo, setSelectedCurrencyTo],
            ConvertAmount: [amount, setAmount]
        } }>
            { children }
        </ConverterContext.Provider>
    )
};