import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sun, Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.03)_0%,transparent_50%)]"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10"
      >
        <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mx-auto mb-12 shadow-2xl">
          <Sun size={48} className="text-solar-500 animate-pulse" />
        </div>
        
        <h1 className="text-8xl md:text-[180px] font-display font-black text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 tracking-tighter">
          404
        </h1>
        
        <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6 uppercase tracking-tight">System Outage</h2>
        <p className="text-slate-500 text-lg mb-12 max-w-md mx-auto leading-relaxed">
          The requested technical resource could not be located in the Vanguard database. It may have been decommissioned or moved to a new sector.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/" className="btn-primary w-full sm:w-auto px-10">
            <Home size={18} />
            Return Home
          </Link>
          <button onClick={() => window.history.back()} className="btn-secondary w-full sm:w-auto px-10">
            <ArrowLeft size={18} />
            Previous Sector
          </button>
        </div>
      </motion.div>
      
      {/* Animated Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-solar-500/50 to-transparent"></div>
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-solar-500/50 to-transparent"></div>
      </div>
    </div>
  );
};

export default NotFound;
