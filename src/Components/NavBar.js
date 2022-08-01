import "../Styles/NavBar.css"
import logo from "../images/logo.jpeg";
import insta from "../images/insta.jpeg";
import { NavLink } from "react-router-dom";
import React from "react";

export const  NavBar = () => {
    return (
    <nav className="nav">
        <div className="babyfreeze-image">
            <img src={logo} alt="logo" href="#logo" class="logo"></img> 
        </div>
        <div className="babyfreeze-title">
            <h1>BABYFREEZE</h1>
        </div>
        <NavLink className="nav-link" to="/">
                  <text>Home</text>
        </NavLink>
        <NavLink className="nav-link" to="/media">
                <text>Media</text>
        </NavLink>
        <div className="babyfreeze-ig">
            <a href="https://www.instagram.com/bbyfrze/">
                <img src={insta} alt="insta"></img> 
            </a>
        </div>
    </nav>
    );
}

