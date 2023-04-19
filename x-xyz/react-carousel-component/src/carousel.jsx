import React from 'react';

// class Carousel extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       current: 0,
//       status: null
//     };
//     this.handleClick = this.handleClick.bind(this);
//     this.handleClickRight = this.handleClickRight.bind(this);
//     this.handleClickLeft = this.handleClickLeft.bind(this);
//   }

//   list() {
//     const list = this.props.hana;
//     const { current } = this.state;
//     return (
//         <div id={list[current].number}>
//           <img src={list[current].url} alt="" className="src" />
//         </div>
//     );
//   }

//   handleClick(e) {
//     const { target } = e;
//     const gg = target.getAttribute('id');
//     this.setState({
//       current: Number(gg)
//     });
//     clearInterval(this.state.status);
//     this.setState({
//       status: setInterval(this.handleClickRight, 3000)
//     });
//   }

//   listButtons() {
//     const { current } = this.state;
//     const list = this.props.hana;
//     const bb = list.map(x => {
//       return (
//         <button className={current === x.number ? 'on buttons' : 'buttons'} id={x.number} key={x.number} onClick={this.handleClick}>{x.number}</button>
//       );
//     });
//     return bb;
//   }

//   handleClickRight() {
//     if (this.state.current === this.props.hana.length - 1) {
//       this.setState({
//         current: 0
//       });
//     } else {
//       this.setState({
//         current: this.state.current + 1
//       });
//     }
//     clearInterval(this.state.status);
//     this.setState({
//       status: setInterval(this.handleClickRight, 3000)
//     });
//   }

//   handleClickLeft() {
//     if (this.state.current === 0) {
//       this.setState({
//         current: this.props.hana.length - 1
//       });
//     } else {
//       this.setState({
//         current: this.state.current - 1
//       });
//     }
//     clearInterval(this.state.status);
//     this.setState({
//       status: setInterval(this.handleClickRight, 3000)
//     });
//   }

//   componentDidMount() {
//     this.setState({
//       status: setInterval(this.handleClickRight, 3000)
//     });
//   }

//   render() {
//     const makeList = this.list();
//     const listButton = this.listButtons();

//     return (
//       <div className='container'>
//         <div className="row">
//           <div className="left" onClick={this.handleClickLeft}><i className="fas fa-arrow-left"></i></div>
//           <div className="middle">{makeList}</div>
//           <div className="right" onClick={this.handleClickRight}><i className="fas fa-arrow-right"></i></div>
//         </div>
//         <div className="row">
//           <div className="">{listButton}</div>
//         </div>

//       </div>
//     );
//   }
// }
// export default Carousel;

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      status: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickRight = this.handleClickRight.bind(this);
    this.handleClickLeft = this.handleClickLeft.bind(this);
  }

  list() {
    const picture = this.props.hana;
    return <img src={picture[this.state.current].url} alt="" />;
  }

  listButtons() {
    const items = this.props.hana;
    const gg = items.map(x => {
      return (
        <button className={this.state.current === x.number ? 'buttons on' : 'buttons'} id={x.number} key={x.number} onClick={this.handleClick}>{x.number}</button>
      );
    });
    return gg;
  }

  handleClick(e) {
    const abc = e.target.id;
    this.setState({
      current: Number(abc)
    });
    clearInterval(this.state.status);
    this.setState({
      status: setInterval(this.handleClickRight, 3000)
    });
  }

  handleClickRight() {
    if (this.state.current === this.props.hana.length - 1) {
      this.setState({
        current: 0
      });
    } else {
      this.setState({
        current: this.state.current + 1
      });
    }
    clearInterval(this.state.status);
    this.setState({
      status: setInterval(this.handleClickRight, 3000)
    });
  }

  handleClickLeft() {
    if (this.state.current === 0) {
      this.setState({
        current: this.props.hana.length - 1
      });
    } else {
      this.setState({
        current: this.state.current - 1
      });
    }
    clearInterval(this.state.status);
    this.setState({
      status: setInterval(this.handleClickRight, 3000)
    });
  }

  componentDidMount() {
    this.setState({
      status: setInterval(this.handleClickRight, 3000)
    });
  }

  render() {
    const makeList = this.list();
    const listButton = this.listButtons();

    return (
      <div className='container'>
        <div className="row">
          <div className="left" onClick={this.handleClickLeft}><i className="fas fa-arrow-left"></i></div>
          <div className="middle">{makeList}</div>
          <div className="right" onClick={this.handleClickRight}><i className="fas fa-arrow-right"></i></div>
        </div>
        <div className="row">
          <div className="">{listButton}</div>
        </div>

      </div>
    );
  }
}

export default Carousel;
