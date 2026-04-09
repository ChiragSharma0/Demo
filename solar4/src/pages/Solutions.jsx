import React from 'react';
import { motion } from 'framer-motion';
import { Home as HomeIcon, Building2, Warehouse, Zap, ShieldCheck, BarChart3, Clock, Settings2 } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';

const Solutions = () => {
  return (
    <div className="bg-white">
      <PageHero 
        badge="Application Expertise"
        title="Tailored Energy Solutions"
        subtitle="From residential rooftops to massive industrial centers, we provide the engineering backbone for any solar environment."
        breadcrumb="Solutions"
      />

      {/* Residential Section - Staggered Card Layout */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-80"
                >
                  <img src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=1000" alt="Resi 1" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div 
                   initial={{ opacity: 0, y: -20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2 }}
                  className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 mt-12 h-80"
                >
                  <img src="https://images.unsplash.com/photo-1594398901394-4e34939a4fe0?auto=format&fit=crop&q=80&w=1000" alt="Resi 2" className="w-full h-full object-cover" />
                </motion.div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-50" />
            </div>

            <div>
              <SectionHeader 
                badge="Residential Units"
                title="Premium Rooftop Aesthetics"
                subtitle="Small scale projects require high aesthetics and zero leakage risks. Our residential solutions prioritize sleek design and rapid, non-invasive mounting."
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-bg-secondary rounded-2xl flex items-center justify-center text-brand-primary border border-gray-50"><HomeIcon className="w-6 h-6" /></div>
                  <h4 className="font-bold text-xl">Rapid Deployment</h4>
                  <p className="text-text-secondary text-sm">Universal rail systems that reduce on-roof labor by up to 40%.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-bg-secondary rounded-2xl flex items-center justify-center text-brand-primary border border-gray-50"><ShieldCheck className="w-6 h-6" /></div>
                  <h4 className="font-bold text-xl">Leak Protection</h4>
                  <p className="text-text-secondary text-sm">Patent-pending EPDM flashing technology for 100% water-tight integrity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial & Industrial - Reversed Layout */}
      <section className="section-padding bg-bg-secondary relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <SectionHeader 
                badge="C&I Solutions"
                title="Massive Infrastructure Strength"
                subtitle="For warehouses and corporate campuses, we provide structural components that handle thousands of modules with automated cable management."
              />
              <div className="space-y-8">
                {[
                  { icon: Warehouse, title: 'Utility Scale Yield', desc: 'Designed for MW-scale projects with optimized racking for maximum ground coverage.' },
                  { icon: Building2, title: 'Structural Integrity', desc: 'PE-certified components that meet rigorous IBC and local building codes globally.' },
                  { icon: Zap, title: 'Integrated DC Wiring', desc: 'Quick-click connectors that streamline large-scale electrical bus strings.' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    transition={{ type: 'spring' }}
                    className="flex gap-6 p-6 bg-white rounded-3xl border border-gray-100 hover:shadow-lg transition-all"
                  >
                    <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center shrink-0 text-brand-primary"><item.icon className="w-7 h-7" /></div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                      <p className="text-text-secondary text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-[3.5rem] overflow-hidden shadow-2xl skew-y-2 border-8 border-white"
              >
                <img src="https://images.unsplash.com/photo-1548333293-4a1c773950fb?auto=format&fit=crop&q=80&w=2070" alt="Industrial Solar" className="w-full h-[550px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-transparent" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How we support a project - Timeline Style */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader 
            badge="Process Flow"
            title="Our Partnership Lifecycle"
            subtitle="We don't just sell hardware; we provide end-to-end technical support for every project phase."
            align="center"
          />

          <div className="relative mt-20">
            {/* Connector Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
              {[
                { step: '01', title: 'Consultation', desc: 'Initial site review and structural analysis of roof profiles.', icon: Settings2 },
                { step: '02', title: 'BOM Design', desc: 'Complete Bill of Materials generation with custom length rails.', icon: BarChart3 },
                { step: '03', title: 'Manufacturing', desc: 'Precision production and custom pre-assembly options.', icon: Warehouse },
                { step: '04', title: 'Logistics', desc: 'Just-in-time delivery to site with organized kit packaging.', icon: Clock }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-text-primary text-white rounded-full flex items-center justify-center font-black text-xs border-4 border-white">
                    {item.step}
                  </div>
                  <div className="w-16 h-16 bg-bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <item.icon className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Strip */}
      <section className="py-20 bg-brand-primary relative overflow-hidden">
         <div className="container-custom relative z-10 flex flex-col md:flex-row justify-between items-center gap-12 text-white">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-display font-black mb-4">Engineering ROI into every install.</h2>
              <p className="text-white/80">Our components reduce labor costs by 25% on average compared to generic racking systems.</p>
            </div>
            <button className="px-12 py-5 bg-text-primary text-white rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-black/20">
              Request Case Study
            </button>
         </div>
      </section>
    </div>
  );
};

export default Solutions;
