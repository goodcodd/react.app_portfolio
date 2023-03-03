import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const {
      text, className, onClick
    } = this.props;
    return (
      <button
        type="button"
        className={className}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired
};
Button.defaultProps = {
  className: ''
};
