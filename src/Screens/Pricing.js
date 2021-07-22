import React from 'react'
import { Container } from 'react-bootstrap';
import Header from '../Components/Header';
import NavItem from '../Components/NavItem';
import { ReactComponent as FacebookIcon } from '../Assets/Icons/facebook.svg';
import { ReactComponent as TwitterIcon } from '../Assets/Icons/twitter.svg';
import { ReactComponent as InstaIcon } from '../Assets/Icons/instagram.svg';
import { ReactComponent as HamburgerIcon } from '../Assets/Icons/menu.svg';
import NavMenu from '../Components/NavMenu';
import { Link } from 'react-router-dom';

function Pricing() {
    return (
        <div className="pricing-container">
            <Header>
                <NavItem icon={<FacebookIcon />} />
                <NavItem icon={<TwitterIcon />} />
                <NavItem icon={<InstaIcon />} />
                <NavMenu icon={<HamburgerIcon />}>
                    <div className="nav-menu">
                        <ul className="nav-links">
                            <li className='nav-item'>
                                <Link to="/" className='nav-menu-link'>
                                    <span className="link-text">
                                        Home
                                    </span>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/about" className='nav-menu-link'>
                                    <span className="link-text">
                                        About
                                    </span>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/" className='nav-menu-link' disabled>
                                    <span className="link-text">
                                    Client Login
                                    </span>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/portfolio" className='nav-menu-link'>
                                    <span className="link-text">
                                        Portfolio
                                    </span>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/Pricing" className='nav-menu-link'>
                                    <span className="link-text">
                                        Pricing
                                    </span>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/contact" className='nav-menu-link '>
                                    <span className="link-text">
                                        Contact Us
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </NavMenu>
            </Header>

            <Container className="main-pricing">
                <div className="pricing-content">
                    <h2>Pricing</h2>
                </div>
            </Container>
        </div>
    )
}

export default Pricing
