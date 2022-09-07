import React from 'react';
import ReactDom from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    const status = this.state.isClicked;
    if (status === false) {
      return (
        <button onClick={this.handleClick}>Click Me!</button>
      );
    } else {
      return (
        <button onClick={this.handleClick}>Thanks!</button>
      );
    }

  }
}
const container = document.querySelector('#root');
const root = ReactDom.createRoot(container);
root.render(<CustomButton/>);
