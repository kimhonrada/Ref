import React from 'react';
import axios from 'axios';

class PlayerModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      player: null
    }
    this.addPlayer = this.addPlayer.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addPlayer() {
    // this.props.closeList();
    axios.post('/player', {
      name: this.state.player,
    })
      .then((result) => {
        console.log('success posting')
        this.setState({
          player: null,
        })
      }).catch((err) => {
        alert(`dang! check yo fridge first pls.`)
        this.setState({
          player: null
        })
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.addPlayer()
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    if (!this.props.show) {
      return null
    } else {
      return (
        <div className="player-modal">
          <form className="player-modal-content" onSubmit={this.handleSubmit}>
            <input type="text" className="playerName" name='player' onChange={this.handleChange} required />
            <button type="submit" className="player-modal-button" onClick={(e) => { this.handleSubmit(e) }}>Sign up!</button>
          </form>
        </div>
      )
    }
  }
}

export default PlayerModal;