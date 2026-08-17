import React, { useRef } from 'react';
import gsap from 'gsap';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  baseColor?: string; // e.g. bg-sakura-primary
  hoverColor?: string; // e.g. text-sakura-base
}

export function AnimatedButton({ children, className = '', ...props }: AnimatedButtonProps) {
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const handleMouseEnter = () => {
    gsap.to(bgRef.current, { scaleX: 1, transformOrigin: 'left', duration: 0.4, ease: 'power2.out' });
    gsap.to(textRef.current, { color: '#ffffff', duration: 0.3, ease: 'power2.out' }); // Or use hoverColor
  };

  const handleMouseLeave = () => {
    gsap.to(bgRef.current, { scaleX: 0, transformOrigin: 'right', duration: 0.4, ease: 'power2.out' });
    gsap.to(textRef.current, { clearProps: 'color', duration: 0.3, ease: 'power2.out' });
  };

  return (
    <button
      {...props}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden group cursor-pointer ${className}`}
    >
      <div 
        ref={bgRef} 
        className="absolute inset-0 bg-sakura-primary scale-x-0" 
        style={{ transformOrigin: 'left' }}
      />
      <span ref={textRef} className="relative z-10 transition-colors pointer-events-none">
        {children}
      </span>
    </button>
  );
}
