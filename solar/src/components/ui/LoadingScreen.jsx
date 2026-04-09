import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-[#020617] flex flex-col items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-24 h-24"
      >
        <div className="absolute inset-0 border-4 border-solar-500/20 rounded-full"></div>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-4 border-t-solar-500 rounded-full"
        ></motion.div>
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-8 h-8 bg-solar-500 rounded-sm rotate-45"></div>
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center"
      >
        <h2 className="text-xl font-display font-bold tracking-[0.2em] text-white">VANGUARD SOLAR</h2>
        <div className="mt-2 h-1 w-48 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            animate={{ x: [-200, 200] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1/2 h-full bg-solar-500"
          ></motion.div>
        </div>
        <p className="mt-4 text-xs text-slate-500 uppercase tracking-widest">Powering Infinite Progress</p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
