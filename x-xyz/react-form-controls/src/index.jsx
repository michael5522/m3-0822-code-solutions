import React from 'react';
import ReactDOM from 'react-dom';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    console.log(this.state);
    e.preventDefault();
  }

  handleChange(e) {
    const { name, value } = e.target;
    // console.log('this is the handlechange---', name, value);
    this.setState({
      [name]: value
    });

  }

  render() {
    const { name, password } = this.state;
    // console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          Username:
          <input type="text" value={name} name="name" onChange={this.handleChange} />
        </label>

        <label htmlFor="password">
          Password:
          <input type="password" value={password} name="password" onChange={this.handleChange} />
        </label>
        <button>Sign Up</button>
      </form>
    );
  }
}
const elements = (
  <div>
    <RegistrationForm/>
  </div>
);
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(elements);

// class Regi extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       password: ''
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.submitter = this.submitter.bind(this);
//   }

//   handleChange(e) {
//     const { name, value } = e.target;
//     // console.log(name, value);
//     this.setState({
//       [name]: value
//     });
//   }

//   submitter(e) {
//     e.preventDefault();
//     console.log(this.state);
//   }

//   render() {
//     const { name, password } = this.state;
//     return (
//       <form onSubmit={this.submitter}>
//         <label htmlFor="name">
//           Name:
//           <input type="text" name="name" value={name} onChange={this.handleChange}/>
//         </label>
//         <label htmlFor="password">
//           Password:
//           <input type="password" name="password" value={password} onChange={this.handleChange}/>
//         </label>
//         <button>Sign up</button>
//       </form>
//     );
//   }
// }

// const container = document.querySelector('#root');
// const root = ReactDOM.createRoot(container);
// root.render(<Regi/>);
