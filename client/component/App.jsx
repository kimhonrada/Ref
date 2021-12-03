import React from 'react';
import axios from 'axios';
import Fridge from './Fridge.jsx';
import Modal from './Modal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [],
      show: false
    }
    this.getFood = this.getFood.bind(this);
    this.goShop = this.goShop.bind(this);
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

  goShop() {
    if (!this.state.show) {
      this.setState({ show: true })
    } else {
      this.setState({ show: false })
    }
  }


  render() {
    return (
      <React.Fragment>
        <button className="go-shopping" onClick={this.goShop}> Let's go shopping!</button>
        <Fridge getFood={this.getFood} food={this.state.food} />
        <Modal show={this.state.show} closeList={this.goShop} />
      </React.Fragment>
    )
  }
}

export default App;