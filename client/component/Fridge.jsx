import React from 'react';
import "./fridge.css";

class Fridge extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style: 'fridgeDoor',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.style === 'fridgeDoor') {
      this.setState({ style: 'doorOpen' })
    } else {
      this.setState({ style: 'fridgeDoor' })
      this.props.getFood();
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="kitchen">
          <div className='fridgeBody'>
            <div className={this.state.style} onClick={this.handleClick}>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Fridge;