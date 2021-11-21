import React, { useContext } from "react";
import { ConverterContext } from "../../context/ConverterContext";

function Input() {
    const { ConvertAmount } = useContext(ConverterContext);
    const [amount, setAmount] = ConvertAmount;
    function handleChangeAmount(e) {
        setAmount(e.target.value);
    }
    return (
        <>
            <div className='amount'>
                <label htmlFor='amount'> Amount </label>
                <br />
                <input
                    type='number'
                    value={amount}
                    onChange={handleChangeAmount}
                    className='field'
                    min='0'
                />
            </div>
        </>
    );
}

export default Input;
