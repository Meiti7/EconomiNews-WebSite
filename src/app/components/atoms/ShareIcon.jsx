"use client"
import { GoShareAndroid } from "react-icons/go";
import React, { useState } from 'react';
import Modal from 'react-modal';

function ShareList({ onClose }) {
  const handleShare = (platform) => {
  
    console.log(`You Clicked On ${platform}`);
  
    onClose();
  };

  return (
    <div>
      <button onClick={() => handleShare('Copy Links')}>Copy Links</button>
      <button onClick={() => handleShare('Email')}>Email</button>
      <button onClick={() => handleShare('Copy Links')}>Copy Links</button>
      <button onClick={() => handleShare('Email')}>Email</button>
      <button onClick={() => handleShare('Copy Links')}>Copy Links</button>
      <button onClick={() => handleShare('Email')}>Email</button>
     
    </div>
  );
}

function ShareIcon() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <GoShareAndroid size={24} style={{ cursor: 'pointer' }} onClick={openModal} />
      <Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  contentLabel="Share Modal"
  style={{
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      width: '500px',
      height: '400px',
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }}
>
        <ShareList onClose={closeModal} />
      </Modal>
    </div>
  );
}

export default ShareIcon;
