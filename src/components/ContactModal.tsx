import { FormEvent, useEffect, useState } from 'react';
import { X, CheckCircle2, Mail, MessageSquare } from 'lucide-react';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export function ContactModal({ open, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Web Development');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please complete your name, email address, and message.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div className="relative bg-[#151310] border border-[rgba(197,160,101,0.45)] rounded-2xl max-w-lg w-full p-6 lg:p-8 shadow-[0_0_48px_rgba(197,160,101,0.2)]">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close contact dialog"
          className="absolute top-4 right-4 w-9 h-9 rounded-full border border-[rgba(197,160,101,0.3)] flex items-center justify-center text-[#9A9284] hover:text-[#E8D5B7] hover:border-[#C5A065] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-6 text-left">
            <div className="w-12 h-12 rounded-full bg-[#1D1A15] border border-[#C5A065] flex items-center justify-center text-[#C5A065] mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-display-anton text-3xl uppercase text-[#E8D5B7] mb-2">
              Message Prepared
            </h3>
            <p className="text-sm text-[#D1C5B5] leading-relaxed mb-6">
              Thank you, <span className="text-[#F4EFE6] font-semibold">{name}</span>. Your{' '}
              <span className="text-[#E8D5B7]">{topic}</span> inquiry has been logged for{' '}
              <span className="text-[#F4EFE6]">elkitegarsaputra503@gmail.com</span>. You can also
              reach Elky directly via email or WhatsApp below.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:elkitegarsaputra503@gmail.com?subject=${encodeURIComponent(
                  `[${topic}] Portfolio Inquiry from ${name}`
                )}&body=${encodeURIComponent(message)}`}
                className="px-5 py-2.5 rounded-full bg-[#C5A065] text-[#0D0C0A] text-xs uppercase tracking-[0.14em] font-bold hover:bg-[#E8D5B7] transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Open in Email Client</span>
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2.5 rounded-full border border-[rgba(197,160,101,0.3)] text-xs uppercase tracking-[0.14em] font-semibold text-[#D1C5B5] hover:text-[#F4EFE6] cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="text-left">
            <div className="flex items-center gap-2 text-[#C5A065] mb-2">
              <span aria-hidden="true" className="text-xs">✦</span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#E8D5B7]">
                Direct Collaboration
              </span>
            </div>
            <h3
              id="contact-modal-title"
              className="font-display-anton text-3xl uppercase text-[#F4EFE6] mb-2"
            >
              Send a Message
            </h3>
            <p className="text-[13px] text-[#9A9284] mb-5">
              Open for software internships, front-end builds, poster design, and campus partnerships.
            </p>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-[11px] uppercase tracking-[0.14em] text-[#D1C5B5] font-semibold mb-1.5"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Bagus Fitra"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0D0C0A] border border-[rgba(244,239,230,0.12)] text-sm text-[#F4EFE6] placeholder-[#9A9284]/60 focus:outline-none focus:border-[#C5A065]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-[11px] uppercase tracking-[0.14em] text-[#D1C5B5] font-semibold mb-1.5"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organization.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0D0C0A] border border-[rgba(244,239,230,0.12)] text-sm text-[#F4EFE6] placeholder-[#9A9284]/60 focus:outline-none focus:border-[#C5A065]"
                />
              </div>

              <div>
                <span className="block text-[11px] uppercase tracking-[0.14em] text-[#D1C5B5] font-semibold mb-1.5">
                  Inquiry Focus
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {['Web Development', 'Python & CLI', 'Visual Design', 'Event & Org'].map(
                    (item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setTopic(item)}
                        className={`px-3 py-2 rounded-lg text-xs font-medium border text-left transition-colors cursor-pointer ${
                          topic === item
                            ? 'bg-[#C5A065] text-[#0D0C0A] border-[#C5A065] font-semibold'
                            : 'bg-[#0D0C0A] text-[#D1C5B5] border-[rgba(244,239,230,0.1)] hover:border-[rgba(197,160,101,0.4)]'
                        }`}
                      >
                        {item}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-[11px] uppercase tracking-[0.14em] text-[#D1C5B5] font-semibold mb-1.5"
                >
                  Project Brief
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share timeline, scope, or collaboration details..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0D0C0A] border border-[rgba(244,239,230,0.12)] text-sm text-[#F4EFE6] placeholder-[#9A9284]/60 focus:outline-none focus:border-[#C5A065] resize-none"
                />
              </div>

              {error && (
                <p className="text-xs text-[#ffb4ab]" role="alert">
                  {error}
                </p>
              )}

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <a
                  href="https://wa.me/6285171212258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#9A9284] hover:text-[#E8D5B7] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#C5A065]" />
                  <span>WhatsApp: +62 851-7121-2258</span>
                </a>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full bg-[#C5A065] text-[#0D0C0A] text-xs uppercase tracking-[0.14em] font-bold hover:bg-[#E8D5B7] transition-colors cursor-pointer whitespace-nowrap"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
