import React from 'react';

const Spinner = porps => {
  return (
    <div className='ui active dimmer'>
      <div className='ui big text loader'>{porps.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: 'Loading.... fro m default props'
};

export default Spinner;
