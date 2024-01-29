import { useRef } from 'react';
import './Header.scss';
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("active");
    }
    const closeNavbar = () => {
        navRef.current.classList.remove("active");
    };

    return (
        <header className="header">
            <div className="header__logo">
                <img src="" alt="" />
            </div>
            <nav className="header__nav" ref={navRef}>
                    <a className="header__item" href="/#home" onClick={closeNavbar}>Home</a>
                    <a className="header__item" href="/#about" onClick={closeNavbar}>About</a>
                    <a className="header__item" href="/#projects" onClick={closeNavbar}>Projects</a>
                    <a className="header__item" href="/resume" onClick={closeNavbar}>Resume</a>
                    <button className='header__btn header__close-btn' onClick={showNavbar}>
                        <FaTimes />
                    </button>
            </nav>
            <button className='header__btn' onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    )
}

export default Header;
