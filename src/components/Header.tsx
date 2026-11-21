import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ScreenId } from '../data/portfolioData';

interface HeaderProps {
  activeScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  onOpenContact: () => void;
}

const NAV_ITEMS: { id: ScreenId; label: string }[] = [
  { id: 'editorial', label: 'Editorial' },
  { id: 'works', label: 'Works' },
  { id: 'essays', label: 'Essays' },
  { id: 'archive', label: 'Archive' },
  { id: 'colophon', label: 'Colophon' },
];

export function Header({ activeScreen, onNavigate, onOpenContact }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSelect = (screen: ScreenId) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0D0C0A]/90 backdrop-blur-xl border-b border-[rgba(244,239,230,0.08)]">
      <div className="h-20 max-w-[1240px] mx-auto px-5 lg:px-[5vw] flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleSelect('editorial')}
          className="flex items-center gap-3 group text-left whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A065] rounded"
        >
          <span className="w-10 h-10 rounded bg-[#151310] border border-[rgba(197,160,101,0.3)] flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
            <span className="font-display-anton text-xl text-[#C5A065] tracking-wider leading-none">
              ES
            </span>
          </span>
          <span className="font-display-anton text-xl tracking-wide text-[#F4EFE6] uppercase">
            Elky Saputra
          </span>
        </button>

        {/* Zone 2: 5 Screen Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-6 lg:gap-7"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeScreen === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`text-xs uppercase tracking-[0.14em] font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer px-2.5 py-1.5 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A065] ${
                  isActive
                    ? 'bg-[#C5A065] text-[#0D0C0A]'
                    : 'text-[#D1C5B5] hover:text-[#E8D5B7]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded bg-[#151310] border border-[rgba(197,160,101,0.35)] text-xs uppercase tracking-[0.14em] font-semibold text-[#E8D5B7] hover:bg-[#C5A065] hover:text-[#0D0C0A] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A065]"
          >
            Contact
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="md:hidden w-11 h-11 rounded bg-[#151310] border border-[rgba(197,160,101,0.3)] flex items-center justify-center text-[#E8D5B7] hover:border-[#C5A065] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#151310] border-b border-[rgba(197,160,101,0.25)] px-5 py-4">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeScreen === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelect(item.id)}
                  className={`w-full text-left px-3 py-2.5 rounded text-xs uppercase tracking-[0.16em] font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#C5A065] text-[#0D0C0A]'
                      : 'text-[#F4EFE6] hover:bg-[#1D1A15] hover:text-[#E8D5B7]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="mt-2 w-full text-center px-4 py-2.5 rounded border border-[rgba(197,160,101,0.4)] text-xs uppercase tracking-[0.16em] font-semibold text-[#E8D5B7] hover:bg-[#C5A065] hover:text-[#0D0C0A] transition-colors cursor-pointer"
            >
              Send Message
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
