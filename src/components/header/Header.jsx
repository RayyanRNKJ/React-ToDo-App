import React from "react";
import "./Header.css";
import logo from "../../headerlogo.svg";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="" className="header__logo" />
      <h1 className="header__title">React ToDo Application</h1>
    </div>
  );
}

export default Header;
