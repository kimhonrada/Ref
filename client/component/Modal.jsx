import React from 'react';

const Modal = (props) => {

  const addFood = () => {
    props.closeList();
  }


  if (!props.show) {
    return null
  } else {
    return (
      <div className="modal">
        <div className="modal-content">
          <input type="text" className="foodName" />
          <input type="text" className="foodUrl" />
          <button className="modal-button" onClick={() => { addFood() }}>Go shop!</button>
        </div>
      </div>
    )
  }

}

export default Modal;