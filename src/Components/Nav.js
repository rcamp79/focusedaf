import React from 'react'

function Nav() {
    return (
        <div className='nav'>
            <ul className="navGroup">
                <li className="navItem">
                    <a href='/'>Home</a>
                </li>
                <li className="navItem">
                    <a href='/About'>About</a>
                </li>
                <li className="navItem">
                    <a href='/Contact'>Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Nav
