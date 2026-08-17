import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, PackageCheck, Bell, Truck, CreditCard, ShieldCheck, Lock } from 'lucide-react';
import gsap from 'gsap';
import { useToast } from '../components/Toast';

export function OrderPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );
      gsap.fromTo(rightRef.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.1 }
      );
      // Stagger the left panel children
      gsap.fromTo('.left-item',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power2.out', delay: 0.3 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    gsap.to(rightRef.current, {
      scale: 0.98, duration: 0.12, ease: 'power2.in', yoyo: true, repeat: 1,
      onComplete: () => {
        setSubmitted(true);
        showToast(`Thank you, ${form.fullName}! You've been added to the EaseBand priority list.`, 'success');
      },
    });
  };

  const perks = [
    { icon: <PackageCheck size={15} />, label: 'Priority access to the first batch' },
    { icon: <Bell size={15} />,         label: 'Early notification when your product is ready' },
    { icon: <Truck size={15} />,        label: 'Priority shipping' },
    { icon: <CreditCard size={15} />,   label: 'No payment required today' },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col lg:flex-row font-sans"
      style={{ backgroundColor: 'var(--color-sakura-base)' }}
    >
      {/* ─── Left Panel ─── */}
      <div
        ref={leftRef}
        className="relative lg:w-[46%] flex flex-col px-10 py-12 lg:px-14 lg:py-14 overflow-hidden"
        style={{ backgroundColor: '#2D0A11' }}
      >
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 25% 15%, rgba(214,123,147,0.13) 0%, transparent 55%), radial-gradient(ellipse at 80% 85%, rgba(249,168,193,0.07) 0%, transparent 55%)',
        }} />

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="left-item relative z-10 self-start flex items-center gap-2 px-4 py-2 rounded-full border text-[12px] font-semibold tracking-wide transition-all duration-300 hover:bg-white/10 mb-10 cursor-pointer"
          style={{ borderColor: 'rgba(249,246,240,0.22)', color: 'rgba(249,246,240,0.7)' }}
        >
          <ArrowLeft size={13} /> Back
        </button>

        {/* Eyebrow */}
        <p className="left-item relative z-10 text-[11px] font-bold tracking-[0.28em] uppercase mb-4"
          style={{ color: 'var(--color-sakura-secondary)' }}>
          Now Launched
        </p>

        {/* Headline */}
        <h1 className="left-item relative z-10 font-serif text-[36px] md:text-[48px] leading-[1.08] mb-5"
          style={{ color: '#F9F6F0' }}>
          Reserve Your<br />EaseBand
        </h1>

        {/* Sub-headline */}
        <h2 className="left-item relative z-10 font-sans text-[15px] font-semibold mb-4 tracking-wide"
          style={{ color: 'rgba(249,246,240,0.85)' }}>
          The relief you've been waiting for.
        </h2>

        {/* Body copy */}
        <p className="left-item relative z-10 text-[14px] leading-relaxed mb-8 max-w-xs"
          style={{ color: 'rgba(249,246,240,0.58)' }}>
          EaseBand is now launched, and we're preparing the first batch for shipment. Reserve your spot by sharing your details and delivery address with us.
        </p>

        {/* No payment callout */}
        <div className="left-item relative z-10 flex items-start gap-3 rounded-2xl px-5 py-4 mb-8"
          style={{ backgroundColor: 'rgba(214,123,147,0.12)', border: '1px solid rgba(214,123,147,0.22)' }}>
          <ShieldCheck size={16} className="mt-0.5 shrink-0" style={{ color: 'var(--color-sakura-secondary)' }} />
          <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(249,246,240,0.80)' }}>
            <strong style={{ color: '#F9F6F0' }}>No payment is required at this stage.</strong>{' '}
            Once your EaseBand is ready to ship, we'll notify you by email with the next steps.
          </p>
        </div>

        {/* Why Register */}
        <p className="left-item relative z-10 text-[11px] font-bold tracking-[0.22em] uppercase mb-4"
          style={{ color: 'rgba(249,246,240,0.38)' }}>
          Why Register?
        </p>
        <ul className="left-item relative z-10 space-y-3 mb-10">
          {perks.map((p, i) => (
            <li key={i} className="flex items-center gap-3 text-[13px]"
              style={{ color: 'rgba(249,246,240,0.75)' }}>
              <span style={{ color: 'var(--color-sakura-secondary)' }}>{p.icon}</span>
              {p.label}
            </li>
          ))}
        </ul>

        {/* Trust note */}
        <div className="left-item relative z-10 mt-auto pt-6 border-t"
          style={{ borderColor: 'rgba(249,246,240,0.10)' }}>
          <div className="flex items-start gap-2">
            <Lock size={13} className="mt-0.5 shrink-0" style={{ color: 'rgba(249,246,240,0.35)' }} />
            <p className="text-[12px] leading-relaxed" style={{ color: 'rgba(249,246,240,0.38)' }}>
              Your details are collected only to process your EaseBand request and keep you informed about your order and shipment. <strong style={{ color: 'rgba(249,246,240,0.55)' }}>No payment will be taken at this stage.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* ─── Right Panel ─── */}
      <div
        ref={rightRef}
        className="flex-1 overflow-y-auto px-8 py-14 lg:px-14 flex items-start justify-center"
        style={{ backgroundColor: 'var(--color-sakura-base)' }}
      >
        <div className="w-full max-w-lg">
          {!submitted ? (
            <>
              {/* Section heading */}
              <h2 className="font-serif text-[34px] md:text-[42px] leading-none mb-2"
                style={{ color: 'var(--color-sakura-primary)' }}>
                Reserve Your Spot
              </h2>
              <p className="text-[14px] leading-relaxed mb-10"
                style={{ color: 'rgba(45,10,17,0.52)' }}>
                Simply provide your details and delivery address. We'll keep you updated through email once your EaseBand is ready for shipment.
              </p>

              <form onSubmit={handleSubmit} className="space-y-7">
                {/* Full Name */}
                <FormField label="Full Name" name="fullName" type="text" required value={form.fullName} onChange={handleChange} />

                {/* Phone */}
                <FormField label="Phone Number" name="phone" type="tel" required value={form.phone} onChange={handleChange} />

                {/* Email */}
                <FormField label="Email Address" name="email" type="email" required value={form.email} onChange={handleChange} />

                {/* Address */}
                <FormField label="Delivery Address" name="address" type="text" required value={form.address} onChange={handleChange} placeholder="House / Flat / Street" />

                {/* City + State side by side */}
                <div className="grid grid-cols-2 gap-5">
                  <FormField label="City" name="city" type="text" required value={form.city} onChange={handleChange} />
                  <FormField label="State" name="state" type="text" required value={form.state} onChange={handleChange} />
                </div>

                {/* Pincode */}
                <FormField label="Pincode" name="pincode" type="text" required value={form.pincode} onChange={handleChange} placeholder="6-digit PIN" />

                {/* Divider */}
                <div className="pt-2 pb-1">
                  <div className="h-px" style={{ backgroundColor: 'rgba(45,10,17,0.08)' }} />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="relative overflow-hidden w-full font-sans font-bold text-[13px] tracking-[0.18em] uppercase px-8 py-5 rounded-xl cursor-pointer"
                  style={{ border: '1.5px solid var(--color-sakura-primary)', color: 'var(--color-sakura-primary)', backgroundColor: 'transparent' }}
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget.querySelector('.obtn-bg'), { scaleX: 1, transformOrigin: 'left', duration: 0.4, ease: 'power2.out' });
                    gsap.to(e.currentTarget.querySelector('.obtn-text'), { color: '#F9F6F0', duration: 0.3 });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget.querySelector('.obtn-bg'), { scaleX: 0, transformOrigin: 'right', duration: 0.4, ease: 'power2.out' });
                    gsap.to(e.currentTarget.querySelector('.obtn-text'), { clearProps: 'color', duration: 0.3 });
                  }}
                >
                  <div className="obtn-bg absolute inset-0 scale-x-0 origin-left" style={{ backgroundColor: 'var(--color-sakura-primary)' }} />
                  <span className="obtn-text relative z-10 pointer-events-none transition-colors duration-300">
                    Join the EaseBand Priority List
                  </span>
                </button>

                {/* Trust micro-copy */}
                <p className="text-center text-[11px] font-bold tracking-[0.1em] uppercase"
                  style={{ color: 'rgba(45,10,17,0.35)' }}>
                  🔒 Safe &amp; private · No spam, ever · No payment now
                </p>
              </form>
            </>
          ) : (
            /* ─── Success State ─── */
            <div className="text-center py-12">
              <div className="flex justify-center mb-6">
                <CheckCircle2 size={64} strokeWidth={1.2} style={{ color: 'var(--color-sakura-secondary)' }} />
              </div>
              <h2 className="font-serif text-[36px] leading-none mb-4"
                style={{ color: 'var(--color-sakura-primary)' }}>
                You're on the list!
              </h2>
              <p className="text-[15px] leading-relaxed mb-2"
                style={{ color: 'rgba(45,10,17,0.65)' }}>
                Thank you, <strong>{form.fullName}</strong>. We'll reach out at{' '}
                <strong>{form.email}</strong> as soon as your EaseBand is ready to ship.
              </p>
              <p className="text-[13px] mb-10"
                style={{ color: 'rgba(45,10,17,0.42)' }}>
                Shipping to: {form.address}, {form.city}, {form.state} – {form.pincode}
              </p>
              <button
                onClick={() => navigate('/')}
                className="font-sans text-[13px] font-bold tracking-[0.12em] uppercase underline underline-offset-4 transition-opacity hover:opacity-60 cursor-pointer"
                style={{ color: 'var(--color-sakura-primary)' }}
              >
                Return Home
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Reusable Field ─── */
interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

function FormField({ label, name, type, required, value, onChange, placeholder }: FormFieldProps) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={name}
        className="text-[11px] font-bold tracking-[0.18em] uppercase transition-colors duration-200"
        style={{ color: focused ? 'var(--color-sakura-secondary)' : 'rgba(45,10,17,0.42)' }}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        placeholder={placeholder ?? ''}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="bg-transparent py-3 text-[15px] outline-none transition-all duration-300 placeholder:opacity-30"
        style={{
          borderBottom: focused
            ? '1.5px solid var(--color-sakura-secondary)'
            : '1px solid rgba(45,10,17,0.15)',
          color: 'var(--color-sakura-primary)',
          placeholderColor: 'rgba(45,10,17,0.35)',
        }}
      />
    </div>
  );
}
