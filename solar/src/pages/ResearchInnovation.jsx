import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import { Atom, Milestone, Lightbulb, Microscope, Box, Cpu } from 'lucide-react';

const ResearchInnovation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen"
    >
      <SEO title="Research & Innovation" description="Pushing the boundaries of photovoltaic technology with N-type cell research, advanced material coatings, and integrated storage solutions." />

      <section className="section-padding relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-navy-500/5 blur-[200px] -z-10"></div>
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading 
            badge="Innovation Hub"
            title="The Science of Efficiency"
            subtitle="Our R&D division is dedicated to breaking the 25% efficiency barrier for commercial silicon-based PV modules."
            light
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
               {[
                 { 
                   title: 'Next-Gen TOPCon Cells', 
                   desc: 'Improving tunneling oxide passivated contact layers to minimize electron recombination and maximize voltage.',
                   icon: Atom
                 },
                 { 
                   title: 'Advanced Anti-Reflective Coatings', 
                   desc: 'Nanoscale surface texturing that captures light even at extreme low-angle morning and evening sun.',
                   icon: Milestone
                 },
                 { 
                   title: 'Intelligent Component Synergy', 
                   desc: 'Developing BOS components that natively communicate with grid-forming inverters for ultra-stable output.',
                   icon: Lightbulb
                 }
               ].map((item, i) => (
                 <div key={i} className="flex gap-8 group">
                   <div className="w-16 h-16 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-solar-500 group-hover:bg-solar-500 group-hover:text-navy-950 transition-all duration-500">
                     <item.icon size={30} />
                   </div>
                   <div className="space-y-3">
                     <h4 className="text-2xl font-display font-bold text-white group-hover:text-solar-500 transition-colors uppercase tracking-tight">{item.title}</h4>
                     <p className="text-slate-400 leading-relaxed text-sm">
                       {item.desc}
                     </p>
                   </div>
                 </div>
               ))}
            </div>
            
            <div className="glass-card relative overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1532094349884-543bb1198343?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-1000" />
               <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent p-12 flex flex-col justify-end">
                 <h4 className="text-4xl font-display font-black text-white mb-4 uppercase tracking-tighter">Vanguard Research Lab V</h4>
                 <p className="text-slate-500 uppercase tracking-[0.3em] font-bold text-xs">Stuttgart, Germany</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-950/50">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading 
            title="Future Roadmap"
            subtitle="Where our engineering is heading over the next decade."
            light
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { year: '2026', title: '24% Module Eff.', icon: Microscope },
              { year: '2027', title: 'Graphene Encapsulation', icon: Box },
              { year: '2028', title: 'Circular PV Recycling', icon: Globe },
              { year: '2030', title: 'Perovskite Hybrids', icon: Cpu },
            ].map((road, i) => (
              <div key={i} className="glass-card p-10 text-center border-white/5 hover:border-solar-500/20 transition-all">
                <p className="text-solar-500 font-display font-black text-2xl mb-4">{road.year}</p>
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 text-slate-400">
                   <road.icon size={20} />
                </div>
                <h5 className="text-white font-bold uppercase tracking-tight text-sm leading-tight">{road.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ResearchInnovation;
