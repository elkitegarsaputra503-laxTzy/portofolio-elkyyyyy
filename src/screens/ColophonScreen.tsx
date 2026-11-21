import { useState } from 'react';
import { Check, Copy, Mail, MapPin, Phone, Terminal } from 'lucide-react';
import { DESIGN_TOKENS } from '../data/portfolioData';

interface ColophonScreenProps {
  onOpenContact: () => void;
}

export function ColophonScreen({ onOpenContact }: ColophonScreenProps) {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopiedHex(hex);
      setTimeout(() => setCopiedHex(null), 1800);
    } catch {
      setCopiedHex(hex);
      setTimeout(() => setCopiedHex(null), 1800);
    }
  };

  return (
    <div className="w-full max-w-[1240px] mx-auto px-5 lg:px-[5vw] py-10">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[rgba(197,160,101,0.25)]">
        <div>
          <div className="flex items-center gap-2 text-[#C5A065] mb-2">
            <span aria-hidden="true" className="text-xs">✦</span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#E8D5B7]">
              Colophon · Obsidian &amp; Gilt System
            </span>
          </div>
          <h1 className="font-display-anton text-5xl lg:text-6xl uppercase text-[#F4EFE6] leading-[0.94]">
            Design &amp; Specifications
          </h1>
        </div>
        <p className="text-sm text-[#9A9284] max-w-md leading-relaxed">
          Typographic hierarchy, color calibration, academic milestones, and direct transmission
          channels for Edition 01.
        </p>
      </div>

      {/* Typography & Color System */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Typography Specimen */}
        <div className="lg:col-span-6 bg-[#151310] rounded-2xl p-6 lg:p-8 border border-[rgba(197,160,101,0.25)] text-left">
          <span className="text-[10px] uppercase tracking-[0.22em] text-[#C5A065] font-semibold">
            01. Typographic Pairing
          </span>
          <h2 className="font-display-anton text-3xl uppercase text-[#F4EFE6] mt-2 mb-6">
            Anton + Plus Jakarta Sans
          </h2>

          <div className="space-y-6">
            <div className="p-5 rounded-xl bg-[#0D0C0A] border border-[rgba(244,239,230,0.08)]">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#9A9284] mb-2">
                Display · Anton (400 · Uppercase · Tight Leading)
              </div>
              <div className="font-display-anton text-4xl sm:text-5xl text-[#E8D5B7] uppercase leading-[0.92]">
                Informatics &amp; Design
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#0D0C0A] border border-[rgba(244,239,230,0.08)]">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#9A9284] mb-2">
                Body Prose · Plus Jakarta Sans (400 / 600 / 700)
              </div>
              <p className="text-sm text-[#F4EFE6] leading-relaxed">
                Engineered for clarity on warm obsidian canvases. Pairs crisp legibility at 13–16px
                with tracked uppercase interface labels (0.12em–0.22em).
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0D0C0A] border border-[rgba(244,239,230,0.08)]">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#9A9284] mb-2">
                Signature Flourish · Cormorant Garamond Italic
              </div>
              <div className="font-signature-serif text-3xl text-[#E8D5B7]">Elky Saputra</div>
            </div>
          </div>
        </div>

        {/* Palette Swatches */}
        <div className="lg:col-span-6 bg-[#151310] rounded-2xl p-6 lg:p-8 border border-[rgba(197,160,101,0.25)] text-left">
          <span className="text-[10px] uppercase tracking-[0.22em] text-[#C5A065] font-semibold">
            02. Color Calibration
          </span>
          <h2 className="font-display-anton text-3xl uppercase text-[#F4EFE6] mt-2 mb-6">
            Obsidian &amp; Gilt Swatches
          </h2>

          <div className="space-y-3">
            {DESIGN_TOKENS.map((swatch) => {
              const isCopied = copiedHex === swatch.hex;
              return (
                <button
                  key={swatch.token}
                  type="button"
                  onClick={() => handleCopy(swatch.hex)}
                  className="w-full flex items-center justify-between gap-4 p-3 rounded-xl bg-[#0D0C0A] border border-[rgba(244,239,230,0.08)] hover:border-[#C5A065] transition-colors text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span
                      className="w-10 h-10 rounded-lg border border-[rgba(244,239,230,0.16)] shrink-0"
                      style={{ backgroundColor: swatch.hex }}
                    />
                    <div className="min-w-0">
                      <div className="text-xs font-bold uppercase tracking-[0.06em] text-[#F4EFE6]">
                        {swatch.name}
                      </div>
                      <div className="text-[11px] text-[#9A9284] truncate">{swatch.usage}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#E8D5B7] font-mono shrink-0 tabular-nums">
                    <span>{swatch.hex}</span>
                    {isCopied ? (
                      <Check className="w-3.5 h-3.5 text-[#C5A065]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-[#9A9284]" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Biographical Timeline & Direct Inquiry */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 bg-[#151310] rounded-2xl p-6 lg:p-8 border border-[rgba(197,160,101,0.25)] text-left">
          <span className="text-[10px] uppercase tracking-[0.22em] text-[#C5A065] font-semibold">
            03. Chronology
          </span>
          <h2 className="font-display-anton text-3xl uppercase text-[#F4EFE6] mt-2 mb-6">
            Academic &amp; Leadership Timeline
          </h2>

          <div className="space-y-6">
            {[
              {
                period: '2024 — Present',
                title: 'B.Sc. Informatics Engineering · Institut Teknologi PLN (ITPLN)',
                detail:
                  'Pursuing undergraduate studies in Jakarta Barat with focus on Python algorithms, systems logic, and front-end web architecture.',
              },
              {
                period: '2024',
                title: 'Koordinator Lomba Pramuka Nasional (GAGAK XIX)',
                detail:
                  'Directed committee coordination, logistics scheduling, and scoring operations for 1,000+ participants at Pondok Pesantren Darul Muttaqien.',
              },
              {
                period: '2024',
                title: 'Juara 1 Basket Se-Jabodetabek · Event DMO 7',
                detail:
                  'Led team coordination and match strategy to capture 1st place across competitive Jabodetabek tournament brackets.',
              },
              {
                period: 'Alumnus',
                title: 'Pondok Pesantren Darul Muttaqien · Bogor',
                detail:
                  'Completed foundational education and student leadership tenure within OPDM organizational divisions.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 pb-5 border-b border-[rgba(244,239,230,0.08)] last:border-b-0 last:pb-0"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#C5A065] sm:w-32 shrink-0 tabular-nums">
                  {item.period}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-[#F4EFE6] uppercase tracking-[0.04em]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#9A9284] mt-1 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Inquiry Card */}
        <div className="lg:col-span-5 bg-[#151310] rounded-2xl p-6 lg:p-8 border border-[rgba(197,160,101,0.25)] flex flex-col justify-between text-left">
          <div>
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#C5A065] font-semibold">
              04. Direct Correspondence
            </span>
            <h2 className="font-display-anton text-3xl uppercase text-[#E8D5B7] mt-2 mb-4">
              Muhammad Elky Tegar Saputra
            </h2>
            <p className="text-sm text-[#9A9284] leading-relaxed mb-6">
              Available for front-end internships, Python tooling collaborations, and visual
              identity commissions in Jakarta Barat and remotely.
            </p>

            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-3 text-[#F4EFE6]">
                <Mail className="w-4 h-4 text-[#C5A065] shrink-0" />
                <span>elkitegarsaputra503@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-[#F4EFE6] tabular-nums">
                <Phone className="w-4 h-4 text-[#C5A065] shrink-0" />
                <span>+62 851-7121-2258</span>
              </div>
              <div className="flex items-center gap-3 text-[#F4EFE6]">
                <Terminal className="w-4 h-4 text-[#C5A065] shrink-0" />
                <span>github.com/elkitegarsaputra503-laxTzy</span>
              </div>
              <div className="flex items-center gap-3 text-[#F4EFE6]">
                <MapPin className="w-4 h-4 text-[#C5A065] shrink-0" />
                <span>Jakarta Barat, Indonesia</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[rgba(244,239,230,0.08)]">
            <button
              type="button"
              onClick={onOpenContact}
              className="w-full py-3 rounded-full bg-[#C5A065] text-[#0D0C0A] text-xs uppercase tracking-[0.16em] font-bold hover:bg-[#E8D5B7] transition-colors cursor-pointer"
            >
              Open Inquiry Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
