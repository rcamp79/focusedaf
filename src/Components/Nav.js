import React from 'react'

function Nav() {
    return (
        <div className='nav'>
            <ul className="nav-links">
                <li className='nav-item'>
                    <a href="/" className='nav-link'>
                        <i class="fas fa-home"></i>
                        <span className="link-text">
                            Home
                        </span>
                    </a>
                </li>
                <li className='nav-item'>
                    <a href="/" className='nav-link'>
                        <span className="link-text">
                            About Us
                        </span>
                    </a>
                </li>
                <li className='nav-item'>
                    <a href="/" className='nav-link'>
                        <span className="link-text">
                            Gallery
                        </span>
                    </a>
                </li>
                <li className='nav-item'>
                    <a href="/" className='nav-link'>
                        <span className="link-text">
                            Book Now!
                        </span>
                    </a>
                </li>
                <li className='nav-item'>
                    <a href="/" className='nav-link'>
                        <span className="link-text">
                            Contact Us
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Nav
