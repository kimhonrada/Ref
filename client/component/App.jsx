import React from 'react';
import axios from 'axios';
import Fridge from './Fridge.jsx';
import FoodModal from './FoodModal.jsx';
import PlayerModal from './PlayerModal.jsx';

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
    // this.getFood();
  }

  getFood() {
    axios.get("/food")
      .then((result) => {
        this.setState({ food: result.data.slice(0, (Math.floor(Math.random() * (9 - 0 + 1) + 0))) })
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
        <button className="go-shopping" onClick={this.goShop} alt='lets go shopping!'></button>
        <button className="iPad" alt='sign me up' onClick={() => console.log('ipad')}> SIGN ME UP</button>
        <Fridge getFood={this.getFood} food={this.state.food} />
        <FoodModal show={this.state.show} closeList={this.goShop} />
        <PlayerModal />
      </React.Fragment>
    )
  }
}

export default App;