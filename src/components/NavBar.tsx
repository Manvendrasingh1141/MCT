import gsap from "gsap";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function NavBar({ forceDarkText = false }: { forceDarkText?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle colors when scrolling past the hero section (viewport height)
      if (window.scrollY > window.innerHeight - 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveDark = forceDarkText || isScrolled;

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className={`backdrop-blur-md border rounded-full px-4 py-2 flex items-center justify-between w-full max-w-5xl transition-all duration-300 bg-transparent ${
        isActiveDark 
          ? 'border-sakura-primary/20 text-sakura-primary' 
          : 'border-sakura-base/30 text-sakura-base'
      }`}>
        <div className="pl-4 relative group cursor-pointer flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="https://res.cloudinary.com/ka8ice0a/image/upload/v1786980985/mct_logo.png" 
              alt="MCT Logo" 
              className="h-8 md:h-9 w-auto object-contain" 
            />
          </Link>
          <span className="absolute left-4 top-full mt-2 px-3 py-1.5 bg-sakura-primary/90 text-sakura-base text-[12px] font-sans font-normal tracking-normal rounded-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center shadow-sm pointer-events-none z-50">
            <span className="w-1.5 h-1.5 rounded-full bg-sakura-tertiary mr-2"></span>
            medcaretech
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 font-sans text-[16px] font-normal leading-[24px]">
          <Link to="/" className="hover:opacity-70 transition-opacity">Home</Link>
          <Link to="/product" className="hover:opacity-70 transition-opacity">Product</Link>
          <Link to="/about" className="hover:opacity-70 transition-opacity">About Us</Link>
          <Link to="/contact" className="hover:opacity-70 transition-opacity">Contact Us</Link>
        </div>

        <div className="pr-1">
          <Link 
            to="/order" 
            className={`relative overflow-hidden px-6 py-3 rounded-full font-sans text-[12px] font-bold tracking-[0.1em] uppercase flex items-center justify-center border ${
            isActiveDark
              ? 'border-sakura-primary text-sakura-primary'
              : 'border-sakura-base text-sakura-base'
            }`}
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget.querySelector('.hover-bg'), { scaleX: 1, transformOrigin: 'left', duration: 0.4, ease: 'power2.out' });
              gsap.to(e.currentTarget.querySelector('.hover-text'), { color: isActiveDark ? '#F9F6F0' : '#2D0A11', duration: 0.3 });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget.querySelector('.hover-bg'), { scaleX: 0, transformOrigin: 'right', duration: 0.4, ease: 'power2.out' });
              gsap.to(e.currentTarget.querySelector('.hover-text'), { clearProps: 'color', duration: 0.3 });
            }}
          >
            <div 
              className={`hover-bg absolute inset-0 scale-x-0 origin-left ${isActiveDark ? 'bg-sakura-primary' : 'bg-sakura-base'}`} 
            />
            <span className="hover-text relative z-10 pointer-events-none transition-colors duration-300">
              Let's Go
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
