import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bg-secondary border-t border-gray-200 pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center shadow-md">
                <Sun className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-display font-bold tracking-tight text-text-primary">
                SOLAR<span className="text-brand-primary">FORGED</span>
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Pioneering the future of solar energy through precision manufacturing and advanced installation componentry. From factory floor to rooftop integration.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-text-secondary hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-text-secondary hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-text-secondary hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-text-primary font-bold mb-6">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Products', 'Solutions', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-text-secondary text-sm hover:text-brand-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-text-primary font-bold mb-6">Support</h4>
            <ul className="space-y-4">
              {['Quality Assurance', 'Sustainability', 'Technical Support', 'Project Portal', 'Documentation'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-text-secondary text-sm hover:text-brand-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-text-primary font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-brand-primary shrink-0" />
                <span className="text-text-secondary text-sm">Industrial Park East, Tech Hub, CA 90210</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-brand-primary shrink-0" />
                <span className="text-text-secondary text-sm">+1 (555) 482-0192</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-brand-primary shrink-0" />
                <span className="text-text-secondary text-sm">hello@solarforged.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-xs">
            © 2026 SolarForged Manufacturing Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/" className="text-text-secondary text-xs hover:text-brand-primary">Privacy Policy</Link>
            <Link to="/" className="text-text-secondary text-xs hover:text-brand-primary">Terms of Service</Link>
            <Link to="/" className="text-text-secondary text-xs hover:text-brand-primary">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
