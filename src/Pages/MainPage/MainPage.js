import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import Education from "../../Components/Education/Education";
import Hero from "../../Components/Hero/Hero";
import Projects from "../../Components/Projects/Projects";
import "./MainPage.scss"

function MainPage() {

    return(
        <>
            <Hero />
            <About />
            <Education />
            <Projects />
            <Contact />
        </>
    )
}

export default MainPage;