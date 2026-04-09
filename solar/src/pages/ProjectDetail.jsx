import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data/mockData';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import { ArrowLeft, MapPin, Zap, Building, Construction, ShieldCheck } from 'lucide-react';
import NotFound from './NotFound';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = PROJECTS.find(p => p.slug === slug);

  if (!project) return <NotFound />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen"
    >
      <SEO title={project.title} description={project.description} />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-24">
          <div className="max-w-[1440px] mx-auto">
            <Link to="/projects" className="flex items-center gap-2 text-solar-500 mb-8 font-bold uppercase tracking-widest text-xs group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Project Portfolio
            </Link>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/60 font-medium uppercase tracking-[0.3em] text-xs">
                  <MapPin size={14} className="text-solar-500" />
                  {project.location}
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white leading-tight uppercase tracking-tighter">
                  {project.title}
                </h1>
              </div>
              <div className="glass-panel p-8 border-white/10 rounded-2xl flex flex-col gap-6 min-w-[280px]">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 uppercase tracking-widest font-black">Capacity</span>
                  <span className="text-2xl font-display font-black text-solar-500">{project.capacity}</span>
                </div>
                <div className="h-[1px] bg-white/5"></div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 uppercase tracking-widest font-black">Impact</span>
                  <div className="text-right">
                    <p className="text-white font-bold text-sm leading-tight">800k Tons CO2/yr</p>
                    <p className="text-[10px] text-solar-500 uppercase tracking-widest font-bold">Offset</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-24">
          <div className="lg:col-span-2 space-y-16">
            <div className="space-y-8">
              <SectionHeading title="The Challenge" light />
              <p className="text-slate-400 text-lg leading-relaxed">
                The {project.title} project presented a unique set of geological and environmental challenges. Located in a high-corrosion, arid environment, the system required extreme durability and advanced bifacial cell technology to capture both direct sunlight and albedo light from the desert sands.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed text-blue-100 italic border-l-2 border-solar-500 pl-8 py-2">
                "Implementing Vanguard's Ultra Series modules allowed us to squeeze 15% more yield from the same footprint compared to traditional PERC technology. The engineering support was top-tier throughout the commissioning phase."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="glass-card p-10 border-white/5 space-y-6">
                  <Building size={32} className="text-solar-500" />
                  <h4 className="text-xl font-bold text-white uppercase tracking-tight">Technical Solution</h4>
                  <ul className="space-y-4 text-sm text-slate-400">
                    <li className="flex items-center gap-3"><Zap size={14} className="text-solar-500" /> Vanguard Ultra 700W Bifacial Panels</li>
                    <li className="flex items-center gap-3"><Zap size={14} className="text-solar-500" /> TerraMount V3 Single-Axis Trackers</li>
                    <li className="flex items-center gap-3"><Zap size={14} className="text-solar-500" /> ProConnect IP68 Electrical BOS</li>
                  </ul>
                </div>
                <div className="glass-card p-10 border-white/5 space-y-6">
                  <Construction size={32} className="text-solar-500" />
                  <h4 className="text-xl font-bold text-white uppercase tracking-tight">Scope of Work</h4>
                  <ul className="space-y-4 text-sm text-slate-400">
                    <li className="flex items-center gap-3"><ShieldCheck size={14} className="text-solar-500" /> Supply & Manufacturing</li>
                    <li className="flex items-center gap-3"><ShieldCheck size={14} className="text-solar-500" /> Technical Consultation</li>
                    <li className="flex items-center gap-3"><ShieldCheck size={14} className="text-solar-500" /> Post-Commissioning Monitoring</li>
                  </ul>
                </div>
            </div>
            
            <div className="space-y-8">
              <SectionHeading title="Performance Metrics" light />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {project.metrics.map((m, i) => (
                  <div key={i} className="space-y-2">
                    <h5 className="text-white font-black text-3xl tracking-tighter">{m.value}</h5>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-1 space-y-12">
            <div className="glass-card p-10 border-solar-500/20 sticky top-32">
              <h4 className="text-white font-bold text-xl mb-6 uppercase tracking-tight">Interested in similar capacity?</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Our utility engineering team can provide a preliminary yield analysis and LCOE assessment for your project within 72 hours.
              </p>
              <Link to="/contact" className="btn-primary w-full">Request Feasibility Study</Link>
              <div className="mt-10 pt-10 border-t border-white/5">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black mb-4">Downloads</p>
                <div className="space-y-4">
                  <button className="flex items-center justify-between w-full text-xs text-white hover:text-solar-500 transition-colors">
                    <span>Performance Report 2025</span>
                    <ArrowLeft size={14} className="rotate-[135deg]" />
                  </button>
                  <button className="flex items-center justify-between w-full text-xs text-white hover:text-solar-500 transition-colors">
                    <span>Environmental Impact Audit</span>
                    <ArrowLeft size={14} className="rotate-[135deg]" />
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetail;
