import React, { useState } from 'react';
import Modal from '../Modal/Modal.js';
import "./Education.scss";
import OSU from "../../Assets/osu.svg";

function Education() {
    const [openModalId, setOpenModalId] = useState(null);
    const closeModal = (e) => {
        e.stopPropagation();
        setOpenModalId(null);
    };

    const educationData = [
        {
            id: 1,
            logo: OSU,
            name: "Ohio State University",
            details: "information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU..."
        },
        
    ];

    return (
        <section className="education">
            <h2 className="section__title section__title--education">Education</h2>
            <div className="education__layout">
                {educationData.map(item => (
                    <div key={item.id} className="education__item" onClick={() => setOpenModalId(item.id)}>
                        <img src={item.logo} className="education__logo" />
                        <div className="education__name">{item.name}</div>
                        <Modal isOpen={openModalId === item.id} onClose={closeModal}>
                            <h3>{item.name}</h3>
                            <p>{item.details}</p>
                        </Modal>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Education;
