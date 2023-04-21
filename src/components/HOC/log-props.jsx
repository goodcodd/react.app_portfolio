import React from 'react';

function logProps(Component) {
  return function LogProps(props) {
    return <Component {...props} />;
  };
}

export default logProps;