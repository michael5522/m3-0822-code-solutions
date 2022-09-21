import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: ''
    };
    this.onHeaderClick = this.onHeaderClick.bind(this);
  }

  onHeaderClick(event) {
    const foundID = event.target.getAttribute('id');
    if (this.state.current === foundID) {
      this.setState({
        current: ''
      });
    } else {
      this.setState({
        current: foundID
      });
    }
  }

  render() {

    const current = this.state.current;
    // console.log('this.state current', current);
    // console.log('this.state', this.state);
    const list = this.props.action;
    // console.log(list);
    return (
      list.map(item =>
        <div key={item.name} className="container">
          <div className="name" onClick={this.onHeaderClick} id={item.name}> {item.name}</div>
          <div className={current === item.name ? 'details' : 'off'} id={item.name}>{item.details}</div>
      </div>
      )
    );
  }

}
export default Accordion;
