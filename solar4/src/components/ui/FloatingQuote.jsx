import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareText } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingQuote = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-40 hidden md:block"
    >
      <Link 
        to="/contact"
        className="flex items-center gap-3 bg-brand-primary text-white px-6 py-4 rounded-full shadow-2xl shadow-brand-primary/40 group overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        <MessageSquareText className="w-5 h-5 relative z-10" />
        <span className="font-bold relative z-10">Request Components Quote</span>
      </Link>
    </motion.div>
  );
};

export default FloatingQuote;
