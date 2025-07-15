import '../../Pages/MainPage/MainPage.scss';
import "./About.scss";
import aboutMe from "../../Assets/demo.jpg";
import { TypeAnimation } from 'react-type-animation';

function About() {

    return (
        <section className="about">
            <div className='about__layout'>
                <h2 className="section__title section__title--about">Who I am</h2>
                <TypeAnimation
                    sequence={['Aspiring Tech Sales', 900, 'Product Manager', 600, 'Project Manager', 600, 'Analyst', 600, 'Golfer', 600]}
                    repeat={Infinity}
                    className="section__subtitle--about"
                />
                <div className="about__body">
                    I’m a former fintech product manager and real estate development associate, now pivoting into tech sales.
                    <br /><br />
                    I’ve led cross-functional teams to build a new fintech platform and gained a strong technical foundation through BrainStation’s Software Engineering Bootcamp.
                </div>
            </div>
            <img src={aboutMe} alt="" className='about__img'></img>
        </section>
    )
}

export default About;