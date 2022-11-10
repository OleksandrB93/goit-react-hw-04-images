// // import PropTypes from 'prop-types';
// import Modal from 'components/Modal/Modal';
// import { Component } from 'react';

// export default class ShowModal extends Component {
//   state = {
//     shouldModalShown: false,
//   };

//   toggleModal = () => {
//     this.setState(prevState => ({
//       shouldModalShown: !prevState.shouldModalShown,
//     }));
//   };

//   render() {
//     return (
//       <li>
//         <img
//           src={this.props.smallImage}
//           alt={this.props.tags}
//           onClick={this.toggleModal}
//         />
//         {this.state.shouldModalShown ? (
//           <Modal
//             modalImageToShow={this.props.largeImage}
//             modalImageAlt={this.props.tags}
//             onClose={this.toggleModal}
//           />
//         ) : null}
//       </li>
//     );
//   }
// }