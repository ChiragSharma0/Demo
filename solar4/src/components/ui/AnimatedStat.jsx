import React from 'react';
import { motion } from 'framer-motion';

const AnimatedStat = ({ value, label, prefix = '', suffix = '' }) => {
  return (
    <div className="text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="text-4xl md:text-5xl font-display font-black text-brand-primary mb-2"
      >
        {prefix}{value}{suffix}
      </motion.div>
      <div className="text-text-secondary font-medium tracking-wide text-sm uppercase">
        {label}
      </div>
    </div>
  );
};

export default AnimatedStat;
