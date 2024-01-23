import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import Hero from "../../Components/Hero/Hero";
import Projects from "../../Components/Projects/Projects";
import "./MainPage.scss"

function MainPage() {

    return(
        <>
            <Hero />
            <About />
            <Projects />
            <Contact />
        </>
    )
}

export default MainPage;