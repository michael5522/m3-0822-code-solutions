import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isClicked: !this.state.isClicked
    });
  }

  render() {
    const status = this.state.isClicked;
    // console.log(status);
    // let button;
    // if (status === false) {
    //   console.log('should render');
    //   button = <button onClick={this.handleClick}>Click Me!</button>;
    // } else {
    //   console.log('should be thanks');
    //   button = <button onClick={this.handleClick}>Thanks!</button>;
    // }
    return (

      status ? <button onClick={this.handleClick}>Thanks!</button> : <button onClick={this.handleClick}>Click Me!</button>

    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<CustomButton/>);
