import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import { ESSAYS, EssayItem } from '../data/portfolioData';

const TOPICS = ['All', 'Informatics', 'Leadership', 'Visual Systems'] as const;

export function EssaysScreen() {
  const [selectedTopic, setSelectedTopic] = useState<(typeof TOPICS)[number]>('All');
  const [activeEssay, setActiveEssay] = useState<EssayItem | null>(null);

  const filteredEssays = useMemo(() => {
    if (selectedTopic === 'All') return ESSAYS;
    return ESSAYS.filter((essay) => essay.category === selectedTopic);
  }, [selectedTopic]);

  if (activeEssay) {
    const currentIndex = ESSAYS.findIndex((e) => e.id === activeEssay.id);
    const prevEssay = currentIndex > 0 ? ESSAYS[currentIndex - 1] : null;
    const nextEssay = currentIndex < ESSAYS.length - 1 ? ESSAYS[currentIndex + 1] : null;

    return (
      <article className="w-full max-w-[900px] mx-auto px-5 lg:px-8 py-10 text-left">
        <button
          type="button"
          onClick={() => setActiveEssay(null)}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#E8D5B7] hover:text-[#C5A065] transition-colors mb-8 cursor-pointer font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Essays</span>
        </button>

        <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[#9A9284] mb-4">
          <span className="text-[#C5A065] font-semibold">{activeEssay.category}</span>
          <span aria-hidden="true">·</span>
          <span>{activeEssay.publishedAt}</span>
          <span aria-hidden="true">·</span>
          <span>{activeEssay.readTime}</span>
        </div>

        <h1 className="font-display-anton text-4xl sm:text-5xl uppercase text-[#F4EFE6] leading-[0.98] mb-6">
          {activeEssay.index}. {activeEssay.title}
        </h1>

        <p className="text-base sm:text-lg text-[#E8D5B7] leading-relaxed pb-8 border-b border-[rgba(197,160,101,0.25)]">
          {activeEssay.excerpt}
        </p>

        <div className="my-8 p-6 rounded-2xl bg-[#151310] border border-[rgba(197,160,101,0.25)]">
          <p className="font-signature-serif text-2xl sm:text-3xl text-[#E8D5B7] leading-snug">
            &ldquo;{activeEssay.pullQuote}&rdquo;
          </p>
        </div>

        <div className="space-y-6 max-w-[68ch]">
          {activeEssay.body.map((paragraph, idx) => (
            <p key={idx} className="text-[15px] text-[#D1C5B5] leading-[1.75]">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[rgba(244,239,230,0.08)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {prevEssay ? (
            <button
              type="button"
              onClick={() => setActiveEssay(prevEssay)}
              className="flex items-center gap-3 p-4 rounded-xl bg-[#151310] border border-[rgba(244,239,230,0.08)] hover:border-[#C5A065] text-left transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#C5A065] shrink-0" />
              <div>
                <span className="block text-[10px] uppercase tracking-[0.18em] text-[#9A9284]">
                  Previous Essay
                </span>
                <span className="text-xs font-semibold text-[#F4EFE6]">{prevEssay.title}</span>
              </div>
            </button>
          ) : (
            <div />
          )}

          {nextEssay && (
            <button
              type="button"
              onClick={() => setActiveEssay(nextEssay)}
              className="flex items-center justify-end gap-3 p-4 rounded-xl bg-[#151310] border border-[rgba(244,239,230,0.08)] hover:border-[#C5A065] text-right transition-colors cursor-pointer"
            >
              <div>
                <span className="block text-[10px] uppercase tracking-[0.18em] text-[#9A9284]">
                  Next Essay
                </span>
                <span className="text-xs font-semibold text-[#F4EFE6]">{nextEssay.title}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#C5A065] shrink-0" />
            </button>
          )}
        </div>
      </article>
    );
  }

  return (
    <div className="w-full max-w-[1240px] mx-auto px-5 lg:px-[5vw] py-10">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[rgba(197,160,101,0.25)]">
        <div>
          <div className="flex items-center gap-2 text-[#C5A065] mb-2">
            <span aria-hidden="true" className="text-xs">✦</span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#E8D5B7]">
              Curated Essays · Journal
            </span>
          </div>
          <h1 className="font-display-anton text-5xl lg:text-6xl uppercase text-[#F4EFE6] leading-[0.94]">
            Field Notes &amp; Essays
          </h1>
        </div>
        <p className="text-sm text-[#9A9284] max-w-md leading-relaxed">
          Reflections on software discipline, editorial design typography, Python engineering, and
          youth organizational leadership.
        </p>
      </div>

      {/* Topic Filter */}
      <div className="mt-8 flex flex-wrap items-center gap-1.5 p-1 bg-[#151310] rounded-xl border border-[rgba(244,239,230,0.08)] w-fit">
        {TOPICS.map((topic) => {
          const active = selectedTopic === topic;
          return (
            <button
              key={topic}
              type="button"
              onClick={() => setSelectedTopic(topic)}
              className={`px-3.5 py-2 rounded-lg text-xs uppercase tracking-[0.12em] font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                active
                  ? 'bg-[#C5A065] text-[#0D0C0A]'
                  : 'text-[#9A9284] hover:text-[#F4EFE6]'
              }`}
            >
              {topic}
            </button>
          );
        })}
      </div>

      {/* Essays List */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredEssays.map((essay) => (
          <button
            key={essay.id}
            type="button"
            onClick={() => setActiveEssay(essay)}
            className="group bg-[#151310] hover:bg-[#1D1A15] rounded-2xl p-7 border border-[rgba(244,239,230,0.08)] hover:border-[#C5A065] transition-all duration-300 text-left flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-[#9A9284] mb-4">
                <span className="text-[#C5A065] font-semibold">{essay.category}</span>
                <span>
                  {essay.publishedAt} · {essay.readTime}
                </span>
              </div>

              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-display-anton text-3xl text-[#C5A065] tabular-nums">
                  {essay.index}
                </span>
                <h2 className="font-display-anton text-2xl lg:text-3xl uppercase text-[#F4EFE6] group-hover:text-[#E8D5B7] transition-colors leading-tight">
                  {essay.title}
                </h2>
              </div>

              <p className="text-sm text-[#9A9284] leading-relaxed mb-6">{essay.excerpt}</p>
            </div>

            <div className="pt-4 border-t border-[rgba(244,239,230,0.08)] flex items-center justify-between text-xs">
              <span className="inline-flex items-center gap-2 text-[#E8D5B7] font-semibold uppercase tracking-[0.14em] text-[11px]">
                <BookOpen className="w-3.5 h-3.5 text-[#C5A065]" />
                Read Essay
              </span>
              <ArrowRight className="w-4 h-4 text-[#C5A065] group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
