import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Building, Users2, ChevronDown } from 'lucide-react';

const Contact = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const faqs = [
    { q: 'What is the standard lead time for bulk mounting rails?', a: 'Standard rails are usually shipped within 7-10 business days. Custom extrusions or black-anodized finishes might take 14-21 days depending on volume.' },
    { q: 'Do you offer engineering stamps for residential projects?', a: 'Yes, we provide PE-certified structural calculations and stamps for all 50 states for our pre-configured rooftop systems.' },
    { q: 'Are your components compatible with third-party rails?', a: 'While our clamps are designed for SolarForged RailForge series, we offer universal adapters for most standard T-slot rail profiles.' },
    { q: 'Do you provide onsite installation support?', a: 'We offer technical remote support and can provide onsite engineering oversight for utility-scale projects exceeding 5MW.' }
  ];

  return (
    <div className="bg-white">
      {/* Contact Hero */}
      <section className="relative pt-40 pb-20 bg-bg-secondary overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/5 -skew-x-12 translate-x-1/2" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
             <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-6 block"
            >
              Contact Our Team
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-black text-text-primary mb-8"
            >
              Let's Engineer Your <br />Next Project.
            </motion.h1>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
              Whether you need a custom OEM quote for 100k units or technical specs for a residential rooftop, our engineers are standing by.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding overflow-visible">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Contact Details */}
            <div className="lg:col-span-4 space-y-12">
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-bg-secondary rounded-2xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                    <Building className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Corporate Office</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      2900 Industrial Ave, <br />
                      Tech Hub East, CA 90210
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-bg-secondary rounded-2xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                    <Mail className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Project Inquiries</h4>
                    <p className="text-text-secondary text-sm">hello@solarforged.com</p>
                    <p className="text-text-secondary text-sm">quotes@solarforged.com</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-bg-secondary rounded-2xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                    <Phone className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Technical Support</h4>
                    <p className="text-text-secondary text-sm">+1 (555) 482-0192</p>
                    <p className="text-text-secondary text-sm">Mon-Fri: 8AM — 6PM PST</p>
                  </div>
                </div>
              </div>

              {/* Department Block */}
              <div className="p-8 bg-text-primary rounded-[2.5rem] text-white">
                <h4 className="font-bold text-xl mb-6">Partnerships</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm border-b border-white/10 pb-4">
                    <span className="text-white/60">International Sales</span>
                    <span className="font-bold">sales@solarforged.com</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-white/10 pb-4">
                    <span className="text-white/60">Distributor Program</span>
                    <span className="font-bold">join@solarforged.com</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/60">Press/Media</span>
                    <span className="font-bold">press@solarforged.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8 bg-white p-10 lg:p-16 rounded-[3.5rem] border border-gray-100 shadow-2xl relative -mt-32 z-20">
              <h3 className="text-3xl font-display font-black text-text-primary mb-10">Send a Detailed Inquiry</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-secondary ml-2">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-bg-secondary rounded-2xl border-2 border-transparent focus:border-brand-primary outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-secondary ml-2">Company Name</label>
                  <input type="text" placeholder="SolarTech Corp" className="w-full px-6 py-4 bg-bg-secondary rounded-2xl border-2 border-transparent focus:border-brand-primary outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-secondary ml-2">Email Address</label>
                  <input type="email" placeholder="john@company.com" className="w-full px-6 py-4 bg-bg-secondary rounded-2xl border-2 border-transparent focus:border-brand-primary outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-secondary ml-2">Project Type</label>
                  <select className="w-full px-6 py-4 bg-bg-secondary rounded-2xl border-2 border-transparent focus:border-brand-primary outline-none transition-all">
                    <option>Commercial Rooftop</option>
                    <option>Residential System</option>
                    <option>Utility Scale / OEM</option>
                    <option>Other / Components Only</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-secondary ml-2">Message / BOM Details</label>
                  <textarea rows="5" placeholder="Tell us about your project or include a list of components..." className="w-full px-6 py-4 bg-bg-secondary rounded-2xl border-2 border-transparent focus:border-brand-primary outline-none transition-all resize-none"></textarea>
                </div>
                <div className="md:col-span-2">
                  <button className="w-full py-5 bg-brand-primary text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition-all shadow-xl shadow-brand-primary/30">
                    <Send className="w-5 h-5" /> Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <motion.div className="inline-block p-3 bg-white rounded-2xl shadow-sm border border-gray-100 mb-6 text-brand-primary"><MessageSquare /></motion.div>
            <h2 className="text-4xl font-display font-black text-text-primary mb-4">Engineering FAQ</h2>
            <p className="text-text-secondary">Common questions regarding technical specifications and logistics.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`bg-white rounded-3xl border border-gray-100 overflow-hidden transition-all duration-300 ${activeFaq === i ? 'shadow-xl' : 'shadow-sm'}`}
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? -1 : i)}
                  className="w-full px-8 py-6 flex justify-between items-center text-left"
                >
                  <span className="font-bold text-text-primary">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeFaq === i ? 'rotate-180 text-brand-primary' : 'text-text-secondary'}`} />
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: activeFaq === i ? 'auto' : 0, opacity: activeFaq === i ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6 text-text-secondary text-sm border-t border-gray-50 pt-4 leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
