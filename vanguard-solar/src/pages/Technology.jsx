import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Cpu, Microscope, Activity } from 'lucide-react';
import './Technology.css';
import roboticImg from '../assets/robotic.png';

const Technology = () => {
  return (
    <div className="tech-page">
      <section className="tech-hero container">
        <div className="section-header">
          <span className="badge">MANUFACTURING EXCELLENCE</span>
          <h1>Precision <span className="highlight-gold">Engineering</span></h1>
          <p className="section-subtitle">
            Our state-of-the-art facilities leverage AI-driven robotics and advanced 
            material science to produce the next generation of solar technology.
          </p>
        </div>
        <motion.div 
          className="tech-main-image"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <img src={roboticImg} alt="Automated Manufacturing" />
        </motion.div>
      </section>

      <section className="process container">
        <div className="process-grid">
          <div className="process-step">
            <div className="step-number">01</div>
            <h3>Ingot Growth & Wafering</h3>
            <p>Using the Czochralski method, we grow high-purity silicon mono-crystals, then slice them into ultra-thin wafers with diamond wire technology.</p>
          </div>
          <div className="process-step">
            <div className="step-number">02</div>
            <h3>Cell Processing</h3>
            <p>Advanced PERC (Passivated Emitter and Rear Cell) technology is applied to improve light capture and electron flow.</p>
          </div>
          <div className="process-step">
            <div className="step-number">03</div>
            <h3>Module Assembly</h3>
            <p>Robotic precision ensures perfect alignment of cells and busbars, minimizing internal resistance and maximizing power.</p>
          </div>
          <div className="process-step">
            <div className="step-number">04</div>
            <h3>Quality Control</h3>
            <p>Each module undergoes EL (Electroluminescence) testing and flash testing to verify performance and detect micro-cracks.</p>
          </div>
        </div>
      </section>

      <section className="innovation glass container">
        <div className="innovation-content">
          <h2>R&D Focus: Perovskite Tandem Cells</h2>
          <p>
            Vanguard Solar is at the forefront of Perovskite technology. Our researchers 
            are developing tandem cells that layer Perovskite on top of traditional silicon, 
            aiming for efficiency benchmarks exceeding 30%.
          </p>
          <div className="innovation-features">
            <div className="innov-item">
              <Cpu size={24} />
              <span>Nanotech Coatings</span>
            </div>
            <div className="innov-item">
              <Microscope size={24} />
              <span>Custom Polymer Backsheets</span>
            </div>
            <div className="innov-item">
              <Activity size={24} />
              <span>Real-time Fault Analysis</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
