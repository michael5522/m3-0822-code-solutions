// import React from 'react';

// class Modal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isOpen: false
//     };

//     this.close = this.close.bind(this);
//     this.open = this.open.bind(this);
//     this.confirm = this.confirm.bind(this);
//   }

//   close() {
//     this.setState({
//       isOpen: false
//     });
//   }

//   open() {
//     this.setState({
//       isOpen: true
//     });
//   }

//   confirm(e) {
//     const { onConfirm } = this.props;

//     if (typeof onConfirm === 'function') {
//       onConfirm(e);
//     }

//     this.close();
//   }

//   render() {
//     const openButton = <button onClick={this.open}>{this.props.btnText || 'Open Modal'}</button>;
//     if (this.state.isOpen) {
//       return (
//         <React.Fragment>
//         <div>
//           <div className="modal-container">
//             <div className="modal-content">
//               <h1 className="title">are you sure?</h1>
//               <p>this action cannot be undone</p>

//               <div className="modal-actions right">
//                 <button onClick={this.close} className="mr-2">Cancel</button>
//                 <button onClick={this.confirm}>Confirm</button>
//               </div>
//             </div>
//           </div>
//         </div >
//         {openButton}
//         </React.Fragment>
//       );
//     }

//     return openButton;
//   }

// }

// export default Modal;

import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      OnOff: false
    });
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.confirm = this.confirm.bind(this);
  }

  close() {
    this.setState({
      OnOff: false
    });
  }

  open() {
    this.setState({
      OnOff: true
    });
  }

  confirm() {
    const { onConfirm } = this.props;

    onConfirm();

    this.close();
  }

  render() {
    if (this.state.OnOff) {
      return (
        <React.Fragment>
        <div className="modal-container">
          <div className="modal-content">
            <h1 className="title">are you sure?</h1>
            <p>this cannot be undone</p>

            <div className="right">
              <button onClick={this.close} className="mr-2">Cancel</button>
              <button onClick={this.confirm}>Accept</button>
            </div>

          </div>
        </div>
        <button onClick={this.open}>{this.props.btnText || 'Open Modal'}</button>
        </React.Fragment>
      );
    }
    return <button onClick={this.open}>{this.props.btnText || 'Open Modal'}</button>;

  }
}

export default Modal;
