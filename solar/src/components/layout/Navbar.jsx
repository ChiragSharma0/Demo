import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight, Sun, Globe } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { 
    name: 'Products', 
    path: '/products',
    submenu: [
      { name: 'Solar Panels', path: '/products?cat=panels' },
      { name: 'Mounting Systems', path: '/products?cat=mounting' },
      { name: 'Electrical BOS', path: '/products?cat=bos' },
      { name: 'Rooftop Kits', path: '/products?cat=kits' },
    ]
  },
  { name: 'Manufacturing', path: '/manufacturing' },
  { name: 'Projects', path: '/projects' },
  { name: 'Solutions', path: '/solutions' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[80] transition-all duration-500 ${scrolled ? 'py-4 glass-panel' : 'py-6 bg-transparent'}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-solar-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Sun className="w-6 h-6 text-navy-950" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-display font-black tracking-tighter text-white">VANGUARD</span>
            <span className="text-[10px] font-bold tracking-[.3em] text-solar-500 text-center -mt-1 leading-tight">SOLAR</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <div 
              key={link.name} 
              className="relative group py-2"
              onMouseEnter={() => link.submenu && setActiveSubmenu(link.name)}
              onMouseLeave={() => link.submenu && setActiveSubmenu(null)}
            >
              <Link 
                to={link.path}
                className={`text-sm font-semibold uppercase tracking-widest transition-colors flex items-center gap-1 ${location.pathname === link.path ? 'text-solar-500' : 'text-slate-300 hover:text-white'}`}
              >
                {link.name}
                {link.submenu && <ChevronDown className={`w-4 h-4 transition-transform ${activeSubmenu === link.name ? 'rotate-180' : ''}`} />}
              </Link>
              
              {/* Mega Menu Content */}
              {link.submenu && (
                <AnimatePresence>
                  {activeSubmenu === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] mt-2 glass-card p-8 grid grid-cols-2 gap-8 shadow-2xl"
                    >
                      <div className="col-span-1">
                        <h4 className="text-solar-500 text-xs font-bold uppercase tracking-widest mb-6">Categories</h4>
                        <div className="flex flex-col gap-4">
                          {link.submenu.map((sub) => (
                            <Link 
                              key={sub.name} 
                              to={sub.path}
                              className="group/item flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors"
                            >
                              <span className="text-slate-300 group-hover/item:text-white font-medium">{sub.name}</span>
                              <ArrowRight className="w-4 h-4 text-solar-500 opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all" />
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="col-span-1 bg-gradient-to-br from-solar-500/10 to-transparent rounded-xl p-6 border border-solar-500/20">
                        <h4 className="text-white text-sm font-bold mb-4">Featured Innovation</h4>
                        <p className="text-xs text-slate-400 leading-relaxed mb-6">
                          Explore our N-Type TOPCon Series with 23% efficiency and 30-year performance guarantee.
                        </p>
                        <Link to="/manufacturing" className="btn-primary py-2 text-xs">Learn More</Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="text-slate-300 hover:text-white">
            <Globe className="w-5 h-5" />
          </button>
          <Link to="/contact" className="btn-primary py-2.5 px-6 text-xs uppercase tracking-widest">
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-0 z-[90] bg-[#020617] lg:hidden flex flex-col p-10 pt-32"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  key={link.name}
                >
                  <Link 
                    to={link.path}
                    className="text-3xl font-display font-bold text-white hover:text-solar-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-auto pt-10 border-t border-white/10">
              <Link to="/contact" className="btn-primary w-full text-lg">
                Get a Quote
              </Link>
              <div className="mt-8 flex justify-center gap-8">
                <Globe className="w-6 h-6 text-slate-400" />
                <span className="text-slate-400">EN / DE / ES</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
