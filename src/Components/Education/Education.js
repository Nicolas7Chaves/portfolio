import { useState } from 'react';
import Modal from '../Modal/Modal.js';
import "./Education.scss";
import educationData from "../../Data/education.json";


function Education() {
    const [openModalId, setOpenModalId] = useState(null);
    const [education, setEducation] = useState(educationData)
    const closeModal = (e) => {
        e.stopPropagation();
        setOpenModalId(null);
    };

    // const CeducationData = [
    //     {
    //         id: 1,
    //         logo: Scrimba,
    //         name: "Scrimba",
    //         details: "information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU..."
    //     },
    //     {
    //         id: 2,
    //         logo: BrainStation,
    //         name: "123",
    //         details: "information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU..."
    //     },

    // ];

    return (
        <section className="education">
            <h2 className="section__title section__title--education">Education</h2>
            <div className="education__layout">
                {education.map(item => (
                    <div key={item.id} className="education__item" onClick={() => setOpenModalId(item.id)}>
                        <img src={require(`../../Assets/education/${item.logo}`)} alt={item.name} className="education__logo" />
                        <div className="education__name">{item.name}</div>
                        <Modal isOpen={openModalId === item.id} onClose={closeModal}>
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


            <div>
                <h2 className="section__title section__title--Ceducation">Continuing Education</h2>
            </div>
            {/* <div className="ceducation__layout">
                {CeducationData.map(item => (
                    <div key={item.id} className="ceducation__item" onClick={() => setOpenModalId(item.id)}>
                        <img src={item.logo} className="ceducation__logo" />
                        <div className="ceducation__name">{item.name}</div>
                        <Modal isOpen={openModalId === item.id} onClose={closeModal}>
                            <h3>{item.name}</h3>
                            <p>{item.details}</p>
                        </Modal>
                    </div>
                ))}
            </div> */}
        </section>
    );
}

export default Education;
