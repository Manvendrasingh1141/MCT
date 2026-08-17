import React, { useEffect, useRef, useState, useCallback, createContext, useContext } from 'react';
import gsap from 'gsap';
import { CheckCircle2, X, AlertCircle, Info } from 'lucide-react';

/* ─── Types ─── */
type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastContextValue {
  showToast: (message: string, type?: ToastType) => void;
}

/* ─── Context ─── */
const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within a <ToastProvider>');
  return ctx;
}

/* ─── Provider ─── */
let nextId = 0;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: ToastType = 'success') => {
    const id = ++nextId;
    setToasts(prev => [...prev, { id, message, type }]);
    // Auto-dismiss after 4.5s
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4500);
  }, []);

  const dismiss = useCallback((id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast container – fixed bottom-right */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none" style={{ maxWidth: 400 }}>
        {toasts.map(t => (
          <ToastItem key={t.id} toast={t} onDismiss={dismiss} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

/* ─── Individual Toast ─── */
function ToastItem({ toast, onDismiss }: { toast: Toast; onDismiss: (id: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);

  const iconMap: Record<ToastType, React.ReactNode> = {
    success: <CheckCircle2 size={18} strokeWidth={2} />,
    error:   <AlertCircle size={18} strokeWidth={2} />,
    info:    <Info size={18} strokeWidth={2} />,
  };

  const colorMap: Record<ToastType, { bg: string; border: string; icon: string; text: string }> = {
    success: {
      bg: '#2D0A11',
      border: 'rgba(214,123,147,0.35)',
      icon: '#D67B93',
      text: '#F9F6F0',
    },
    error: {
      bg: '#3B0A0A',
      border: 'rgba(239,68,68,0.35)',
      icon: '#EF4444',
      text: '#F9F6F0',
    },
    info: {
      bg: '#2D0A11',
      border: 'rgba(214,123,147,0.25)',
      icon: '#F9A8C1',
      text: '#F9F6F0',
    },
  };

  const colors = colorMap[toast.type];

  useEffect(() => {
    // Entrance
    gsap.fromTo(ref.current,
      { y: 30, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.45, ease: 'back.out(1.4)' }
    );

    // Exit before auto-dismiss
    const exitTimer = setTimeout(() => {
      gsap.to(ref.current, {
        y: 20, opacity: 0, scale: 0.95, duration: 0.3, ease: 'power2.in',
      });
    }, 4000);

    return () => clearTimeout(exitTimer);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-auto flex items-start gap-3 px-5 py-4 rounded-2xl shadow-2xl backdrop-blur-md font-sans"
      style={{
        backgroundColor: colors.bg,
        border: `1px solid ${colors.border}`,
        minWidth: 280,
      }}
    >
      <span className="mt-0.5 shrink-0" style={{ color: colors.icon }}>
        {iconMap[toast.type]}
      </span>
      <p className="text-[13px] leading-relaxed flex-1" style={{ color: colors.text }}>
        {toast.message}
      </p>
      <button
        onClick={() => onDismiss(toast.id)}
        className="shrink-0 mt-0.5 cursor-pointer transition-opacity hover:opacity-60"
        style={{ color: 'rgba(249,246,240,0.4)' }}
      >
        <X size={14} />
      </button>
    </div>
  );
}
