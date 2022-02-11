import React from 'react';
import Card from '../Card';
import { Link } from 'react-router-dom';

const About = () => {
  const styleHandle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    //justifyContent: 'center',
  };
  return (
    <Card>
      <div style={styleHandle}>
        <h1 style={{ padding: '10px 0px' }}>About this Project.</h1>
        <p style={{ padding: '10px 0px' }}>
          This is a simple React App to leave feedbacks for products and
          services. <br />
          Version: 1.0.0
        </p>
        <p style={{ padding: '10px 0px' }}>
          <Link to="/">Back to Home.</Link>
        </p>
      </div>
    </Card>
  );
};

export default About;
