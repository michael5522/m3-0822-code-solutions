import React from 'react';
import ReactDOM from 'react-dom';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueUN: '',
      valuePW: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(e) {
    console.log(this.state);
    e.preventDefault();
  }

  handleUsernameChange(e) {
    // console.log('user name', e.target.value);
    this.setState({
      valueUN: e.target.value
    });
  }

  handlePasswordChange(e) {
    // console.log('password', e.target.value);
    this.setState({
      valuePW: e.target.value
    });
  }

  render() {
    // console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" value={this.state.valueUN} onChange={this.handleUsernameChange} />
        </label>

        <label>
          Password:
          <input type="password" value={this.state.valuePW} onChange={this.handlePasswordChange} />
        </label>
        <button>Sign Up</button>
      </form>
    );
  }
}
const elements = (
  <div>
    <RegistrationForm/>
  </div>
);
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(elements);
