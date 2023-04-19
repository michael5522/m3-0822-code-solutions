import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { target } = e;
    const gg = target.getAttribute('id');
    this.setState({
      click: gg
    });
  }

  list() {
    const list = this.props.hana;
    const { click } = this.state;
    const potato = list.map(x => {
      return (
        <div key={x.name} className='ola'>
          <div className='ola2' id={x.name} onClick={this.handleClick}>{x.name}  </div>
          <div className={click === x.name ? '' : 'hidden'} >{x.details}</div>
        </div>
      );
    });
    return potato;
  }

  render() {
    const nana = this.list();
    return (
      <div className="container">
        {nana}
      </div>
    );
  }
}

export default Accordion;
