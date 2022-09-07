import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // console.log('clicked');
    this.setState({ counter: this.state.counter + 1 });

  }

  render() {
    var count = this.state.counter;
    // console.log(count);
    let color = null;
    if (count < 4) {
      color = 'one';
    } else if (count < 7) {
      color = 'two';
    } else if (count < 10) {
      color = 'three';
    } else if (count < 13) {
      color = 'four';
    } else if (count < 16) {
      color = 'five';
    } else if (count < 19) {
      color = 'six';
    }

    return (
      <button className={color} onClick={this.handleClick}>Hot Button</button>
    );
  }
}

export default HotButton;
