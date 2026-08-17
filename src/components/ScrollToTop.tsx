import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page immediately upon route change
    window.scrollTo(0, 0);

    // Provide a buttery smooth GSAP fade-in for the new page layout
    // This adds that premium visual feedback the user requested
    gsap.fromTo(
      '#root',
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: 'power2.out' }
    );

  }, [pathname]);

  return null;
}
