import React from "react";
import "../../style/rates.css";

import RatesForm from "./RatesForm";

function Rates() {
    return (
        //! don't change route-container, route-title and content-box this allows the content to be inside the white box
        //! if I need any thing under the white box I should put under router-container div
        <div className='route-container'>
            <div className='route-title'>
                <i className='bi bi-bank'></i> Rates
            </div>
            <div className='content-box'>
                <div>
                    <RatesForm />
                </div>
                <div className='all-rates'></div>
            </div>
        </div>
    );
}

export default Rates;
