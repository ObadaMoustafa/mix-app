import React from "react";
import logo from "../../img/logo.png";

function Nav(props) {
    return (
        <div>
            <nav>
                <div className='logo'>
                    <img src={logo} alt='logo' width='100' />
                </div>
                <div className='routes'>
                    <div>Home</div>
                    <div>exchange rates</div>
                    <div>G photos</div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
