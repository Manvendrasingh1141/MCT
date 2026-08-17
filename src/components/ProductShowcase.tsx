import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      }
    });

    tl.fromTo('.reveal-text', 
      { y: 50, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }
    );
    
    tl.fromTo('.feature-item',
      { x: -30, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
      "-=0.4"
    );
  }, { scope: containerRef });

  return (
    <section className="relative z-10 w-full pb-24 bg-sakura-base flex flex-col items-center">
      <div className="w-full max-w-[1200px] bg-sakura-base pt-16 pb-8 md:pt-24 md:pb-12 flex items-start justify-start px-8">
        <h2 className="font-serif text-[32px] md:text-[48px] lg:text-[56px] text-sakura-primary font-semibold tracking-tight text-left">
          means before the due date.
        </h2>
      </div>
      <div 
        ref={containerRef}
        className="w-full h-auto min-h-[600px] md:min-h-[800px] rounded-b-[40px] md:rounded-b-[60px] flex flex-col items-center justify-center p-8 md:p-16 overflow-hidden"
      >
        <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div className="flex flex-col space-y-8">
            <div className="reveal-text space-y-4">
              <h2 className="font-supreme text-[48px] md:text-[64px] text-sakura-primary leading-[1.1] font-semibold tracking-tight">
                Clinical Relief, <br/> Elegant Design
              </h2>
              <p className="font-sans text-[16px] md:text-[18px] leading-[28px] text-sakura-primary/90 max-w-lg mt-6">
                Advanced heat therapy and targeted massage work together to ease menstrual cramps naturally. Medical-grade effectiveness meets thoughtful design—because managing pain shouldn't compromise your day.
              </p>
            </div>
            
            <ul className="space-y-4 mt-6">
              {[
                "Ultra-thin, discreet profile",
                "Soft, breathable materials",
                "Precision-fit design",
                "Intuitive one-touch control"
              ].map((feature, idx) => (
                <li key={idx} className="feature-item flex items-center space-x-4 font-sans text-[16px] md:text-[18px] text-sakura-primary">
                  <span className="w-2 h-2 rounded-full bg-sakura-primary"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="reveal-text relative w-full aspect-square md:aspect-auto lg:h-[600px] bg-sakura-tertiary/20 rounded-[32px] md:rounded-[48px] border border-sakura-primary/10 overflow-hidden flex items-center justify-center p-8 shadow-inner">
             {/* Abstract representation of the product */}
             <div className="absolute inset-0 bg-gradient-to-tr from-sakura-base/10 to-transparent"></div>
             
             {/* Concentric abstract elements representing the band */}
             <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full border-[1px] border-sakura-primary/20 flex items-center justify-center shadow-lg backdrop-blur-sm">
                <div className="w-48 h-48 md:w-72 md:h-72 rounded-full border-[1px] border-sakura-primary/30 flex items-center justify-center relative overflow-hidden bg-sakura-base/10">
                   <div className="absolute top-1/2 left-0 w-full h-12 md:h-16 bg-sakura-primary/10 backdrop-blur-md -translate-y-1/2 rounded-full transform -rotate-12 shadow-md border-y border-sakura-primary/20"></div>
                   <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-sakura-primary/5 backdrop-blur-xl border border-sakura-primary/40 shadow-inner flex items-center justify-center">
                     <span className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-sakura-primary/20 bg-sakura-base/30 shadow-sm flex items-center justify-center">
                       <span className="w-4 h-4 rounded-full bg-sakura-primary/40"></span>
                     </span>
                   </div>
                </div>
             </div>
          </div>
          
        </div>
        
        {/* Bento Grid Features */}
        <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
          
          {/* Column 1 - Large Card */}
          <div className="reveal-text md:col-span-1 md:row-span-2 bg-sakura-base rounded-[32px] p-8 flex flex-col justify-end min-h-[400px] md:min-h-[600px] relative overflow-hidden border border-sakura-primary/5">
             {/* Abstract image placeholder for the heat pad */}
             <div className="absolute inset-x-0 top-0 h-2/3 bg-sakura-tertiary/10 rounded-b-[32px] flex items-center justify-center p-8">
               <div className="w-full h-full bg-sakura-primary/5 rounded-[24px] border border-sakura-primary/10 flex items-center justify-center shadow-inner">
                 <div className="w-3/4 h-3/4 bg-sakura-primary/10 rounded-full blur-2xl"></div>
               </div>
             </div>
             
             <div className="relative z-10 mt-auto bg-sakura-base/80 backdrop-blur-sm p-4 -m-4 rounded-[24px]">
                <h3 className="font-serif text-[48px] text-sakura-primary leading-none flex items-baseline">
                   45°C <span className="text-[24px] italic text-sakura-primary/60 ml-2">Heat</span>
                </h3>
                <div className="w-12 h-[1px] bg-sakura-primary/20 my-4"></div>
                <h4 className="font-sans text-[12px] font-bold tracking-[0.1em] uppercase text-sakura-primary mb-3">Soothing Warmth</h4>
                <p className="font-sans text-[16px] leading-[24px] text-sakura-primary/80">
                  Instant, enveloping heat reaches 45°C in less than 5 seconds. Intelligent monitoring ensures perfectly sustained comfort.
                </p>
             </div>
          </div>

          {/* Column 2 - Stacked */}
          <div className="flex flex-col gap-6 h-full">
             {/* Card 2 Top - Image */}
             <div className="reveal-text bg-sakura-base rounded-[32px] p-6 h-1/2 min-h-[250px] flex items-end justify-center relative overflow-hidden border border-sakura-primary/5">
                <div className="absolute inset-0 bg-sakura-tertiary/20 flex items-center justify-center p-6 pb-12">
                   <div className="w-full h-12 bg-sakura-primary/10 rounded-full blur-xl absolute bottom-1/3"></div>
                   <div className="w-full h-full border-2 border-sakura-base/40 rounded-[32px] transform -rotate-6 shadow-md bg-sakura-primary/5"></div>
                </div>
                <h4 className="relative z-10 font-sans text-[12px] font-bold tracking-[0.1em] uppercase text-sakura-primary bg-sakura-base/60 backdrop-blur-md px-4 py-2 rounded-full">Ergonomic Softness</h4>
             </div>
             
             {/* Card 2 Bottom - Text */}
             <div className="reveal-text bg-sakura-base rounded-[32px] p-8 h-1/2 min-h-[250px] flex flex-col justify-center border border-sakura-primary/5">
                <h3 className="font-serif text-[48px] text-sakura-primary leading-none">4 Hours</h3>
                <div className="w-12 h-[1px] bg-sakura-primary/20 my-4"></div>
                <h4 className="font-sans text-[12px] font-bold tracking-[0.1em] uppercase text-sakura-primary mb-3">Lasting Relief</h4>
                <p className="font-sans text-[16px] leading-[24px] text-sakura-primary/80">
                  Experience uninterrupted comfort. Engineered to support you effortlessly.
                </p>
             </div>
          </div>

          {/* Column 3 - Stacked */}
          <div className="flex flex-col gap-6 h-full">
             {/* Card 3 Top - Text */}
             <div className="reveal-text bg-sakura-base rounded-[32px] p-8 h-1/2 min-h-[250px] flex flex-col justify-center border border-sakura-primary/5">
                <h3 className="font-serif text-[48px] text-sakura-primary leading-none">3 Modes</h3>
                <div className="w-12 h-[1px] bg-sakura-primary/20 my-4"></div>
                <h4 className="font-sans text-[12px] font-bold tracking-[0.1em] uppercase text-sakura-primary mb-3">Gentle Pulse</h4>
                <p className="font-sans text-[16px] leading-[24px] text-sakura-primary/80">
                  Graceful vibration patterns designed to quietly interrupt pain signals and deeply relax tense muscles.
                </p>
             </div>

             {/* Card 3 Bottom - Image */}
             <div className="reveal-text bg-sakura-base rounded-[32px] p-6 h-1/2 min-h-[250px] flex items-end justify-center relative overflow-hidden border border-sakura-primary/5">
                <div className="absolute inset-0 bg-sakura-tertiary/10 flex items-center justify-center p-4 pb-12">
                   <div className="w-3/4 h-3/4 bg-sakura-primary/10 rounded-full blur-2xl"></div>
                   <div className="absolute w-2/3 h-12 bg-sakura-primary/20 rounded-full transform -rotate-12 shadow-inner border border-sakura-base/20"></div>
                </div>
                <h4 className="relative z-10 font-sans text-[12px] font-bold tracking-[0.1em] uppercase text-sakura-primary bg-sakura-base/60 backdrop-blur-md px-4 py-2 rounded-full">Invisible Comfort</h4>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
