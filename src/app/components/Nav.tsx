import React, {useState, useEffect} from 'react'
import { navs } from '../data/data';
import './nav.css';

export default function Nav() {

    const [navList, setNavlist] = useState(navs);
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });
        return () => {
            window.removeEventListener('scroll', () => {
                setScroll(window.scrollY);
            });
        }
    }, [scroll])

    const handleToggleMenu = () => {
        setOpen(!open);
    };

    const handleScrollTo = (section: string) => {};

    const handleNavActive = () => {};

  return (
    <nav
    id="navbar"
    className={`navbar order-last order-lg-0 ${ open ? 'navbar-mobile' : undefined }`}
    >
    <ul>
        {navList.map(nav => (
            <li key={nav.id}>
                <a className={`nav-link scrollto ${nav.active ? 'active' : undefined }`}
                onClick={() => handleScrollTo(nav.target)}
                >

                    {nav.name === 'Home' ? (
                        <i className="bi bi-house-door-fill"></i>
                    ) : (
                        nav.name
                    )}
                </a>
            </li>
        ))}
    </ul>
    <i className="bi bi-list mobile-nav-toggle"
        onClick={handleToggleMenu}
    ></i>

    </nav>
  );
}
