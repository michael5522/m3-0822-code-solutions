import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonStatus: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      buttonStatus: !this.state.buttonStatus
    });
  }

  render() {

    const status = this.state.buttonStatus;
    let input1 = null;
    let input2 = null;
    let input3 = null;
    if (status === false) {
      input1 = 'containeroff';
      input2 = 'circleoff';
      input3 = 'OFF';
    } else {
      input1 = 'containeron';
      input2 = 'circleon';
      input3 = 'ON';
    }

    return (
      <div className="outside" onClick={this.handleClick}>
        <div className={input1}>
          <div className={input2}></div>
        </div>
        <div className="text">{`${input3}`}</div>
      </div>
    );

  }
}

export default ToggleSwitch;
