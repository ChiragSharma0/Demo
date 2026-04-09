import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ArrowRight, Zap, Layers, Box, Home as HomeIcon } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import { Link, useSearchParams } from 'react-router-dom';

const CATEGORIES = [
  { id: 'all', name: 'All Products', icon: null },
  { id: 'panels', name: 'Solar Panels', icon: Zap },
  { id: 'mounting', name: 'Mounting Systems', icon: Layers },
  { id: 'bos', name: 'Electrical BOS', icon: Box },
  { id: 'kits', name: 'Rooftop Kits', icon: HomeIcon },
];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get('cat') || 'all';
  
  const [activeCategory, setActiveCategory] = useState(initialCat);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = activeCategory === 'all' || 
        (activeCategory === 'panels' && product.category === 'Solar Panels') ||
        (activeCategory === 'mounting' && product.category === 'Mounting Structures') ||
        (activeCategory === 'bos' && product.category === 'Components') ||
        (activeCategory === 'kits' && product.category === 'Rooftop Kits');
      
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setSearchParams({ cat: catId });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen"
    >
      <SEO 
        title="Solar Innovation Portfolio" 
        description="Browse our range of high-efficiency solar panels, precision mounting systems, and electronic balance of system components."
      />

      {/* Header Section */}
      <section className="py-20 relative px-6 md:px-12 lg:px-24">
        <div className="absolute inset-0 bg-navy-950/50 -z-10"></div>
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading 
            badge="Innovation Portfolio"
            title="Integrated Solar Ecosystem"
            subtitle="Precision-engineered components designed to maximize energy yield and long-term durability in any environment."
            light
          />

          {/* Controls */}
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between mt-12">
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 border ${
                    activeCategory === cat.id 
                      ? 'bg-solar-500 text-navy-950 border-solar-500' 
                      : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/30'
                  }`}
                >
                  {cat.icon && <cat.icon size={14} />}
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input 
                type="text" 
                placeholder="Search components..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-solar-500/50 text-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section-padding">
        <div className="max-w-[1440px] mx-auto">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="glass-card overflow-hidden group border-white/5 hover:border-solar-500/30 transition-all flex flex-col"
                  >
                    <div className="aspect-[4/3] bg-navy-900 relative overflow-hidden">
                      <img 
                        src={`https://images.unsplash.com/photo-1548519047-3806a6955035?auto=format&fit=crop&q=80&w=800`} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                      />
                      <div className="absolute top-6 left-6">
                        <span className="px-3 py-1 bg-solar-500 text-navy-950 text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                          {product.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-solar-500 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3">
                        {product.description}
                      </p>
                      
                      <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                        <Link 
                          to={`/products/${product.slug}`}
                          className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest group/link"
                        >
                          Technical Specs
                          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/contact" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-solar-500 hover:text-navy-950 transition-all">
                          <Filter size={16} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-32 glass-card">
              <Search size={48} className="mx-auto mb-6 text-slate-600" />
              <h3 className="text-2xl font-display font-bold text-white mb-2">No components found</h3>
              <p className="text-slate-500">Try adjusting your filters or search query.</p>
              <button 
                onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                className="btn-secondary mt-8"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Manufacturing CTA */}
      <section className="section-padding bg-gradient-to-b from-transparent to-solar-500/5">
        <div className="max-w-[1440px] mx-auto glass-card p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-solar-500/10 blur-[100px] pointer-events-none"></div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">Need custom engineering?</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Our engineering team can design custom mounting structures and electrical components for unique project requirements. Let's build your energy future.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/contact" className="btn-primary">Connect with Engineers</Link>
              <Link to="/manufacturing" className="btn-secondary">Explore Facilities</Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Products;
