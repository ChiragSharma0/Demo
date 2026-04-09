import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import { Zap, Building2, Factory, Construction, BarChart4, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SOLUTIONS = [
  {
    id: 'utility',
    title: 'Utility-Scale Solar',
    subtitle: 'Powering the Grid',
    desc: 'End-to-end solutions for multi-megawatt projects. We provide high-power bifacial modules and terrain-adaptive mounting structures for maximum LCOE reduction.',
    features: ['High Bifaciality Panels', 'Single-Axis Trackers', 'Grid Integration Support', 'SCADA Monitoring'],
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fab35?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'commercial',
    title: 'Industrial & Commercial',
    subtitle: 'Zero-Emission Operations',
    desc: 'Turnkey rooftop and carport solutions for warehouses, offices, and factories. Optimized for high energy yield on restricted footprints.',
    features: ['AeroRail Mounting', 'Rapid Shutdown Safety', 'Storage Integration', 'Financial Modelling'],
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'residential',
    title: 'Residential Ecosystems',
    subtitle: 'Sustainable Living',
    desc: 'Premium home solar kits designed for aesthetics and performance. Intelligent energy management for the modern homeowner.',
    features: ['Vanguard Alpha Series', 'Smart Monitoring App', 'Battery Ready', 'Esthetic Mounting'],
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1466611653911-95282fc3656b?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'epc',
    title: 'EPC & Project Support',
    subtitle: 'Expert Implementation',
    desc: 'Technical consultation and on-site support for installation partners. We ensure every Vanguard component is deployed for peak lifespan.',
    features: ['Technical Design Support', 'Installation Training', 'Commissioning Services', 'Logistics Management'],
    icon: Construction,
    image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&q=80&w=1000'
  }
];

const Solutions = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen"
    >
      <SEO title="Energy Solutions" description="Comprehensive solar ecosystems for utility-scale developments, industrial rooftops, and residential installations." />

      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-solar-500/5 blur-[150px] -z-10"></div>
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading 
            badge="Tailored Engineering"
            title="Smarter Ways to Harness the Sun"
            subtitle="Diverse energy challenges require specialized solutions. We bridge the gap between advanced manufacturing and practical field deployment."
            light
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mt-20">
            {SOLUTIONS.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="aspect-[16/9] rounded-3xl overflow-hidden mb-10 relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <div className="w-14 h-14 rounded-2xl bg-solar-500 text-navy-950 flex items-center justify-center shadow-2xl">
                      <item.icon size={28} />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-solar-500 text-xs font-black uppercase tracking-[0.3em]">{item.subtitle}</span>
                    <div className="h-[1px] flex-grow bg-white/10"></div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-white group-hover:text-solar-500 transition-colors uppercase tracking-tight">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-lg">
                    {item.desc}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {item.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-solar-500"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="pt-6">
                    <Link to="/contact" className="btn-secondary group px-8">
                      Get Specialist Advice
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process CTA */}
      <section className="section-padding bg-[#010413]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Scale with Confidence</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Whether you are a project developer, an installer, or an industrial business, we provide the hardware and technical expertise to de-risk your energy transition.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <BarChart4 size={32} className="text-solar-500" />
                <h4 className="text-xl font-bold text-white">LCOE Optimization</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Lowering the Levelized Cost of Energy through superior conversion efficiency and reduced balance-of-system costs.</p>
              </div>
              <div className="space-y-4">
                <ShieldCheck size={32} className="text-solar-500" />
                <h4 className="text-xl font-bold text-white">Bankability</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Certified for durability by third-party laboratories, making your projects more attractive for green financing.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 glass-card p-12 flex flex-col items-center justify-center text-center border-solar-500/20">
            <div className="w-20 h-20 rounded-full bg-solar-500/10 flex items-center justify-center mb-8">
              <Construction size={40} className="text-solar-500" />
            </div>
            <h4 className="text-2xl font-display font-bold text-white mb-6 uppercase tracking-tight">Need technical consultation?</h4>
            <Link to="/contact" className="btn-primary w-full">Talk to an Expert</Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Solutions;
