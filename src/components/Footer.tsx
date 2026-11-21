import { Mail, MessageSquare, Terminal, MapPin } from 'lucide-react';
import { ScreenId } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenContact: () => void;
}

export function Footer({ onNavigate, onOpenContact }: FooterProps) {
  return (
    <footer className="w-full bg-[#0F0E0C] mt-16 border-t border-[rgba(244,239,230,0.08)]">
      <div className="max-w-[1240px] mx-auto px-5 lg:px-[5vw] pt-14 pb-12">
        <div className="relative bg-[#151310] rounded-xl p-7 lg:p-10 border border-[rgba(197,160,101,0.25)]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 text-[#C5A065] mb-3">
                <span aria-hidden="true" className="text-sm">✦</span>
                <span className="text-[11px] uppercase tracking-[0.16em] font-medium text-[#E8D5B7]">
                  Available for Collaborations
                </span>
              </div>
              <h2 className="font-display-anton text-4xl lg:text-5xl uppercase text-[#F4EFE6] leading-[0.98] max-w-xl">
                Let&apos;s Create Something Amazing
              </h2>
              <p className="text-sm lg:text-base text-[#9A9284] mt-3 max-w-lg leading-relaxed">
                Informatics Engineering at ITPLN · Systems architecture, clean Python code, and editorial web experiences.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="px-5 py-2.5 rounded-full bg-[#C5A065] text-[#0D0C0A] text-xs uppercase tracking-[0.14em] font-bold hover:bg-[#E8D5B7] transition-colors whitespace-nowrap cursor-pointer"
                >
                  Send Message
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('colophon')}
                  className="px-5 py-2.5 rounded-full border border-[rgba(197,160,101,0.3)] text-[#E8D5B7] text-xs uppercase tracking-[0.14em] font-semibold hover:border-[#C5A065] hover:bg-[#1D1A15] transition-colors whitespace-nowrap cursor-pointer"
                >
                  View Colophon
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4 min-w-[260px]">
              <div className="flex flex-col gap-1 text-left">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#9A9284]">
                  Location
                </span>
                <span className="text-[13px] font-bold tracking-[0.04em] text-[#F4EFE6]">
                  Jakarta Barat, Indonesia
                </span>
              </div>

              <div className="flex flex-col gap-1 text-left">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#9A9284]">
                  Email Direct
                </span>
                <a
                  href="mailto:elkitegarsaputra503@gmail.com"
                  className="text-[13px] font-bold tracking-[0.03em] text-[#E8D5B7] hover:text-[#C5A065] transition-colors break-all"
                >
                  elkitegarsaputra503@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <a
                  href="mailto:elkitegarsaputra503@gmail.com"
                  aria-label="Email Muhammad Elky Tegar Saputra"
                  className="w-10 h-10 rounded-full border border-[rgba(197,160,101,0.3)] flex items-center justify-center text-[#C5A065] hover:bg-[#E8D5B7] hover:text-[#0D0C0A] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/6285171212258"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Contact"
                  className="w-10 h-10 rounded-full border border-[rgba(197,160,101,0.3)] flex items-center justify-center text-[#C5A065] hover:bg-[#E8D5B7] hover:text-[#0D0C0A] transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/elkitegarsaputra503-laxTzy"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository"
                  className="w-10 h-10 rounded-full border border-[rgba(197,160,101,0.3)] flex items-center justify-center text-[#C5A065] hover:bg-[#E8D5B7] hover:text-[#0D0C0A] transition-colors"
                >
                  <Terminal className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={() => onNavigate('colophon')}
                  aria-label="View Jakarta Barat Location & Colophon"
                  className="w-10 h-10 rounded-full border border-[rgba(197,160,101,0.3)] flex items-center justify-center text-[#C5A065] hover:bg-[#E8D5B7] hover:text-[#0D0C0A] transition-colors cursor-pointer"
                >
                  <MapPin className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 mt-8 border-t border-[rgba(244,239,230,0.08)] text-center sm:text-left">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#9A9284]">
            © 2026 Muhammad Elky Tegar Saputra. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[#9A9284] text-[10px] uppercase tracking-[0.22em]">
            <span>ITPLN Engineering</span>
            <span aria-hidden="true" className="text-[#C5A065]">✦</span>
            <span>Edition 01</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
