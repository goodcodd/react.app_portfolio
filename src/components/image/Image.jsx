import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Image extends Component {
  render() {
    const { src, alt, className } = this.props;
    return (
      <img alt={alt} className={className} src={src} />
    );
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string
};

Image.defaultProps = {
  alt: '',
  className: ''
};
