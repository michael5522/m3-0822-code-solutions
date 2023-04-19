import React from 'react';
class Validate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    e.preventDefault();
    this.setState({
      password: value
    });
  }

  renderMark() {
    const { password } = this.state;
    let mark = null;
    if (password.length < 8) {
      mark = <i className="fa-solid fa-x red"></i>;
    } else {
      mark = <i className="fa-solid fa-check green"></i>;
    }
    return mark;
  }

  renderText() {
    const { password } = this.state;
    let msg = null;
    if (password.length === 0) {
      msg = 'A password is required';
    } else if (password.length < 8) {
      msg = 'Your password is too short';
    }
    return msg;
  }

  render() {
    const checkingMark = this.renderMark();
    const message = this.renderText();
    return (
      <div className="container">
        <div className="text">
          Password
        </div>
        <div className="two">
          <label htmlFor="password">
            <input type="password" value={this.state.password} name="password" onChange={this.handleChange} />
          </label>
          <div className="checkmark">{checkingMark}</div>
        </div>
        <div className="extraText">{message}</div>
      </div>
    );
  }
}

export default Validate;
