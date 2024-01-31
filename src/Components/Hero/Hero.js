import "./Hero.scss";
import Portrait from "../../Assets/bwheadshot.jpg";
import skillsData from "../../Data/skillsData.json"
import { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import particlesOptions from "./particles.json";
import { loadFull } from "tsparticles";

function Hero() {
    const [skills, setSkills] = useState(skillsData);
    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const [init, setInit] = useState(false);

    useEffect(() => {
        if (init) {
            return;
        }

        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);
    return (
        <>
            <section className="home" id="home">
                {init && <Particles className="particles" options={particlesOptions} />}
                <section className="hero" >
                    <img className="hero__portrait" src={Portrait} alt="portrait of Nicolas"></img>
                    <h1 className="section__title section__title--hero">
                        Hey! I'm <strong className="section__title--name">Nicolas Chaves</strong>
                    </h1>
                    <p className="section__subtitle section__subtitle--hero">FULL STACK DEV</p>
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
                <button onClick={scrollToProjects} className="btn">SEE MY PROJECTS</button>
            </section>
        </>
    )
}

export default Hero;
