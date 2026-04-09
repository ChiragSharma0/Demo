import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Layers, Cog, Zap, Layout, Hammer, ArrowDown, ChevronRight, Download } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import { ProductCardGrid, ProductCardHorizontal } from '../components/ui/ProductCard';

const categories = [
  { id: 'all', name: 'All Products', icon: Layout },
  { id: 'panels', name: 'Solar Panels', icon: Sun },
  { id: 'mounting', name: 'Mounting Systems', icon: Layers },
  { id: 'electrical', name: 'Electrical/DC', icon: Zap },
  { id: 'kits', name: 'Rooftop Kits', icon: Cog },
];

const productsData = [
  {
    id: 1,
    category: 'panels',
    title: 'Titan SF-500 N-Type',
    desc: 'Bifacial high-efficiency monocrystalline module for industrial applications.',
    icon: Sun,
    specs: [{ label: 'Power', value: '500W' }, { label: 'Eff', value: '22.8%' }]
  },
  {
    id: 2,
    category: 'mounting',
    title: 'RailForge XR-20',
    desc: 'Heavy-duty anodized aluminum support rails with integrated cable channels.',
    icon: Layers,
    specs: [{ label: 'Span', value: '3.2m' }, { label: 'Load', value: '180kg/m' }]
  },
  {
    id: 3,
    category: 'electrical',
    title: 'HyperLink Junction Box',
    desc: 'IP68 rated protection unit with Bypass Diodes and integrated thermal management.',
    icon: Zap,
    specs: [{ label: 'IP Rating', value: 'IP68' }, { label: 'Amps', value: '30A' }]
  },
  {
    id: 4,
    category: 'mounting',
    title: 'QuickClamp L-Foot',
    desc: 'Universal mounting attachment with EPDM waterproofing and single-bolt installation.',
    icon: Hammer,
    specs: [{ label: 'Height', value: '80mm' }, { label: 'Adjustable', value: 'Yes' }]
  },
  {
    id: 5,
    category: 'kits',
    title: 'UniRoof Resi-Kit',
    desc: 'Pre-engineered components for residential asphalt shingle rooftops.',
    icon: Cog,
    specs: [{ label: 'Panels', value: '12-24' }, { label: 'Cert', value: 'UL-2703' }]
  },
  {
    id: 6,
    category: 'electrical',
    title: 'MasterLink DC Cable',
    desc: 'High-grade 6mm² cross-linked polyolefin insulated DC solar cable with UV protection.',
    icon: Zap,
    specs: [{ label: 'Gauge', value: '10 AWG' }, { label: 'Temp', value: '120°C' }]
  }
];

const Products = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProducts = activeTab === 'all' 
    ? productsData 
    : productsData.filter(p => p.category === activeTab);

  return (
    <div className="bg-white">
      <PageHero 
        badge="Product Ecosystem"
        title="Industrial Grade Solar Components"
        subtitle="Explore our comprehensive catalog of high-performance hardware engineered for the most demanding solar installations."
        breadcrumb="Products"
      />

      {/* Category Navigation */}
      <section className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 py-6">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${
                  activeTab === cat.id 
                  ? 'bg-brand-primary text-white shadow-xl shadow-brand-primary/20' 
                  : 'bg-bg-secondary text-text-secondary hover:bg-gray-100 border border-transparent'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Spotlight - Asymmetrical */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 relative">
               <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-bg-secondary rounded-[3rem] p-4 border border-gray-100 relative overflow-hidden group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1548333293-4a1c773950fb?auto=format&fit=crop&q=80&w=2070" 
                  alt="Featured Product" 
                  className="w-full h-[500px] object-cover rounded-[2.5rem] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-10 left-10 py-2 px-6 bg-brand-primary text-white text-xs font-black uppercase tracking-[0.2em] rounded-full shadow-lg">
                  New Release 2026
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5 px-6 lg:px-0">
              <span className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4 block">Power Generation</span>
              <h2 className="text-4xl md:text-5xl font-display font-black text-text-primary mb-6 leading-tight">
                Titan SF-600 Ultra <br />Bifacial Series
              </h2>
              <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                The pinnacle of solar module engineering. Achieving record-breaking 23.1% module efficiency with G12 large-format silicon wafers and multi-busbar technology.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  'Zero LID/LeTID degradation technology',
                  'Optimized for bifacial gain up to 25%',
                  'Advanced glass-glass structure for lifespan',
                  'PID resistance guaranteed for 30 years'
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-center text-sm font-medium text-text-primary">
                    <div className="w-5 h-5 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary"><ChevronRight className="w-3 h-3" /></div>
                    {item}
                  </div>
                ))}
              </div>
              
              <button className="flex items-center gap-3 text-text-primary font-bold hover:text-brand-primary transition-colors">
                Deep Dive Technology <ArrowDown className="w-5 h-5 animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mixed Product Layouts */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-custom">
          <SectionHeader 
            badge="Full Catalog"
            title="Component Families"
            subtitle="Engineered to work together. Our components are pre-validated as systems to reduce onsite troubleshooting."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProductCardGrid 
                    title={product.title}
                    category={product.category.toUpperCase()}
                    description={product.desc}
                    icon={product.icon}
                    specs={product.specs}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Horizontal Highlight */}
          <div className="space-y-8">
            <ProductCardHorizontal 
              title="Full Solution: Industrial Rooftop Kit"
              category="Complete Systems"
              description="A bundled package containing panels, rails, clamps, and junction boxes pre-configured for large-scale warehouse roof profiles including metal trim and Kliplok systems."
              icon={Cog}
            />
          </div>
        </div>
      </section>

      {/* Technical Download CTA */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/5 opacity-50" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-display font-black text-text-primary mb-8">
              Access The Full Engineering Spec Library
            </h2>
            <p className="text-text-secondary text-lg mb-12">
              Need CAD files, warranty certificates, or detailed mechanical drawings? Access our partner portal or download the complete technical catalog.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-10 py-5 bg-brand-primary text-white rounded-2xl font-bold flex items-center gap-3 shadow-xl shadow-brand-primary/30">
                <Download className="w-5 h-5" /> Download Full Catalog (42MB)
              </button>
              <button className="px-10 py-5 bg-text-primary text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-brand-primary transition-all">
                Access Dealer Portal
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
