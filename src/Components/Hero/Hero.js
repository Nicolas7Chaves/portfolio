import "./Hero.scss";
import Portrait from "../../Assets/headshot.jpg";

function Hero() {
    return (
        <>
            <section className="home" id="home">
                <section className="hero" >
                <img className="hero__portrait" src={Portrait} alt="portrait of Nicolas"></img>
                    <h1 class="section__title section__title--hero">
                        Hey! I'm <strong className="section__title--name">Nicolas Chaves</strong>
                    </h1>
                    <p class="section__subtitle section__subtitle--hero">FULL STACK DEV</p>
                </section >
            </section>

            <section className="skills">
                <h2 className="section_title section__title--skills">
                    Skills
                </h2>
                <div className="skills__container">
                    <div className="skills__item">
                        <img className="skills__image" />
                        <p className="skills__title">test test test test</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__image" />
                        <p className="skills__title">test test test test</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__image" />
                        <p className="skills__title">test test test test</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__image" />
                        <p className="skills__title">test test test test</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__image" />
                        <p className="skills__title">test test test test</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__image" />
                        <p className="skills__title">test test test test</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__image" />
                        <p className="skills__title">test test test test</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;
