import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Powering the Future <br /> with Vanguard Solar</h1>
          <p className="hero-subtitle">
            Experience next-generation solar energy harvesting with advanced photovoltaic technology designed for efficiency, durability, and a sustainable future.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Explore Products</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>25%</h3>
              <p>Higher Efficiency</p>
            </div>
            <div className="stat-item">
              <h3>15K+</h3>
              <p>Panels Installed</p>
            </div>
            <div className="stat-item">
              <h3>120GWh</h3>
              <p>Clean Power Generated</p>
            </div>
            <div className="stat-item">
              <h3>30Yrs</h3>
              <p>Warranty Included</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Superior Solar Solutions</h2>
            <p>Our commitment to excellence ensures every panel we manufacture meets the highest standards of performance and sustainability.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card glass">
              <div className="feature-icon">🔍</div>
              <h3>Smart Monitoring</h3>
              <p>Integrated 24/7 cloud-based monitoring to track your energy production and system health in real-time.</p>
            </div>
            <div className="feature-card glass">
              <div className="feature-icon">🛡️</div>
              <h3>Ultimate Durability</h3>
              <p>Built with aerospace-grade composite materials, our panels withstand extreme weather from blizzards to heatwaves.</p>
            </div>
            <div className="feature-card glass">
              <div className="feature-icon">⚡</div>
              <h3>Rapid Charging</h3>
              <p>Optimized cell layout allows for faster energy absorption even in low-light and shaded conditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="cta glass">
        <div className="cta-content container">
          <h2>Ready to switch to clean energy?</h2>
          <p>Join thousands of homeowners and businesses who have already reduced their carbon footprint while saving up to 70% on monthly energy bills.</p>
          <button className="btn-primary">Request a Quote Today</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
