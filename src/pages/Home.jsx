import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Welcome to SEI SPORTS</h1>
        <p>Your digital home for online soccer leagues, talent discovery, and interactive fan engagement.</p>
        <Link to="/league" className="join-button">Join the Movement</Link>
      </header>

      <nav className="main-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/league">League</Link></li>
          <li><Link to="/fixtures">Fixtures</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;

