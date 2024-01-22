import './Header.scss';

function Header() {
    return (
        <header className="header">
            <nav>
                <ul className='header__ul'>
                    <li className='header__li'><a href="#section1">Home</a></li>
                    <li className='header__li'><a href="#section2">About</a></li>
                    <li className='header__li'><a href="#section3">Projects</a></li>
                    <li className='header__li'><a href="#section4">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
