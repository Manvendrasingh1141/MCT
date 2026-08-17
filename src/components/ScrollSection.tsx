import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const content = [
  {
    question: "What Drives Us?",
    answer: "We believe technology should begin with people. Every meaningful innovation starts by understanding a real need, listening to the people experiencing it, and asking how technology can make their lives better."
  },
  {
    question: "What Do We Build? ",
    answer: "We design and develop thoughtful, accessible technology that addresses real-world challenges; turning ideas, engineering, and human insight into practical solutions people can actually use."
  },
  {
    question: "Why MCT?",
    answer: "Because innovation means more than building something new. It means building something useful, meaningful, and human. At MCT, we bring together engineering and empathy to create technology with a purpose."
  }
];

export function ScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const qElements = gsap.utils.toArray('.q-item') as HTMLElement[];
    const aElements = gsap.utils.toArray('.a-item') as HTMLElement[];
    
    // Ensure the first items are visible initially
    gsap.set(qElements, { autoAlpha: 0, y: 50 });
    gsap.set(aElements, { autoAlpha: 0, y: 50 });
    gsap.set(qElements[0], { autoAlpha: 1, y: 0 });
    gsap.set(aElements[0], { autoAlpha: 1, y: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center", // Pin when the center of the container hits the center of the viewport
        end: "+=200%", // Pin for the duration of 200% of viewport height
        pin: true,
        scrub: 1,
        // markers: true, // Uncomment for debugging
      }
    });

    // Animation sequence
    // Step 1: Fade out Q1/A1, fade in Q2/A2
    tl.to(qElements[0], { autoAlpha: 0, y: -50, duration: 1 })
      .to(aElements[0], { autoAlpha: 0, y: -50, duration: 1 }, "<")
      .to(qElements[1], { autoAlpha: 1, y: 0, duration: 1 })
      .to(aElements[1], { autoAlpha: 1, y: 0, duration: 1 }, "<");

    // Step 2: Pause slightly
    tl.to({}, { duration: 0.5 });

    // Step 3: Fade out Q2/A2, fade in Q3/A3
    tl.to(qElements[1], { autoAlpha: 0, y: -50, duration: 1 })
      .to(aElements[1], { autoAlpha: 0, y: -50, duration: 1 }, "<")
      .to(qElements[2], { autoAlpha: 1, y: 0, duration: 1 })
      .to(aElements[2], { autoAlpha: 1, y: 0, duration: 1 }, "<");
      
    // End pause
    tl.to({}, { duration: 0.5 });

  }, { scope: containerRef });

  return (
    <section className="relative z-10 w-full px-4 md:px-8 py-24 bg-sakura-base" ref={containerRef}>
      <div className="max-w-[1200px] mx-auto h-[600px] md:h-[700px] rounded-[40px] md:rounded-[60px] bg-sakura-secondary p-4 md:p-6 overflow-hidden flex flex-col md:flex-row shadow-sm">
        
        {/* Left Panel - Dark Background */}
        <div 
          ref={leftPanelRef}
          className="w-full md:w-1/2 h-full bg-sakura-primary rounded-[32px] md:rounded-[48px] p-8 md:p-16 flex flex-col justify-center relative overflow-hidden"
        >
          {content.map((item, index) => (
            <div 
              key={`q-${index}`} 
              className="q-item absolute inset-0 p-8 md:p-16 flex flex-col justify-center"
            >
              <h3 className="font-serif text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] text-sakura-base font-medium">
                {item.question}
              </h3>
            </div>
          ))}
        </div>

        {/* Right Panel - Transparent (Secondary Color from Parent) */}
        <div 
          ref={rightPanelRef}
          className="w-full md:w-1/2 h-full p-8 md:p-16 flex flex-col justify-center relative overflow-hidden"
        >
          {content.map((item, index) => (
            <div 
              key={`a-${index}`} 
              className="a-item absolute inset-0 p-8 md:p-16 flex flex-col justify-center"
            >
              <p className="font-sans text-[18px] md:text-[24px] leading-[28px] md:leading-[36px] text-sakura-primary font-normal">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
