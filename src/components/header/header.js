import React from 'react';

import logoJuandis from '../../assets/images/logo-txt-white.svg'
import './header.css';

const Header = ({ }) =>
    <header>
        <div className="container">
            <a href="#" className="logo-link">
                <img src={logoJuandis} alt="Logo Juan David Pérez" />
            </a>
            <div className="navigation-links">
                <a className="nav-link">
                    me
                </a>
                <a className="nav-link">
                    work
                </a>
                <a className="nav-link">
                    contact
                </a>
            </div>
        </div>
    </header>

export default Header;