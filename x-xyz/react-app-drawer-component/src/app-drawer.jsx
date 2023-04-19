import React from 'react';

class AppDrawer extends React.Component {
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

  changeSetting() {
    const { status } = this.state;
    // console.log('second bar', status);
    return (status ? '' : 'hidden');
  }

  changeTwo() {
    const { status } = this.state;
    // console.log(' first bar', status);
    return (status ? 'hidden' : '');
  }

  render() {
    const blank = this.changeSetting();
    const gg36 = this.changeTwo();

    return (
      <div>
        <div className={`container ${gg36}`} onClick={this.handleClick}><i className="fa-solid fa-bars"></i></div>
        <div className={`container2 ${blank}`}>
          <div className="one">
            <h1 onClick={this.handleClick}>Menu</h1>
            <h2 onClick={this.handleClick}>About</h2>
            <h2 onClick={this.handleClick}>Get Started</h2>
            <h2 onClick={this.handleClick}>Sign In</h2>
          </div>
          <div className="two">
            <div className="gray"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default AppDrawer;
