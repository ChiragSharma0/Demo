import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Zap, Shield, ArrowRight, Battery, Layers, Cog, Layout, Workflow } from 'lucide-react';
import { ProductCardGrid } from '../components/ui/ProductCard';
import SectionHeader from '../components/ui/SectionHeader';
import AnimatedStat from '../components/ui/AnimatedStat';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-white bg-grid">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 -skew-x-12 translate-x-1/4 z-0" />
        
        <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary text-xs font-bold tracking-widest uppercase mb-8"
            >
              <Zap className="w-4 h-4" /> Next-Gen Solar Manufacturing
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-display font-black text-text-primary mb-8 leading-[1.05]"
            >
              Powering <br />
              <span className="text-brand-primary">Precision</span> <br />
              Industry.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-text-secondary mb-12 leading-relaxed max-w-lg"
            >
              High-performance solar panels and mission-critical installation components. Engineered for maximum efficiency, from factory floor to industrial rooftops.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/products" className="px-10 py-5 bg-text-primary text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-brand-primary transition-all duration-300 shadow-xl shadow-text-primary/10">
                Explore Components <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="px-10 py-5 bg-white text-text-primary border-2 border-gray-100 rounded-2xl font-bold hover:border-brand-primary transition-all duration-300">
                Get a Quote
              </Link>
            </motion.div>

            {/* Floating Stat Chips */}
            <div className="mt-16 flex gap-6 overflow-visible">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white p-4 rounded-2xl shadow-xl shadow-black/5 flex items-center gap-4 animate-float border border-gray-50"
              >
                <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center text-green-600">
                  <Sun className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-text-primary">22.4%</div>
                  <div className="text-[10px] text-text-secondary uppercase tracking-wider font-medium">Cell Efficiency</div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-white p-4 rounded-2xl shadow-xl shadow-black/5 flex items-center gap-4 border border-gray-50 mt-6"
                style={{ animationDelay: '1s' }}
              >
                <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-text-primary">25 Years</div>
                  <div className="text-[10px] text-text-secondary uppercase tracking-wider font-medium">Warranty</div>
                </div>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative lg:h-[700px] flex items-center justify-center"
          >
            {/* Abstract Visual Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-sky-400/10 to-transparent rounded-[4rem] rotate-6" />
            <div className="relative w-full h-[500px] bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 p-2">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?auto=format&fit=crop&q=80&w=2070" 
                alt="Solar Manufacturing" 
                className="w-full h-full object-cover rounded-[2.8rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-3 h-3 bg-brand-primary rounded-full animate-pulse" />
                  <span className="text-xs font-bold text-text-primary uppercase tracking-widest">Live Factory Feed</span>
                </div>
                <div className="text-sm text-text-secondary leading-relaxed">
                  Automated assembly of <br /><strong>SF-500 Solar Rails</strong> in progress.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-bg-secondary relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
            <div className="lg:col-span-8">
              <SectionHeader 
                badge="What We Build"
                title="Industrial Strength Components for Solar Ecosystems"
                subtitle="We manufacture everything from high-efficiency PV modules to the smallest mounting clamps. Quality control at every micron."
              />
            </div>
            <div className="lg:col-span-4 flex justify-end pb-16">
              <Link to="/products" className="group flex items-center gap-4 text-text-primary font-bold">
                View All Products <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all duration-300"><ArrowRight /></div>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCardGrid 
              title="SF-Titan 500W Panels"
              category="PV Modules"
              description="Bifacial monocrystalline panels with N-Type cell technology for maximum energy yield."
              icon={Sun}
              specs={[
                { label: 'Efficiency', value: '22.8%' },
                { label: 'Warranty', value: '25 Years' }
              ]}
            />
            <div className="lg:mt-12">
              <ProductCardGrid 
                title="SteelForge Rails"
                category="Mounting Systems"
                description="High-tensile anodized aluminum rails designed for wind loads exceeding 200mph."
                icon={Layers}
                specs={[
                  { label: 'Material', value: 'AL6005-T5' },
                  { label: 'Finish', value: 'Silver/Black' }
                ]}
              />
            </div>
            <ProductCardGrid 
              title="HyperLink Connectors"
              category="DC Components"
              description="IP68 rated junction boxes and MC4 compatible connectors for zero-loss transmission."
              icon={Cog}
              specs={[
                { label: 'Protection', value: 'IP68' },
                { label: 'Voltage', value: '1500V DC' }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Process Section - Editorial Style */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 relative">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=2000" 
                  alt="Manufacturing Process" 
                  className="w-full h-[600px] object-cover"
                />
              </motion.div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-sky-100 rounded-full border border-sky-200/50" />
            </div>
            
            <div className="lg:w-1/2">
              <SectionHeader 
                badge="Our Workflow"
                title="From Factory Floor to Rooftop Integration"
                subtitle="We don't just ship parts; we provide a complete engineering ecosystem for solar projects of any scale."
              />
              
              <div className="space-y-12">
                {[
                  { icon: Layout, title: 'Precision Design', desc: 'Our engineers use CAD/CAM modeling to optimize every millimeter for strength and weight.' },
                  { icon: Workflow, title: 'Advanced Production', desc: 'Automated robotic lines ensure every clamp and rail meets micron-level tolerances.' },
                  { icon: Shield, title: 'Rigorous Testing', desc: 'Thermal cycling, salt-spray testing, and mechanical stress tests exceed industry norms.' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 items-start"
                  >
                    <div className="w-16 h-16 bg-bg-secondary rounded-2xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                      <item.icon className="w-8 h-8 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-text-primary">{item.title}</h4>
                      <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedStat value="1.2" suffix=" GW" label="Annual Capacity" />
            <AnimatedStat value="1200" suffix="+" label="Managed Projects" />
            <AnimatedStat value="99.9" suffix="%" label="Quality Compliance" />
            <AnimatedStat value="45" suffix="+" label="Global Regions" />
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-24 bg-text-primary overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-10 leading-tight">
            Ready to Forge the <br />Future of Energy?
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="px-10 py-5 bg-brand-primary text-white rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300">
              Request Project Quote
            </Link>
            <Link to="/products" className="px-10 py-5 bg-white/10 text-white border border-white/20 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Technical Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
