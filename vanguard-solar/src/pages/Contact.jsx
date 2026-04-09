import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero container">
        <div className="section-header">
          <span className="badge">GET IN TOUCH</span>
          <h1>Contact <span className="highlight-gold">Vanguard</span></h1>
          <p className="section-subtitle">
            Need a bulk quote or have technical questions? Our engineering team is 
            ready to assist you with your solar project.
          </p>
        </div>
      </section>

      <section className="contact-content container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card glass">
              <h3>Direct Contact</h3>
              <div className="info-item">
                <Phone size={24} color="var(--color-primary)" />
                <div>
                  <h4>Call Us</h4>
                  <p>+1 (555) 765-2748</p>
                </div>
              </div>
              <div className="info-item">
                <Mail size={24} color="var(--color-primary)" />
                <div>
                  <h4>Email Us</h4>
                  <p>sales@vanguardsolar.com</p>
                </div>
              </div>
              <div className="info-item">
                <MapPin size={24} color="var(--color-primary)" />
                <div>
                  <h4>Visit Us</h4>
                  <p>123 Solar Way, Energy City, CA 90210, USA</p>
                </div>
              </div>
            </div>

            <div className="global-presence">
              <h3>Global Offices</h3>
              <ul>
                <li>Berlin, Germany</li>
                <li>Tokyo, Japan</li>
                <li>Sydney, Australia</li>
              </ul>
            </div>
          </div>

          <div className="contact-form-container glass">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <select required>
                    <option value="">Select a subject</option>
                    <option value="quote">Bulk Quote Request</option>
                    <option value="technical">Technical Support</option>
                    <option value="partnership">Partnership Inquiry</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea rows="5" placeholder="How can we help you?" required></textarea>
                </div>
                <button type="submit" className="btn-submit">
                  <Send size={18} /> SEND MESSAGE
                </button>
              </form>
            ) : (
              <motion.div 
                className="success-message"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle size={64} color="var(--color-accent)" />
                <h2>Message Sent!</h2>
                <p>Thank you for reaching out. A representative will contact you within 24 hours.</p>
                <button className="btn-primary" onClick={() => setSubmitted(false)}>Send another message</button>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
