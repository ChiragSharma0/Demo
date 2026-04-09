import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import ProcessTimeline from '../components/sections/ProcessTimeline';
import { ShieldCheck, Cpu, Database, Settings, Activity, Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Manufacturing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen"
    >
      <SEO title="Precision Manufacturing" description="Explore our state-of-the-art solar manufacturing facilities powered by AI-driven robotics and quality control." />

      {/* Hero */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy-950/80 -z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center -z-20 opacity-20 grayscale"></div>
        
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionHeading 
              badge="Industrial Excellence"
              title="Next-Gen Manufacturing"
              subtitle="We operate thousands of square feet of climate-controlled, ultra-clean manufacturing space utilizing Industry 4.0 standards."
              light
            />
            <div className="flex flex-wrap gap-8 mt-12">
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-display font-black text-solar-500">2.5 GW</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Annual Output</span>
              </div>
              <div className="w-[1px] h-12 bg-white/10"></div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-display font-black text-solar-500">100%</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">In-House Quality</span>
              </div>
              <div className="w-[1px] h-12 bg-white/10"></div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-display font-black text-solar-500">350+</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Robotic Units</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass-card aspect-video relative overflow-hidden p-2">
              <div className="absolute inset-0 bg-gradient-to-br from-solar-500/20 to-transparent"></div>
              <img 
                src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&q=80&w=1000" 
                alt="Factory Robotics" 
                className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Design Accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-navy-500/30 blur-3xl -z-10 rounded-full"></div>
            <div className="absolute -bottom-5 -left-5 p-6 glass-panel border-white/10 rounded-2xl flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-solar-500 flex items-center justify-center text-navy-950">
                <Activity size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Real-time Efficiency</p>
                <p className="text-white font-bold">98.4% Peak OEE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessTimeline />

      {/* Quality Control Standards */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading 
            badge="Quality Assurance"
            title="Beyond Standard Compliance"
            subtitle="Every single module that leaves our facility undergoes rigorous testing that exceeds IEC standards by 3x."
            light
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'High-Resolution EL Imaging', 
                desc: 'Scanning every cell for micro-cracks and material defects before and after lamination.',
                icon: Cpu
              },
              { 
                title: 'Thermal Cycle Testing', 
                desc: '200+ cycles of extreme temperature shifting from -40°C to +85°C to ensure structural integrity.',
                icon: Settings
              },
              { 
                title: 'AI Inspection Nodes', 
                desc: 'Deep learning vision systems monitor solar cell soldering to sub-millimeter precision.',
                icon: Database
              },
              { 
                title: 'Load Simulation', 
                desc: 'Dynamic and static mechanical load testing up to 5400Pa for extreme weather resilience.',
                icon: Layers
              },
              { 
                title: 'PID Resistance Check', 
                desc: 'Ensuring zero Potential Induced Degradation through advanced material selection.',
                icon: ShieldCheck
              },
              { 
                title: 'Triple-A Flash Testing', 
                desc: 'Precision light soaking for accurate power rating within +/- 3W tolerance.',
                icon: Settings
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-10 flex flex-col group border-white/5 hover:border-solar-500/30 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 text-solar-500 group-hover:bg-solar-500 group-hover:text-navy-950 transition-all duration-500">
                  <feature.icon size={28} />
                </div>
                <h4 className="text-xl font-display font-bold text-white mb-4">{feature.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="section-padding relative">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading 
            badge="Global Hubs"
            title="Strategic Locations"
            subtitle="Optimized logistics and local manufacturing to reduce carbon footprint and lead times."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-3xl h-[400px]">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" alt="HQ Facility" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <h5 className="text-2xl font-bold text-white mb-2">Vanguard GIGA 1</h5>
                <p className="text-xs text-solar-500 uppercase font-black tracking-widest mb-4">India - 5.0 GW Planning</p>
                <div className="flex gap-4">
                  <span className="text-[10px] text-slate-400 border border-white/10 px-2 py-1 rounded">Solar Panels</span>
                  <span className="text-[10px] text-slate-400 border border-white/10 px-2 py-1 rounded">R&D Hub</span>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-3xl h-[400px]">
              <img src="https://images.unsplash.com/photo-1554232456-8727aae0cfa4?auto=format&fit=crop&q=80&w=1000" alt="HQ Facility" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <h5 className="text-2xl font-bold text-white mb-2">Vanguard Euro Hub</h5>
                <p className="text-xs text-solar-500 uppercase font-black tracking-widest mb-4">Germany - Advanced Mounting</p>
                <div className="flex gap-4">
                  <span className="text-[10px] text-slate-400 border border-white/10 px-2 py-1 rounded">Fixed Structures</span>
                  <span className="text-[10px] text-slate-400 border border-white/10 px-2 py-1 rounded">Logistics Hub</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="section-padding flex justify-center">
        <Link to="/contact" className="btn-primary group px-12 py-5 text-lg">
          Join our Supply Chain
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </motion.div>
  );
};

export default Manufacturing;
