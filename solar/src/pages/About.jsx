import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import { Target, Users, Landmark, Award, Globe, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen"
    >
      <SEO title="About Our Mission" description="Driving the global energy transition through precision manufacturing and technological innovation. Learn about our vision, values, and leadership." />

      {/* Narrative Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5"></div>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <SectionHeading 
              badge="Our Identity"
              title="Architecting the Post-Carbon World"
              subtitle="Founded on the belief that energy security and sustainability are the twin pillars of future global prosperity."
              light
            />
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                Vanguard Solar began in 2018 as a specialized research hub for high-efficiency cell coatings. Today, we have evolved into a vertically integrated manufacturing powerhouse, overseeing every stage of the solar value chain.
              </p>
              <p>
                Our philosophy is simple: **Technical Integrity.** We don't just manufacture components; we engineer ecosystems where each rail, wire, and cell works in perfect thermodynamic harmony to squeeze every possible milliwatt from the sun.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" className="rounded-3xl h-64 w-full object-cover grayscale opacity-50" />
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" className="rounded-3xl h-64 w-full object-cover mt-12 grayscale opacity-50" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-solar-500/20 blur-[60px] rounded-full -z-10"></div>
          </div>
        </div>
      </section>

      {/* Vision/Values Grid */}
      <section className="section-padding bg-navy-950/50">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading 
            title="Core Principles"
            subtitle="The invisible forces that guide our engineering and partnerships."
            light
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Technical Integrity', desc: 'Refusing to compromise on material specifications or testing protocols.', icon: Target },
              { title: 'Local Empowerment', desc: 'Building manufacturing hubs that create skilled technical jobs in local markets.', icon: Users },
              { title: 'Sustainable Supply', desc: 'Ensuring our own manufacturing carbon footprint is minimized through 100% RE usage.', icon: Globe },
              { title: 'R&D Obsession', desc: 'Investing 12% of annual revenue back into cell technology and material science.', icon: Award },
              { title: 'Operational Safety', desc: 'Zero-harm workplace goal across all our global manufacturing sites.', icon: Briefcase },
              { title: 'Long-term Visibility', desc: '30-year guarantees backed by stable financial reserves and tier-1 bankability.', icon: Landmark },
            ].map((item, i) => (
              <div key={i} className="glass-card p-12 border-white/5 group hover:border-solar-500/30 transition-all">
                <item.icon size={32} className="text-solar-500 mb-8" />
                <h4 className="text-xl font-display font-bold text-white mb-4 uppercase tracking-tight">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Timeline Placeholder */}
      <section className="section-padding">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading 
            badge="Our Journey"
            title="Evolution of Vanguard"
            subtitle="From a startup lab to a multi-GW global manufacturer."
            light
          />
          <div className="space-y-12 relative">
             <div className="absolute left-0 lg:left-1/2 top-0 h-full w-[1px] bg-white/10 -translate-x-1/2 hidden lg:block"></div>
             {[
               { year: '2018', title: 'The Lab Foundation', desc: 'Research team formed in Berlin focus on TOPCon coatings.' },
               { year: '2020', title: 'First Giga Facility', desc: 'Commissioning of the first 500MW automated panel facility.' },
               { year: '2022', title: 'Global Expansion', desc: 'Entry into MENA and North American markets with EPC support.' },
               { year: '2024', title: 'N-Type Domination', desc: 'Transitioning 100% of production to high-efficiency N-Type cells.' },
               { year: '2026', title: 'Vertical Integration', desc: 'Opening in-house aluminum and cable manufacturing units.' }
             ].map((milestone, i) => (
               <div key={i} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                 <div className="lg:w-1/2 flex justify-end">
                    <div className={`glass-card p-10 border-white/5 w-full max-w-md ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <h4 className="text-solar-500 font-display font-black text-3xl mb-2">{milestone.year}</h4>
                      <h5 className="text-white font-bold text-lg mb-4">{milestone.title}</h5>
                      <p className="text-sm text-slate-500">{milestone.desc}</p>
                    </div>
                 </div>
                 <div className="hidden lg:block w-4 h-4 rounded-full bg-solar-500 z-10 shadow-[0_0_20px_rgba(245,158,11,0.5)]"></div>
                 <div className="lg:w-1/2"></div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-solar-500">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-navy-950 text-4xl md:text-5xl font-display font-black uppercase tracking-tighter mb-8 italic">Let's build a brighter future together.</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="px-10 py-4 bg-navy-950 text-white font-bold rounded-full hover:bg-white hover:text-navy-950 transition-all uppercase tracking-widest text-xs">Partner with Us</Link>
              <Link to="/careers" className="px-10 py-4 border-2 border-navy-950 text-navy-950 font-bold rounded-full hover:bg-navy-950 hover:text-white transition-all uppercase tracking-widest text-xs">View Careers</Link>
            </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
