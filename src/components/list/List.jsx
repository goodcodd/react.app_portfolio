import PropTypes from 'prop-types';

function List({ className, text }) {
  return (
      <ul className={className}>
        {text}
      </ul>
  );
}

List.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

List.defaultProps = {
  className: ''
};
