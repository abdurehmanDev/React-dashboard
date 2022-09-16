import React from 'react';

import './Styles/hero.css';

const Hero = ({ handleLogout }) => {
    return (
        <nav className="hero-nav">
          <h1>Performance Overview</h1>
          <button className="hero-button hero-button-log" onClick={handleLogout}>Log out</button>
        </nav>
    )
}

export default Hero;