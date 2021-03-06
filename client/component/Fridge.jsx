import React from 'react';
import Food from './Food.jsx'
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
      setTimeout(() => {
        this.props.getFood();
      }, 700);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="kitchen">
          <div className='fridgeBody'>
            <Food food={this.props.food} closeFridge={this.handleClick} />
            <div className={this.state.style} onClick={this.handleClick}>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Fridge;