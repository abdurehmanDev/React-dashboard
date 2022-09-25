import React from 'react';

import './Styles/hero.css';

const Hero = ({ handleLogout , heroHeading }) => {
    return (
        <nav className="hero-nav">
          <h1>{heroHeading}</h1>
          <button className="hero-button hero-button-log" onClick={handleLogout}>Log out</button>
        </nav>
    )
}

export default Hero;