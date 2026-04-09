import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Factory, Recycle, Award, Cpu } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';

const About = () => {
  return (
    <div className="bg-white">
      <PageHero 
        badge="Engineering Excellence"
        title="Manufacturing Tomorrow's Energy"
        subtitle="Since 2012, we've focused on one mission: making solar deployment faster, stronger, and more efficient through precision-engineered components."
        breadcrumb="About Us"
      />

      {/* Brand Story - Editorial Layout */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <SectionHeader 
                badge="Our Legacy"
                title="A Decade of Solar Innovation"
                subtitle="Founded in the heart of Silicon Valley's industrial corridor, SolarForged began as a boutique engineering firm solving complex mounting problems for utility-scale arrays."
              />
              <div className="prose prose-lg text-text-secondary">
                <p className="mb-6">
                  We quickly realized that the industry was being held back by generic, low-quality components that failed under extreme weather or increased project costs due to slow installation times.
                </p>
                <p className="mb-10 text-text-primary font-medium italic border-l-4 border-brand-primary pl-6">
                  "Our goal isn't just to make parts. It's to make the entire process of solar installation so seamless that it becomes the default for every roof on the planet."
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-3xl font-display font-black text-brand-primary mb-1">2012</div>
                    <div className="text-xs uppercase font-bold tracking-widest">Founded</div>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-black text-brand-primary mb-1">500k+</div>
                    <div className="text-xs uppercase font-bold tracking-widest">Units Shipped</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2070" 
                  alt="Engineering Team" 
                  className="w-full h-[600px] object-cover"
                />
              </motion.div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities - Grid with depth */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-custom">
          <SectionHeader 
            badge="Infrastructure"
            title="Manufacturing at Scale"
            subtitle="Our vertically integrated manufacturing facility combines automated robotics with manual quality inspections to ensure every component exceeds global standards."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Factory, 
                title: 'High-Scale Extrusion', 
                desc: 'Specialized aluminum extrusion lines capable of producing 15km of solar rails daily.',
                stats: '15km / Day' 
              },
              { 
                icon: Cpu, 
                title: 'Robotic Assembly', 
                desc: 'Fully automated junction box assembly ensuring IP68 seal consistency across every unit.',
                stats: '99.9% Precision' 
              },
              { 
                icon: Award, 
                title: 'Materials Lab', 
                desc: 'In-house testing for tensile strength, UV degradation, and chemical resistance.',
                stats: '24/7 Testing' 
              }
            ].map((cap, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-bg-secondary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <cap.icon className="w-8 h-8 text-brand-primary group-hover:text-white transition-all" />
                </div>
                <h3 className="text-2xl font-display font-bold text-text-primary mb-4">{cap.title}</h3>
                <p className="text-text-secondary text-sm mb-8">{cap.desc}</p>
                <div className="mt-auto py-3 px-6 bg-brand-primary/5 rounded-full text-brand-primary font-bold text-xs uppercase tracking-widest">
                  {cap.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Sustainability */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-text-primary rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/20 -skew-x-12 translate-x-1/2" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeader 
                  badge="Commitment"
                  title="Sustainability Through Design"
                  subtitle="We believe clean energy shouldn't have a dirty supply chain. We prioritize 100% recyclable materials and carbon-neutral factory operations."
                />
                <div className="flex flex-wrap gap-8 mt-12">
                  <div className="flex gap-4 items-start">
                    <Recycle className="w-8 h-8 text-brand-primary" />
                    <div>
                      <h4 className="font-bold text-lg">Circular Product Life</h4>
                      <p className="text-white/60 text-sm">98% of our components are fully recyclable.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Vision', desc: 'To enable 100% renewable grid adoption through better hardware.' },
                  { title: 'Quality', desc: 'Zero defect tolerance in every production run.' },
                  { title: 'Agility', desc: 'Custom project engineering in under 72 hours.' },
                  { title: 'Partnership', desc: 'Long-term support for the entire lifespan of the array.' }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl">
                    <h5 className="font-bold text-brand-primary mb-2 italic">{item.title}</h5>
                    <p className="text-sm text-white/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
