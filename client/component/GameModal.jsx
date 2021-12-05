import React from 'react';
import axios from 'axios';

class GameModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      player: null
    }
    // this.addPlayer = this.addPlayer.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // addPlayer() {
  //   axios.post('/player', {
  //     name: this.state.player,
  //   })
  //     .then((result) => {
  //       console.log(result)
  //       // this.props.setMainPlayer(result)
  //       this.props.shutdown();
  //     }).catch((err) => {
  //       alert(`nah, dude. stop.`)
  //       this.setState({
  //         player: null
  //       })
  //       this.props.shutdown();
  //     });
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.addPlayer()
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
            <input type="text" className="gameName" name='player' onChange={this.handleChange} required />
            <button type="submit" className="game-modal-button" onClick={(e) => { this.handleSubmit(e) }}>Start this game!</button>
          </form>
        </div>
      )
    }
  }
}

export default GameModal;