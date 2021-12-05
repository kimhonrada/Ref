import React from 'react';
import axios from 'axios';
import Fridge from './Fridge.jsx';
import FoodModal from './FoodModal.jsx';
import PlayerModal from './PlayerModal.jsx';
import GameModal from './GameModal.jsx';
import SignupModal from './SignupModal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [],
      show: false,
      ipad: false,
      gamepad: false,
      signup: false,
      mainPlayer: '',
      points: 0,
    }
    this.getFood = this.getFood.bind(this);
    this.goShop = this.goShop.bind(this);
    this.goLogin = this.goLogin.bind(this);
    this.goPlay = this.goPlay.bind(this);
    this.goSignup = this.goSignup.bind(this);
    this.setMainPlayer = this.setMainPlayer.bind(this);
    this.setPoints = this.setPoints.bind(this);
    this.whatIpadDo = this.whatIpadDo.bind(this);
  }

  componentDidMount() {
    // this.getFood();
  }

  setMainPlayer(incomingPlayer) {
    this.setState({
      mainPlayer: incomingPlayer.data.name,
      points: incomingPlayer.data.points
    })
  }

  setPoints(newPoints) {
    if (newPoints) {
      this.setState({ points: this.state.points + newPoints })
      setTimeout(() => {
        axios.put("/player", {
          name: this.state.mainPlayer,
          points: this.state.points
        })
          .then((result) => {
            console.log('points updated')
          }).catch((err) => {
            console.log(err)
          });
      }, 1000)
    }
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
    if (!this.state.signup) {
      this.setState({ signup: true })
    } else {
      this.setState({ signup: false })
    }
  }

  goLogin() {
    if (!this.state.ipad) {
      this.setState({ ipad: true })
    } else {
      this.setState({ ipad: false })
    }
  }

  goPlay() {
    if (!this.state.gamepad) {
      this.setState({ gamepad: true })
    } else {
      this.setState({ gamepad: false })
    }
  }

  whatIpadDo() {
    if (this.state.mainPlayer === '') {
      this.goLogin();
    } else {
      this.goPlay();
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="scoreBoard">
          <h3 className="score">{this.state.points}</h3>
        </div>
        <button className="go-shopping" onClick={this.goShop} alt='lets go shopping!'></button>
        <button className="go-signup" onClick={this.goSignup}> sign me up</button>
        <button className="iPad" alt='ipad' onClick={this.whatIpadDo}></button>
        <Fridge getFood={this.getFood} food={this.state.food} />
        <FoodModal show={this.state.show} closeList={this.goShop} />
        <PlayerModal setMainPlayer={this.setMainPlayer} ipad={this.state.ipad} shutdown={this.goLogin} />
        <GameModal points={this.setPoints} food={this.state.food} gamepad={this.state.gamepad} shutdown={this.goPlay} />
        <SignupModal signup={this.state.signup} shutdown={this.goSignup} />
      </React.Fragment>
    )
  }
}


export default App;