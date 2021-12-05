import React from 'react';
import axios from 'axios';

class PlayerModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      player: null
    }
    this.loginPlayer = this.loginPlayer.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  loginPlayer() {
    axios.get('/player', {
      params: {
        name: this.state.player,
      }
    })
      .then((result) => {
        this.props.setMainPlayer(result)
        this.props.shutdown();
      }).catch((err) => {
        alert(`sorry, i cant find u in the system my g. gotta sign up first`)
        this.setState({
          player: null
        })
        this.props.shutdown();
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.loginPlayer()
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    if (!this.props.ipad) {
      return null
    } else {
      return (
        <div className="player-modal">
          <form className="player-modal-content" onSubmit={this.handleSubmit}>
            <input type="text" className="playerName" name='player' onChange={this.handleChange} required />
            <button type="submit" className="player-modal-button" onClick={(e) => { this.handleSubmit(e) }}>lets go!</button>
          </form>
        </div>
      )
    }
  }
}

export default PlayerModal;