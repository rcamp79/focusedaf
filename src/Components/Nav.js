import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
    return (
        <div className='nav'>
            <ul className="nav-links">
                <li className='nav-item'>
                    <Link to="/" className='nav-link'>
                        <span className="link-text">
                            Home
                        </span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/" className='nav-link' disabled>
                        <span className="link-text">
                            Login
                        </span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/portfolio" className='nav-link'>
                        <span className="link-text">
                            Portfolio
                        </span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/Pricing" className='nav-link'>
                        <span className="link-text">
                            Pricing
                        </span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/contact" className='nav-link'>
                        <span className="link-text">
                            Contact Us
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav
