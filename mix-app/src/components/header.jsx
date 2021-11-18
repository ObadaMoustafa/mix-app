import React from 'react';
import '../style/header.css'
import logo from "../img/logo.png";

function Header (props) {

    return(
        <>
        <header>
            <div>
                <nav>
                    <div className="logo"><img src={logo} alt="logo" width="100"/></div>
                    <div className="routes">
                        <div>Home</div>
                        <div>exchange rates</div>
                        <div>G photos</div>
                    </div>
                </nav>
            </div>
            <div>
                <h1>Welcome to the Mix application</h1>
                <h2>to get the max out from our app please visit the about page</h2>
            </div>
        </header>
        </>
    )
};

export default Header;