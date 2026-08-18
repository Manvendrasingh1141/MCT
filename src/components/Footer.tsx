import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="relative z-10 w-full bg-sakura-primary text-sakura-base pt-24 pb-12 px-4 md:px-12 lg:px-24 rounded-t-[40px] md:rounded-t-[60px] mt-12">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Brand & Description */}
        <div className="md:col-span-5 lg:col-span-6 flex flex-col space-y-6">
          <div className="font-serif text-[32px] md:text-[40px] font-bold tracking-widest text-sakura-base">
            MCT
          </div>
          <p className="font-sans text-[16px] md:text-[18px] leading-[28px] max-w-sm text-sakura-base/80">
            Medical-grade relief for menstrual pain. Designed with care, engineered for comfort.
          </p>
        </div>

        {/* Navigation */}
        <div className="md:col-span-3 lg:col-span-3 flex flex-col space-y-6">
          <h4 className="font-serif text-[20px] md:text-[24px] font-medium text-sakura-base">
            Navigation
          </h4>
          <nav className="flex flex-col space-y-4 font-sans text-[16px] font-normal text-sakura-base/80">
            <Link to="/" className="hover:text-sakura-tertiary transition-colors w-fit">Home</Link>
            <Link to="/learn-more" className="hover:text-sakura-tertiary transition-colors w-fit">Learn More</Link>
            <Link to="/shop" className="hover:text-sakura-tertiary transition-colors w-fit">Shop</Link>
            <Link to="/contact" className="hover:text-sakura-tertiary transition-colors w-fit">Contact</Link>
          </nav>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-4 lg:col-span-3 flex flex-col space-y-6">
          <h4 className="font-serif text-[20px] md:text-[24px] font-medium text-sakura-base">
            Get in Touch
          </h4>
          <div className="flex flex-col space-y-4 font-sans text-[16px] font-normal text-sakura-base/80">
            <a href="mailto:support.medcaretech@gmail.com" className="hover:text-sakura-tertiary transition-colors w-fit">
              support.medcaretech@gmail.com
            </a>
            <a href="mailto:products.medcaretech@gmail.com" className="hover:text-sakura-tertiary transition-colors w-fit">
              products.medcaretech@gmail.com
            </a>
            <a href="tel:8699715686" className="hover:text-sakura-tertiary transition-colors w-fit">
              8699715686
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-[1200px] mx-auto mt-24 pt-8 border-t border-sakura-base/20 flex flex-col md:flex-row items-center justify-between font-sans text-[12px] text-sakura-base/60">
        <p>&copy; {new Date().getFullYear()} MCT Medtech. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-sakura-tertiary transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-sakura-tertiary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
