import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function EaseBandFeatures() {
  const navigate = useNavigate();
  const componentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const featuresSectionRef = useRef<HTMLDivElement>(null);
  const featuresTitleRef = useRef<HTMLHeadingElement>(null);
  const featuresTextRef = useRef<HTMLParagraphElement>(null);
  
  // Callout 1 (Top Right)
  const line1Ref = useRef<SVGPathElement>(null);
  const dot1Ref = useRef<SVGCircleElement>(null);
  const text1Ref = useRef<HTMLSpanElement>(null);

  // Callout 2 (Bottom Left)
  const line2Ref = useRef<SVGPathElement>(null);
  const dot2Ref = useRef<SVGCircleElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  // Callout 3 (Bottom Right)
  const line3Ref = useRef<SVGPathElement>(null);
  const dot3Ref = useRef<SVGCircleElement>(null);
  const text3Ref = useRef<HTMLSpanElement>(null);

  // Callout 4 (Top Left)
  const line4Ref = useRef<SVGPathElement>(null);
  const dot4Ref = useRef<SVGCircleElement>(null);
  const text4Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Callout 1: Top Right
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          toggleActions: "play reverse play reverse",
        }
      });
      tl1.fromTo(line1Ref.current, 
          { strokeDasharray: 100, strokeDashoffset: 100 },
          { strokeDashoffset: 0, duration: 1, ease: "power2.out" }
        )
        .fromTo(dot1Ref.current, { scale: 0, opacity: 0, transformOrigin: "center" }, { scale: 1, opacity: 1, duration: 0.3 }, "-=0.2")
        .fromTo(text1Ref.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.2");

      // Callout 2: Bottom Left
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          toggleActions: "play reverse play reverse",
        }
      });
      tl2.fromTo(line2Ref.current, 
          { strokeDasharray: 40, strokeDashoffset: 40 },
          { strokeDashoffset: 0, duration: 0.8, ease: "power2.out", delay: 0.2 }
        )
        .fromTo(dot2Ref.current, { scale: 0, opacity: 0, transformOrigin: "center" }, { scale: 1, opacity: 1, duration: 0.3 }, "-=0.2")
        .fromTo(text2Ref.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.2");

      // Callout 3: Bottom Right
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          toggleActions: "play reverse play reverse",
        }
      });
      tl3.fromTo(line3Ref.current, 
          { strokeDasharray: 80, strokeDashoffset: 80 },
          { strokeDashoffset: 0, duration: 0.9, ease: "power2.out", delay: 0.4 }
        )
        .fromTo(dot3Ref.current, { scale: 0, opacity: 0, transformOrigin: "center" }, { scale: 1, opacity: 1, duration: 0.3 }, "-=0.2")
        .fromTo(text3Ref.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.2");

      // Callout 4: Top Left
      const tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          toggleActions: "play reverse play reverse",
        }
      });
      tl4.fromTo(line4Ref.current, 
          { strokeDasharray: 40, strokeDashoffset: 40 },
          { strokeDashoffset: 0, duration: 0.8, ease: "power2.out", delay: 0.6 }
        )
        .fromTo(dot4Ref.current, { scale: 0, opacity: 0, transformOrigin: "center" }, { scale: 1, opacity: 1, duration: 0.3 }, "-=0.2")
        .fromTo(text4Ref.current, { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 }, "-=0.2");

      // Features section animation
      const tlFeatures = gsap.timeline({
        scrollTrigger: {
          trigger: featuresSectionRef.current,
          start: "top 75%",
          toggleActions: "play reverse play reverse",
        }
      });

      if (featuresTitleRef.current && featuresTextRef.current) {
        tlFeatures.fromTo([featuresTitleRef.current, featuresTextRef.current],
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "power2.out" }
        );
      }
      
      tlFeatures.fromTo(".feature-block",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" },
        "-=0.4"
      );

    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={componentRef} className="w-full bg-sakura-base pt-24 pb-8 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* EaseBand Section */}
        <section className="mb-32">
          <h2 className="gsap-fade-up font-supreme text-[32px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.2] tracking-[-0.02em] text-sakura-primary mb-6">
            Relief, Designed Around You <br/>
            That Feels Like You.
          </h2>
          <p className="gsap-fade-up font-sans text-[16px] md:text-[18px] text-sakura-primary max-w-3xl leading-relaxed mb-24 mt-4">
            EaseBand combines targeted heat and gentle vibration in a wearable, thoughtfully designed therapeutic device form; helping you manage menstrual discomfort while keeping you comfortable and free to move through your day.
          </p>

          <div ref={containerRef} className="relative w-full max-w-[1000px] mx-auto mt-16">
            {/* Main Box */}
            <div className="w-full aspect-[2/1] border border-sakura-primary/20 rounded-[24px] md:rounded-[32px] overflow-hidden">
              <img 
                src="https://res.cloudinary.com/ka8ice0a/image/upload/v1786951182/WhatsApp_Image_2026-08-17_at_11.56.55.jpg" 
                alt="EaseBand" 
                className="w-full h-full object-cover" 
              />
            </div>

            {/* Callout 1: Top Right */}
            <div className="absolute top-0 right-[15%] md:right-[20%] transform -translate-y-[100%] flex items-end">
              <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible hidden md:block">
                <path ref={line1Ref} d="M 0 40 L 0 10 L 60 10" stroke="var(--color-sakura-primary)" strokeOpacity="0.4" strokeWidth="1" fill="none" />
                <circle ref={dot1Ref} cx="60" cy="10" r="2.5" fill="var(--color-sakura-primary)" />
              </svg>
              <span ref={text1Ref} className="absolute bottom-[32px] left-[68px] font-sans text-[14px] whitespace-nowrap text-sakura-primary hidden md:block">
                Soft, breathable materials
              </span>
            </div>

            {/* Callout 2: Bottom Left */}
            <div className="absolute bottom-0 left-[5%] md:left-[10%] transform translate-y-[100%] flex flex-col items-center">
              <svg width="20" height="40" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible hidden md:block">
                <path ref={line2Ref} d="M 10 0 L 10 40" stroke="var(--color-sakura-primary)" strokeOpacity="0.4" strokeWidth="1" fill="none" />
                <circle ref={dot2Ref} cx="10" cy="40" r="2.5" fill="var(--color-sakura-primary)" />
              </svg>
              <span ref={text2Ref} className="absolute top-[48px] font-sans text-[14px] whitespace-nowrap text-sakura-primary hidden md:block">
                Ultra-thin, discreet profile
              </span>
            </div>

            {/* Callout 3: Bottom Right */}
            <div className="absolute bottom-[0%] right-[25%] md:right-[30%] transform translate-y-[100%] flex items-start">
              <svg width="40" height="60" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible hidden md:block">
                <path ref={line3Ref} d="M 0 0 L 0 40 L 40 40" stroke="var(--color-sakura-primary)" strokeOpacity="0.4" strokeWidth="1" fill="none" />
                <circle ref={dot3Ref} cx="40" cy="40" r="2.5" fill="var(--color-sakura-primary)" />
              </svg>
              <span ref={text3Ref} className="absolute top-[48px] left-[48px] font-sans text-[14px] whitespace-nowrap text-sakura-primary hidden md:block">
                Precision-fit design
              </span>
            </div>
            
            {/* Callout 4: Top Left */}
            <div className="absolute top-[20%] left-0 transform -translate-x-[100%] flex items-center">
              <span ref={text4Ref} className="absolute right-[48px] font-sans text-[14px] whitespace-nowrap text-sakura-primary hidden md:block">
                Intuitive one-touch control
              </span>
              <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible hidden md:block">
                <path ref={line4Ref} d="M 0 10 L 40 10" stroke="var(--color-sakura-primary)" strokeOpacity="0.4" strokeWidth="1" fill="none" />
                <circle ref={dot4Ref} cx="40" cy="10" r="2.5" fill="var(--color-sakura-primary)" />
              </svg>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section ref={featuresSectionRef} className="mb-12">
          <h2 ref={featuresTitleRef} className="font-supreme text-[40px] md:text-[48px] font-medium text-sakura-primary mb-2">
            Features
          </h2>
          <p ref={featuresTextRef} className="font-sans text-[16px] md:text-[18px] text-sakura-primary mb-12">
            Build with love and always make stronger the trust
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6">
            
            {/* Block 1: Heat */}
            <div className="feature-block md:col-span-1 md:row-span-2 bg-sakura-surface/40 border border-sakura-primary/10 rounded-[32px] flex flex-col justify-end relative overflow-hidden min-h-[450px] md:min-h-0">
              <img 
                src="https://res.cloudinary.com/ka8ice0a/image/upload/v1786982142/layers.jpg" 
                alt="Heating Layers"
                className="absolute inset-0 w-full h-full object-cover object-center" 
              />
              <div className="relative mt-auto p-8 pt-32 flex flex-col justify-end bg-gradient-to-t from-sakura-base via-sakura-base/90 to-transparent z-10">
                <div className="flex items-baseline mb-4">
                  <span className="font-serif text-[64px] text-sakura-primary leading-none">45°C</span>
                  <span className="font-serif text-[32px] text-sakura-secondary italic ml-2 leading-none">Heat</span>
                </div>
                <h3 className="font-sans text-[14px] font-bold text-sakura-primary uppercase tracking-[0.15em] mb-4">
                  Soothing Warmth
                </h3>
                <p className="font-sans text-[15px] text-sakura-primary/80 leading-relaxed pr-4">
                  Instant, enveloping heat reaches 45°C in less than 5 seconds. Intelligent monitoring ensures perfectly sustained comfort.
                </p>
              </div>
            </div>

            {/* Block 2: Ergonomic Softness */}
            <div className="feature-block bg-sakura-surface/40 border border-sakura-primary/10 rounded-[32px] aspect-square md:aspect-auto min-h-[280px] relative overflow-hidden flex flex-col">
              <img 
                src="https://res.cloudinary.com/ka8ice0a/image/upload/v1786981643/2.jpg" 
                alt="Ergonomic Softness" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
              <div className="relative mt-auto p-6 pb-8 bg-gradient-to-t from-black/50 to-transparent">
                <h3 className="font-sans text-[13px] font-bold text-white uppercase tracking-[0.2em] text-center">
                  Ergonomic Softness
                </h3>
              </div>
            </div>

            {/* Block 3: 3 Modes (Text) */}
            <div className="feature-block bg-sakura-base/60 border border-sakura-primary/10 rounded-[32px] aspect-square md:aspect-auto min-h-[280px] p-8 flex flex-col justify-center">
              <h2 className="font-serif text-[48px] text-sakura-primary leading-none mb-3">3 Modes</h2>
              <div className="w-10 h-[1px] bg-sakura-secondary/50 mb-6"></div>
              <h3 className="font-sans text-[13px] font-bold text-sakura-primary uppercase tracking-[0.15em] mb-4">
                Gentle Pulse
              </h3>
              <p className="font-sans text-[15px] text-sakura-primary/80 leading-relaxed">
                Graceful vibration patterns designed to quietly interrupt pain signals and deeply relax tense muscles.
              </p>
            </div>

            {/* Block 4: 4 Hours (Text) */}
            <div className="feature-block bg-sakura-base/60 border border-sakura-primary/10 rounded-[32px] aspect-square md:aspect-auto min-h-[280px] p-8 flex flex-col justify-center">
              <h2 className="font-serif text-[48px] text-sakura-primary leading-none mb-3">4 Hours</h2>
              <div className="w-10 h-[1px] bg-sakura-secondary/50 mb-6"></div>
              <h3 className="font-sans text-[13px] font-bold text-sakura-primary uppercase tracking-[0.15em] mb-4">
                Lasting Relief
              </h3>
              <p className="font-sans text-[15px] text-sakura-primary/80 leading-relaxed">
                Experience uninterrupted comfort. Engineered to support you effortlessly.
              </p>
            </div>

            {/* Block 5: Invisible Comfort */}
            <div className="feature-block bg-sakura-surface/40 border border-sakura-primary/10 rounded-[32px] aspect-square md:aspect-auto min-h-[280px] relative overflow-hidden flex flex-col">
              <video 
                src="https://res.cloudinary.com/ka8ice0a/video/upload/v1786981644/3.mp4" 
                className="absolute inset-0 w-full h-full object-cover" 
                autoPlay loop muted playsInline 
              />
              <div className="relative mt-auto p-6 pb-8 bg-gradient-to-t from-black/50 to-transparent z-20">
                <h3 className="font-sans text-[13px] font-bold text-white uppercase tracking-[0.2em] text-center">
                  Invisible Comfort
                </h3>
              </div>
            </div>

          </div>
        </section>

        {/* Revolution Section (New Style) */}
        <section className="py-8 flex flex-col items-center justify-center text-center">
          <h2 className="gsap-fade-up font-supreme text-[32px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.2] tracking-[-0.02em] text-sakura-primary mb-6 max-w-4xl mx-auto">
            Your day shouldn't <br/> have to pause for period pain.
          </h2>
          
          <p className="gsap-fade-up font-sans text-[14px] md:text-[16px] text-sakura-primary/80 mb-10 max-w-2xl mx-auto">
            EaseBand is made to bring comfort closer, so you can move through your day with a little more ease.
          </p>

          <button 
            className="gsap-fade-up relative overflow-hidden border border-sakura-primary/20 bg-sakura-surface/10 text-sakura-primary font-sans text-[14px] leading-none px-12 py-5 rounded-[32px] mb-6 w-full max-w-[240px] group cursor-pointer"
            onClick={() => navigate('/order')}
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget.querySelector('.hover-bg'), { scaleX: 1, transformOrigin: 'left', duration: 0.4, ease: 'power2.out' });
              gsap.to(e.currentTarget.querySelector('.hover-text'), { color: '#F9F6F0', duration: 0.3 });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget.querySelector('.hover-bg'), { scaleX: 0, transformOrigin: 'right', duration: 0.4, ease: 'power2.out' });
              gsap.to(e.currentTarget.querySelector('.hover-text'), { clearProps: 'color', duration: 0.3 });
            }}
          >
            <div className="hover-bg absolute inset-0 bg-sakura-primary/90 scale-x-0 origin-left" />
            <span className="hover-text relative z-10 pointer-events-none transition-colors duration-300">
              Order Now
            </span>
          </button>

        </section>
      </div>
    </div>
  );
}
