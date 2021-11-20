import React from "react";
import "../../style/header.css";
import Nav from "./Nav";

function Header(props) {
    return (
        <>
            <header>
                <Nav />
                <div>
                    <h1>Welcome to the Mix application</h1>
                    <h2 style={{ fontSize: "12pt" }}>
                        Get the max out from our app by visiting about page
                    </h2>
                </div>
            </header>
        </>
    );
}

export default Header;
