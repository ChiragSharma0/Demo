import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import { CERTIFICATIONS } from '../data/mockData';
import { FileText, CheckCircle, Shield, Globe } from 'lucide-react';

const QualityCertifications = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen"
    >
      <SEO title="Quality & Certifications" description="Vanguard Solar adheres to the highest international standards for PV safety and performance including IEC, TUV, and UL." />

      <section className="section-padding">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading 
            badge="Compliance & Trust"
            title="Certified Performance"
            subtitle="Our commitment to quality is validated by the world's leading testing laboratories and certification bodies."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-12 border-white/5 flex flex-col group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                  <Shield size={120} className="text-solar-500" />
                </div>
                
                <h3 className="text-4xl font-display font-black text-white mb-6 group-hover:text-solar-500 transition-colors">{cert.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-10">
                  {cert.description}
                </p>
                <div className="mt-auto flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/40">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-solar-500" />
                    Verified
                  </div>
                  <div className="flex items-center gap-2 hover:text-solar-500 transition-colors cursor-pointer">
                    <FileText size={14} />
                    View Certificate
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-950/50">
        <div className="max-w-[1440px] mx-auto text-center">
          <SectionHeading 
            title="Global Technical Compliance"
            subtitle="Ensuring seamless grid integration and safety across all major utility networks."
            light
            center
          />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['IEC 61215', 'IEC 61730', 'UL 1703', 'TUV SUD', 'VDE', 'JET', 'MCS', 'CE', 'ISO 9001', 'ISO 14001', 'ISO 45001', 'FIRE CLASS A'].map((label, i) => (
              <div key={i} className="py-8 glass-card border-white/5 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-solar-500 hover:border-solar-500/20 transition-all cursor-default">
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default QualityCertifications;
