import React, { useContext } from "react";
import CurrencyFlag from "react-currency-flags/dist/components";
import { ConverterContext } from "../../context/ConverterContext";

function HistoryLine() {
    const { historyArr } = useContext(ConverterContext);
    const [history, setHistory] = historyArr;

    function handleDelete(e) {
        setHistory(prev =>
            prev.filter(conversion => conversion.id !== e.target.id)
        );
    }
    return (
        <>
            {history.length > 0 &&
                history.map(conversion => {
                    const { from, to, amount, result, id } = conversion;
                    return (
                        <div className='history-line-container' key={id}>
                            <div className='exchange-operation'>
                                <CurrencyFlag currency={from} size='lg' />
                                <p className='history-from-to'>
                                    {amount} {from}
                                </p>
                                <p className='history-equal'>=</p>
                                <p className='history-from-to'>
                                    {result} {to}
                                </p>
                                <CurrencyFlag currency={to} size='lg' />
                            </div>
                            <div
                                className='delete-history'
                                id={id}
                                onClick={handleDelete}>
                                <i className='bi bi-trash-fill' id={id}></i>
                            </div>
                        </div>
                    );
                })}
        </>
    );
}

export default HistoryLine;
