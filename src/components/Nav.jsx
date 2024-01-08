import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function Nav() {
    return (
        <Navbar
            links={[
                <Link key={1} className='nav__item' to='/'>
                    Home
                </Link>,
                <Link key={2} className='nav__item' to='/portfolio'>
                    Portfolio
                </Link>,
                <Link key={3} className='nav__item' to='/resume'>
                    Resume
                </Link>,
                <Link key={4} className='nav__item' to='/contact'>
                    Contact
                </Link>,
            ]}
         />
    );
}