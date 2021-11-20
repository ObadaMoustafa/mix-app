import React, { useContext, useEffect, useState } from "react";
import "../../style/converter.css";
import { ConverterContext } from "../../context/ConverterContext";
import { useFetchCurrencyData } from "../../hooks/useFetchCurrencyData";
import ConverterForm from "./ConverterForm";

function Converter() {
    return (
        <div className='converter-container'>
            <div className='convert-title'>
                <i className='bi bi-currency-exchange'></i> Convert
            </div>
            <div className='exchange-box'>
                <ConverterForm />
            </div>
        </div>
    );
}

export default Converter;
