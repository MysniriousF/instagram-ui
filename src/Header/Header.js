import React from "react";
import "./Header.scss";
import HeaderProfile from "./HeaderProfile/HeaderProfile";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";

function Header() {
  return ( 
    <div className = "Header">
        <Logo />
        <Menu />
        <HeaderProfile />
        
    </div>
  );
}


export default Header;