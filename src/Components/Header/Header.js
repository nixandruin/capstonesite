import React from 'react';
import './Header.css'; 

import Nav from '../Nav/Nav'; 

function Header() {
    return (
        <header>
            <Nav />
            <h1 id = "title">Caroline Richards</h1>
        </header>
    );
}

export default Header; 