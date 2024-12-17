import React, { useState } from 'react';
import charger from "../images/charger.jpg"
import phonecase from "../images/phonecase.jpeg"
import phonestand from "../images/phonestand.webp"
import popsocket from "../images/popsocket.jpg"
import earbuds from "../images/earbuds.jpg"
import screenprotector from "../images/screenprotector.jpg"
import Modal from './modalwindow'; // import the modal component


const Button4 = function() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState(null);

  // Function to open the modal with the clicked image
  const openModal = (imageSrc) => {
    setModalImageSrc(imageSrc);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageSrc(null);
  };

  return (
        <>
            <header className='title'>
                <h1>Accessories</h1>
            </header>
            <section className='iphone-section'>
                <img src={charger} onClick={() => openModal(charger)} />
                <img src={phonecase} onClick={() => openModal(phonecase)} />
                <img src={phonestand} onClick={() => openModal(phonestand)} />
                <img src={popsocket} onClick={() => openModal(popsocket)} />
                <img src={earbuds} onClick={() => openModal(earbuds)} />
                <img src={screenprotector} onClick={() => openModal(screenprotector)} />
            </section>

            <Modal isOpen={isModalOpen} imageSrc={modalImageSrc} closeModal={closeModal} />
        </>
    )
}

export default Button4;