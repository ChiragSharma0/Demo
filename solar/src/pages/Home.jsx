import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import CategoryGrid from '../components/sections/CategoryGrid';
import ProcessTimeline from '../components/sections/ProcessTimeline';
import { PROJECTS, INSIGHTS } from '../data/mockData';
import SectionHeading from '../components/common/SectionHeading';
import { ArrowBigRight, BarChart, Globe, Zap, ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-wrapper"
    >
      <Hero />
      
      {/* Impact Metrics Section */}
      <section className="py-24 bg-[#01030e] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5"></div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Gigawatts Deployed', value: '5.8+', icon: Zap },
              { label: 'Countries Served', value: '45+', icon: Globe },
              { label: 'Manufacturing Sites', value: '12', icon: BarChart },
              { label: 'Annual R&D Spend', value: '$45M+', icon: ArrowBigRight },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-solar-500/10 flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="text-solar-500" size={24} />
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-black text-white">{stat.value}</h3>
                <p className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CategoryGrid />
      <ProcessTimeline />

      {/* Featured Projects Preview */}
      <section className="section-padding bg-[#020617] relative">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading 
            badge="Case Studies"
            title="Global Installations"
            subtitle="Explore how Vanguard Solar is powering industries across continents with precision-engineered systems."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <div className="flex items-center gap-3 text-solar-500 mb-4 font-bold uppercase tracking-widest text-xs">
                    <span>{project.location}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-solar-500"></span>
                    <span>{project.capacity}</span>
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white mb-6 leading-tight max-w-md">{project.title}</h3>
                  <Link to={`/projects/${project.slug}`} className="btn-secondary py-2 px-6 text-xs inline-flex hover:bg-solar-500 hover:text-navy-950 hover:border-solar-500">
                    View Project Case
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights / Blog Preview */}
      <section className="section-padding bg-[#010413]">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading 
            badge="Research & Insights"
            title="The Future of Energy"
            subtitle="Expert analysis and technical updates from our research labs and industry experts."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INSIGHTS.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card flex flex-col p-8 group border-transparent hover:border-solar-500/30 transition-all duration-500"
              >
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-6 uppercase tracking-widest font-bold">
                  <span className="text-solar-500">{post.category}</span>
                  <span>/</span>
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-solar-500 transition-colors">{post.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">{post.excerpt}</p>
                <Link to={`/insights/${post.slug}`} className="mt-auto flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest group/link">
                  Read Article
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.article>
            ))}

            <div className="glass-card p-10 flex flex-col justify-center items-center text-center bg-gradient-to-br from-solar-500/5 to-transparent border-solar-500/20">
              <h4 className="text-xl font-display font-bold text-white mb-4">Stay Informed</h4>
              <p className="text-sm text-slate-400 mb-8">Subscribe to our monthly technical digest and industry reports.</p>
              <form className="w-full space-y-4">
                <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-solar-500/50" />
                <button type="button" className="btn-primary w-full py-3 text-sm uppercase tracking-widest">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Grid (Partial) */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <p className="text-xs text-slate-500 uppercase tracking-[0.3em] font-bold mb-12">Certified for Global Standards</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale group hover:grayscale-0 transition-all duration-700">
            {['TUV Rheinland', 'UL Safety', 'IEC Certified', 'ISO 9001', 'BloomberNEF Tier 1'].map((cert) => (
              <span key={cert} className="text-2xl font-display font-black text-white hover:text-solar-500 transition-colors cursor-default tracking-tighter">{cert}</span>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
