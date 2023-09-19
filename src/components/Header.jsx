import React from "react";
import Logo from "./Logo";
import NavLogin from "./NavLogin";
import '../css/header.css'

export default function Header(){
    return(
        <nav className="main-nav">
            <Logo />
            <NavLogin />
        </nav>
    )
}