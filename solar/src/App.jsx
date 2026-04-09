import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingCTA from './components/ui/FloatingCTA';
import BackToTop from './components/ui/BackToTop';
import LoadingScreen from './components/ui/LoadingScreen';
import { useLoading } from './hooks/useLoading';

function App() {
  const { pathname } = useLocation();
  const { isLoading } = useLoading();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen bg-[#020617]">
      {/* Background Overlays */}
      <div className="fixed inset-0 z-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="fixed inset-0 z-0 bg-dots-pattern opacity-[0.05] pointer-events-none"></div>
      
      {/* Glow Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-solar-500/10 blur-[150px] -z-10 rounded-full"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-navy-500/10 blur-[150px] -z-10 rounded-full"></div>

      <Navbar />
      
      <main className="relative z-10 pt-20">
        <AnimatePresence mode="wait">
          <AppRoutes />
        </AnimatePresence>
      </main>

      <Footer />
      <FloatingCTA />
      <BackToTop />
    </div>
  );
}

export default App;
