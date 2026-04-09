import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Shield, Settings } from 'lucide-react';

export const ProductCardGrid = ({ title, category, description, icon: Icon, specs }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group"
    >
      <div className="w-14 h-14 bg-bg-secondary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary transition-colors duration-500">
        <Icon className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors duration-500" />
      </div>
      <span className="text-xs font-bold text-brand-primary tracking-widest uppercase mb-3 block">
        {category}
      </span>
      <h3 className="text-2xl font-display font-bold text-text-primary mb-4 group-hover:text-brand-primary transition-colors">
        {title}
      </h3>
      <p className="text-text-secondary text-sm mb-8 leading-relaxed">
        {description}
      </p>
      
      <div className="space-y-3 mb-8">
        {specs.map((spec, i) => (
          <div key={i} className="flex justify-between items-center text-xs border-b border-gray-50 pb-2">
            <span className="text-text-secondary">{spec.label}</span>
            <span className="text-text-primary font-bold">{spec.value}</span>
          </div>
        ))}
      </div>

      <button className="flex items-center gap-2 text-sm font-bold text-text-primary group-hover:text-brand-primary transition-colors">
        Technical Specs <ArrowUpRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

export const ProductCardHorizontal = ({ title, category, description, icon: Icon }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row gap-8 bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm items-center hover:shadow-xl transition-all duration-500"
    >
      <div className="w-24 h-24 bg-brand-primary/10 rounded-3xl flex items-center justify-center shrink-0">
        <Icon className="w-10 h-10 text-brand-primary" />
      </div>
      <div className="flex-grow">
        <span className="text-xs font-bold text-brand-primary tracking-widest uppercase mb-2 block">
          {category}
        </span>
        <h3 className="text-3xl font-display font-bold text-text-primary mb-4">
          {title}
        </h3>
        <p className="text-text-secondary leading-relaxed">
          {description}
        </p>
      </div>
      <div className="shrink-0">
        <button className="px-8 py-4 bg-text-primary text-white rounded-2xl font-bold hover:bg-brand-primary transition-colors">
          Download Guide
        </button>
      </div>
    </motion.div>
  );
};
