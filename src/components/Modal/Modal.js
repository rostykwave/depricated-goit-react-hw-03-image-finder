import { Component } from 'react';
import s from './Modal.module.css';
// import PropTypes from 'prop-types';

class Modal extends Component {
  // state = {
  //     searchQuery:'',
  // };

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return (
      <div className={s.Overlay}>
        <div className={s.Modal}>{this.props.children}</div>
      </div>
    );
  }
}

// Modal.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export default Modal;
