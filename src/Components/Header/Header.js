import './Header.scss';

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img src="" alt="" />
            </div>
            <button className="nav-toggle" aria-label="toggle navigation">
                <span className="hamburger"></span>
            </button>
            <nav className='header__nav'>
                <ul className='header__list'>
                    <li className='header__item'><a href="#home">Home</a></li>
                    <li className='header__item'><a href="#about">About</a></li>
                    <li className='header__item'><a href="#projects">Projects</a></li>
                    <li className='header__item'><a href="#contact">Contact</a></li>
                    <li className='header__item'><a href="#resume">Resume</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
