import React from 'react';
import PropTypes from 'prop-types';
import logProps from './log-props';
import Button from '../buttons/Button';

function Counter({ count, onCountUp, onCountDown }) {
  return (
    <div className="counter btn-group">
      <Button className="btn btn-danger btn-lg active" onClick={onCountDown} text="-" />
      <span className="btn btn-secondary btn-lg">{count}</span>
      <Button className="btn btn-dsuccess btn-lg active" onClick={onCountUp} text="+" />
    </div>
  );
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onCountUp: PropTypes.func.isRequired,
  onCountDown: PropTypes.func.isRequired
};
export default logProps(Counter);
