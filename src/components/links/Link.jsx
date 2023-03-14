import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Link extends Component {
  render() {
    const {
      href, text, className, rel, target
    } = this.props;
    return (
      <a href={href} target={target} rel={rel} className={className}>
        {text}
      </a>
    );
  }
}
Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.oneOfType(
    [PropTypes.string, PropTypes.element]
  ).isRequired,
  className: PropTypes.string,
  rel: PropTypes.string,
  target: PropTypes.string
};

Link.defaultProps = {
  className: '',
  rel: '',
  target: ''
};
