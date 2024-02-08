import { useState } from 'react';
import toggle from '../assets/images/toggle.png';
import navLogo from '../assets/images/nav-logo-mh.png';

export default function Nav({ links }) {
    const [open, setOpen] = useState(true);
    
    const toggleOpen = () => {
        setOpen(!open);
    }

    return (
        <nav className="nav collapsible">
            <a href="/"><img className="nav__brand-image" src={navLogo} alt="" /></a>
            <img className='nav__toggler' onClick={toggleOpen} src={toggle} alt="" />
            <ul className={open ? 'list nav__list collapsible--expanded':'list nav__list collapsible__content nav__list-closed'}>
                {links.map((link) => link)}
            </ul>
        </nav>
    )
}