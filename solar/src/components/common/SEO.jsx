import { useEffect } from 'react';

const SEO = ({ title, description }) => {
  useEffect(() => {
    document.title = `${title} | Vanguard Solar`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || 'Vanguard Solar - Leading manufacturer of high-efficiency solar panels and systems.');
    }
  }, [title, description]);

  return null;
};

export default SEO;
