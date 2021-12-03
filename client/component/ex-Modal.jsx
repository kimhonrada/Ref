// import React from 'react';

// const Modal = (props) => {

//   const addFood = () => {
//     props.closeList();
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addFood();
//   }

//   const handleChange = (event) => {
//     console.log(event.target.)
//     // console.log({ event.target.name: event.target.value })
//   }

//   if (!props.show) {
//     return null
//   } else {
//     return (

//       <div className="modal">
//         <form className="modal-content" onSubmit={handleSubmit}>
//           <input type="text" className="foodName" onChange={handleChange} />
//           <input type="text" className="foodUrl" onChange={handleChange} />
//           <button type="button" className="modal-button" onClick={(e) => { handleSubmit(e) }}>Go shop!</button>
//         </form>
//       </div>
//     )
//   }

// }

// export default Modal;