import React from 'react';
import spinner from './assets/spinner.gif';

const Spinner = () => {
  return (
    <img
      src={spinner}
      alt=""
      style={{
        width: '100px',
        margin: '50px auto',
        display: 'block',
      }}
    />
  );
};

export default Spinner;
