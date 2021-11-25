import React from "react";

function SubmitButton({ disabled, text }) {
    return (
        <>
            <button type='submit' className='filled-btn' disabled={disabled}>
                {text}
            </button>
        </>
    );
}

export default SubmitButton;
