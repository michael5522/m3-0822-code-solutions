import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      status: !this.state.status
    });
  }

  textCode() {
    const current = this.state.status;
    // console.log('111', current);
    let text = null;
    (current ? text = 'on' : text = 'off');
    return text;
  }

  status() {
    const current = this.state.status;
    return current;
  }

  render() {
    const pp = this.textCode();
    // console.log('222', pp);
    const gg = this.status();
    // console.log(gg);
    return (
      <div>
        <div className="container">
          <div className={`rectangle background-${gg}`}>
            <div className={`circle location-${gg}`} onClick={this.handleClick}></div>
          </div>
          <div className="text">{pp}</div>
        </div>

      </div>
    );
  }
}

export default ToggleSwitch;
