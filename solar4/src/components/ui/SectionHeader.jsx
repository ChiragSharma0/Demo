import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ badge, title, subtitle, align = 'left' }) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-16 ${isCenter ? 'text-center' : 'text-left'}`}>
      <motion.span 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="inline-block py-1 px-4 bg-brand-primary/10 text-brand-primary text-xs font-bold tracking-widest uppercase rounded-full mb-6"
      >
        {badge}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6 leading-tight"
      >
        {title}
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={`text-text-secondary text-lg max-w-2xl ${isCenter ? 'mx-auto' : ''}`}
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

export default SectionHeader;
