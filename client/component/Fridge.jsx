import React from 'react';
import "./fridge.css";

class Fridge extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: true
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('you clicked me')
  }

  render() {
    return (
      <React.Fragment>
        <div className='fridgeDoor' onClick={this.handleClick}>
          <div className='fridgeBody'>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Fridge;