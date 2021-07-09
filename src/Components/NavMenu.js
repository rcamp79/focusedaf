import React from 'react';
import { useState } from 'react';

function NavMenu(props) {

    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <p href="/" className="icon-button menu-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </p>
            {open && props.children}
        </li>
    )
}

export default NavMenu
