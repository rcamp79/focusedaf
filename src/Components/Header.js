import React from 'react';
import Nav from './Nav';

function Header() {
    return (
        <header className="header">
            <div className="social_group">
                <ul>
                    <li>
                        <a href="/">
                            <i className="fab fa-facebook fa-2x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i className="fab fa-twitter fa-2x"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="brand">
                <h2>FocusedAF Photos</h2>
            </div>
            <div className="nav">
                <Nav />
            </div>
        </header>
    )
}

export default Header
