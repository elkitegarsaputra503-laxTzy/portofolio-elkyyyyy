import { useEffect } from 'react';
import { X, ExternalLink, Check } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className="relative bg-[#151310] border border-[rgba(197,160,101,0.45)] rounded-2xl max-w-2xl w-full overflow-hidden shadow-[0_0_48px_rgba(197,160,101,0.2)] max-h-[90vh] flex flex-col">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#0D0C0A]/85 border border-[rgba(197,160,101,0.35)] flex items-center justify-center text-[#F4EFE6] hover:text-[#E8D5B7] hover:border-[#C5A065] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="aspect-[16/9] w-full bg-[#0D0C0A] relative shrink-0 overflow-hidden border-b border-[rgba(244,239,230,0.08)]">
          <ResilientImage
            src={project.image}
            alt={project.imageAlt}
            fallbackLabel={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151310] via-transparent to-transparent opacity-80" />
        </div>

        <div className="p-6 lg:p-8 overflow-y-auto text-left">
          <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-[#9A9284] mb-2">
            <span className="text-[#C5A065]">✦</span>
            <span className="text-[#E8D5B7] font-semibold">{project.subtitle}</span>
            <span aria-hidden="true">·</span>
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{project.year}</span>
          </div>

          <h3
            id="project-modal-title"
            className="font-display-anton text-3xl uppercase text-[#F4EFE6] leading-tight mb-3"
          >
            {project.index}. {project.title}
          </h3>

          <p className="text-sm text-[#D1C5B5] leading-relaxed mb-5">
            {project.description}
          </p>

          <div className="mb-5">
            <h4 className="text-[11px] font-bold text-[#C5A065] uppercase tracking-[0.16em] mb-2.5">
              Key Deliverables &amp; Outcomes
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13px] text-[#F4EFE6]">
                  <Check className="w-4 h-4 text-[#C5A065] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-[#1D1A15] rounded-xl border border-[rgba(244,239,230,0.08)] mb-6">
            <div className="text-[11px] font-bold text-[#C5A065] uppercase tracking-[0.16em] mb-1">
              Architecture &amp; Stack
            </div>
            <p className="text-xs text-[#F4EFE6] tracking-wide">
              {project.tools.join(' · ')}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[rgba(244,239,230,0.08)]">
            <span className="text-[11px] uppercase tracking-[0.14em] text-[#9A9284] tabular-nums">
              {project.metrics}
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded bg-[#211f1d] text-[#D1C5B5] hover:text-[#F4EFE6] text-xs uppercase tracking-[0.14em] font-semibold transition-colors cursor-pointer"
              >
                Close
              </button>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded bg-[#C5A065] text-[#0D0C0A] text-xs uppercase font-bold tracking-[0.14em] hover:bg-[#E8D5B7] transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>View Source</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
