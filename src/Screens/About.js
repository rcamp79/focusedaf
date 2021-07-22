import React from 'react'
import profile from '../Assets/Img/profile.jpg';
import Header from '../Components/Header';
import NavItem from '../Components/NavItem';
import { ReactComponent as FacebookIcon } from '../Assets/Icons/facebook.svg';
import { ReactComponent as TwitterIcon } from '../Assets/Icons/twitter.svg';
import { ReactComponent as InstaIcon } from '../Assets/Icons/instagram.svg';
import { ReactComponent as HamburgerIcon } from '../Assets/Icons/menu.svg';
import NavMenu from '../Components/NavMenu';
import { Link } from 'react-router-dom';






function About() {
    return (
        <div className="about-container">
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
            <div className='main-about'>
                <div className="about-content">
                    <div className="about-container">
                        <div className="profile-image-container">
                            <img src={profile} alt="" className='profile-image' />
                        </div>
                        <div className="profile-text">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas earum, ipsa repellendus tempore illum numquam quam nostrum quis necessitatibus vero ut. Reiciendis atque quaerat tenetur accusantium incidunt ducimus aspernatur, molestias officia voluptatem commodi quo, animi officiis repellendus quas laboriosam magnam unde mollitia explicabo blanditiis ad iure. Quasi, et. Sit, sunt?</p>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        </div>

    )
}

export default About
