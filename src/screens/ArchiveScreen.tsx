import { useEffect, useMemo, useState } from 'react';
import { Grid, List, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ARCHIVE_ITEMS, ArchiveItem } from '../data/portfolioData';
import { ResilientImage } from '../components/ResilientImage';

const ARCHIVE_CATEGORIES = [
  'All',
  'Code & Systems',
  'Visual Design',
  'Leadership',
  'Web Interface',
] as const;

export function ArchiveScreen() {
  const [viewMode, setViewMode] = useState<'grid' | 'ledger'>('grid');
  const [category, setCategory] = useState<(typeof ARCHIVE_CATEGORIES)[number]>('All');
  const [lightboxItem, setLightboxItem] = useState<ArchiveItem | null>(null);

  const filteredItems = useMemo(() => {
    if (category === 'All') return ARCHIVE_ITEMS;
    return ARCHIVE_ITEMS.filter((item) => item.category === category);
  }, [category]);

  useEffect(() => {
    if (!lightboxItem) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxItem(null);
      } else if (e.key === 'ArrowRight') {
        const idx = filteredItems.findIndex((i) => i.id === lightboxItem.id);
        if (idx >= 0 && idx < filteredItems.length - 1) {
          setLightboxItem(filteredItems[idx + 1]);
        }
      } else if (e.key === 'ArrowLeft') {
        const idx = filteredItems.findIndex((i) => i.id === lightboxItem.id);
        if (idx > 0) {
          setLightboxItem(filteredItems[idx - 1]);
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxItem, filteredItems]);

  const currentIdx = lightboxItem
    ? filteredItems.findIndex((i) => i.id === lightboxItem.id)
    : -1;

  return (
    <div className="w-full max-w-[1240px] mx-auto px-5 lg:px-[5vw] py-10">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[rgba(197,160,101,0.25)]">
        <div>
          <div className="flex items-center gap-2 text-[#C5A065] mb-2">
            <span aria-hidden="true" className="text-xs">✦</span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#E8D5B7]">
              Architectural Archive · 2024–2026
            </span>
          </div>
          <h1 className="font-display-anton text-5xl lg:text-6xl uppercase text-[#F4EFE6] leading-[0.94]">
            Visual &amp; Event Ledger
          </h1>
        </div>
        <p className="text-sm text-[#9A9284] max-w-md leading-relaxed">
          Contact sheet of studio portraits, CLI visualizations, national scouting ceremonies, and
          editorial graphic studies.
        </p>
      </div>

      {/* Controls */}
      <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#151310] rounded-xl border border-[rgba(244,239,230,0.08)]">
          {ARCHIVE_CATEGORIES.map((cat) => {
            const active = category === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`px-3 py-2 rounded-lg text-xs uppercase tracking-[0.12em] font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  active
                    ? 'bg-[#C5A065] text-[#0D0C0A]'
                    : 'text-[#9A9284] hover:text-[#F4EFE6]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-1 p-1 bg-[#151310] rounded-xl border border-[rgba(244,239,230,0.08)] w-fit">
          <button
            type="button"
            onClick={() => setViewMode('grid')}
            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs uppercase tracking-[0.12em] font-semibold transition-colors cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-[#C5A065] text-[#0D0C0A]'
                : 'text-[#9A9284] hover:text-[#F4EFE6]'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>Gallery</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('ledger')}
            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs uppercase tracking-[0.12em] font-semibold transition-colors cursor-pointer ${
              viewMode === 'ledger'
                ? 'bg-[#C5A065] text-[#0D0C0A]'
                : 'text-[#9A9284] hover:text-[#F4EFE6]'
            }`}
          >
            <List className="w-3.5 h-3.5" />
            <span>Ledger</span>
          </button>
        </div>
      </div>

      {/* Gallery Grid Mode */}
      {viewMode === 'grid' ? (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightboxItem(item)}
              className="group bg-[#151310] hover:bg-[#1D1A15] rounded-2xl p-4 border border-[rgba(244,239,230,0.08)] hover:border-[#C5A065] transition-all duration-300 text-left cursor-pointer flex flex-col justify-between"
            >
              <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#0D0C0A] border border-[rgba(244,239,230,0.08)] mb-4">
                <ResilientImage
                  src={item.image}
                  alt={item.imageAlt}
                  fallbackLabel={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div>
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-[#9A9284] mb-1.5">
                  <span className="text-[#C5A065]">{item.category}</span>
                  <span className="tabular-nums">{item.year}</span>
                </div>
                <h2 className="font-display-anton text-xl uppercase text-[#F4EFE6] group-hover:text-[#E8D5B7] transition-colors">
                  {item.index}. {item.title}
                </h2>
                <p className="text-xs text-[#9A9284] mt-1">{item.context}</p>
              </div>
            </button>
          ))}
        </div>
      ) : (
        /* Chronological Ledger Mode */
        <div className="mt-8 bg-[#151310] rounded-2xl border border-[rgba(197,160,101,0.25)] overflow-hidden">
          <div className="divide-y divide-[rgba(244,239,230,0.08)]">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setLightboxItem(item)}
                className="w-full p-5 lg:p-6 hover:bg-[#1D1A15] transition-colors grid grid-cols-1 md:grid-cols-12 gap-4 items-center text-left cursor-pointer"
              >
                <div className="md:col-span-1 font-display-anton text-2xl text-[#C5A065] tabular-nums">
                  {item.index}
                </div>
                <div className="md:col-span-4">
                  <h2 className="text-sm font-bold uppercase tracking-[0.04em] text-[#F4EFE6]">
                    {item.title}
                  </h2>
                  <span className="text-xs text-[#9A9284]">{item.medium}</span>
                </div>
                <div className="md:col-span-4 text-xs text-[#D1C5B5]">{item.context}</div>
                <div className="md:col-span-2 text-xs uppercase tracking-[0.14em] text-[#C5A065]">
                  {item.category}
                </div>
                <div className="md:col-span-1 text-xs text-[#9A9284] md:text-right tabular-nums">
                  {item.year}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightboxItem(null);
          }}
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
        >
          <div className="relative bg-[#151310] border border-[rgba(197,160,101,0.45)] rounded-2xl max-w-3xl w-full overflow-hidden">
            <button
              type="button"
              onClick={() => setLightboxItem(null)}
              aria-label="Close lightbox"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#0D0C0A]/85 border border-[rgba(197,160,101,0.35)] flex items-center justify-center text-[#F4EFE6] hover:text-[#E8D5B7] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] w-full bg-[#0D0C0A] flex items-center justify-center overflow-hidden">
              <ResilientImage
                src={lightboxItem.image}
                alt={lightboxItem.imageAlt}
                fallbackLabel={lightboxItem.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 lg:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[rgba(244,239,230,0.08)] text-left">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#C5A065] mb-1">
                  {lightboxItem.category} · {lightboxItem.medium} · {lightboxItem.year}
                </div>
                <h3 className="font-display-anton text-2xl uppercase text-[#F4EFE6]">
                  {lightboxItem.index}. {lightboxItem.title}
                </h3>
                <p className="text-xs text-[#9A9284] mt-1">{lightboxItem.notes}</p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  disabled={currentIdx <= 0}
                  onClick={() => currentIdx > 0 && setLightboxItem(filteredItems[currentIdx - 1])}
                  aria-label="Previous artifact"
                  className="w-10 h-10 rounded-full border border-[rgba(197,160,101,0.35)] flex items-center justify-center text-[#E8D5B7] disabled:opacity-30 hover:bg-[#1D1A15] cursor-pointer disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  disabled={currentIdx < 0 || currentIdx >= filteredItems.length - 1}
                  onClick={() =>
                    currentIdx < filteredItems.length - 1 &&
                    setLightboxItem(filteredItems[currentIdx + 1])
                  }
                  aria-label="Next artifact"
                  className="w-10 h-10 rounded-full border border-[rgba(197,160,101,0.35)] flex items-center justify-center text-[#E8D5B7] disabled:opacity-30 hover:bg-[#1D1A15] cursor-pointer disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
