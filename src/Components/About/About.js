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
                    sequence={['Product Manager', 600,'Project Manager', 600,'Analyst', 600, 'Golfer', 600]}
                    repeat={Infinity}
                    className="section__subtitle--about"
                />
                <div className="about__body">
                I'm transitioning to Product Management, I leverage my background in Real Estate Finance, Project Management, and full-stack development. Expertise in strategic planning, stakeholder management, and technical proficiency enables me to effectively connect development teams with business goals.
                </div>
            </div>
            <img src={aboutMe} alt="" className='about__img'></img>
        </section>
    )
}

export default About;