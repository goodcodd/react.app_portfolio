import { Component } from 'react';
import PropTypes from 'prop-types';
import DefaultImage from '../../assets/img/projects/default.jpg';

export default class Image extends Component {
  onError = (e) => {
    const event = e;
    event.target.src = DefaultImage;
    event.preventDefault();
    event.target.alt = 'default';
  };

  onLoad = () => {};

  render() {
    const { src, alt, className } = this.props;

    return (
      <img
        alt={alt}
        className={className}
        src={src}
        onError={this.onError}
        onLoad={this.onLoad}
        draggable="false"
      />
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
