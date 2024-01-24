import '../../Pages/MainPage/MainPage.scss';
import "./About.scss";
import aboutMe from "../../Assets/demoday.jpeg";

function About() {

    return (
        <section className="about" id="about">
                <div className='about__layout'>
                    <h2 className="section__title section__title--about">Who I am</h2>
                    {/* <p className="section__subtitle section__subtitle--about"> Software Engineer based out of Miami</p> */}

                    <div className="about__body">
                        I'm a recent graduate from BrainStation, where I cultivated a passion for Software Development with a strong background in Real Estate Analysis. I'm eager to continue my journey in Software Engineering, applying my creativity and problem-solving skills to develop innovative solutions.
                    </div>
                </div>
                <img src={aboutMe} alt="" className='about__img'></img>
        </section>
    )
}

export default About;