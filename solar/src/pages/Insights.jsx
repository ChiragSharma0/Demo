import { motion } from 'framer-motion';
import { INSIGHTS } from '../data/mockData';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

const Insights = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen"
    >
      <SEO title="Insights & Research" description="Technical articles, industry analysis, and corporate updates from the world of Vanguard Solar." />

      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading 
            badge="Knowledge base"
            title="Energy Insights"
            subtitle="Expert perspectives on material science, grid stability, and the global solar economy."
            light
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
             {/* Main Featured */}
             <div className="lg:col-span-8">
                <div className="grid grid-cols-1 gap-12">
                  {INSIGHTS.map((post) => (
                    <motion.article 
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="glass-card overflow-hidden flex flex-col md:flex-row group border-white/5 hover:border-solar-500/20 transition-all"
                    >
                      <div className="md:w-2/5 aspect-video md:aspect-auto overflow-hidden relative">
                         <img src={`https://images.unsplash.com/photo-1548222606-6c4f581fd09d?auto=format&fit=crop&q=80&w=800`} alt={post.title} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 transition-all duration-700" />
                         <div className="absolute top-6 left-6 p-2 px-3 bg-solar-500 rounded text-navy-950 text-[10px] font-black uppercase tracking-widest">{post.category}</div>
                      </div>
                      <div className="md:w-3/5 p-10 flex flex-col">
                        <div className="flex items-center gap-6 mb-4 text-[10px] text-slate-500 uppercase tracking-widest font-black">
                           <span className="flex items-center gap-2"><Calendar size={12} className="text-solar-500" /> {post.date}</span>
                           <span className="flex items-center gap-2"><User size={12} /> Tech Team</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-solar-500 transition-colors uppercase tracking-tight">{post.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                          {post.excerpt}
                        </p>
                        <Link to={`/insights/${post.slug}`} className="btn-secondary group px-6 self-start text-xs font-bold uppercase tracking-widest py-3">
                          Full Analysis
                          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.article>
                  ))}
                </div>
             </div>

             {/* Sidebar */}
             <aside className="lg:col-span-4 space-y-12">
                <div className="glass-card p-10 border-white/5">
                   <h4 className="text-white font-bold mb-6 uppercase tracking-tight">Search Insights</h4>
                   <div className="relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                      <input type="text" placeholder="Keywords..." className="w-full bg-navy-900 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-solar-500/50" />
                   </div>
                </div>

                <div className="glass-card p-10 border-white/5">
                   <h4 className="text-white font-bold mb-8 uppercase tracking-tight">Categories</h4>
                   <ul className="space-y-4">
                     {['Technology', 'Market Trends', 'Case Studies', 'Corporate', 'Sustainability'].map((cat) => (
                       <li key={cat}>
                          <button className="flex items-center justify-between w-full group text-sm font-medium text-slate-400 hover:text-white transition-colors">
                            <span>{cat}</span>
                            <span className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center text-[10px] group-hover:bg-solar-500 group-hover:text-navy-950 transition-colors">12</span>
                          </button>
                       </li>
                     ))}
                   </ul>
                </div>

                <div className="glass-card p-10 bg-gradient-to-br from-solar-500/10 to-transparent border-solar-500/30">
                   <h4 className="text-white font-bold mb-4 uppercase tracking-tight">Technical Digest</h4>
                   <p className="text-slate-400 text-xs leading-relaxed mb-8">Get the latest whitepapers and engineering updates delivered to your inbox.</p>
                   <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-solar-500/50 mb-4 text-sm" />
                   <button className="btn-primary w-full text-xs py-4 uppercase tracking-widest">Subscribe</button>
                </div>
             </aside>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Insights;
