import React, { Component } from 'react';

import logoJuandis from '../../assets/images/logo-txt-white.svg'
import './header.css';

class Header extends Component {

    render(){
        return(
            <header>
                <div className="container">
                    <a href="#" className="logo-link">
                        <img src={logoJuandis} alt="Logo Juan David Pérez" />
                    </a>
                    <div className="navigation-links">
                        <a className="nav-link" href="#me">
                            me
                        </a>
                        <a className="nav-link" href="#work">
                            work
                        </a>
                        <a className="nav-link" href="#contact">
                            contact
                        </a>
                    </div>
                </div>
            </header>
        )
    }
    
}
export default Header;