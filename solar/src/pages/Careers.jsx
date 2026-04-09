import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import { Search, MapPin, Clock, ArrowRight, Zap, Users2, Rocket } from 'lucide-react';

const JOBS = [
  { id: 1, title: 'Senior Materials Engineer', dept: 'R&D', loc: 'Stuttgart, Germany', type: 'Full-time' },
  { id: 2, title: 'Automation Robotics Specialist', dept: 'Manufacturing', loc: 'Bangalore, India', type: 'Full-time' },
  { id: 3, title: 'Global Supply Chain Manager', dept: 'Operations', loc: 'Berlin, Germany', type: 'Full-time' },
  { id: 4, title: 'Utility Project Consultant', dept: 'Sales & Engineering', loc: 'Dubai, UAE', type: 'Full-time' },
];

const Careers = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen"
    >
      <SEO title="Careers" description="Join the team architecting the energy transition. From material science and robotics to global operations and utility engineering." />

      <section className="section-padding relative">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div>
            <SectionHeading 
              badge="Work with us"
              title="Power the Future"
              subtitle="We are looking for obsessed problem solvers, material scientists, and industrial dreamers."
              light
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
               <div className="space-y-4">
                 <div className="w-12 h-12 rounded-xl bg-solar-500/10 flex items-center justify-center text-solar-500">
                    <Zap size={24} />
                 </div>
                 <h4 className="text-white font-bold">Innovation First</h4>
                 <p className="text-sm text-slate-500 leading-relaxed">Work on technology that is actively reducing the global carbon footprint.</p>
               </div>
               <div className="space-y-4">
                 <div className="w-12 h-12 rounded-xl bg-solar-500/10 flex items-center justify-center text-solar-500">
                    <Users2 size={24} />
                 </div>
                 <h4 className="text-white font-bold">Global Culture</h4>
                 <p className="text-sm text-slate-500 leading-relaxed">A diverse team across 15+ countries working with a unified mission.</p>
               </div>
            </div>
           </div>
           
           <div className="glass-card p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-10">
                <Rocket size={160} className="text-solar-500" />
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-6 uppercase tracking-tight">Our Impact</h3>
              <ul className="space-y-6">
                {[
                  { val: '2000+', label: 'Global Employees' },
                  { val: '45+', label: 'Nationalities' },
                  { val: '35%', label: 'R&D Workforce' },
                  { val: '100%', label: 'Technical Training provided' }
                ].map((stat, i) => (
                  <li key={i} className="flex flex-col">
                    <span className="text-4xl font-display font-black text-solar-500">{stat.val}</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{stat.label}</span>
                  </li>
                ))}
              </ul>
           </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-navy-950/50">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <SectionHeading 
              title="Open Opportunities"
              subtitle="Find your place in the Vanguard ecosystem."
              light
            />
            <div className="relative w-full md:w-80 mb-12">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
               <input type="text" placeholder="Filter by role or location" className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-sm focus:outline-none focus:border-solar-500/50" />
            </div>
          </div>

          <div className="space-y-4">
            {JOBS.map((job) => (
              <motion.div
                key={job.id}
                whileHover={{ x: 10 }}
                className="glass-card p-8 border-white/5 hover:border-solar-500/20 transition-all flex flex-col md:flex-row md:items-center justify-between gap-8 group"
              >
                <div>
                  <h4 className="text-xl font-display font-bold text-white mb-2 group-hover:text-solar-500 transition-colors">{job.title}</h4>
                  <div className="flex flex-wrap gap-6 text-xs text-slate-500 uppercase tracking-widest font-bold">
                    <span className="flex items-center gap-2">
                       <Rocket size={12} className="text-solar-500" />
                       {job.dept}
                    </span>
                    <span className="flex items-center gap-2">
                       <MapPin size={12} />
                       {job.loc}
                    </span>
                    <span className="flex items-center gap-2">
                       <Clock size={12} />
                       {job.type}
                    </span>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs py-3 px-6 rounded-full border border-white/10 hover:bg-white hover:text-navy-950 transition-all">
                  Apply Now
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Careers;
