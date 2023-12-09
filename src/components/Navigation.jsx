// import React from "react";
import { NavLink } from "react-router-dom";
import siteLogo from "../assets/shared/logo.svg";
import iconHam from "../assets/shared/icon-hamburger.svg";
import iconClose from "../assets/shared/icon-close.svg";

function Navigation() {

    const handleMenu = () => {
        let dropMenu = document.querySelector("#drop");
        dropMenu.classList.remove("hide");
        dropMenu.classList.add("show");

        let ham = document.querySelector("#ham");
        ham.classList.remove("show");
        ham.classList.add("hide");
    };

    const handleHam = () => {
        let dropMenu = document.querySelector("#drop");
        dropMenu.classList.remove("show");
        dropMenu.classList.add("hide");

        let ham = document.querySelector("#ham");
        ham.classList.remove("hide");
        ham.classList.add("show");
    };

    return (
        <header className="navbar">
            <NavLink className="nav-brand" to="/fm-space-tourism-website">
                <img src={siteLogo} alt="logo-svg" />
            </NavLink>
            <hr />
            <ul className="nav-list">
                <li className="nav-item hover_effect"  id="home">
                    <NavLink className="nav-link" to="/fm-space-tourism-website">
                        <span className="nav-num">00</span>
                        <span>Home</span>
                    </NavLink>
                </li>
                <li className="nav-item hover_effect"  id="destination">
                    <NavLink className="nav-link" to="/fm-space-tourism-website/destination/Moon">
                        <span className="nav-num">01</span>
                        <span>Destination</span>
                    </NavLink>
                </li>
                <li className="nav-item hover_effect"  id="crew">
                    <NavLink className="nav-link" to="/fm-space-tourism-website/crew">
                        <span className="nav-num">02</span>
                        <span>Crew</span>
                    </NavLink>
                </li>
                <li className="nav-item hover_effect" id="tech">
                    <NavLink className="nav-link" to="/fm-space-tourism-website/tech">
                        <span className="nav-num">03</span>
                        <span>Technology</span>
                    </NavLink>
                </li>
            </ul>

            <div id="ham" className="nav-corner" onClick={handleMenu}>
                <img className="icon-ham" src={iconHam} alt="svg-hamburger" />
            </div>

            <div id="drop" className="dropdown-menu">
                <div id="close" className="nav-corner" onClick={handleHam}>
                    <img className="icon-close" src={iconClose} alt="svg-close-icon" />
                </div>
                <ul className="nav-list-drop">
                    <li className="nav-item-drop hover_effect" id="home2">
                        <NavLink className="nav-link-drop" to="/fm-space-tourism-website">
                            <span className="nav-num-drop">00</span>
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li className="nav-item-drop hover_effect" id="destination2">
                        <NavLink className="nav-link-drop" to="/fm-space-tourism-website/destination/Moon">
                            <span className="nav-num-drop">01</span>
                            <span>Destination</span>
                        </NavLink>
                    </li>
                    <li className="nav-item-drop hover_effect" id="crew2">
                        <NavLink className="nav-link-drop" to="/fm-space-tourism-website/crew">
                            <span className="nav-num-drop">02</span>
                            <span>Crew</span>
                        </NavLink>
                    </li>
                    <li className="nav-item-drop hover_effect" id="tech2">
                        <NavLink className="nav-link-drop" to="/fm-space-tourism-website/tech">
                            <span className="nav-num-drop">03</span>
                            <span>Technology</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Navigation;
