import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useFadeUpAnimations() {
  const location = useLocation();

  useEffect(() => {
    // Wait a brief moment for the DOM to update after a route change
    const timeout = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Find all elements with the 'gsap-fade-up' class
        const elements = gsap.utils.toArray('.gsap-fade-up') as HTMLElement[];
        
        elements.forEach((el) => {
          gsap.fromTo(el, 
            { 
              y: 50, 
              opacity: 0 
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%", // Trigger when the top of the element is 85% down the viewport
                toggleActions: "play none none reverse", // Play forward on enter, reverse on leave back
              }
            }
          );
        });
      });

      return () => ctx.revert(); // Clean up on unmount or route change
    }, 100);

    return () => clearTimeout(timeout);
  }, [location.pathname]);
}
