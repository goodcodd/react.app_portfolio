import React from 'react';

function logProps(Component) {
  return class LogProps extends React.Component {
    render() {
      /* eslint-disable react/jsx-props-no-spreading */
      return <Component {...this.props} />;
    }
  };
}
export default logProps;
