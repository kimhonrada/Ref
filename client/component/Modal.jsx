import React from 'react';
import axios from 'axios';

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      picture: null
    }
    this.addFood = this.addFood.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addFood() {
    // this.props.closeList();
    axios.post('/food', {
      name: this.state.name,
      picture: this.state.picture
    })
      .then((result) => {
        this.props.closeList();
        console.log('success posting')
      }).catch((err) => {
        alert(`dang! check yo fridge first pls.`)
        this.props.closeList();
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.addFood()
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    if (!this.props.show) {
      return null
    } else {
      return (
        <div className="modal">
          <form className="modal-content" onSubmit={this.handleSubmit}>
            <input type="text" className="foodName" name='name' onChange={this.handleChange} required />
            <input type="url" className="foodUrl" name='picture' onChange={this.handleChange} required />
            <button type="submit" className="modal-button" onClick={(e) => { this.handleSubmit(e) }}>Go shop!</button>
          </form>
        </div>
      )
    }
  }
}

export default Modal;