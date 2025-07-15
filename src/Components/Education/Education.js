import { useState } from 'react';
import Modal from '../Modal/Modal.js';
import "./Education.scss";
import educationData from "../../Data/education.json";
import ceducationData from "../../Data/continuingEducation.json";

function Education() {
    const [openEducationModalId, setOpenEducationModalId] = useState(null);
    const [openCEducationModalId, setOpenCEducationModalId] = useState(null);
    const [education, setEducation] = useState(educationData);
    const [ceducation, setCeducation] = useState(ceducationData);
    const closeModal = (e) => {
        e.stopPropagation();
        setOpenEducationModalId(null);
        setOpenCEducationModalId(null);
    };

    return (
        <section className="education">
            <h2 className="section__title section__title--education">Education</h2>
            <div className="education__layout">
                {education.map(item => (
                    <div key={item.id} className="education__item" onClick={() => setOpenEducationModalId(item.id)}>
                        <img src={require(`../../Assets/education/${item.logo}`)} alt={item.name} className="education__logo" />
                        <div className="education__name">{item.name}</div>
                        <Modal isOpen={openEducationModalId === item.id} onClose={closeModal}>
                            <h3 className='education__modal-name'>{item.name}</h3>
                            <p className='education__modal-detail'>{item.details}</p>
                            <ul>
                                {item.courses.map((course, index) => (
                                    <li className='education__modal-item' key={index}>{course.title}</li>
                                ))}
                            </ul>
                        </Modal>
                    </div>
                ))}
            </div>

            {/* <div>
                <h2 className="section__title section__title--Ceducation">Continuing Education</h2>
            </div> */}
            {/* <div className="education__layout">
                {ceducation.map(item => (
                    <div key={item.id} className="education__item" onClick={() => setOpenCEducationModalId(item.id)}>
                        <img src={require(`../../Assets/education/${item.logo}`)} alt={item.name} className="education__logo" />
                        <div className="education__name">{item.name}</div>
                        <Modal isOpen={openCEducationModalId === item.id} onClose={closeModal}>
                            <h3 className='education__modal-name'>{item.name}</h3>
                            <p className='education__modal-detail'>{item.details}</p>
                            <ul>
                                {item.courses.map((course, index) => (
                                    <li className='education__modal-item' key={index}>
                                        {course.title}
                                        <img className="education__modal-progress"
                                            src={require(`../../Assets/education/${course.completed ? 'completed.png' : 'whiteWIP.png'}`)}
                                            alt={course.completed ? 'Completed' : 'WIP'}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </Modal>
                    </div>
                ))}
            </div> */}
        </section>
    );
}

export default Education;
