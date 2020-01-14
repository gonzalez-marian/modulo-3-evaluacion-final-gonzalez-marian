import React from "react";
import logo from "../images/Rick_logo.png";

const Header = () => {
    return (
        <header className="header__wrapper">
            <img className="header__wrapper--img" src={logo} alt="Rick_and_Morty" />
        </header>
    );
};

export default Header;