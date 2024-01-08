// import { Menu } from '../assets/images/menu.svg';
import { useState } from 'react';
import power from '../assets/images/power.png';
import logo from '../assets/images/logo-mh-blue.png'

export default function Nav({ links }) {
    // const [open, setOpen] = useState(true);
    
    // const toggleOpen = () => {
    //     setOpen(!open);
    // }

    
    return (
        <nav className="nav">
            <a href="/"><img className="nav__brand-image" src={logo} alt="" /></a>
            <ul className="nav--list">
                {links.map((link) => link)}
            </ul>
        </nav>
    )
}