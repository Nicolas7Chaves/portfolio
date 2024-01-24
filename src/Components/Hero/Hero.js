import "./Hero.scss";
import Portrait from "../../Assets/headshot.jpg";
import skillsData from "../../Data/skillsData.json"
import { useState } from "react";

function Hero() {
    const [skills, setSkills] = useState(skillsData);

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

            <section className="skills" id="about">
                <h2 className="section__title section__title--skills">
                    Skills
                </h2>
                <div className="skills__container">
                    {skills.map((skill, index) => (
                        <div key={index} className="skills__item">
                            <img className="skills__image" src={require(`../../Assets/skillsData/${skill.img}`)} alt={skill.title} />
                            <p className="skills__title">{skill.title}</p>
                        </div>
                    ))}
                </div>
                <button className="btn">SEE MY PROJECTS</button>
            </section>
        </>
    )
}

export default Hero;
//HTML, CSS, JavaScript, Node, React, Express, MySQL, Agile, DOM APIs,
// Web APIs, User Authentication, OAuth, Heroku, GitHub, Jest,