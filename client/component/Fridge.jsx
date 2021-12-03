import React from 'react';

class Fridge extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: true
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className='fridgeDoor'>
          fridge door
          <div className='fridgeBody'>
            fridge body
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Fridge;