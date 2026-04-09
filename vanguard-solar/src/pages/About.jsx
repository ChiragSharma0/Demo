import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Leaf, Target } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Our Mission: <span className="highlight-gold">Global Sustainability</span>
          </motion.h1>
          <p className="section-subtitle">
            Founded in 2001, Vanguard Solar has grown from a boutique engineering firm 
            to a global powerhouse in solar manufacturing.
          </p>
        </div>
      </section>

      <section className="about-content container">
        <div className="about-grid">
          <div className="about-text">
            <h2>Changing the Way the World <br/>Think About Energy</h2>
            <p>
              We believe that the transition to renewable energy is the most important 
              challenge of our generation. By combining cutting-edge material science 
              with automated manufacturing, we make high-efficiency solar power 
              accessible to everyone.
            </p>
            <p>
              Our facilities in North America and Europe produce millions of photovoltaic 
              modules annually, meeting the highest international standards for 
              performance and reliability.
            </p>
          </div>
          <div className="about-stats-grid">
            <div className="about-stat-box glass">
              <Users size={32} color="var(--color-primary)" />
              <h4>2,500+</h4>
              <p>Employees Worldwide</p>
            </div>
            <div className="about-stat-box glass">
              <Globe size={32} color="var(--color-primary)" />
              <h4>Global</h4>
              <p>Supply Chain Presence</p>
            </div>
            <div className="about-stat-box glass">
              <Leaf size={32} color="var(--color-primary)" />
              <h4>100%</h4>
              <p>Recyclable Materials</p>
            </div>
            <div className="about-stat-box glass">
              <Target size={32} color="var(--color-primary)" />
              <h4>Vision 2030</h4>
              <p>Zero-Carbon Manufacturing</p>
            </div>
          </div>
        </div>
      </section>

      <section className="values container">
        <div className="section-header">
          <span className="badge">OUR VALUES</span>
          <h2>Integrity. Innovation. Impact.</h2>
        </div>
        <div className="values-grid">
          <div className="value-item">
            <h3>Innovation First</h3>
            <p>We invest over 15% of our revenue into R&D, constantly pushing the boundaries of solar efficiency.</p>
          </div>
          <div className="value-item">
            <h3>Sustainable Operations</h3>
            <p>Our manufacturing plants are powered by our own solar arrays, creating a circular energy economy.</p>
          </div>
          <div className="value-item">
            <h3>Uncompromising Quality</h3>
            <p>Every single part, from the smallest bracket to the largest panel, is tested for 30 years of durability.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
