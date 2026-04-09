import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingCTA = () => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.8 }}
      className="fixed bottom-8 right-8 z-[60]"
    >
      <Link 
        to="/contact"
        className="flex items-center gap-3 px-6 py-4 bg-solar-500 text-navy-950 font-bold rounded-full shadow-2xl shadow-solar-500/40 hover:bg-white hover:text-solar-500 transition-all duration-300 active:scale-95 group"
      >
        <span className="hidden md:inline uppercase tracking-widest text-sm">Request a Quote</span>
        <div className="w-8 h-8 rounded-full bg-navy-950 text-white flex items-center justify-center group-hover:bg-solar-500 group-hover:text-navy-950 transition-colors">
          <Send className="w-4 h-4" />
        </div>
      </Link>
    </motion.div>
  );
};

export default FloatingCTA;
