import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Layers, Box, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';

const CATEGORIES = [
  {
    title: 'Solar Panels',
    icon: Zap,
    desc: 'Bifacial N-Type TOPCon modules with up to 23.5% efficiency.',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e2?auto=format&fit=crop&q=80&w=1000',
    color: 'from-amber-500/20',
    link: '/products?cat=panels'
  },
  {
    title: 'Mounting Systems',
    icon: Layers,
    desc: 'Heavy-duty structures for ground, roof, and tracker deployments.',
    image: 'https://images.unsplash.com/photo-1594818378825-971fe23208df?auto=format&fit=crop&q=80&w=1000',
    color: 'from-blue-500/20',
    link: '/products?cat=mounting'
  },
  {
    title: 'Electrical BOS',
    icon: Box,
    desc: 'Premium Junction Boxes, MC4 Connectors, and DC Cables.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000',
    color: 'from-emerald-500/20',
    link: '/products?cat=bos'
  },
  {
    title: 'Rooftop Kits',
    icon: Home,
    desc: 'Integrated plug-and-play kits for residential and commercial use.',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=1000',
    color: 'from-purple-500/20',
    link: '/products?cat=kits'
  }
];

const CategoryGrid = () => {
  return (
    <section className="section-padding bg-navy-950">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <SectionHeading 
            badge="Innovation Portfolio"
            title="Engineered for Performance"
            subtitle="Explore our comprehensive range of solar components designed to work in harmony for maximum energy yield."
            light
          />
          <Link to="/products" className="btn-secondary hidden md:flex mb-12">
            View All Products
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[500px] overflow-hidden rounded-3xl border border-white/5"
            >
              <div className="absolute inset-0 z-0">
                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-40" />
                <div className={`absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent z-10`}></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10`}></div>
              </div>

              <div className="absolute inset-0 z-20 p-10 flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-auto group-hover:bg-solar-500 group-hover:text-navy-950 transition-all duration-500">
                  <cat.icon size={28} />
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl font-display font-bold text-white tracking-tight">{cat.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {cat.desc}
                  </p>
                  <Link 
                    to={cat.link}
                    className="flex items-center gap-2 text-white font-bold group/btn pt-4"
                  >
                    <span className="uppercase tracking-[0.2em] text-[10px]">Explore Category</span>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-navy-950 transition-all">
                      <ArrowUpRight size={14} />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
