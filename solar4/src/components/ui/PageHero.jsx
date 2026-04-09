import React from 'react';
import { motion } from 'framer-motion';

const PageHero = ({ badge, title, subtitle, breadcrumb }) => {
  return (
    <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-40 overflow-hidden bg-bg-secondary">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/5 -skew-x-12 translate-x-1/2" />
      <div className="absolute top-1/2 left-10 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl opacity-30" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          <motion.nav 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-xs font-bold text-brand-primary uppercase tracking-widest mb-8"
          >
            <span>Home</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span className="text-text-secondary">{breadcrumb}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block py-1 px-4 bg-brand-primary/10 text-brand-primary text-xs font-bold tracking-widest uppercase rounded-full mb-6"
          >
            {badge}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-black text-text-primary mb-8 leading-[1.1]"
          >
            {title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-2xl"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
