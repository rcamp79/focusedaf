import React from 'react'

function Header() {
    return (
        <header>
            <div className="social_group">
                <ul>
                    <li>
                        <a href="/">
                            <i className="fab fa-facebook fa-3x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="brand">
                <h2>FocusedAF Photos</h2>
            </div>
        </header>
    )
}

export default Header
