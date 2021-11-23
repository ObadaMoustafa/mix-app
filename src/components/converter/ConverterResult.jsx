import React from "react";

function ConverterResult({ conversionResult, isLoading, errMsg }) {
    return (
        <>
            {errMsg && <p style={{ color: "red" }}>{errMsg}</p>}
            {isLoading && <div className='lds-hourglass'></div>}
            {conversionResult && !isLoading && (
                <div className='convert-result-container'>
                    <p className='main-result'>
                        {conversionResult.amount} {conversionResult.from} =
                        <br />
                        <span>
                            {conversionResult.result} {conversionResult.to}
                        </span>
                    </p>
                    <br />
                    <p className='one-currency-rate'>
                        conversion rate :{" "}
                        <span>
                            1 {conversionResult.from} = {conversionResult.rate}{" "}
                            {conversionResult.to}
                        </span>
                    </p>{" "}
                    <p>
                        Last updated :
                        <br />
                        <span>{conversionResult.update.substring(0, 26)}</span>
                    </p>
                </div>
            )}

            {/* Default text */}
            {!errMsg && !isLoading && !conversionResult && (
                <div className='converter-put-amount-msg'>
                    <p>
                        choose the amount and choose your pair to get the result
                    </p>
                </div>
            )}
        </>
    );
}

export default ConverterResult;
