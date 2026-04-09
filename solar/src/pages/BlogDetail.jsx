import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { INSIGHTS } from '../data/mockData';
import SEO from '../components/common/SEO';
import { ArrowLeft, Calendar, User, Share2, Bookmark } from 'lucide-react';
import NotFound from './NotFound';

const BlogDetail = () => {
  const { slug } = useParams();
  const post = INSIGHTS.find(p => p.slug === slug);

  if (!post) return <NotFound />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen"
    >
      <SEO title={post.title} description={post.excerpt} />

      <article className="max-w-4xl mx-auto px-6 py-20 pb-32">
         <Link to="/insights" className="flex items-center gap-2 text-solar-500 mb-12 font-bold uppercase tracking-widest text-xs group">
           <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
           Back to Insights
         </Link>

         <div className="flex items-center gap-6 mb-8 text-[10px] text-slate-500 uppercase tracking-widest font-black">
            <span className="flex items-center gap-2 text-solar-500">{post.category}</span>
            <span className="flex items-center gap-2"><Calendar size={12} /> {post.date}</span>
            <span className="flex items-center gap-2"><User size={12} /> Tech Team</span>
         </div>

         <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-12 uppercase tracking-tight leading-[1.1]">
           {post.title}
         </h1>

         <div className="aspect-video rounded-3xl overflow-hidden mb-16 relative group">
           <img src={`https://images.unsplash.com/photo-1548222606-6c4f581fd09d?auto=format&fit=crop&q=80&w=1200`} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 transition-all duration-1000" />
           <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent"></div>
         </div>

         <div className="flex flex-col md:flex-row gap-16 relative">
            <aside className="md:w-16 flex flex-row md:flex-col gap-6 md:sticky md:top-32 h-fit">
               <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-solar-500 hover:border-solar-500/30 transition-all">
                 <Share2 size={18} />
               </button>
               <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-solar-500 hover:border-solar-500/30 transition-all">
                 <Bookmark size={18} />
               </button>
            </aside>

            <div className="flex-grow space-y-8 text-slate-300 text-lg leading-relaxed font-light">
               <p className="text-white font-bold text-2xl leading-relaxed italic mb-12">
                 "{post.excerpt}"
               </p>
               <p>
                 Photovoltaic technology is currently undergoing a massive generational shift. For years, PERC (Passivated Emitter and Rear Cell) technology was the industry standard, providing a reliable balance of cost and efficiency. However, as we approach the physical limits of PERC efficiency, N-type technologies—specifically TOPCon (Tunnel Oxide Passivated Contact)—are taking the lead.
               </p>
               <h3 className="text-2xl font-bold text-white pt-8 uppercase tracking-tight">The TOPCon Advantage</h3>
               <p>
                 Vanguard Solar has invested heavily in optimizing the tunneling oxide layers that define TOPCon performance. By reducing electron recombination at the contact points, our modules achieve higher open-circuit voltages (Voc) and significantly better performance in high-temperature environments.
               </p>
               <div className="glass-card p-10 border-solar-500/20 my-12 bg-solar-500/5">
                 <h4 className="text-white font-bold mb-4 uppercase tracking-tighter">Key Technical Metric</h4>
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                   <div>
                     <p className="text-solar-500 font-display font-black text-3xl">-0.29%/°C</p>
                     <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Temp. Coeff. (Pmax)</p>
                   </div>
                   <div>
                     <p className="text-solar-500 font-display font-black text-3xl">23.1%</p>
                     <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Cell Efficiency</p>
                   </div>
                   <div>
                     <p className="text-solar-500 font-display font-black text-3xl">85%</p>
                     <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Bifaciality Factor</p>
                   </div>
                 </div>
               </div>
               <p>
                 Looking ahead, the integration of TOPCon cells into bifacial glass-on-glass architectures provides the best long-term ROI for utility developers. At Vanguard, we are already testing the next frontier: Perovskite tandem cells that layer onto our existing N-type foundations to aim for efficiency beyond 28%.
               </p>
            </div>
         </div>
         
         <div className="mt-24 pt-24 border-t border-white/5 text-center">
           <h4 className="text-white font-display font-bold text-2xl mb-8 uppercase tracking-tight">Deepen your technical knowledge</h4>
           <Link to="/products" className="btn-primary inline-flex">Explore our Technical Catalog</Link>
         </div>
      </article>
    </motion.div>
  );
};

export default BlogDetail;
