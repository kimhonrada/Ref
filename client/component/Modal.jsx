import React from 'react';

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-content">
        <input type="text" className="foodName" />
        <input type="text" className="foodUrl" />
        <button className="modal-button" onClick={() => { console.log('yes') }}>Go shop!</button>
      </div>
    </div>
  )
}

export default Modal;