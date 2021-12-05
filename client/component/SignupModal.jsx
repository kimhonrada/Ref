import React from 'react';
import axios from 'axios';

class SignupModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playerToAdd: null
    }
    this.addPlayer = this.addPlayer.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addPlayer() {
    axios.post('/player', {
      playerToAdd: this.state.playerToAdd,
    })
      .then((result) => {
        this.props.shutdown();
      }).catch((err) => {
        alert(`sorry, that name is taken my g.`)
        this.props.shutdown();
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
    if (!this.props.signup) {
      return null
    } else {
      return (
        <div className="signup-modal">
          <form className="signup-modal-content" onSubmit={this.handleSubmit}>
            <input type="text" className="signupName" name='playerToAdd' onChange={this.handleChange} required />
            <button type="submit" className="signup-modal-button" onClick={(e) => { this.handleSubmit(e) }}>Sign me up!!</button>
          </form>
        </div>
      )
    }
  }
}

export default SignupModal;