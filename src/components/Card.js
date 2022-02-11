// shared component: imported many times

import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, reverse }) => {
  // reversing card using classes in index.css
  //   return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;

  // reversing card using functional programming

  const revrseStyles = {
    background: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
    color: reverse ? '#fff' : '#000',
  };

  return (
    <div className="card" style={revrseStyles}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

Card.defaultProps = {
  reverse: false,
};
export default Card;
