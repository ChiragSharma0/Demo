import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <Sun className="logo-icon" />
            <span>VANGUARD <span className="highlight-gold">SOLAR</span></span>
          </Link>
          <p className="footer-desc">
            Vanguard Solar is a global leader in high-performance solar technology, 
            driving the world towards a clean and sustainable energy future.
          </p>
          <div className="social-links">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Linkedin size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/technology">Technology</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-products">
          <h3>Our Products</h3>
          <ul>
            <li><Link to="/products">Monocrystalline Panels</Link></li>
            <li><Link to="/products">Inverters & Storage</Link></li>
            <li><Link to="/products">Installation Kits</Link></li>
            <li><Link to="/products">Bifacial Technology</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Get In Touch</h3>
          <div className="contact-item">
            <MapPin size={18} />
            <span>123 Solar Way, Energy City, CA 90210</span>
          </div>
          <div className="contact-item">
            <Phone size={18} />
            <span>+1 (555) 765-2748</span>
          </div>
          <div className="contact-item">
            <Mail size={18} />
            <span>info@vanguardsolar.com</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Vanguard Solar Manufacturing. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
