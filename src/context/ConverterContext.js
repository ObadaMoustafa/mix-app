import React, { createContext, useState } from 'react'
export const ConverterContext = createContext();

export const ConverterContextProv = ({ children }) => {
    const dummyHistory = [
        {
            from: "EGP",
            to: "USD",
            amount: 55,
            result: 1500,
            id: "54154asd5asd4sd"
        },
        {
            from: "EGP",
            to: "KRW",
            amount: 55,
            result: 23501.5451,
            id: "54154asd974as54sd"
        },
        {
            from: "EGP",
            to: "EUR",
            amount: 55,
            result: 1200.354,
            id: "54154as4das54dgh54sd"
        },
        {
            from: "EGP",
            to: "AWG",
            amount: 55,
            result: 451.25,
            id: "54154asd5qc564sd"
        },
    ]

    const [selectedCurrencyFrom, setSelectedCurrencyFrom] = useState("EUR");
    const [selectedCurrencyTo, setSelectedCurrencyTo] = useState("USD");
    const [amount, setAmount] = useState(0);
    const [history, setHistory] = useState([])

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