import React, { useEffect, useRef } from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import gsap from 'gsap';

export function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        '.stagger-animate',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-sakura-base min-h-screen font-sans selection:bg-sakura-tertiary/30 flex flex-col" ref={containerRef}>
      <NavBar forceDarkText={true} />

      <main className="flex-grow pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-24 stagger-animate">
          <img 
            src="https://res.cloudinary.com/ka8ice0a/image/upload/v1786980985/mct_logo.png" 
            alt="MCT Logo" 
            className="h-16 md:h-20 w-auto object-contain mx-auto mb-8" 
          />
          <h1 className="font-sans text-[48px] md:text-[64px] text-sakura-primary leading-none tracking-wide mb-6">
            ABOUT US
          </h1>
          <div className="w-24 h-1 bg-sakura-secondary mx-auto"></div>
        </div>

        {/* Vision & Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 stagger-animate">
          <div className="bg-sakura-surface/30 p-10 md:p-14 rounded-[32px] border border-sakura-primary/10 shadow-sm">
            <h2 className="font-serif text-[32px] md:text-[40px] text-sakura-primary mb-6">Vision</h2>
            <p className="font-sans text-[16px] md:text-[18px] text-sakura-primary/80 leading-relaxed">
              To create a world where technology is accessible, meaningful, and designed around real human needs; empowering people to live healthier, more independent, and better lives through thoughtful innovation.
            </p>
          </div>
          <div className="bg-sakura-surface/30 p-10 md:p-14 rounded-[32px] border border-sakura-primary/10 shadow-sm">
            <h2 className="font-serif text-[32px] md:text-[40px] text-sakura-primary mb-6">Mission</h2>
            <p className="font-sans text-[16px] md:text-[18px] text-sakura-primary/80 leading-relaxed">
              To transform real-world challenges into thoughtful, accessible technology by combining engineering, innovation, and human-centered design to create practical solutions that improve everyday lives.
            </p>
          </div>
        </div>

        {/* Founder's Note Section */}
        <div className="mb-32 stagger-animate">
          <h2 className="font-sans text-[14px] text-sakura-primary tracking-[0.25em] uppercase font-bold text-center mb-16">
            Founder’s Note
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[3/4] rounded-[32px] shadow-sm w-full overflow-hidden">
              <img 
                src="https://res.cloudinary.com/ka8ice0a/image/upload/v1786980672/Rohit_pnspxe.jpg" 
                alt="Rohit" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-serif italic text-[20px] md:text-[24px] text-sakura-primary/90 leading-relaxed border-l-4 border-sakura-secondary pl-6 md:pl-8">
                “At MCT, we believe the true measure of technology is not how advanced it is, but how meaningfully it can improve a person’s life. We started with a simple belief; that real-world problems deserve thoughtful, accessible solutions. Every product we build begins with understanding people, their challenges, and the lives they want to live. As we continue to innovate, our commitment remains the same: to create technology with purpose, empathy, and humanity at its core.”
              </p>
            </div>
          </div>
        </div>

        {/* Meet the Team Section */}
        <div className="stagger-animate text-center">
          <h2 className="font-sans text-[14px] text-sakura-primary tracking-[0.25em] uppercase font-bold mb-16">
            Meet the Team
          </h2>
          
          {/* Team Grid */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-16">
            {[
              { name: 'Ritika', url: "https://res.cloudinary.com/ka8ice0a/image/upload/v1786980683/Ritika_zoomed_fmyjdb.jpg" },
              { name: 'Manvendra', url: "https://res.cloudinary.com/ka8ice0a/image/upload/v1786980699/Manvendra_vqdps2.jpg" },
              { name: 'Deva Nandhan', url: "https://res.cloudinary.com/ka8ice0a/image/upload/v1786980683/Deva_Nandhan_R_D_Head_zoigy8.png" },
              { name: 'Sachin Kumar Nishad', url: "https://res.cloudinary.com/ka8ice0a/image/upload/v1786980683/Sachin_Kumar_Nishad_Technical_zscpou.jpg" }
            ].map((member, index) => (
              <div 
                key={index} 
                className="relative group cursor-pointer"
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget.querySelector('img'), { scale: 1.15, duration: 0.3, ease: 'back.out(1.5)' });
                  gsap.to(e.currentTarget.querySelector('.tooltip'), { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget.querySelector('img'), { scale: 1, duration: 0.3, ease: 'power2.out' });
                  gsap.to(e.currentTarget.querySelector('.tooltip'), { opacity: 0, y: 10, duration: 0.3, ease: 'power2.out' });
                }}
              >
                <img 
                  src={member.url} 
                  alt={member.name} 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-sakura-base object-cover shadow-md relative z-10" 
                />
                <div 
                  className="tooltip absolute top-full left-1/2 -translate-x-1/2 mt-3 px-3 py-1.5 bg-sakura-primary/90 text-sakura-base text-[12px] font-sans font-normal tracking-wide rounded-md opacity-0 translate-y-2 pointer-events-none whitespace-nowrap z-20"
                >
                  {member.name}
                </div>
              </div>
            ))}
          </div>

          <p className="font-sans text-[18px] md:text-[22px] text-sakura-primary/80 leading-relaxed max-w-3xl mx-auto">
            Behind every MCT innovation is a team committed to understanding real problems, challenging possibilities, and building technology that makes a meaningful difference.
          </p>
        </div>

      </main>

      <Footer />
    </div>
  );
}
