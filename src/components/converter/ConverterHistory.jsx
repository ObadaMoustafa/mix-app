import React from "react";
import HistoryLine from "./HistoryLine";

function ConverterHistory() {
    return (
        <>
            <div className='route-container history-container'>
                <div className='route-title'>
                    <i className='bi bi-clock-history'></i> History
                </div>
                <div className='content-box'>
                    <HistoryLine />
                </div>
            </div>
        </>
    );
}

export default ConverterHistory;
