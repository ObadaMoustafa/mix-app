import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

function Nav(props) {
    return (
        <nav>
            <div>
                <div className='logo'>
                    <Link to='/'>
                        <img src={logo} alt='logo' width='100' />
                    </Link>
                </div>
                <div className='routes'>
                    <div>Converter</div>
                    <div>Rates</div>
                    <div>Photos</div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
