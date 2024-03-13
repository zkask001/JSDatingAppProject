import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to my dating app</h1>
      <p>Find your match today!</p>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default HomePage;