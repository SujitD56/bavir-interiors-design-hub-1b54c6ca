import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If we have a hash in the URL (e.g. #/about)
    // Wait for the page to render
    const timer = setTimeout(() => {
      // In HashRouter, the hash might be like #/about
      // We need to extract 'about'
      const id = hash.startsWith('#/') ? hash.substring(2) : hash.substring(1);
      
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      } else if (!hash) {
        // If no hash, scroll to top on path change
        window.scrollTo(0, 0);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
};
