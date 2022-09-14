import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonStatus: false,
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.addOne = this.addOne.bind(this);
    this.handleStopWatchClicked = this.handleStopWatchClicked.bind(this);
  }

  addOne() {
    this.intervalID = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  }

  handleClick() {
    this.setState({
      buttonStatus: !this.state.buttonStatus
    });
    if (this.state.buttonStatus === false) {
      this.addOne();
    } else {
      clearInterval(this.intervalID);
    }
  }

  handleStopWatchClicked() {
    if (this.state.buttonStatus === false) {
      this.setState({
        count: 0
      });
    }
  }

  render() {
    const status = this.state.buttonStatus;
    const currentCount = this.state.count;
    let input2 = null;
    let input1 = currentCount;
    if (status === false) {
      input2 = 'fa-solid fa-pause';
    } else {
      input2 = 'fa-solid fa-play';
      input1 = currentCount;
    }
    return (
      <div>
        <div className="container" onClick={this.handleStopWatchClicked}>
          <div className="number">{`${input1}`}</div>
        </div>
        <div className={input2} onClick={this.handleClick} id="status"></div>
      </div>
    );
  }
}

export default StopWatch;
