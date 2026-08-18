import React, { useEffect, useRef, useState } from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { Phone, Mail, Instagram, Linkedin } from 'lucide-react';
import gsap from 'gsap';
import { useToast } from '../components/Toast';

export function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { showToast } = useToast();

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Very simple entrance stagger for the main sections
      gsap.fromTo('.stagger-animate', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power2.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

    try {
      if (accessKey) {
        const payload = {
          access_key: accessKey,
          subject: `New Contact Message: ${form.name}`,
          from_name: "MCT Website",
          ...form
        };

        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        if (!res.ok) throw new Error('Failed to submit form');
      }
      showToast('Your message has been sent successfully! We\'ll get back to you soon.', 'success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      showToast('Something went wrong. Please try again.', 'error');
    }
  };

  return (
    <div className="bg-sakura-base min-h-screen font-sans selection:bg-sakura-tertiary/30 flex flex-col" ref={containerRef}>
      <NavBar forceDarkText={true} />
      
      {/* We need extra top padding because the NavBar is fixed and transparent/scrolled */}
      <main className="flex-grow pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-24 stagger-animate">
          <h1 className="font-sans text-[48px] md:text-[64px] text-sakura-primary leading-none tracking-wide mb-6">
            MCT SUPPORT
          </h1>
          <p className="font-sans text-[12px] md:text-[14px] text-sakura-primary/60 tracking-[0.2em] uppercase font-bold">
            Our dedicated team is here to assist you
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 mb-32 stagger-animate">
          {/* Phone */}
          <div className="flex flex-col items-center text-center h-full p-8 rounded-2xl hover:bg-sakura-surface/30 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-sm">
            <h3 className="font-sans text-[13px] text-sakura-primary/60 tracking-[0.2em] uppercase font-bold mb-8">
              Phone
            </h3>
            <p className="font-sans text-[15px] text-sakura-primary/80 leading-relaxed mb-8">
              Monday - Saturday<br />
              10 AM - 10 PM (IST)
            </p>
            <a href="tel:+918699715686" className="flex items-center  text-sakura-primary font-medium mt-auto  hover:text-sakura-secondary transition-colors group">
              <Phone size={18} className="text-sakura-primary/80 group-hover:text-sakura-secondary transition-colors" />
              <span>+91 86997 15686</span>
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center h-full p-8 rounded-2xl hover:bg-sakura-surface/30 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-sm">
            <h3 className="font-sans text-[13px] text-sakura-primary/60 tracking-[0.2em] uppercase font-bold mb-8">
              Email
            </h3>
            <p className="font-sans text-[15px] text-sakura-primary/80  max-w-[280px] mb-8">
              For general inquiries, support, and partnership opportunities.
            </p>
            <div className="flex flex-col gap-3 mt-auto">
              <a href="mailto:support.medcaretech@gmail.com" className="flex items-center justify-center gap-3 text-sakura-primary font-medium hover:text-sakura-secondary transition-colors group">
                <Mail size={18} className="text-sakura-primary/80 group-hover:text-sakura-secondary transition-colors" />
                <span className="text-[14px]">support.medcaretech@gmail.com</span>
              </a>
              <a href="mailto:products.medcaretech@gmail.com" className="flex items-center justify-center gap-3 text-sakura-primary font-medium hover:text-sakura-secondary transition-colors group">
                <Mail size={18} className="text-sakura-primary/80 group-hover:text-sakura-secondary transition-colors" />
                <span className="text-[14px]">products.medcaretech@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col items-center text-center h-full p-8 rounded-2xl hover:bg-sakura-surface/30 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-sm">
            <h3 className="font-sans text-[13px] text-sakura-primary/60 tracking-[0.2em] uppercase font-bold mb-8">
              Follow Us
            </h3>
            <p className="font-sans text-[15px] text-sakura-primary/80 leading-relaxed mb-8">
              Stay connected for updates.
            </p>
            <div className="flex items-center justify-center gap-6 text-sakura-primary/60  w-full">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sakura-primary/60 hover:text-sakura-primary transition-all duration-300 ease-out flex items-center justify-center w-12 h-12 rounded-full bg-sakura-surface/50 border border-sakura-primary/10 hover:border-sakura-primary/50 hover:bg-sakura-surface/80 hover:scale-105 hover:shadow-sm">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sakura-primary/60 hover:text-sakura-primary transition-all duration-300 ease-out flex items-center justify-center w-12 h-12 rounded-full bg-sakura-surface/50 border border-sakura-primary/10 hover:border-sakura-primary/50 hover:bg-sakura-surface/80 hover:scale-105 hover:shadow-sm">
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-3xl mx-auto stagger-animate mt-12">
          <h2 className="font-sans text-[14px] text-sakura-primary tracking-[0.25em] uppercase font-bold text-center mb-16">
            Send a Message
          </h2>

          <form className="space-y-12" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col group">
                <label className="font-sans text-[14px] text-sakura-primary/50 tracking-[0.1em] uppercase mb-1">Name *</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="border-b border-sakura-primary/20 bg-transparent py-2 focus:outline-none focus:border-sakura-primary hover:border-sakura-primary/50 transition-all duration-300 text-sakura-primary font-sans text-[15px]"
                />
              </div>
              <div className="flex flex-col group">
                <label className="font-sans text-[14px] text-sakura-primary/50 tracking-[0.1em] uppercase mb-1">Email *</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="border-b border-sakura-primary/20 bg-transparent py-2 focus:outline-none focus:border-sakura-primary hover:border-sakura-primary/50 transition-all duration-300 text-sakura-primary font-sans text-[15px]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col group">
                <label className="font-sans text-[14px] text-sakura-primary/50 tracking-[0.1em] uppercase mb-1">Phone (Optional)</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="border-b border-sakura-primary/20 bg-transparent py-2 focus:outline-none focus:border-sakura-primary hover:border-sakura-primary/50 transition-all duration-300 text-sakura-primary font-sans text-[15px]"
                />
              </div>
            </div>

            <div className="flex flex-col group">
              <label className="font-sans text-[14px] text-sakura-primary/50 tracking-[0.1em] uppercase mb-1">Message *</label>
              <textarea 
                required
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="border-b border-sakura-primary/20 bg-transparent py-2 focus:outline-none focus:border-sakura-primary hover:border-sakura-primary/50 transition-all duration-300 text-sakura-primary font-sans text-[15px] resize-none"
              ></textarea>
            </div>

            <div className="pt-10 flex justify-center">
              <button 
                type="submit"
                className="relative overflow-hidden bg-transparent text-sakura-primary border border-sakura-primary font-sans font-bold text-[12px] tracking-[0.15em] uppercase px-12 py-4 rounded-[8px] hover:shadow-lg hover:shadow-sakura-primary/20 hover:-translate-y-[2px] transition-all duration-300 ease-out group cursor-pointer"
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
                  Submit Message
                </span>
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
