import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';
import Manufacturing from '../pages/Manufacturing';
import Solutions from '../pages/Solutions';
import Projects from '../pages/Projects';
import ProjectDetail from '../pages/ProjectDetail';
import QualityCertifications from '../pages/QualityCertifications';
import ResearchInnovation from '../pages/ResearchInnovation';
import Careers from '../pages/Careers';
import Contact from '../pages/Contact';
import Insights from '../pages/Insights';
import BlogDetail from '../pages/BlogDetail';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:slug" element={<ProductDetail />} />
      <Route path="/manufacturing" element={<Manufacturing />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="/quality-certifications" element={<QualityCertifications />} />
      <Route path="/research-innovation" element={<ResearchInnovation />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/insights/:slug" element={<BlogDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
