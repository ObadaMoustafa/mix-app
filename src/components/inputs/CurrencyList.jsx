import React from "react";
import CurrencyFlag from "react-currency-flags";
function CurrencyList({ label, selectedCurrency, setSelectedCurrency, data }) {
    function handleSelectCurrency(e) {
        setSelectedCurrency(e.target.value);
    }
    return (
        <div className='from-to'>
            <div className='flex-label'>
                <label htmlFor={label}>{label.toUpperCase()}: </label>
                <CurrencyFlag currency={selectedCurrency} size='xl' />
            </div>
            <select
                name={label}
                id={label}
                value={selectedCurrency}
                onChange={handleSelectCurrency}
                className='field'>
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
