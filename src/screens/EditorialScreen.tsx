import { useState } from 'react';
import {
  ArrowUpRight,
  Code2,
  Globe,
  Brush,
  Megaphone,
  FileText,
  Users,
  Terminal,
  FileCode2,
  PenTool,
  Table2,
  GitBranch,
  Layers,
  GraduationCap,
  Award,
  Trophy,
  BadgeCheck,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Camera,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import {
  PORTRAIT_IMAGE,
  PROJECTS,
  WHAT_I_DO,
  TOOLS,
  TESTIMONIALS,
  ProjectItem,
  ScreenId,
  ToolItem,
} from '../data/portfolioData';
import { ResilientImage } from '../components/ResilientImage';

interface EditorialScreenProps {
  onSelectProject: (project: ProjectItem) => void;
  onNavigate: (screen: ScreenId) => void;
  onOpenContact: () => void;
}

export function EditorialScreen({
  onSelectProject,
  onNavigate,
  onOpenContact,
}: EditorialScreenProps) {
  const [selectedTool, setSelectedTool] = useState<ToolItem>(TOOLS[0]);
  const coverProjects = PROJECTS.filter((p) => p.featuredOnCover);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderWhatIcon = (icon: (typeof WHAT_I_DO)[number]['icon']) => {
    const cls = 'w-5 h-5';
    switch (icon) {
      case 'code':
        return <Code2 className={cls} />;
      case 'web':
        return <Globe className={cls} />;
      case 'brush':
        return <Brush className={cls} />;
      case 'campaign':
        return <Megaphone className={cls} />;
      case 'description':
        return <FileText className={cls} />;
      case 'diversity':
        return <Users className={cls} />;
    }
  };

  const renderToolIcon = (iconName: ToolItem['iconName']) => {
    const cls = 'w-6 h-6';
    switch (iconName) {
      case 'terminal':
        return <Terminal className={cls} />;
      case 'code':
        return <FileCode2 className={cls} />;
      case 'pen':
        return <PenTool className={cls} />;
      case 'table':
        return <Table2 className={cls} />;
      case 'git':
        return <GitBranch className={cls} />;
      case 'layers':
        return <Layers className={cls} />;
    }
  };

  return (
    <div className="flex flex-col w-full text-[#F4EFE6]">
      {/* SECTION 1: HERO MAGAZINE COVER */}
      <section className="relative w-full overflow-hidden flex flex-col justify-between pt-6 pb-12 lg:pb-16 max-w-[1240px] mx-auto px-5 lg:px-[5vw]">
        {/* Sub-bar editorial metadata */}
        <div className="w-full flex flex-wrap items-center justify-between gap-4 pb-6 text-[#9A9284]">
          <div className="text-[10px] uppercase tracking-[0.22em] font-medium">
            ITPLN Informatics · Jakarta Barat
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 lg:w-24 h-px bg-[rgba(197,160,101,0.25)] hidden sm:block" />
            <span className="text-xs uppercase tracking-[0.16em] text-[#E8D5B7] font-semibold tabular-nums">
              Ed. 2026 · Vol. 01
            </span>
          </div>
        </div>

        {/* Monumental Display Headline */}
        <div className="relative w-full flex items-center justify-center select-none z-10 py-1 overflow-hidden">
          <h1 className="font-display-anton text-[clamp(62px,15.2vw,196px)] text-[#E8D5B7] tracking-[0.02em] leading-[0.86] text-center w-full uppercase">
            PORTFOLIO
          </h1>
        </div>

        {/* Midground Cutout & Foreground Editorial Callouts */}
        <div className="relative w-full z-20 -mt-4 sm:-mt-10 lg:-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-8 items-end">
          {/* Left Callout */}
          <div className="lg:col-span-4 z-30 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[#E8D5B7] mb-3 font-semibold">
              <span aria-hidden="true" className="text-[#C5A065]">✦</span>
              <span>Engineering &amp; Code</span>
            </div>

            <h2 className="font-display-anton text-3xl sm:text-4xl uppercase text-[#C5A065] leading-[1.06] tracking-[0.03em] mb-3">
              Informatics
              <br />
              Tech Enthusiast
            </h2>

            <p className="text-[13px] sm:text-sm text-[#9A9284] leading-relaxed max-w-sm">
              Informatics Engineering student at ITPLN passionate about programming, digital design,
              and building impactful tech solutions.
            </p>

            {/* Signature */}
            <div className="mt-5 pt-2 flex flex-col">
              <div className="font-signature-serif text-[#E8D5B7] text-3xl tracking-wide select-none -rotate-2 origin-left">
                Elky Saputra
              </div>
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#9A9284] mt-1">
                Muhammad Elky Tegar Saputra
              </span>
            </div>
          </div>

          {/* Center Portrait Cutout */}
          <div className="lg:col-span-4 z-20 flex justify-center items-end relative min-h-[340px] sm:min-h-[420px] lg:min-h-[470px]">
            <div className="absolute bottom-8 w-56 sm:w-68 h-56 sm:h-68 rounded-full bg-[rgba(197,160,101,0.18)] blur-3xl pointer-events-none -z-10" />
            <div className="relative w-full max-w-[330px] flex items-end justify-center">
              <ResilientImage
                src={PORTRAIT_IMAGE}
                alt="Editorial studio portrait of Muhammad Elky Tegar Saputra in minimalist black attire with warm metallic gold rim lighting"
                fallbackLabel="Muhammad Elky Tegar Saputra"
                isPortrait
                className="w-full max-h-[470px] object-contain drop-shadow-[0_14px_36px_rgba(0,0,0,0.85)] [mask-image:linear-gradient(to_bottom,black_76%,transparent_99%)]"
              />
            </div>
          </div>

          {/* Right Callout */}
          <div className="lg:col-span-4 z-30 flex flex-col lg:items-end text-left lg:text-right">
            <div className="w-10 h-[2px] bg-[#C5A065] mb-4 hidden lg:block" />
            <h3 className="text-sm uppercase text-[#F4EFE6] font-semibold tracking-[0.12em] leading-snug mb-4">
              Logic That Solves.
              <br />
              Design That Inspires.
            </h3>

            <div className="p-4 rounded-xl bg-[#151310] border border-[rgba(244,239,230,0.08)] text-left max-w-[290px] w-full">
              <div className="flex items-center gap-2 text-[#E8D5B7] mb-1.5">
                <Terminal className="w-4 h-4 text-[#C5A065]" />
                <span className="text-[11px] uppercase tracking-[0.14em] font-semibold">
                  Specialization
                </span>
              </div>
              <p className="text-[12px] text-[#9A9284] leading-relaxed">
                Python CLI · Web Systems · Editorial UI · Team Leadership
              </p>
            </div>

            <div className="mt-5 flex items-center gap-2.5 text-[#9A9284]">
              <MapPin className="w-4 h-4 text-[#C5A065] shrink-0" />
              <div className="flex flex-col text-left lg:text-right">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#F4EFE6]">
                  Based in Jakarta Barat
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A065]">
                  Open for Collaboration
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TABLE OF CONTENTS & ABOUT BENTO */}
      <section id="about" className="w-full max-w-[1240px] mx-auto px-5 lg:px-[5vw] py-10">
        <div className="relative bg-[#151310] rounded-[20px] p-6 lg:p-10 border border-[rgba(197,160,101,0.25)] overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Title & Summary */}
            <div className="lg:col-span-4 flex flex-col items-start text-left">
              <div className="flex items-center gap-2 text-[#C5A065] mb-2">
                <span aria-hidden="true" className="text-xs">✦</span>
                <span className="text-[11px] uppercase tracking-[0.16em] text-[#E8D5B7] font-medium">
                  Index Directory
                </span>
              </div>
              <h2 className="font-display-anton text-4xl uppercase text-[#F4EFE6] leading-[1.02] mb-4">
                Table of
                <br />
                Contents
              </h2>
              <p className="text-[13px] text-[#9A9284] leading-relaxed">
                Explore my academic journey in Informatics, technical skills, organizational
                leadership, and digital projects crafted with architectural discipline.
              </p>
            </div>

            {/* 2x3 Interactive Navigation Index */}
            <div className="lg:col-span-5 relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  { num: '01', label: 'About Me', action: () => scrollToSection('about-detail') },
                  { num: '02', label: 'Selected Work', action: () => scrollToSection('projects') },
                  { num: '03', label: 'Focus & Skills', action: () => scrollToSection('skills') },
                  { num: '04', label: 'Tools I Use', action: () => scrollToSection('tools') },
                  { num: '05', label: 'Testimonials', action: () => scrollToSection('testimonials') },
                  { num: '06', label: 'Contact', action: () => scrollToSection('contact') },
                ].map((entry) => (
                  <button
                    key={entry.num}
                    type="button"
                    onClick={entry.action}
                    className="group flex items-baseline gap-3 pb-3 border-b border-[rgba(244,239,230,0.08)] text-left transition-all duration-200 hover:translate-x-1 hover:border-[#C5A065] cursor-pointer"
                  >
                    <span className="font-display-anton text-2xl text-[#C5A065] group-hover:text-[#E8D5B7] transition-colors tabular-nums">
                      {entry.num}
                    </span>
                    <span className="text-xs uppercase text-[#F4EFE6] group-hover:text-[#E8D5B7] transition-colors tracking-[0.14em] font-semibold">
                      {entry.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Gold Vector Ornament */}
            <div className="lg:col-span-3 flex justify-center lg:justify-end items-center opacity-85">
              <svg
                className="w-full max-w-[200px] h-32 lg:h-40 text-[#C5A065]"
                fill="none"
                viewBox="0 0 200 160"
                aria-hidden="true"
              >
                <path
                  className="opacity-40"
                  d="M20 140C50 110 70 50 120 70C170 90 140 20 180 20"
                  stroke="currentColor"
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                />
                <path
                  d="M10 120C40 100 80 120 110 80C140 40 170 60 190 30"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.8"
                />
                <path
                  className="opacity-70"
                  d="M30 150C70 140 100 90 140 100C180 110 160 50 185 45"
                  stroke="#E8D5B7"
                  strokeLinecap="round"
                  strokeWidth="1"
                />
                <circle cx="180" cy="20" fill="#E8D5B7" r="3" />
                <circle cx="190" cy="30" fill="#C5A065" r="2.5" />
                <polygon
                  fill="#C5A065"
                  points="110,75 113,80 118,83 113,86 110,91 107,86 102,83 107,80"
                />
              </svg>
            </div>
          </div>

          {/* Academic Verification Strip */}
          <div
            id="about-detail"
            className="mt-8 pt-6 border-t border-[rgba(244,239,230,0.08)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-2.5 text-[#9A9284] text-left">
              <span aria-hidden="true" className="text-[#C5A065] text-xs mt-1">✦</span>
              <p className="text-[13px] leading-relaxed">
                <strong className="text-[#E8D5B7] font-semibold">
                  Alumnus of Pondok Pesantren Darul Muttaqien Bogor
                </strong>{' '}
                · Currently pursuing B.Sc. in Informatics Engineering at Institut Teknologi PLN
                (ITPLN), Jakarta.
              </p>
            </div>
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.14em] text-[#E8D5B7] whitespace-nowrap shrink-0">
              <span>Verified Scholar</span>
              <span aria-hidden="true" className="text-[#C5A065]">·</span>
              <span className="text-[#9A9284]">Informatics Track</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SELECTED PROJECTS 4-CARD SHOWCASE */}
      <section id="projects" className="w-full max-w-[1240px] mx-auto px-5 lg:px-[5vw] py-10">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span aria-hidden="true" className="text-[#C5A065] text-sm">✦</span>
            <h2 className="font-display-anton text-3xl uppercase text-[#E8D5B7] tracking-wide">
              Selected Projects
            </h2>
          </div>
          <div className="flex-1 h-px bg-[rgba(197,160,101,0.25)] mx-2 sm:mx-6 hidden sm:block" />
          <div className="flex items-center gap-5 shrink-0">
            <button
              type="button"
              onClick={() => onNavigate('works')}
              className="text-[11px] uppercase tracking-[0.18em] text-[#E8D5B7] hover:text-[#C5A065] transition-colors whitespace-nowrap cursor-pointer font-semibold"
            >
              All Works
            </button>
            <a
              href="https://github.com/elkitegarsaputra503-laxTzy"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-[#9A9284] hover:text-[#E8D5B7] transition-colors whitespace-nowrap"
            >
              <span>View GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A065] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coverProjects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => onSelectProject(project)}
              className="group bg-[#151310] hover:bg-[#1D1A15] rounded-xl p-4 border border-[rgba(244,239,230,0.08)] hover:border-[#C5A065] transition-all duration-300 hover:shadow-[0_0_24px_rgba(197,160,101,0.16)] cursor-pointer flex flex-col justify-between text-left"
            >
              <div className="aspect-[16/10] w-full rounded-lg overflow-hidden bg-[#0D0C0A] relative border border-[rgba(244,239,230,0.08)]">
                <ResilientImage
                  src={project.image}
                  alt={project.imageAlt}
                  fallbackLabel={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151310]/85 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2.5 text-[10px] uppercase tracking-[0.18em] text-[#E8D5B7] font-medium">
                  {project.category}
                </span>
              </div>

              <div className="flex items-start gap-3 pt-4 pb-1">
                <span className="font-display-anton text-2xl text-[#C5A065] leading-none tabular-nums">
                  {project.index}
                </span>
                <div className="flex flex-col min-w-0">
                  <h3 className="text-[13px] font-bold uppercase tracking-[0.05em] text-[#F4EFE6] group-hover:text-[#E8D5B7] transition-colors truncate">
                    {project.title}
                  </h3>
                  <span className="text-[11px] text-[#9A9284] mt-1">{project.subtitle}</span>
                  <span className="text-[11px] text-[#C5A065] mt-0.5 font-medium">
                    {project.stack}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* SECTION 4: 3-COLUMN BENTO GRID (WHAT I DO / TOOLS / TESTIMONIALS) */}
      <section id="skills" className="w-full max-w-[1240px] mx-auto px-5 lg:px-[5vw] py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Column 1: What I Do */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <h2 className="font-display-anton text-3xl uppercase text-[#E8D5B7] tracking-wide">
                What I Do
              </h2>
              <span aria-hidden="true" className="text-[#C5A065] text-sm">✦</span>
            </div>
            <div className="w-full h-px bg-[rgba(197,160,101,0.25)] mb-6" />

            <div className="flex flex-col gap-3.5">
              {WHAT_I_DO.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3.5 p-4 rounded-xl bg-[#151310] border border-[rgba(244,239,230,0.08)] hover:border-[rgba(197,160,101,0.4)] transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#211f1d] border border-[rgba(197,160,101,0.25)] flex items-center justify-center text-[#C5A065] shrink-0">
                    {renderWhatIcon(item.icon)}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[13px] font-bold text-[#F4EFE6] uppercase tracking-[0.04em]">
                      {item.title}
                    </span>
                    <span className="text-[11px] text-[#9A9284] mt-0.5">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Tools I Use */}
          <div id="tools" className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <h2 className="font-display-anton text-3xl uppercase text-[#E8D5B7] tracking-wide">
                Tools I Use
              </h2>
              <span aria-hidden="true" className="text-[#C5A065] text-sm">✦</span>
            </div>
            <div className="w-full h-px bg-[rgba(197,160,101,0.25)] mb-6" />

            <div className="bg-[#151310] border border-[rgba(244,239,230,0.08)] rounded-2xl p-6 lg:p-7 flex flex-col justify-between flex-1">
              <div className="grid grid-cols-3 gap-y-7 gap-x-4 place-items-center my-auto py-2">
                {TOOLS.map((tool) => {
                  const isSelected = selectedTool.id === tool.id;
                  return (
                    <button
                      key={tool.id}
                      type="button"
                      onClick={() => setSelectedTool(tool)}
                      className="group flex flex-col items-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A065] rounded-lg p-1"
                    >
                      <div
                        className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-200 ${
                          isSelected
                            ? 'border-[#E8D5B7] bg-gradient-to-b from-[#C5A065]/30 to-[#C5A065]/10 text-[#E8D5B7] shadow-[0_0_16px_rgba(197,160,101,0.3)] -translate-y-0.5'
                            : 'border-[#C5A065] bg-gradient-to-b from-[#C5A065]/20 to-[#C5A065]/5 text-[#C5A065] group-hover:-translate-y-0.5'
                        }`}
                      >
                        {renderToolIcon(tool.iconName)}
                      </div>
                      <span
                        className={`text-xs mt-2.5 font-medium transition-colors ${
                          isSelected
                            ? 'text-[#E8D5B7] font-semibold'
                            : 'text-[#F4EFE6] group-hover:text-[#E8D5B7]'
                        }`}
                      >
                        {tool.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 pt-5 border-t border-[rgba(244,239,230,0.08)] text-left">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#C5A065] mb-1.5">
                  <span>{selectedTool.name}</span>
                  <span className="text-[#9A9284]">{selectedTool.proficiency}</span>
                </div>
                <p className="text-xs text-[#9A9284] leading-relaxed">{selectedTool.summary}</p>
              </div>
            </div>
          </div>

          {/* Column 3: Testimonials */}
          <div id="testimonials" className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <h2 className="font-display-anton text-3xl uppercase text-[#E8D5B7] tracking-wide">
                Testimonials
              </h2>
              <span aria-hidden="true" className="text-[#C5A065] text-sm">✦</span>
            </div>
            <div className="w-full h-px bg-[rgba(197,160,101,0.25)] mb-6" />

            <div className="flex flex-col gap-5 flex-1">
              {TESTIMONIALS.map((t) => (
                <blockquote
                  key={t.id}
                  className="bg-[#151310] border border-[rgba(244,239,230,0.08)] hover:border-[rgba(197,160,101,0.3)] rounded-xl p-5 flex-1 flex flex-col justify-between transition-colors text-left"
                >
                  <p className="text-[13px] text-[#F4EFE6] italic leading-relaxed">{t.quote}</p>
                  <div className="flex items-center gap-3 mt-4 pt-3 border-t border-[rgba(244,239,230,0.08)]">
                    <div className="w-11 h-11 rounded-full border-2 border-[#C5A065] overflow-hidden shrink-0 bg-[#211f1d] flex items-center justify-center text-[#C5A065]">
                      {t.avatar ? (
                        <ResilientImage
                          src={t.avatar}
                          alt={`Portrait of ${t.name}`}
                          fallbackLabel={t.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Users className="w-5 h-5" />
                      )}
                    </div>
                    <div className="flex flex-col text-left">
                      <cite className="not-italic text-xs font-bold uppercase text-[#F4EFE6] tracking-[0.06em]">
                        {t.name}
                      </cite>
                      <span className="text-[11px] text-[#9A9284] mt-0.5">{t.role}</span>
                    </div>
                  </div>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: EDUCATION & ACHIEVEMENTS */}
      <section id="achievements" className="w-full max-w-[1240px] mx-auto px-5 lg:px-[5vw] py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Academic & Leadership */}
          <div className="bg-[#151310] rounded-2xl p-6 lg:p-8 border border-[rgba(197,160,101,0.25)] text-left">
            <div className="flex items-center gap-2 mb-2 text-[#C5A065]">
              <span aria-hidden="true" className="text-xs">✦</span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#E8D5B7]">
                Academic &amp; Leadership
              </span>
            </div>
            <h3 className="font-display-anton text-2xl uppercase text-[#F4EFE6] mb-6 tracking-wide">
              Education &amp; Organizations
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#1D1A15] border border-[rgba(244,239,230,0.08)] flex items-center justify-center text-[#C5A065] shrink-0 mt-0.5">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold uppercase tracking-[0.04em] text-[#F4EFE6] leading-snug">
                    S1 Teknik Informatika — Institut Teknologi PLN (ITPLN)
                  </h4>
                  <p className="text-[11px] text-[#E8D5B7] mt-1 uppercase tracking-[0.12em]">
                    Active Student · Jakarta Barat, Indonesia
                  </p>
                  <p className="text-xs text-[#9A9284] mt-1.5 leading-relaxed">
                    Focus on software algorithms, computing systems, web interface architecture,
                    and data engineering.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-5 border-t border-[rgba(244,239,230,0.08)]">
                <div className="w-9 h-9 rounded-lg bg-[#1D1A15] border border-[rgba(244,239,230,0.08)] flex items-center justify-center text-[#C5A065] shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold uppercase tracking-[0.04em] text-[#F4EFE6] leading-snug">
                    Koordinator Lomba Pramuka Nasional (GAGAK XIX)
                  </h4>
                  <p className="text-[11px] text-[#E8D5B7] mt-1 uppercase tracking-[0.12em]">
                    OPDM · Pesantren Darul Muttaqien, Bogor
                  </p>
                  <p className="text-xs text-[#9A9284] mt-1.5 leading-relaxed">
                    Directed cross-regional committee operations, logistics scheduling, and
                    participant management for 1,000+ national attendees.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Honors & Milestones */}
          <div className="bg-[#151310] rounded-2xl p-6 lg:p-8 border border-[rgba(197,160,101,0.25)] text-left">
            <div className="flex items-center gap-2 mb-2 text-[#C5A065]">
              <span aria-hidden="true" className="text-xs">✦</span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#E8D5B7]">
                Honors &amp; Milestones
              </span>
            </div>
            <h3 className="font-display-anton text-2xl uppercase text-[#F4EFE6] mb-6 tracking-wide">
              Achievements &amp; Highlights
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#1D1A15] border border-[rgba(244,239,230,0.08)] flex items-center justify-center text-[#C5A065] shrink-0 mt-0.5">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold uppercase tracking-[0.04em] text-[#F4EFE6] leading-snug">
                    Juara 1 Basket Se-Jabodetabek — Event DMO 7
                  </h4>
                  <p className="text-[11px] text-[#E8D5B7] mt-1 uppercase tracking-[0.12em]">
                    Competitive Sports · Team Captaincy · Jabodetabek
                  </p>
                  <p className="text-xs text-[#9A9284] mt-1.5 leading-relaxed">
                    Demonstrated high-intensity tactical coordination, discipline, and endurance
                    under pressure across competitive match brackets.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-5 border-t border-[rgba(244,239,230,0.08)]">
                <div className="w-9 h-9 rounded-lg bg-[#1D1A15] border border-[rgba(244,239,230,0.08)] flex items-center justify-center text-[#C5A065] shrink-0 mt-0.5">
                  <BadgeCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold uppercase tracking-[0.04em] text-[#F4EFE6] leading-snug">
                    National Scout Competition Organizer
                  </h4>
                  <p className="text-[11px] text-[#E8D5B7] mt-1 uppercase tracking-[0.12em]">
                    Multi-Regional Event Milestone
                  </p>
                  <p className="text-xs text-[#9A9284] mt-1.5 leading-relaxed">
                    Recognized with official commendation for disciplined execution, security
                    coordination, and ceremonial precision during the national rally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CONTACT & COLLABORATION CTA */}
      <section id="contact" className="w-full max-w-[1240px] mx-auto px-5 lg:px-[5vw] pt-6 pb-8">
        <div className="relative bg-[#151310] rounded-[24px] p-8 lg:p-12 border border-[rgba(197,160,101,0.25)] overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Heading */}
            <div className="lg:col-span-5 flex flex-col text-left">
              <div className="flex items-center gap-2 text-[#C5A065] mb-3">
                <span aria-hidden="true" className="text-xs">✦</span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#E8D5B7]">
                  Direct Channels
                </span>
              </div>
              <h2 className="font-display-anton text-4xl lg:text-5xl uppercase text-[#E8D5B7] leading-[0.96] mb-4">
                Let&apos;s Create
                <br />
                Something
                <br />
                Amazing
              </h2>
              <p className="text-[13px] text-[#9A9284] max-w-sm leading-relaxed">
                Open for internships, front-end development, graphic design commissions, and
                technological collaborations.
              </p>
            </div>

            {/* Direct Contact List */}
            <div className="lg:col-span-4 flex flex-col gap-3 lg:border-l lg:border-r border-[rgba(244,239,230,0.08)] lg:px-7">
              <a
                href="mailto:elkitegarsaputra503@gmail.com"
                className="flex items-center gap-3 group p-2 rounded-lg hover:bg-[#1D1A15] transition-colors"
              >
                <div className="w-9 h-9 rounded-full border border-[rgba(197,160,101,0.3)] flex items-center justify-center text-[#C5A065] group-hover:bg-[#C5A065] group-hover:text-[#0D0C0A] transition-colors shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left min-w-0">
                  <span className="text-[10px] text-[#9A9284] uppercase tracking-[0.16em]">
                    Email Direct
                  </span>
                  <span className="text-xs font-bold text-[#F4EFE6] group-hover:text-[#E8D5B7] truncate">
                    elkitegarsaputra503@gmail.com
                  </span>
                </div>
              </a>

              <a
                href="https://wa.me/6285171212258"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group p-2 rounded-lg hover:bg-[#1D1A15] transition-colors"
              >
                <div className="w-9 h-9 rounded-full border border-[rgba(197,160,101,0.3)] flex items-center justify-center text-[#C5A065] group-hover:bg-[#C5A065] group-hover:text-[#0D0C0A] transition-colors shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left min-w-0">
                  <span className="text-[10px] text-[#9A9284] uppercase tracking-[0.16em]">
                    Phone &amp; WhatsApp
                  </span>
                  <span className="text-xs font-bold text-[#F4EFE6] group-hover:text-[#E8D5B7] tabular-nums">
                    +62 851-7121-2258
                  </span>
                </div>
              </a>

              <a
                href="https://github.com/elkitegarsaputra503-laxTzy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group p-2 rounded-lg hover:bg-[#1D1A15] transition-colors"
              >
                <div className="w-9 h-9 rounded-full border border-[rgba(197,160,101,0.3)] flex items-center justify-center text-[#C5A065] group-hover:bg-[#C5A065] group-hover:text-[#0D0C0A] transition-colors shrink-0">
                  <Terminal className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left min-w-0">
                  <span className="text-[10px] text-[#9A9284] uppercase tracking-[0.16em]">
                    GitHub Profile
                  </span>
                  <span className="text-xs font-bold text-[#F4EFE6] group-hover:text-[#E8D5B7] truncate">
                    github.com/elkitegarsaputra503-laxTzy
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3 p-2">
                <div className="w-9 h-9 rounded-full border border-[rgba(197,160,101,0.3)] flex items-center justify-center text-[#C5A065] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-[#9A9284] uppercase tracking-[0.16em]">
                    Location
                  </span>
                  <span className="text-xs font-bold text-[#F4EFE6]">
                    Jakarta Barat, Indonesia
                  </span>
                </div>
              </div>
            </div>

            {/* Socials & Primary CTA */}
            <div className="lg:col-span-3 flex flex-col items-start lg:items-center text-left lg:text-center">
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#9A9284] mb-4">
                Let&apos;s Connect
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/elki-saputra"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 rounded-full bg-[#C5A065] text-[#0D0C0A] flex items-center justify-center hover:scale-105 hover:bg-[#E8D5B7] transition-all"
                >
                  <Briefcase className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/mhmmdelky"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="w-10 h-10 rounded-full bg-[#C5A065] text-[#0D0C0A] flex items-center justify-center hover:scale-105 hover:bg-[#E8D5B7] transition-all"
                >
                  <Camera className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/elkitegarsaputra503-laxTzy"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-10 h-10 rounded-full bg-[#C5A065] text-[#0D0C0A] flex items-center justify-center hover:scale-105 hover:bg-[#E8D5B7] transition-all"
                >
                  <Code2 className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/6285171212258"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Contact"
                  className="w-10 h-10 rounded-full bg-[#C5A065] text-[#0D0C0A] flex items-center justify-center hover:scale-105 hover:bg-[#E8D5B7] transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C5A065] text-[#0D0C0A] text-xs uppercase tracking-[0.14em] font-bold hover:bg-[#E8D5B7] transition-colors whitespace-nowrap cursor-pointer"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
