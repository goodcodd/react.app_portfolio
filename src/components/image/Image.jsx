import PropTypes from 'prop-types';
import DefaultImage from '../../assets/img/projects/default.jpg';

function Image(props) {
  const { src, alt = '', className = '' } = props;

  const onError = (e) => {
    e.target.src = DefaultImage;
    e.preventDefault();
    e.target.alt = 'default';
  };

  const onLoad = () => {};

  return (
      <img
          alt={alt}
          className={className}
          src={src}
          onError={onError}
          onLoad={onLoad}
          draggable="false"
      />
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default Image;
