import "./Projects.scss"

function Projects() {

    return (
        <section className="projects">
            <h2 className="section__title section__title--projects">My Projects</h2>
            <p className="section__subtitle"></p>
            <div className="portfolio">
                <a href="#" className="portfolio__item"> 1
                    <img src="img/portfolio-01.jpg" alt="" className="portfolio__img" />
                </a>
            </div>
        </section>
    )
}

export default Projects;