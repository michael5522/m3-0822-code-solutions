import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: 0,
      status: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickLeft = this.handleClickLeft.bind(this);
    this.handleClickRight = this.handleClickRight.bind(this);
  }

  handleClick(event) {
    const foundID = parseInt(event.target.id);
    this.setState({
      photo: foundID
    });
    clearInterval(this.state.status);
    this.setState({
      status: setInterval(this.handleClickRight, 3000)
    });
  }

  handleClickLeft(event) {
    if (this.state.photo === 0) {
      this.setState({
        photo: 4
      });
    } else {
      this.setState({
        photo: this.state.photo - 1
      });
    }
    clearInterval(this.state.status);
    this.setState({
      status: setInterval(this.handleClickRight, 3000)
    });
  }

  handleClickRight(event) {
    if (this.state.photo === 4) {
      this.setState({
        photo: 0
      });
    } else {
      this.setState({
        photo: this.state.photo + 1
      });
    }
    clearInterval(this.state.status);
    this.setState({
      status: setInterval(this.handleClickRight, 3000)
    });
  }

  componentDidMount() {

    this.setState({ status: setInterval(this.handleClickRight, 3000) });

  }

  render() {
    // console.log(this.state);

    const total = this.props.poke;
    const listButton = total.map(pokemon =>
      <button className={this.state.photo === pokemon.number ? 'button on' : 'button'} key={pokemon.number.toString()} id={pokemon.number} onClick={this.handleClick}></button>
    );

    return (
      <div className="container">
        <div className="fa-solid fa-chevron-left arrow" onClick={this.handleClickLeft}></div>
        <div className="middle">
          <div><img src={total[this.state.photo].url} alt="" className="src" /></div>
          <div className="button-container">
            {listButton}
          </div>
        </div>
        <div className="fa-solid fa-chevron-right arrow" onClick={this.handleClickRight}></div>
      </div>

    );
  }
}

export default Carousel;
