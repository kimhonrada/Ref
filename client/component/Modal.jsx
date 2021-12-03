import React from 'react';

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-content">
        <input type="text" className="foodName" />
        <input type="text" className="foodUrl" />
      </div>
      <button className="shop">Go shop!</button>
    </div>
  )
}

export default Modal;