import React from 'react';
import './Modal.css';

const Modal = ({ score }) => {  // score prop'unu al
  return (
    <div className='modal'>
        <div className='modal-title'>Skor: {score}</div>
        <div onClick={() => window.location = "/"} className='modal-btn'> Start Again
        </div>
    </div>
  )
}

export default Modal;
