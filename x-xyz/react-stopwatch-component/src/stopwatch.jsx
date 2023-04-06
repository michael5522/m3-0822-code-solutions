import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      OnOff: false
    };

    this.handleStatus = this.handleStatus.bind(this);
    this.OnClickDoubleCondition = this.OnClickDoubleCondition.bind(this);
  }

  timer() {
    // console.log('the timer status', this.state.OnOff);
    if (this.state.OnOff) {
      // console.log('pausing');
      clearInterval(this.intervalID);
    } else {
      // console.log('interval starting');
      this.intervalID = setInterval(() => {
        this.setState({
          count: this.state.count + 1
        });
      }, 1000);
    }

  }

  handleStatus() {
    // console.log('handle status before the setstate', this.state.OnOff);
    this.setState({
      OnOff: !this.state.OnOff
    });
    // console.log('current status should be opposite of this', this.state.OnOff);
    this.timer();
  }

  OnClickDoubleCondition() {
    const { OnOff } = this.state;
    // console.log('this was clicked bro', OnOff);
    if (!OnOff) {
      this.setState({
        count: 0
      });
    }
  }

  showHandleStatus() {
    const current = this.state.OnOff;
    // console.log('111', current);
    const status = current ? <i className="fa-solid fa-play"></i> : <i className="fa-solid fa-stop"></i>;
    // console.log('222', status);
    return status;
  }

  render() {
    const pp = this.showHandleStatus();
    const { count } = this.state;
    // console.log('111', currentNumber);
    return (
      <div className="outside">
        <div className="stopwatch" onClick={this.OnClickDoubleCondition}>
          <div className="number">{count}</div>
        </div>
        <div className="status" onClick={this.handleStatus}>{pp}</div>

      </div>
    );
  }
}

export default StopWatch;
