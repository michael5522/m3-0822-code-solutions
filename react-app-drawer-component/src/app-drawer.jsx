import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuClicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      menuClicked: !this.state.menuClicked
    });
  }

  render() {
    const click = this.state.menuClicked;
    if (click === false) {
      return (
        <div className="fa fa-bars fa-2x" onClick={this.handleClick}></div>
      );
    } else {
      return (
        <div className="row" onClick={this.handleClick}>
          <div className="column1">
            <h1>Menu</h1>
            <h2>About</h2>
            <h2>Get Started</h2>
            <h2>Sign In</h2>

          </div>
          <div className="column2 dim"> </div>
        </div>
      );
    }

  }
}

export default AppDrawer;
