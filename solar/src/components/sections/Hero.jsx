import { motion } from 'framer-motion';
import { ArrowRight, Play, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Media Placeholder/Visuals */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-transparent z-10"></div>
        {/* We can use a colored overlay or abstract shapes if no video */}
        <div className="absolute inset-0 bg-navy-950">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay opacity-30 grayscale saturate-50"></div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 relative z-20 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-solar-500"></div>
              <span className="text-solar-500 font-bold uppercase tracking-[0.3em] text-xs">The Era of High Efficiency</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[1.1] mb-8">
              Pioneering <span className="text-gradient decoration-solar-500 block">Solar Excellence</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mb-12">
              Integrated manufacturing for the evolving energy landscape. 
              Engineering ultra-high power modules and precision mounting solutions for a carbon-neutral industrial revolution.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/products" className="btn-primary w-full sm:w-auto px-10 py-4 group">
                Explore Portfolio
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="flex items-center gap-4 text-white font-semibold group w-full sm:w-auto px-6 py-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-solar-500 group-hover:text-navy-950 transition-all">
                  <Play size={16} fill="currentColor" />
                </div>
                <span>The Manufacturing Hub</span>
              </button>
            </div>
          </motion.div>

          {/* Quick Stats Overlay */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 p-10 glass-card max-w-3xl"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-solar-500">
                <Zap size={20} />
                <span className="text-2xl font-display font-bold text-white">2.5 GW+</span>
              </div>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Annual Production</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-solar-500">
                <ShieldCheck size={20} />
                <span className="text-2xl font-display font-bold text-white">30 Years</span>
              </div>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Performance Guarantee</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-solar-500">
                <div className="w-2 h-2 rounded-full bg-solar-500 animate-pulse"></div>
                <span className="text-2xl font-display font-bold text-white">15+</span>
              </div>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Global Locations</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Design Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full -z-10 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-solar-500/10 blur-[120px] rounded-full"></div>
        {/* Animated Line */}
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-solar-500/20 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
