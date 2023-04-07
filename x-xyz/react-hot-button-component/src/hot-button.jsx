import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      click: this.state.click + 1
    });
  }

  getColor() {
    const count = this.state.click;
    let color = null;
    if (count <= 3) {
      color = 'red';
    } else if (count <= 6) {
      color = 'blue';
    } else {
      color = 'green';
    }
    return color;
  }

  render() {
    // console.log(this.state.click);
    const color2 = this.getColor();

    return (
      <button className={`btn ${color2}`} onClick={this.handleClick}>Button</button>
    );
  }
}

export default HotButton;
