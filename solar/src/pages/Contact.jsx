import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import { Mail, Phone, MapPin, Send, MessageSquare, ChevronDown, CheckCircle } from 'lucide-react';

const FAQ = [
  { q: "What is the typical lead time for utility-scale orders?", a: "Lead times vary by region and volume, but typically range from 12 to 24 weeks including ocean freight and logistical staging." },
  { q: "Do you offer on-site installation services?", a: "Vanguard Solar primarily operates as a manufacturer. However, we have a global network of Certified Installation Partners and provide on-site technical supervisors for commissioning." },
  { q: "Are your products compliant with local grid codes?", a: "Yes, our BOS components and inverter-syncing modules are certified for all major global grid codes including IEEE, EN, and local regional standards." },
  { q: "What is the process for custom mounting structures?", a: "Our engineering team requires terrain data (DEM) and local wind/snow load requirements. We typically provide a structural design proposal within 10 business days." }
];

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => {
      setFormState('success');
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen"
    >
      <SEO title="Contact Global HQ" description="Connect with our technical sales team or engineering division for your next solar project." />

      <section className="section-padding">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Info Side */}
          <div className="space-y-16">
            <SectionHeading 
              badge="Connect With Us"
              title="Building the Future of Energy"
              subtitle="Whether you have a technical query or a multi-GW project proposal, our global team is ready to assist."
              light
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="space-y-6">
                 <div className="w-12 h-12 rounded-2xl bg-solar-500/10 flex items-center justify-center text-solar-500">
                    <Phone size={24} />
                 </div>
                 <h4 className="text-white font-bold uppercase tracking-tight">Call Us</h4>
                 <p className="text-slate-500 text-sm">International Support Line</p>
                 <p className="text-white font-display font-medium">+91 (80) 4567 8900</p>
               </div>
               <div className="space-y-6">
                 <div className="w-12 h-12 rounded-2xl bg-solar-500/10 flex items-center justify-center text-solar-500">
                    <Mail size={24} />
                 </div>
                 <h4 className="text-white font-bold uppercase tracking-tight">Email Us</h4>
                 <p className="text-slate-500 text-sm">General Inquiries</p>
                 <p className="text-white font-display font-medium">contact@vanguard-solar.com</p>
               </div>
            </div>

            <div className="glass-card p-10 border-white/5 space-y-8">
               <div className="flex gap-6">
                 <MapPin className="text-solar-500 shrink-0" size={24} />
                 <div>
                   <h4 className="text-white font-bold mb-2 uppercase tracking-tight">Global Headquarters</h4>
                   <p className="text-slate-400 text-sm leading-relaxed">
                     Industrial Tech Park, Phase IV,<br />
                     Electronic City, Bangalore, India - 560100
                   </p>
                 </div>
               </div>
               <div className="h-[1px] bg-white/5"></div>
               <div className="flex gap-6">
                 <MessageSquare className="text-solar-500 shrink-0" size={24} />
                 <div>
                   <h4 className="text-white font-bold mb-2 uppercase tracking-tight">Technical Support</h4>
                   <p className="text-slate-400 text-sm leading-relaxed">
                     24/7 Monitoring & Post-Sales Support Available to Partners.
                   </p>
                 </div>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="relative">
             <div className="glass-card p-10 md:p-16 border-white/5 relative z-10">
               <AnimatePresence mode="wait">
                 {formState === 'success' ? (
                   <motion.div 
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     className="text-center py-20 space-y-6"
                   >
                     <div className="w-20 h-20 rounded-full bg-solar-500/20 flex items-center justify-center mx-auto mb-8 text-solar-500">
                        <CheckCircle size={48} />
                     </div>
                     <h3 className="text-3xl font-display font-bold text-white">Message Received</h3>
                     <p className="text-slate-400">Our regional specialist will contact you within 24 hours.</p>
                     <button 
                       onClick={() => setFormState('idle')}
                       className="btn-secondary mt-8"
                     >
                       Send another message
                     </button>
                   </motion.div>
                 ) : (
                   <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-8"
                   >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                           <label className="text-[10px] text-slate-500 uppercase tracking-widest font-black ml-1">Full Name</label>
                           <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-solar-500/50" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] text-slate-500 uppercase tracking-widest font-black ml-1">Company</label>
                           <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-solar-500/50" />
                        </div>
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] text-slate-500 uppercase tracking-widest font-black ml-1">Email Address</label>
                         <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-solar-500/50" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] text-slate-500 uppercase tracking-widest font-black ml-1">Project Type</label>
                         <select className="w-full bg-navy-900 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-solar-500/50 appearance-none cursor-pointer">
                            <option>Utility-Scale (10MW+)</option>
                            <option>Commercial Rooftop</option>
                            <option>Industrial Microgrid</option>
                            <option>Custom Manufacturing</option>
                            <option>Residential Partnership</option>
                         </select>
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] text-slate-500 uppercase tracking-widest font-black ml-1">Message</label>
                         <textarea rows="5" required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-solar-500/50 resize-none"></textarea>
                      </div>
                      <button 
                        type="submit" 
                        disabled={formState === 'sending'}
                        className="btn-primary w-full py-5 text-sm uppercase tracking-widest disabled:opacity-50"
                      >
                        {formState === 'sending' ? 'Transmitting...' : 'Initiate Contact'}
                        {formState !== 'sending' && <Send size={16} className="ml-2" />}
                      </button>
                   </motion.form>
                 )}
               </AnimatePresence>
             </div>
             {/* Glow Accent */}
             <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-solar-500/10 blur-[120px] rounded-full -z-10"></div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            title="Common Inquiries"
            subtitle="Rapid answers to frequently asked technical and commercial questions."
            light
            center
          />
          <div className="space-y-4">
            {FAQ.map((item, i) => (
              <AccordionItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`glass-card border-white/5 transition-all ${isOpen ? 'border-solar-500/20' : ''}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 flex items-center justify-between text-left"
      >
        <h4 className="text-white font-bold text-lg pr-8">{question}</h4>
        <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-solar-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown size={18} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-8 mx-8">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
