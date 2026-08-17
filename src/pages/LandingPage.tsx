import { NavBar } from '../components/NavBar';
import { ScrollSection } from '../components/ScrollSection';
import { Footer } from '../components/Footer';
import EaseBandFeatures from '../components/EaseBandFeatures';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

export function LandingPage() {
  return (
    <div className="relative min-h-screen bg-sakura-base overflow-x-hidden">
      <NavBar />

      <div className="relative min-h-screen">
        <video 
          src="https://res.cloudinary.com/ka8ice0a/video/upload/v1786947224/hero.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
        <main className="relative z-10 flex flex-col items-center justify-end min-h-screen text-center px-4 pb-[20px]">
          <h1 className="font-serif italic text-[26px] md:text-[28px]  tracking-[-0.02em] text-sakura-base drop-shadow-md">
            Technology For Humanity
          </h1>
        </main>
      </div>

        {/* New Secondary Statement Section */}
        <section className="relative z-10 py-24 px-4 flex flex-col items-center text-center">
          <h2 className="gsap-fade-up font-supreme text-[32px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.2] tracking-[-0.02em] text-sakura-primary mb-6 max-w-6xl mx-auto">
            Thoughtful people. Meaningful <br />problems.
             <span className="inline-block align-middle w-[100px] md:w-[160px] h-[40px] md:h-[64px] rounded-full border border-1 mx-2 shadow-sm overflow-hidden relative">
              <video 
                src="https://res.cloudinary.com/ka8ice0a/video/upload/v1786947224/hero.mp4"  
                autoPlay 
                muted 
                loop 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </span><br/>Technology with purpose.
          </h2>

          <p className="gsap-fade-up font-sans text-[16px] md:text-[18px] font-normal mb-8  leading-[24px] md:leading-[28px] text-sakura-primary/80 max-w-2xl mx-auto">
            At MCT, we bring together curious minds, engineering, and empathy to turn real-world challenges into meaningful solutions. We build technology not simply for what it can do, but for the difference it can make in people’s lives.
          </p>

          <div className="gsap-fade-up flex justify-center items-center pl-4">
            {[
              "https://res.cloudinary.com/ka8ice0a/image/upload/v1786980672/Rohit_pnspxe.jpg",
              "https://res.cloudinary.com/ka8ice0a/image/upload/v1786980683/Ritika_zoomed_fmyjdb.jpg",
              "https://res.cloudinary.com/ka8ice0a/image/upload/v1786980699/Manvendra_vqdps2.jpg",
              "https://res.cloudinary.com/ka8ice0a/image/upload/v1786980683/Deva_Nandhan_R_D_Head_zoigy8.png",
              "https://res.cloudinary.com/ka8ice0a/image/upload/v1786980683/Sachin_Kumar_Nishad_Technical_zscpou.jpg"
            ].map((imgUrl, i) => (
              <img
                key={i}
                src={imgUrl}
                alt={`Team Member ${i + 1}`}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-sakura-base object-cover -ml-4 md:-ml-6 flex-shrink-0 relative shadow-sm cursor-pointer"
                style={{ zIndex: 5 - i }}
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, { scale: 1.15, zIndex: 20, duration: 0.3, ease: 'back.out(1.5)' });
                }}
                onMouseMove={(e) => {
                  const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
                  const centerX = left + width / 2;
                  const centerY = top + height / 2;
                  const moveX = (e.clientX - centerX) / 10;
                  const moveY = (e.clientY - centerY) / 10;
                  
                  gsap.to(e.currentTarget, { 
                    x: moveX, 
                    y: moveY, 
                    duration: 0.3, 
                    ease: "power2.out" 
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, { scale: 1, x: 0, y: 0, zIndex: 5 - i, duration: 0.3, ease: 'power2.out' });
                }}
              />
            ))}
          </div>
        </section>

      {/* GSAP Scrolling Card Section */}
      <ScrollSection />
      
      <EaseBandFeatures />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
