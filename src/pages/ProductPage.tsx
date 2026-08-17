import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Truck, CreditCard, RotateCcw, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function ProductPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const navigate = useNavigate();

  // Refs for the new section
  const productSectionRef = useRef<HTMLDivElement>(null);
  const productImageContainerRef = useRef<HTMLDivElement>(null);
  const productImageRef = useRef<HTMLImageElement>(null);
  const productInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Entrance Animation
      const tl = gsap.timeline();
      
      tl.fromTo(imageRef.current,
        { scale: 1.1, opacity: 0, filter: "blur(10px)" },
        { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.5, ease: "power3.out" }
      )
      .fromTo(titleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.8"
      )
      .fromTo(textRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.8"
      );

      // Scroll Animation (if page gets longer, this adds slight parallax)
      gsap.to(imageRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // Product Details Section Animation
      const tlProduct = gsap.timeline({
        scrollTrigger: {
          trigger: productSectionRef.current,
          start: "top 75%",
          toggleActions: "play reverse play reverse",
        }
      });

      tlProduct.fromTo(productImageContainerRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      )
      .fromTo(productInfoRef.current,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-sakura-base min-h-screen font-sans selection:bg-sakura-tertiary/30" ref={containerRef}>
      <NavBar />
      
      {/* Banner Image Section */}
      <div className="relative w-full h-[90vh] md:h-[100vh] overflow-hidden">
        <img 
          ref={imageRef}
          src="https://res.cloudinary.com/ka8ice0a/image/upload/v1786960335/banner.jpg" 
          alt="EaseBand Product Banner" 
          className="w-full h-full object-cover origin-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sakura-base/40 via-transparent to-black/30" />
      </div>

      {/* Content Section */}
      <main className="relative z-10 mt-24 md:-mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div 
          ref={textContainerRef}
          className="max-w-5xl mx-auto bg-sakura-surface/30 backdrop-blur-md border border-sakura-primary/20 rounded-[32px] p-8 md:p-16 lg:p-20 shadow-xl mb-32"
        >
          <h1 ref={titleRef} className="font-supreme text-[40px] md:text-[56px] font-semibold tracking-[-0.02em] text-sakura-primary mb-8 leading-[1.1]">
            Meet Easeband
          </h1>
          <p ref={textRef} className="font-sans text-[18px] md:text-[22px] leading-[1.2] md:leading-[1.4] text-sakura-primary/80 font-normal">
            Easeband is a wearable menstrual cramp-relief device designed to provide
            targeted comfort through a combination of heat and gentle vibration therapy.
            Its ergonomic design allows it to be comfortably worn around the lower
            abdomen, delivering soothing warmth and therapeutic vibration where
            menstrual discomfort is typically experienced. Designed for convenient
            everyday use, Easeband offers a simple, non-invasive way to manage period
            discomfort while allowing you to continue with your daily routine.
          </p>
        </div>

        {/* Product Details Section */}
        <div ref={productSectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column: Image */}
          <div 
            ref={productImageContainerRef} 
            className="relative w-full aspect-[4/5] bg-sakura-surface/30 rounded-[32px] overflow-hidden shadow-sm"
            onMouseEnter={() => {
              gsap.to(productImageRef.current, { scale: 1.1, duration: 0.6, ease: "power2.out" });
            }}
            onMouseMove={(e) => {
              const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
              const centerX = left + width / 2;
              const centerY = top + height / 2;
              const moveX = (e.clientX - centerX) / 15;
              const moveY = (e.clientY - centerY) / 15;
              
              gsap.to(productImageRef.current, { 
                x: moveX, 
                y: moveY, 
                duration: 0.5, 
                ease: "power2.out" 
              });
            }}
            onMouseLeave={() => {
              gsap.to(productImageRef.current, { scale: 1, x: 0, y: 0, duration: 0.6, ease: "power2.out" });
            }}
          >
            <img 
              ref={productImageRef}
              src="https://res.cloudinary.com/ka8ice0a/image/upload/v1786951182/WhatsApp_Image_2026-08-17_at_11.56.55.jpg" 
              alt="EaseBand Detail" 
              className="w-full h-full object-cover mix-blend-multiply opacity-90 origin-center"
            />
            <div className="absolute bottom-4 right-6 bg-sakura-base/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-[12px] text-sakura-primary/70 font-medium tracking-wide pointer-events-none">
              Hover to Zoom
            </div>
          </div>

          {/* Right Column: Info */}
          <div ref={productInfoRef} className="flex flex-col pt-4 lg:pt-10">
            <h2 className="font-serif text-[48px] lg:text-[64px] leading-none text-sakura-primary mb-4">
              EaseBand
            </h2>
            <p className="font-sans text-[18px] md:text-[20px] text-sakura-primary/80 leading-relaxed mb-10">
              Relief that moves with you. The intelligent wearable for natural, instant comfort.
            </p>

            {/* Price Card */}
            <div className="bg-bg-sakura-tertiary/20 rounded-[24px] p-6 md:p-8 mb-6 shadow-sm border border-sakura-primary/5">
              <div className="flex items-center flex-wrap gap-4 mb-2">
                <span className="font-sans font-bold text-[32px] md:text-[40px] text-sakura-primary leading-none tracking-tight">₹1,699</span>
                <span className="font-sans text-[18px] text-sakura-primary/50 line-through decoration-1">₹3,000</span>
                <span className="bg-[#e4ddd4] text-sakura-primary text-[13px] font-bold px-3 py-1 rounded-md tracking-wide">
                  -60% OFF
                </span>
              </div>
              <p className="font-sans text-[13px] text-sakura-primary/60 mb-6">
                Inclusive of all taxes. Free shipping across India.
              </p>

              <div className="flex items-center gap-6 mb-8 text-[14px] text-sakura-primary/80 font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-sakura-secondary" />
                  <span>1 Year Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck size={18} className="text-sakura-secondary" />
                  <span>Free Delivery</span>
                </div>
              </div>

              <button 
                className="relative overflow-hidden w-full border border-sakura-primary text-sakura-primary font-sans font-bold text-[14px] leading-[16px] tracking-[0.15em] uppercase px-8 py-5 rounded-xl group cursor-pointer"
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
                <div className="hover-bg absolute inset-0 bg-sakura-primary scale-x-0 origin-left" />
                <span className="hover-text relative z-10 pointer-events-none transition-colors duration-300">
                  ORDER NOW
                </span>
              </button>
              
              <p className="text-center font-sans text-[10px] text-sakura-primary/50 uppercase tracking-[0.1em] font-bold mt-4">
                SAFE & SECURE CHECKOUT VIA RAZORPAY
              </p>
            </div>

            {/* Feature Badges */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              <div className="bg-bg-sakura-tertiary/20 border-sakura-primary/5 rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <CreditCard size={18} className="text-sakura-primary" />
                </div>
                <span className="font-sans text-[12px] md:text-[13px] text-sakura-primary/80 font-bold leading-tight">
                  Cash on Delivery<br/>Available
                </span>
              </div>
              
              <div className="bg-bg-sakura-tertiary/20  border-sakura-primary/5 rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <RotateCcw size={18} className="text-sakura-primary" />
                </div>
                <span className="font-sans text-[12px] md:text-[13px] text-sakura-primary/80 font-bold leading-tight">
                  7 Day<br/>Replacement
                </span>
              </div>

              <div className="bg-bg-sakura-tertiary/20  border-sakura-primary/5 rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Check size={18} className="text-sakura-primary" />
                </div>
                <span className="font-sans text-[12px] md:text-[13px] text-sakura-primary/80 font-bold leading-tight">
                  100% Original<br/>Product
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <section className="mt-32">
          <div className="text-center mb-16">
            <h2 className="font-supreme text-[32px] md:text-[48px] font-semibold tracking-[-0.02em] text-sakura-primary mb-4">
              Real Relief. Real Stories.
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] text-sakura-primary/80 max-w-2xl mx-auto">
              See what our community has to say about their experience with EaseBand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { id: 1, name: 'Riddhi', videoUrl: 'https://res.cloudinary.com/ka8ice0a/video/upload/v1786980230/riddhi.mov' },
              { id: 2, name: 'Kashish', videoUrl: 'https://res.cloudinary.com/ka8ice0a/video/upload/v1786980268/kashish.mp4' },
              { id: 3, name: 'Jasman', videoUrl: 'https://res.cloudinary.com/ka8ice0a/video/upload/v1786981636/jasman_1.mov' },
              { id: 4, name: 'Kalyani', videoUrl: 'https://res.cloudinary.com/ka8ice0a/video/upload/v1786983973/kalvani.mp4' },
              
            ].map((review) => (
              <div 
                key={review.id}
                className="group relative w-full aspect-[9/16] bg-sakura-surface/40 rounded-[24px] overflow-hidden cursor-pointer"
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget.querySelector('.hover-overlay'), { opacity: 1, duration: 0.3, ease: "power2.out" });
                  gsap.to(e.currentTarget.querySelector('.play-btn'), { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" });
                  gsap.to(e.currentTarget.querySelector('.user-info'), { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget.querySelector('.hover-overlay'), { opacity: 0, duration: 0.3, ease: "power2.out" });
                  gsap.to(e.currentTarget.querySelector('.play-btn'), { scale: 0.8, opacity: 0, duration: 0.3, ease: "power2.out" });
                  gsap.to(e.currentTarget.querySelector('.user-info'), { y: 10, opacity: 0, duration: 0.3, ease: "power2.out" });
                }}
                onClick={() => {
                  if (review.videoUrl) {
                    window.open(review.videoUrl, '_blank');
                  }
                }}
              >
                {/* Video Placeholder or Real Video */}
                {review.videoUrl ? (
                  <video 
                    src={review.videoUrl} 
                    className="absolute inset-0 w-full h-full object-cover" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                  />
                ) : (
                  <div className="absolute inset-0 bg-sakura-tertiary/20 flex items-center justify-center text-sakura-primary/40 font-sans text-sm">
                    Video {review.id}
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="hover-overlay absolute inset-0 bg-black/40 opacity-0 transition-opacity pointer-events-none" />

                {/* Play Button (Center) */}
                {review.videoUrl && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="play-btn w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center scale-80 opacity-0 border border-white/30">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                )}

                {/* User Info & Rating (Bottom) */}
                <div className="user-info absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2 translate-y-[10px] opacity-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} width="12" height="12" viewBox="0 0 24 24" fill="#FBBF24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="font-sans text-white text-[14px] font-semibold tracking-wide">
                    {review.name}
                  </span>
                  <span className="font-sans text-white/80 text-[12px] uppercase tracking-wider font-medium mt-1">
                    {review.videoUrl ? 'Watch Full Video' : 'Coming Soon'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
