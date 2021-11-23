import React from "react";
import "../../style/header.css";
import Nav from "./Nav";

function Header(props) {
    return (
        <>
            <Nav />
            <header>
                <div>
                    <h1>Welcome to the Mix application</h1>
                    <h2>React graduation project for HYF NL</h2>
                </div>
            </header>
        </>
    );
}

export default Header;
