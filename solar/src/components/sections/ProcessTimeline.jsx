import { motion } from 'framer-motion';
import { MANUFACTURING_PROCESS } from '../../data/mockData';
import SectionHeading from '../common/SectionHeading';

const ProcessTimeline = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Blueprint Pattern Background */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        <SectionHeading 
          badge="Manufacturing Excellence"
          title="From Silicon to Sustainable Power"
          subtitle="Our state-of-the-art vertical integration ensures absolute control over quality at every micron of the production journey."
          light
        />

        <div className="relative mt-20">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-[120px] left-0 w-full h-[1px] bg-gradient-to-r from-solar-500/0 via-solar-500/50 to-solar-500/0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {MANUFACTURING_PROCESS.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Step Circle */}
                <div className="relative mb-12">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-solar-500 font-display font-black text-xl group-hover:bg-solar-500 group-hover:text-navy-950 transition-all duration-500 z-10 relative">
                    {item.step}
                  </div>
                  {/* Outer Glow */}
                  <div className="absolute inset-0 bg-solar-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Pulsing Dot (Center of step) */}
                  <div className="absolute -bottom-[22px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-solar-500 hidden lg:block">
                    <div className="absolute inset-0 bg-solar-500 rounded-full animate-ping"></div>
                  </div>
                </div>

                <div className="glass-card p-6 border-white/5 group-hover:border-solar-500/30 transition-colors">
                  <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
