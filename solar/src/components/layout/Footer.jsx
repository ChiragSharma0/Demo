import { Link } from 'react-router-dom';
import { Sun, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Youtube, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#010413] pt-24 pb-12 overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-solar-500/30 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/5"></div>
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/5"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Company Info */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-solar-500 rounded-lg flex items-center justify-center">
                <Sun className="w-6 h-6 text-navy-950" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-black tracking-tighter text-white">VANGUARD</span>
                <span className="text-[10px] font-bold tracking-[.3em] text-solar-500 text-center -mt-1 leading-tight">SOLAR</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Pioneering the next generation of high-efficiency solar technology and integrated manufacturing ecosystems for a carbon-neutral future.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-solar-500 hover:text-navy-950 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Solutions</h4>
            <ul className="space-y-4">
              {['Utility Solar', 'Residential Kits', 'Commercial Rooftop', 'Industrial EPC', 'Custom Mounting'].map((item) => (
                <li key={item}>
                  <Link to="/solutions" className="text-slate-400 hover:text-solar-500 text-sm flex items-center gap-2 group">
                    {item}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-4">
              {['Technical Catalog', 'Project Portfolio', 'Manufacturing Process', 'Quality Certs', 'Careers', 'Insights'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-solar-500 text-sm flex items-center gap-2 group">
                    {item}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Global HQ</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-solar-500 shrink-0" size={20} />
                <p className="text-slate-400 text-sm">Industrial Tech Park, Silicon Valley South,<br />India - 560100</p>
              </div>
              <div className="flex gap-4">
                <Phone className="text-solar-500 shrink-0" size={20} />
                <p className="text-slate-400 text-sm">+91 (80) 4567 8900</p>
              </div>
              <div className="flex gap-4">
                <Mail className="text-solar-500 shrink-0" size={20} />
                <p className="text-slate-400 text-sm">contact@vanguard-solar.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] uppercase tracking-[.2em]">
            © {currentYear} VANGUARD SOLAR GLOBAL. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[.2em] text-slate-500">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
