import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import { PROJECTS } from '../data/mockData';
import { MapPin, Zap, Calendar, ArrowRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen"
    >
      <SEO title="Project Portfolio" description="Explore our global footprint of landmark solar installations, from massive utility-scale plants to complex industrial rooftops." />

      {/* Header */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading 
            badge="Global Footprint"
            title="Landmark Installations"
            subtitle="Real-world results across diverse climates and terrains. Each project is a testament to our engineering reliability."
            light
          />
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-3xl mb-8 relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
                  
                  {/* Stats Overlay on Image */}
                  <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                    <div className="space-y-2">
                       <div className="flex items-center gap-2 text-solar-500 font-bold uppercase tracking-widest text-[10px]">
                        <MapPin size={12} />
                        {project.location}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-tight">{project.title}</h3>
                    </div>
                    <div className="hidden lg:flex flex-col items-end gap-1">
                      <span className="text-white font-bold text-xl uppercase tracking-tighter">{project.capacity}</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none">Capacity</span>
                    </div>
                  </div>
                </div>

                <div className="px-4">
                  <p className="text-slate-400 leading-relaxed mb-8 max-w-xl">
                    {project.description}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
                    {project.metrics.slice(0, 4).map((m, j) => (
                      <div key={j} className="space-y-1">
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{m.label}</p>
                        <p className="text-white font-bold text-sm tracking-tight">{m.value}</p>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to={`/projects/${project.slug}`}
                    className="flex items-center gap-3 text-solar-500 font-bold uppercase tracking-widest text-xs group/link"
                  >
                    Explore Case Study
                    <div className="w-8 h-8 rounded-full border border-solar-500/30 flex items-center justify-center group-hover/link:bg-solar-500 group-hover/link:text-navy-950 transition-all">
                      <ArrowRight size={14} />
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="section-padding bg-navy-950/50">
        <div className="max-w-[1440px] mx-auto text-center">
          <SectionHeading 
            title="Energizing the Globe"
            subtitle="We benchmark our success by the amount of clean energy generated and the tons of CO2 offset annually."
            light
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            {[
              { label: 'CO2 Offset', value: '1.2M Tons/yr', icon: Layers },
              { label: 'Energy Generated', value: '8.4 TWh', icon: Zap },
              { label: 'Households Powered', value: '3.5M+', icon: Calendar },
            ].map((impact, i) => (
              <div key={i} className="glass-card p-12 hover:border-solar-500/30 transition-all">
                <impact.icon size={48} className="text-solar-500 mx-auto mb-8" />
                <h4 className="text-3xl font-display font-black text-white mb-2 tracking-tight uppercase">{impact.value}</h4>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-black leading-none">{impact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
