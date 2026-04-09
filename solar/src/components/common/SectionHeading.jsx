import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, badge, light = false, center = false }) => {
  return (
    <div className={`mb-16 md:mb-24 ${center ? 'text-center mx-auto' : ''}`}>
      {badge && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block py-1 px-3 rounded-full bg-solar-500/10 border border-solar-500/30 text-solar-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-6"
        >
          {badge}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={`text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 ${light ? 'text-white' : 'text-slate-900'}`}
      >
        {title}
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className={`text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-slate-400' : 'text-slate-600'}`}
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

export default SectionHeading;
