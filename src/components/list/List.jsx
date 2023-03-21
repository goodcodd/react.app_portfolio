import { Component } from 'react';
import PropTypes from 'prop-types';

export default class List extends Component {
  render() {
    const { className, text } = this.props;
    return (
      <ul className={className}>
        {text}
      </ul>
    );
  }
}

List.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

Image.defaultProps = {
  className: ''
};
