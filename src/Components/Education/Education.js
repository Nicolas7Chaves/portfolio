import React, { useState } from 'react';
import Modal from '../Modal/Modal.js';
import "./Education.scss";
import OSU from "../../Assets/osulogo.png";
import BrainStation from "../../Assets/brainstation.webp";
import Scrimba from "../../Assets/scrimba.png";

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
        {
            id: 2,
            logo: BrainStation,
            name: "BrainStation",
            details: "information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU..."
        },

    ];
    const CeducationData = [
        {
            id: 1,
            logo: Scrimba,
            name: "Scrimba",
            details: "information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU...information about OSU..."
        },
        {
            id: 2,
            logo: BrainStation,
            name: "123",
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
            <div>
                <h2 className="section__title section__title--Ceducation">Continuing Education</h2>
            </div>
            <div className="ceducation__layout">
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
            </div>
        </section>
    );
}

export default Education;
