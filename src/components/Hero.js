import React from 'react';

import './Styles/hero.css';

const Hero = ({ handleLogout }) => {
    return (

        <section className="hero">
            <nav className="hero-nav">
                <h1>Performance Overview</h1>
                <button className="hero-button" onClick={handleLogout}>Log out</button>
            </nav>
        </section>
    )
}

export default Hero;