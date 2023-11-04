import React from 'react'; 
import "./Nav.css";
import logo from '../../Assets/logo.png';

function Nav() {

    return (
        <nav>
            <div className = "nav-el" id = "nav-logo-left">
                <img src = {logo} id = 'logo' alt = "logo" />
                <p>Caroline Richards CS Capstone</p>
            </div>
            <ul className = 'nav-el'>
                <li>
                    <a href = "#title">Home</a>
                </li>
                <li>
                    <a href = "#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href = "#writeups">CTF WriteUps</a>
                </li>
                <li>
                    <a href = "#in-progress">In Progress</a>
                </li>
                <li>
                    <a href = '#about'>About Me</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav; 