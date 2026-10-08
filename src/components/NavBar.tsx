import gsap from "gsap";
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function NavBar({ forceDarkText = false }: { forceDarkText?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isActiveDark = forceDarkText || isScrolled || isMobileMenuOpen;

  return (
    <>
      <div className="absolute top-4 left-0 right-0 z-50 flex justify-center px-4">
        <nav className={`backdrop-blur-md border rounded-full px-4 py-2 flex items-center justify-between w-full max-w-5xl transition-colors duration-300 ${
          isActiveDark || isMobileMenuOpen
            ? 'bg-sakura-base/90 border-sakura-primary/20 text-sakura-primary' 
            : 'bg-transparent border-sakura-base/30 text-sakura-base'
        }`}>
          <div className="pl-2 md:pl-4 relative group cursor-pointer flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://res.cloudinary.com/ka8ice0a/image/upload/v1786980985/mct_logo.png" 
                alt="MCT Logo" 
                className="h-7 md:h-9 w-auto object-contain" 
              />
            </Link>
            <span className="hidden md:flex absolute left-4 top-full mt-2 px-3 py-1.5 bg-sakura-primary/90 text-sakura-base text-[12px] font-sans font-normal tracking-normal rounded-md opacity-0 group-hover:opacity-100 transition-opacity items-center shadow-sm pointer-events-none z-50">
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

          <div className="flex items-center gap-3 pr-1 md:pr-1">
            <Link 
              to="/order" 
              className={`relative overflow-hidden px-4 md:px-6 py-2.5 md:py-3 rounded-full font-sans text-[11px] md:text-[12px] font-bold tracking-[0.1em] uppercase flex items-center justify-center border ${
              isActiveDark || isMobileMenuOpen
                ? 'border-sakura-primary text-sakura-primary'
                : 'border-sakura-base text-sakura-base'
              }`}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget.querySelector('.hover-bg'), { scaleX: 1, transformOrigin: 'left', duration: 0.4, ease: 'power2.out' });
                gsap.to(e.currentTarget.querySelector('.hover-text'), { color: isActiveDark || isMobileMenuOpen ? '#F9F6F0' : '#2D0A11', duration: 0.3 });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget.querySelector('.hover-bg'), { scaleX: 0, transformOrigin: 'right', duration: 0.4, ease: 'power2.out' });
                gsap.to(e.currentTarget.querySelector('.hover-text'), { clearProps: 'color', duration: 0.3 });
              }}
            >
              <div 
                className={`hover-bg absolute inset-0 scale-x-0 origin-left ${isActiveDark || isMobileMenuOpen ? 'bg-sakura-primary' : 'bg-sakura-base'}`} 
              />
              <span className="hover-text relative z-10 pointer-events-none transition-colors duration-300">
                Let's Go
              </span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden flex items-center justify-center p-2 rounded-full hover:bg-black/5 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X size={24} className={isActiveDark || isMobileMenuOpen ? 'text-sakura-primary' : 'text-sakura-base'} />
              ) : (
                <Menu size={24} className={isActiveDark || isMobileMenuOpen ? 'text-sakura-primary' : 'text-sakura-base'} />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-sakura-base pt-28 px-6 pb-6 flex flex-col">
          <div className="flex flex-col space-y-6 font-serif text-[28px] text-sakura-primary font-medium">
            <Link to="/" className="border-b border-sakura-primary/10 pb-4 active:text-sakura-secondary transition-colors">Home</Link>
            <Link to="/product" className="border-b border-sakura-primary/10 pb-4 active:text-sakura-secondary transition-colors">Product</Link>
            <Link to="/about" className="border-b border-sakura-primary/10 pb-4 active:text-sakura-secondary transition-colors">About Us</Link>
            <Link to="/contact" className="border-b border-sakura-primary/10 pb-4 active:text-sakura-secondary transition-colors">Contact Us</Link>
          </div>
          <div className="mt-auto flex flex-col space-y-4">
            <p className="font-sans text-[12px] text-sakura-primary/60 tracking-[0.2em] uppercase font-bold text-center">
              MCT MedTech
            </p>
          </div>
        </div>
      )}
    </>
  );
}
