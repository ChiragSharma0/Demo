import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Award, MapPin, BarChart2, Zap, Globe, HardHat } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';

const ProjectsQuality = () => {
  return (
    <div className="bg-white">
      <PageHero 
        badge="Proof of Performance"
        title="Certified Quality, Proven Results"
        subtitle="Explore our portfolio of managed projects and our rigorous quality assurance standards that ensure 25+ years of operational durability."
        breadcrumb="Quality & Projects"
      />

      {/* Featured Projects - Horizontal Scroll Feel / Large Cards */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom">
          <SectionHeader 
            badge="Case Studies"
            title="Projects Powered by SolarForged"
            subtitle="Our components have been deployed across diverse climates, from corrosive coastal zones to high-temperature deserts."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: 'TechHub Data Center',
                location: 'Phoenix, AZ',
                impact: '4.2 MW Total Capacity',
                type: 'Industrial Rooftop',
                img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=2000'
              },
              {
                title: 'Coastal Logistics Park',
                location: 'Savannah, GA',
                impact: '2.8 MW - High Salt Resistance',
                type: 'Specialized Mounting',
                img: 'https://images.unsplash.com/photo-1466611653911-95281773ad90?auto=format&fit=crop&q=80&w=2000'
              }
            ].map((proj, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative rounded-[3rem] overflow-hidden shadow-2xl h-[500px]"
              >
                <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-12 flex flex-col justify-end">
                  <div className="flex gap-4 items-center mb-4">
                    <span className="px-4 py-1.5 bg-brand-primary text-white text-xs font-bold rounded-full uppercase tracking-widest">{proj.type}</span>
                    <span className="flex items-center gap-2 text-white/80 text-xs font-medium"><MapPin className="w-4 h-4" /> {proj.location}</span>
                  </div>
                  <h3 className="text-3xl font-display font-black text-white mb-4">{proj.title}</h3>
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-1 bg-brand-primary rounded-full" />
                    <span className="font-bold">{proj.impact}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Metrics / Impact */}
      <section className="py-20 bg-bg-secondary">
        <div className="container-custom">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Globe, val: '45+', label: 'Global Regions' },
                { icon: Zap, val: '8.5 GW', label: 'Cumulative Deployment' },
                { icon: HardHat, val: 'Zero', label: 'Safety Incidents' },
                { icon: BarChart2, val: '<0.01%', label: 'Failure Rate' }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm"><item.icon className="text-brand-primary w-7 h-7" /></div>
                  <div className="text-3xl font-display font-black text-text-primary mb-2">{item.val}</div>
                  <div className="text-xs uppercase font-bold text-text-secondary tracking-widest">{item.label}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Quality Standards - Asymmetrical List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-1/3">
              <SectionHeader 
                badge="Compliance"
                title="Uncompromising Standards"
                subtitle="Every SolarForged component undergoes a 12-stage validation process before leaving the factory floor."
              />
              <div className="flex flex-wrap gap-4 mt-8">
                {['ISO 9001', 'UL 2703', 'CE', 'TUV Rheinland', 'Intertek'].map(cert => (
                  <div key={cert} className="px-4 py-3 bg-bg-secondary rounded-xl text-xs font-bold text-text-primary border border-gray-100">{cert}</div>
                ))}
              </div>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { 
                  title: 'Material Integrity', 
                  desc: 'Spectral analysis of every aluminum batch to ensure correct alloy composition for maximum tensile strength.',
                  icon: Shield
                },
                { 
                  title: 'Cycle Testing', 
                  desc: 'Accelerated aging labs simulating 25 years of UV and thermal stress in just 6 months.',
                  icon: CheckCircle2
                },
                { 
                  title: 'Wind Loading', 
                  desc: 'Real-world wind tunnel testing for raking systems to validate performance in hurricane speeds.',
                  icon: Award
                },
                { 
                  title: 'Electrical Safety', 
                  desc: '100% HI-POT and insulation resistance testing for all DC connectors and cabling.',
                  icon: Zap
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="w-12 h-12 bg-bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <item.icon className="w-6 h-6 text-brand-primary group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-xl font-bold text-text-primary mb-4">{item.title}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Workflow - Visual Strip */}
      <section className="section-padding bg-text-primary text-white overflow-hidden relative">
        <div className="container-custom">
           <div className="text-center mb-20">
              <h2 className="text-4xl font-display font-black mb-6">Built for the Next 30 Years.</h2>
              <p className="text-white/60 max-w-2xl mx-auto">We don't design for the invoice; we design for the operation. Our QA team operates independently of production targets.</p>
           </div>
           
           <div className="flex flex-col lg:flex-row gap-px bg-white/10 border border-white/10 rounded-[3rem] overflow-hidden">
              {[
                { title: 'In-Sourcing', labs: 'Raw Material QA' },
                { title: 'Extrusion', labs: 'Structural Testing' },
                { title: 'Finishing', labs: 'Corrosion Resistance' },
                { title: 'Assembly', labs: 'Final Product QA' }
              ].map((step, i) => (
                <div key={i} className="flex-1 p-10 hover:bg-white/10 transition-colors">
                  <div className="text-brand-primary font-black mb-4 flex items-center gap-2">
                    <span className="text-2xl">0{i+1}</span>
                    <div className="h-0.5 w-10 bg-brand-primary/30" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                  <p className="text-white/50 text-xs uppercase tracking-widest">{step.labs}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsQuality;
