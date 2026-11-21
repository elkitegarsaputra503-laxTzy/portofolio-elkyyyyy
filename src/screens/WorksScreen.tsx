import { useMemo, useState } from 'react';
import { ArrowUpRight, Search } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import { ResilientImage } from '../components/ResilientImage';

interface WorksScreenProps {
  onSelectProject: (project: ProjectItem) => void;
}

const CATEGORIES = ['All', 'Systems', 'Operations', 'Creative', 'Web Dev'] as const;

export function WorksScreen({ onSelectProject }: WorksScreenProps) {
  const [activeCategory, setActiveCategory] = useState<(typeof CATEGORIES)[number]>('All');
  const [query, setQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.subtitle.toLowerCase().includes(q) ||
        project.stack.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const featuredLead = PROJECTS[0];

  return (
    <div className="w-full max-w-[1240px] mx-auto px-5 lg:px-[5vw] py-10">
      {/* Screen Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[rgba(197,160,101,0.25)]">
        <div>
          <div className="flex items-center gap-2 text-[#C5A065] mb-2">
            <span aria-hidden="true" className="text-xs">✦</span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#E8D5B7]">
              Selected Works · 2024–2026
            </span>
          </div>
          <h1 className="font-display-anton text-5xl lg:text-6xl uppercase text-[#F4EFE6] leading-[0.94]">
            Index of Projects
          </h1>
        </div>
        <p className="text-sm text-[#9A9284] max-w-md leading-relaxed">
          Case studies spanning Python command-line engineering, front-end editorial systems, visual
          design collateral, and national-scale event operations.
        </p>
      </div>

      {/* Featured Lead Case Study */}
      <div className="mt-10 bg-[#151310] rounded-2xl border border-[rgba(197,160,101,0.25)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
        <div className="lg:col-span-7 bg-[#0D0C0A] relative min-h-[260px]">
          <ResilientImage
            src={featuredLead.image}
            alt={featuredLead.imageAlt}
            fallbackLabel={featuredLead.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:col-span-5 p-6 lg:p-8 flex flex-col justify-between text-left">
          <div>
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-[#9A9284] mb-3">
              <span className="text-[#C5A065] font-semibold">Featured Case Study</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{featuredLead.year}</span>
            </div>
            <h2 className="font-display-anton text-3xl uppercase text-[#E8D5B7] leading-tight mb-3">
              {featuredLead.index}. {featuredLead.title}
            </h2>
            <p className="text-sm text-[#D1C5B5] leading-relaxed mb-5">{featuredLead.description}</p>
            <div className="text-xs text-[#9A9284] mb-6">
              <span className="text-[#F4EFE6] font-semibold">Stack:</span> {featuredLead.tools.join(' · ')}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[rgba(244,239,230,0.08)]">
            <span className="text-[11px] uppercase tracking-[0.14em] text-[#C5A065] tabular-nums">
              {featuredLead.metrics}
            </span>
            <button
              type="button"
              onClick={() => onSelectProject(featuredLead)}
              className="px-4 py-2 rounded-full bg-[#C5A065] text-[#0D0C0A] text-xs uppercase tracking-[0.14em] font-bold hover:bg-[#E8D5B7] transition-colors inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <span>Inspect Case</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#151310] rounded-xl border border-[rgba(244,239,230,0.08)]">
          {CATEGORIES.map((category) => {
            const active = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-2 rounded-lg text-xs uppercase tracking-[0.12em] font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  active
                    ? 'bg-[#C5A065] text-[#0D0C0A]'
                    : 'text-[#9A9284] hover:text-[#F4EFE6]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#9A9284] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter projects or tools..."
            aria-label="Filter projects"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#151310] border border-[rgba(244,239,230,0.08)] text-sm text-[#F4EFE6] placeholder-[#9A9284] focus:outline-none focus:border-[#C5A065]"
          />
        </div>
      </div>

      {/* Works Grid */}
      {filteredProjects.length === 0 ? (
        <div className="mt-10 bg-[#151310] rounded-2xl border border-[rgba(244,239,230,0.08)] p-12 text-center">
          <p className="text-sm text-[#9A9284] mb-4">
            No projects matched &ldquo;{query}&rdquo; in {activeCategory}.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory('All');
              setQuery('');
            }}
            className="px-4 py-2 rounded-full bg-[#C5A065] text-[#0D0C0A] text-xs uppercase tracking-[0.14em] font-bold cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => onSelectProject(project)}
              className="group bg-[#151310] hover:bg-[#1D1A15] rounded-2xl p-5 border border-[rgba(244,239,230,0.08)] hover:border-[#C5A065] transition-all duration-300 flex flex-col justify-between text-left cursor-pointer"
            >
              <div>
                <div className="aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#0D0C0A] border border-[rgba(244,239,230,0.08)] mb-4">
                  <ResilientImage
                    src={project.image}
                    alt={project.imageAlt}
                    fallbackLabel={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-[#9A9284] mb-2">
                  <span className="text-[#C5A065]">{project.category}</span>
                  <span className="tabular-nums">{project.year}</span>
                </div>

                <h3 className="font-display-anton text-2xl uppercase text-[#F4EFE6] group-hover:text-[#E8D5B7] transition-colors mb-2">
                  {project.index}. {project.title}
                </h3>

                <p className="text-[13px] text-[#9A9284] leading-relaxed mb-4">
                  {project.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-[rgba(244,239,230,0.08)] flex items-center justify-between text-xs">
                <span className="text-[#E8D5B7] font-medium">{project.stack}</span>
                <span className="inline-flex items-center gap-1 text-[#C5A065] uppercase tracking-[0.14em] text-[10px] font-bold">
                  Open <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
