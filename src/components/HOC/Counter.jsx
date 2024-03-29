import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import logProps from './log-props';
import Button from '../buttons/Button';
import LightDarkContext from '../context/LightDarkContext';

function Counter({ count, onCountUp, onCountDown }) {
  const myTemplate = useContext(LightDarkContext);

  return (
      <div className={myTemplate === 'light' ? 'counter btn-group light' : 'counter btn-group dark'}>
        <Button className="btn btn-danger btn-lg active" onClick={onCountDown} text="-" />
        <span className="btn btn-secondary btn-lg">{count}</span>
        <Button className="btn btn-success btn-lg active" onClick={onCountUp} text="+" />
      </div>
  );
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onCountUp: PropTypes.func.isRequired,
  onCountDown: PropTypes.func.isRequired
};

export default logProps(Counter);
