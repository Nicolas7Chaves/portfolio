import "./Hero.scss";


function Hero() {
    return (
        <section className="home" id="home">
            <section className="hero" >
                <h1 class="section__title">
                    Hey! I'm <strong>Nicolas Chaves</strong>
                </h1>
                <p class="section__subtitle">FULL STACK DEV</p>
                <img src="" alt="portrait of Nicolas"></img>
            </section >
            <section className="skills">
                <h2 className="section_title">
                    Skills
                </h2>
                <div className="skills__container">
                    <img className="skills__image" />
                    <p className="skills__title"></p>
                </div>
            </section>
        </section>
    )
}


export default Hero;