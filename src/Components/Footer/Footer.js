import "./Footer.scss";
import github from "../../Assets/footer/ncgit.svg"
import linkedin from "../../Assets/footer/in.svg"
function Footer() {

    return (
        <footer className="footer">
            <a href="mailto:nicolas7chaves@gmail.com" className="footer__link">nicolas7chaves@gmail.com</a>
            <div className="social-list">
                <a href="https://www.linkedin.com/in/nicolas7chaves/" target="_blank" rel="noopener noreferrer">
                    <img className="social-list__link" src={linkedin} alt="LinkedIn" />
                </a>
                <a href="https://github.com/Nicolas7Chaves" target="_blank" rel="noopener noreferrer">
                    <img className="social-list__link" src={github} alt="github" />
                </a>

            </div>
        </footer>
    )
}

export default Footer;