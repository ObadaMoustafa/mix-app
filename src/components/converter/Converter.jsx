import React from "react";
import "../../style/converter.css";
import ConverterForm from "./ConverterForm";

function Converter() {
    return (
        //! don't change route-container, route-title and content-box this allows the content to be inside the white box
        //! if I need any thing under the white box I should put under router-container div
        <>
            <div className='route-container'>
                <div className='route-title'>
                    <i className='bi bi-currency-exchange'></i> Convert
                </div>
                <div className='content-box'>
                    <ConverterForm />
                </div>
            </div>
        </>
    );
}

export default Converter;
