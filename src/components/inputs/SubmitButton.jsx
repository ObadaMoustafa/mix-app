import React from "react";

function SubmitButton({ amount, text }) {
    return (
        <>
            <button
                type='submit'
                className='filled-btn'
                disabled={!amount || amount > 0 ? false : true}>
                {text}
            </button>
        </>
    );
}

export default SubmitButton;
