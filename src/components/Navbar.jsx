import { useState } from 'react';
import toggle from '../assets/images/toggle.png';
import portfolioLogo from '../assets/images/portfolio-logo.png';
import logo from '../assets/images/logo-mh-blue.png'

export default function Nav({ links }) {
    const [open, setOpen] = useState(true);
    
    const toggleOpen = () => {
        setOpen(!open);
    }

    return (
        <nav className="nav collapsible">
            <a href="/"><img className="nav__brand-image" src={portfolioLogo} alt="" /></a>
            <img className='nav__toggler' onClick={toggleOpen} src={toggle} alt="" />
            <ul className={open ? 'list nav__list collapsible__content collapsible--expanded':'list nav__list collapsible__content nav__list-closed'}>
                {links.map((link) => link)}
            </ul>
            {/* <ul className='list nav__list collapsible__content collapsible--expanded'>
                {links.map((link) => link)}
            </ul> */}
        </nav>
    )
}