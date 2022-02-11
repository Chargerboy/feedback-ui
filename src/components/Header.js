import React from 'react';

const Header = ({ text }) => {
  const headerStyles = {
    background: 'rgba(0,0,0,0.5)',
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
};

export default Header;
