import React from 'react';
import axios from 'axios';

class GameModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      guessOne: '',
      guessTwo: '',
      guessThree: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  playBall(guessObj) {
    let answers = Object.values(guessObj)
    let foodArray = []
    let counter = 0;

    let rightAnswers = this.props.food.map((food) => {
      foodArray.push(food.name)
    });

    answers.forEach((answer) => {
      foodArray.includes(answer) ? counter++ : counter
    })

    this.props.points(counter)
    this.props.shutdown();
    this.setState({
      guessOne: '',
      guessTwo: '',
      guessThree: ''
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.playBall(this.state)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    if (!this.props.gamepad) {
      return null
    } else {
      return (
        <div className="game-modal">
          <form className="game-modal-content" onSubmit={this.handleSubmit}>
            <input type="text" className="guessbox1" name='guessOne' onChange={this.handleChange} required />
            <input type="text" className="guessbox2" name='guessTwo' onChange={this.handleChange} required />
            <input type="text" className="guessbox3" name='guessThree' onChange={this.handleChange} required />
            <button type="submit" className="game-modal-button" onClick={(e) => { this.handleSubmit(e) }}>Play!</button>
          </form>
        </div>
      )
    }
  }
}

export default GameModal;