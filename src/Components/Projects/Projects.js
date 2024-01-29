import { useState } from "react";
import "./Projects.scss"
import Modal from '../Modal/Modal.js';
import projectData from "../../Data/projects.json"

function Projects() {
    const [projects, setProjects] = useState(projectData)
    const [openModalId, setOpenModalId] = useState(null);
    const closeModal = (e) => {
        e.stopPropagation();
        setOpenModalId(null);
    };
    return (
        <section className="projects">
            <h2 className="section__title section__title--projects">My Projects</h2>
            <div className="projects__layout">
                <div className="projects__layout">
                    {projects.map(item => (
                        <div key={item.id} className="projects__item" onClick={() => setOpenModalId(item.id)}>
                            <img src={require(`../../Assets/projects/${item.logo}`)} alt={item.name} className="projects__logo" />
                            <div className="projects__name">{item.name}</div>
                            <Modal isOpen={openModalId === item.id} onClose={closeModal}>
                                <h3 className='projects__modal-name'>{item.name}</h3>
                                <img src={require(`../../Assets/projects/${item.logo}`)} alt={item.name} className="projects__logo--modal" />
                                <p className='projects__modal-detail'>{item.details}</p>
                                <ul className="projects__modal-items">
                                    {item.icons.map((icon, index) => (
                                        <li key={index} className='projects__modal-item'>
                                            <a href={icon.link} target="_blank" rel="noopener noreferrer">
                                                <img src={require(`../../Assets/projects/${icon.item}`)} alt="Icon" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </Modal>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;