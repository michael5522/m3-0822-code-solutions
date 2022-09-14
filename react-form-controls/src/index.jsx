import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: '',
      Password: ''
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    // console.log(event.target.value);
    this.setState({
      UserName: event.target.value
    });
  }

  handlePasswordChange(event) {
    // console.log(event.target.value);
    this.setState({
      Password: event.target.value
    });
  }

  handleSubmit(event) {
    console.log('this state', this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          UserName:
          <input type="text" value={this.state.UserName} onChange={this.handleUsernameChange}/>
        </label>

        <label>
          Password:
          <input type="password" value={this.state.Password} onChange={this.handlePasswordChange} />
        </label>

        <button>Sign up</button>
      </form>
    );
  }
}

const container = document.querySelector('.root');
const root = ReactDOM.createRoot(container);

const element = (
  <RegistrationForm />
);
root.render(element);
