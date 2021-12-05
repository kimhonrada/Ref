import React from 'react';
import axios from 'axios';
import Fridge from './Fridge.jsx';
import FoodModal from './FoodModal.jsx';
import PlayerModal from './PlayerModal.jsx';
import GameModal from './GameModal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [],
      show: false,
      ipad: false,
      mainPlayer: ''
    }
    this.getFood = this.getFood.bind(this);
    this.goShop = this.goShop.bind(this);
    this.goSignup = this.goSignup.bind(this);
    this.setMainPlayer = this.setMainPlayer.bind(this);
  }

  componentDidMount() {
    // this.getFood();
  }

  setMainPlayer(incomingPlayer) {
    this.setState({ mainPlayer: incomingPlayer })
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

  goSignup() {
    if (!this.state.ipad) {
      this.setState({ ipad: true })
    } else {
      this.setState({ ipad: false })
    }
  }


  render() {
    return (
      <React.Fragment>
        <button className="go-shopping" onClick={this.goShop} alt='lets go shopping!'></button>
        <button className="iPad" alt='ipad' onClick={this.goSignup}></button>
        <Fridge getFood={this.getFood} food={this.state.food} />
        <FoodModal show={this.state.show} closeList={this.goShop} />
        {this.state.mainPlayer === '' ? <PlayerModal setMainPlayer={this.setMainPlayer} ipad={this.state.ipad} shutdown={this.goSignup} /> : <GameModal />}
      </React.Fragment>
    )
  }
}

export default App;