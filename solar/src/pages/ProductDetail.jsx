import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../data/mockData';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import { ArrowLeft, Download, ShieldCheck, Zap, Globe, Cpu, Clock, CheckCircle2 } from 'lucide-react';
import NotFound from './NotFound';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = PRODUCTS.find(p => p.slug === slug);

  if (!product) return <NotFound />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen"
    >
      <SEO title={product.name} description={product.description} />

      {/* Breadcrumb & Navigation */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-8">
        <Link to="/products" className="flex items-center gap-2 text-slate-500 hover:text-solar-500 transition-colors group text-sm font-bold uppercase tracking-widest">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
      </div>

      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="glass-card aspect-square relative overflow-hidden flex items-center justify-center p-20 border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-solar-500/10 to-navy-950/50"></div>
              <img 
                src="https://images.unsplash.com/photo-1548519047-3806a6955035?auto=format&fit=crop&q=80&w=800" 
                alt={product.name} 
                className="w-full h-full object-contain relative z-10 drop-shadow-2xl grayscale" 
              />
              <div className="absolute top-10 right-10 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-solar-500">
                  <ShieldCheck size={24} />
                </div>
                <div className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-solar-500">
                  <Clock size={24} />
                </div>
              </div>
            </div>
            {/* Design accents */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-solar-500/10 blur-3xl -z-10 rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-solar-500 text-xs font-bold uppercase tracking-[0.3em]">{product.category}</span>
              <div className="h-[1px] w-12 bg-white/10"></div>
              <span className="text-slate-500 text-xs uppercase tracking-[0.3em]">{product.subCategory}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-8 leading-tight">
              {product.name}
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-10">
              {product.longDescription}
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-solar-500 shrink-0 mt-1" />
                  <span className="text-sm text-slate-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/contact" className="btn-primary flex-1">Request Quote</Link>
              <button className="btn-secondary flex-1">
                <Download size={18} />
                Download Datasheet
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Specifications Table */}
      <section className="section-padding bg-navy-950/30">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading 
            title="Technical Specifications"
            subtitle="Deep engineering data for planning and integration. Parameters tested under standard conditions (STC)."
            light
          />

          <div className="glass-card overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/5 bg-white/5">
                  <th className="px-8 py-6 text-xs uppercase tracking-widest text-solar-500 font-bold">Parameter</th>
                  <th className="px-8 py-6 text-xs uppercase tracking-widest text-slate-400 font-bold text-right">Metric Value</th>
                </tr>
              </thead>
              <tbody>
                {product.specs.map((spec, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="px-8 py-6 text-sm text-white font-medium">{spec.label}</td>
                    <td className="px-8 py-6 text-sm text-slate-400 text-right font-mono">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="section-padding">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Brochure', desc: 'Full product line & innovation catalog', size: '12 MB', type: 'PDF' },
            { title: 'Certification', desc: 'IEC & TUV Compliance Certificates', size: '2 MB', type: 'PDF' },
            { title: 'Installation Guide', desc: 'Step-by-step mechanical/electrical guide', size: '4 MB', type: 'PDF' },
          ].map((doc, i) => (
            <div key={i} className="glass-card p-10 group border-white/5 hover:border-solar-500/30 transition-all flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 text-solar-500 group-hover:scale-110 transition-transform">
                <Download size={24} />
              </div>
              <h4 className="text-xl font-display font-bold text-white mb-2">{doc.title}</h4>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-6">{doc.type} • {doc.size}</p>
              <p className="text-sm text-slate-400 leading-relaxed mb-8">{doc.desc}</p>
              <button className="text-white text-xs font-bold uppercase tracking-widest hover:text-solar-500 transition-colors flex items-center gap-2 mt-auto">
                Download Now <ArrowLeft size={14} className="rotate-[135deg]" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default ProductDetail;
