import React, { useContext } from "react";
import { ConverterContext } from "../../context/ConverterContext";
import "../../style/converter.css";
import ConverterForm from "./ConverterForm";
import ConverterHistory from "./ConverterHistory";

function Converter() {
    const { historyArr } = useContext(ConverterContext);
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
            {historyArr[0].length > 0 && <ConverterHistory />}
        </>
    );
}

export default Converter;
