import PropTypes from 'prop-types';

function Link({ href, text, className = '', rel = '', target = '' }) {
  return (
      <a href={href} target={target} rel={rel} className={className}>
        {text}
      </a>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  className: PropTypes.string,
  rel: PropTypes.string,
  target: PropTypes.string,
};

export default Link;
