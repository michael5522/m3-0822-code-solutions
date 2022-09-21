import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      word: event.target.value
    });
  }

  render() {
    const word = this.state.word;
    let redText = '';
    let icon = 'fa-solid fa-check green';
    if (word.length < 8) {
      redText = 'Your password is too short.';
      icon = 'fa-solid fa-x';
    }
    // console.log('111', this.state.word, this.state.word.length);
    return (
      <div>
        <div className="pw">Password</div>
        <label>
          <input type="password" onChange={this.handleClick} />
          <div className={`red ${icon}`}></div>
          <div className="red">{redText}</div>
        </label>
      </div>
    );
  }
}

export default ValidatedInput;
