import React from 'react';
import axios from 'axios';
import Fridge from './Fridge.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: []
    }
    this.getFood = this.getFood.bind(this)
  }

  componentDidMount() {
    this.getFood();
  }

  getFood() {
    axios.get("/food")
      .then((result) => {
        this.setState({ food: result.data })
      }).catch((err) => {
        console.log(err)
      });
  }


  render() {
    return (
      <React.Fragment>
        <Fridge getFood={this.getFood} food={this.state.food} />
      </React.Fragment>
    )
  }
}

export default App;