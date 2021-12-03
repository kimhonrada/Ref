import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foodName: '',
      foodUrl: ''
    }
    this.addFood = this.addFood.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addFood() {
    // this.props.closeList();
  }

  handleSubmit(e) {
    this.props.closeList();
    e.preventDefault();
  }

  handleChange(e) {
    // console.log(e.target.name, e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    if (!this.props.show) {
      return null
    } else {
      return (
        <div className="modal">
          <form className="modal-content" onSubmit={this.handleSubmit}>
            <input type="text" className="foodName" name='foodName' onChange={this.handleChange} />
            <input type="text" className="foodUrl" name='foodUrl' onChange={this.handleChange} />
            <button type="submit" className="modal-button" onClick={(e) => { this.handleSubmit(e) }}>Go shop!</button>
          </form>
        </div>
      )
    }
  }
}

export default Modal;