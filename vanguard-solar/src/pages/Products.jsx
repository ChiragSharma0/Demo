import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';
import './Products.css';
import panelImg from '../assets/panel.png';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Vanguard Ultra-V 540W',
      type: 'Monocrystalline',
      efficiency: '22.8%',
      features: ['PID Resistant', 'Half-cut Cell', 'Multi-busbar'],
      img: panelImg
    },
    {
      id: 2,
      name: 'Vanguard Bifacial 600W',
      type: 'Dual-Glass',
      efficiency: '23.5%',
      features: ['Bifacial Gain', 'Anodic Oxidation', 'TUV Certified'],
      img: panelImg
    },
    {
      name: 'Smart Inverter Pro',
      type: 'Inverter',
      efficiency: '98.5%',
      features: ['WiFi Monitoring', 'MPPT Tracking', 'IP65 Waterproof'],
      img: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Helix Mounting Kit',
      type: 'Parts',
      efficiency: 'N/A',
      features: ['Aluminum 6005-T5', 'Wind Loads 60m/s', 'Easy Install'],
      img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="products-page">
      <section className="products-hero">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="section-title"
          >
            Solar <span className="highlight-gold">Solutions</span>
          </motion.h1>
          <p className="section-subtitle">
            Engineered for high performance, reliability, and long-term durability. 
            From panels to parts, we provide everything for a complete solar ecosystem.
          </p>
        </div>
      </section>

      <section className="product-list container">
        <div className="product-grid">
          {products.map((product, index) => (
            <motion.div 
              key={index}
              className="product-card glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="product-image">
                <img src={product.img} alt={product.name} />
              </div>
              <div className="product-info">
                <span className="product-type">{product.type}</span>
                <h3>{product.name}</h3>
                <p className="product-efficiency">Efficiency: {product.efficiency}</p>
                <ul className="product-features">
                  {product.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="product-footer">
                  <button className="btn-spec">
                    <Download size={16} /> Datasheet
                  </button>
                  <button className="btn-inquiry">
                    Inquire <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="warranty container">
        <div className="warranty-card glass">
          <h2>Industry-Leading 30-Year Performance Warranty</h2>
          <p>
            We guarantee at least 87.4% power output even after 30 years 
            of operation, ensuring your investment remains profitable for decades.
          </p>
          <button className="btn-primary">Learn More</button>
        </div>
      </section>
    </div>
  );
};

export default Products;
