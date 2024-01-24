import '../../Pages/MainPage/MainPage.scss';
import "./About.scss";
import aboutMe from "../../Assets/demoday.jpeg";
import { TypeAnimation } from 'react-type-animation';

function About() {

    return (
        <section className="about">
            <div className='about__layout'>
                <h2 className="section__title section__title--about">Who I am</h2>
                <TypeAnimation
                    sequence={['Software Engineer', 600,'Project Manager', 600,'Analyst', 600, 'Crossfitter', 600]}
                    repeat={Infinity}
                    className="section__subtitle--about"
                />
                <div className="about__body">
                    I'm a recent graduate from BrainStation, where I cultivated a passion for Software Development with a strong background in Real Estate Analysis. I'm eager to continue my journey in Software Engineering, applying my creativity and problem-solving skills to develop innovative solutions.
                </div>
            </div>
            <img src={aboutMe} alt="" className='about__img'></img>
        </section>
    )
}

export default About;