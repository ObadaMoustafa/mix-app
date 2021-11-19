import React, { useEffect, useState } from "react";
import CurrencyFlag from "react-currency-flags";
import "../../style/currencyList.css";
function CurrencyList({ label, selectedCurrency, setSelectedCurrency, data }) {
    function handleSelectCurrency(e) {
        setSelectedCurrency(e.target.value);
    }
    console.log("data", data);
    return (
        <div>
            <CurrencyFlag currency={selectedCurrency} size='xl' />
            <label htmlFor={label}>{label.toUpperCase()}</label>
            <br />
            <select
                name={label}
                id={label}
                value={selectedCurrency}
                onChange={handleSelectCurrency}>
                {/* ___setting options___ */}
                {data?.supported_codes.length > 0 &&
                    data.supported_codes
                        .sort((a, b) => a > b)
                        .map(currency => {
                            const [cod, country] = currency;
                            return (
                                <option value={cod} key={cod}>
                                    {cod} {country}
                                </option>
                            );
                        })}
            </select>
        </div>
    );
}

export default CurrencyList;
