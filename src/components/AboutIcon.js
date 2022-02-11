import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutIcon = () => {
  const stylehandle = {
    background: 'rgba(0,0,0)',
    padding: '20px 20px 12px 20px',
    borderRadius: '100px',
  };
  return (
    <div className="about-link">
      <Link to={{ pathname: '/about', hash: '#about', search: 'fb-ui-about ' }}>
        <div style={stylehandle}>
          <FaQuestion size={30} color="white" />
        </div>
      </Link>
    </div>
  );
};

export default AboutIcon;
