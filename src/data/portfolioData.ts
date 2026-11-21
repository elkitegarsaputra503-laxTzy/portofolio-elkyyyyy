export type ScreenId = 'editorial' | 'works' | 'essays' | 'archive' | 'colophon';

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: 'Systems' | 'Operations' | 'Creative' | 'Web Dev';
  year: string;
  role: string;
  stack: string;
  summary: string;
  description: string;
  highlights: string[];
  tools: string[];
  image: string;
  imageAlt: string;
  link: string;
  metrics: string;
  featuredOnCover?: boolean;
}

export interface EssayItem {
  id: string;
  index: string;
  title: string;
  category: 'Informatics' | 'Leadership' | 'Visual Systems';
  publishedAt: string;
  readTime: string;
  excerpt: string;
  pullQuote: string;
  body: string[];
}

export interface ArchiveItem {
  id: string;
  index: string;
  title: string;
  year: string;
  medium: string;
  category: 'Code & Systems' | 'Visual Design' | 'Leadership' | 'Web Interface';
  context: string;
  image: string;
  imageAlt: string;
  notes: string;
}

export interface ToolItem {
  id: string;
  name: string;
  iconName: 'terminal' | 'code' | 'pen' | 'table' | 'git' | 'layers';
  category: string;
  proficiency: string;
  summary: string;
}

export const PORTRAIT_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB71diT0fLahg7UYIsiLFEZL-L0YMhqYDkXW-zr7Tts9JP8e-Ge7zBEfL9GlO6lBU7Sz-yjZ9_svX_tCBZqVpTV8qhw3immJWzInAzJ_VkiWmen97RZvuHBx1l0lDPjITTj3pWufaSiCEup2CCi8-VJunodgY_MK7d3s_lJjoJQkXpj7uaAKCPyhGt9AjEdKDQK0aH55_vFQcw4PddUYm32n7jT7epIci_9PbtJglBL';

export const BAGUS_AVATAR_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB54AnnQDd2cgy2oqgey1EFcn5KVjPc5biKPMl3UqIRVIDOcbS-0_PU1KDoKQq-ahTHVVoMBD4ROKzXZuhg12lKILo5t6vT0MBeUtsAzXbXESNWszUxTSEpttYCUhpWYinK8ahxa7mDlNAc9S6feFND_sCTJpH0GCwTTc0EIP5M6KO9c610SGP7GPZqdJL9SH9BLwUtS0cVN6YBIsVjffupFPyPxAxm_uv_P9Gmg0HX';

export const PROJECTS: ProjectItem[] = [
  {
    id: 'python',
    index: '01',
    title: 'Python Automation & CLI',
    subtitle: 'Informatics Coursework',
    category: 'Systems',
    year: '2026',
    role: 'Lead Developer',
    stack: 'Python · VSCode',
    summary:
      'Modular command-line tools and algorithmic file pipelines engineered for academic workflows at ITPLN.',
    description:
      'A collection of algorithmic utility scripts, automated data parsers, and command-line execution pipelines developed for academic assignments at ITPLN. Highlights clean modular programming, predictable CLI flags, and structured system file transformations.',
    highlights: [
      'Designed reusable CSV/JSON batch-parsing utilities with clear validation errors',
      'Implemented deterministic sorting and data-indexing coursework modules',
      'Documented CLI flags and edge-case tests for collaborative peer review',
    ],
    tools: ['Python 3.x', 'Visual Studio Code', 'Git', 'Argparse', 'File I/O Modules'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDnmruMrnBlpqjZmusYtQDEqE2PVdupwAEqMxILYHsxoJIpfsS3NkKPJwcvPEVuN1k7CFmojxuRHj05DGzQuB1WBxBEp3QrtZKYUDwpTvHbavlQh2dw8thnEyvVNfaEAbDlKl7LKXshjkl-ApAf4u_XWqeEWFDGL8VySWGPp5JpO0zgrqpV1rT0Ks9ro2DCA10XzkAxswVaCKvWol7wjJN7qxGNJz5t8QTcWs2i8DuX',
    imageAlt:
      'Editorial visual of modern Python terminal automation CLI interface with golden code syntax highlighting',
    link: 'https://github.com/elkitegarsaputra503-laxTzy',
    metrics: '14 Modular Scripts · 100% CLI',
    featuredOnCover: true,
  },
  {
    id: 'scout',
    index: '02',
    title: 'GAGAK XIX Scout Event',
    subtitle: 'National Competition Lead',
    category: 'Operations',
    year: '2024',
    role: 'Koordinator Lomba Nasional',
    stack: 'Event Mgmt · OPDM',
    summary:
      'Cross-regional competition logistics and live ceremonial operations for 1,000+ national scout attendees.',
    description:
      'Lead coordinator for GAGAK XIX, a premier nationwide scouting tournament held at Pondok Pesantren Darul Muttaqien Bogor. Managed inter-provincial delegation schedules, field logistics, safety contingency protocols, and live competition refereeing.',
    highlights: [
      'Orchestrated multi-division committee schedules for 1,000+ delegates nationwide',
      'Built structured scoring sheets and rapid tally workflows in MS Excel',
      'Awarded commendation for on-time ceremonial and arena execution',
    ],
    tools: [
      'OPDM Administration',
      'Operational Scheduling',
      'Leadership Operations',
      'Logistics Matrix',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuABr0sLIiiBkf1xbbskmh8c8lIvAzEpIe_AYR8n-m1YpsgneRo-M8KAxfGNbqF_KFwHcsYs4JN22M6fhkRaKRc81ShdwCR_5lj0KffC98wJSe5f9YXh04MWPXCCGp361ButQ0IVpZ5jF_zhTmtl3ougk4rgpEnO70G6U963BdoZ6DUNpunkAdHnEVHGNgfutfdDFLdsT1mxI0nC6qNsv0cjLP2GiQnY2vzYJnqh9zHO',
    imageAlt:
      'Large scale national scout competition ceremony under architectural stadium lights with golden stage lighting',
    link: 'https://github.com/elkitegarsaputra503-laxTzy',
    metrics: '1,000+ Participants · National Scale',
    featuredOnCover: true,
  },
  {
    id: 'branding',
    index: '03',
    title: 'Digital Branding & Posters',
    subtitle: 'Visual Content Design',
    category: 'Creative',
    year: '2025',
    role: 'Visual Designer',
    stack: 'Canva · Typography',
    summary:
      'High-contrast editorial posters, event identity systems, and typographic layouts for campus and youth initiatives.',
    description:
      'High-contrast editorial collateral, official event announcements, and social media brand identity systems designed for youth organizations and academic programs, maintaining strict typographic hierarchy and dark-luxury contrast.',
    highlights: [
      'Created cohesive visual kits spanning print banners, stage backdrops, and feeds',
      'Applied condensed display + clean sans pairings for instant readability at distance',
      'Standardized reusable layout grids for student organization media teams',
    ],
    tools: ['Canva Pro', 'Typography Mastery', 'Grid Layouts', 'Color Systems'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBlZiGIjtva5h2k75fm2NWugb8I8w7izBYslM9aLsoo7BQPaiq0Tn0BJXD8sJomaPu7tX4TFiuGvB529cW0Gv3yPoouQX1yP2yXiMdHP7ght4gukOIgRsM9bNXE8HpTPmeuGqfFFhKdXn-dMOUwf2u9D7Xo-Ff7EDUopPJQIRO1KCP6SxEMuOjqZ1mx4v9I6Nivklq8QuZLoNEN7r4cg1D6qSNTLFZS7UryQISrjSy9',
    imageAlt:
      'High fashion typography poster mockups pinned in an architectural design studio with black and gold compositions',
    link: 'https://github.com/elkitegarsaputra503-laxTzy',
    metrics: '30+ Print & Social Assets',
    featuredOnCover: true,
  },
  {
    id: 'portfolio',
    index: '04',
    title: 'Personal Web Portfolio',
    subtitle: 'Front-End Web Design',
    category: 'Web Dev',
    year: '2026',
    role: 'Designer & Front-End Engineer',
    stack: 'HTML · CSS · JavaScript',
    summary:
      'Dark luxury editorial web publication built around Obsidian & Gilt design tokens and bento spatial structure.',
    description:
      'Dark luxury editorial web portfolio engineered with disciplined layout mathematics. Features bespoke typography scale (Anton & Plus Jakarta Sans), asymmetric bento grid structures, and interactive multi-screen editorial navigation.',
    highlights: [
      'Crafted custom Obsidian (#0D0C0A) and Antique Gold (#C5A065) token architecture',
      'Implemented layered cover spread with responsive cutout framing and hairline rules',
      'Built accessible modal inspection, filterable archives, and zero-clutter reading panes',
    ],
    tools: ['React & TypeScript', 'Tailwind CSS', 'Anton & Plus Jakarta Sans', 'Responsive Viewports'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCym_FIHJVvkpz4_es_XIsQnMAc4r_tgupecLT65PaQ9F892LSU-MnKx2NabSMDvYy0MMm0cnt4LrIfFtrzyK1ykFaMoQnTrrxSt6EDBT4XC8BSbssoprjPCZIrazh2OugVnnEtH__WTnAm0epMsjRX6DDfhgdUrtY1BLQbCy0t7Jiyrz3vNb-ADCU8Y1soJjKSndj2JMs1QjzmziCl8Sc_hL029f1FsEuNrcdcKb2C',
    imageAlt:
      'Editorial mockups of dark luxury responsive web applications displayed on a sleek high resolution monitor',
    link: 'https://github.com/elkitegarsaputra503-laxTzy',
    metrics: '5 Editorial Screens · 100% Responsive',
    featuredOnCover: true,
  },
  {
    id: 'academic-ledger',
    index: '05',
    title: 'Student Schedule & Task Parser',
    subtitle: 'Academic Utility Script',
    category: 'Systems',
    year: '2025',
    role: 'Author',
    stack: 'Python · JSON · Markdown',
    summary:
      'Lightweight Python parser transforming semester syllabi into clean weekly study checklists and deadline reminders.',
    description:
      'Built to streamline weekly ITPLN Informatics coursework tracking. Reads structured syllabus definitions, detects overlapping submission windows, and outputs formatted Markdown summaries ready for terminal or GitHub Gist review.',
    highlights: [
      'Zero external runtime dependencies beyond Python Standard Library',
      'Automatic conflict detection across lab practicums and assignment deadlines',
      'Exports printable weekly digest in under 50ms',
    ],
    tools: ['Python 3.12', 'Dataclasses', 'JSON Schema', 'GitHub'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDnmruMrnBlpqjZmusYtQDEqE2PVdupwAEqMxILYHsxoJIpfsS3NkKPJwcvPEVuN1k7CFmojxuRHj05DGzQuB1WBxBEp3QrtZKYUDwpTvHbavlQh2dw8thnEyvVNfaEAbDlKl7LKXshjkl-ApAf4u_XWqeEWFDGL8VySWGPp5JpO0zgrqpV1rT0Ks9ro2DCA10XzkAxswVaCKvWol7wjJN7qxGNJz5t8QTcWs2i8DuX',
    imageAlt: 'Terminal automation workflow in dark obsidian and gilt theme',
    link: 'https://github.com/elkitegarsaputra503-laxTzy',
    metrics: 'Zero Dependencies · <50ms Parse',
    featuredOnCover: false,
  },
  {
    id: 'dmo7-captaincy',
    index: '06',
    title: 'DMO 7 Championship Roster & Tactics',
    subtitle: 'Competitive Team Operations',
    category: 'Operations',
    year: '2024',
    role: 'Team Captain',
    stack: 'Tactics · Coordination',
    summary:
      'Led basketball squad to 1st Place Se-Jabodetabek through structured rotation planning and match analysis.',
    description:
      'Captured Juara 1 Basket Se-Jabodetabek at Event DMO 7. Beyond physical execution on the court, coordinated practice drills, opponent matchup breakdowns, and calm timeout communication during elimination rounds.',
    highlights: [
      'Secured 1st Place across competitive Jabodetabek bracket',
      'Structured player rotation metrics and defensive switch calls',
      'Built lasting cross-team chemistry transferable to tech squad leadership',
    ],
    tools: ['Match Analysis', 'Team Leadership', 'Rotation Planning'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuABr0sLIiiBkf1xbbskmh8c8lIvAzEpIe_AYR8n-m1YpsgneRo-M8KAxfGNbqF_KFwHcsYs4JN22M6fhkRaKRc81ShdwCR_5lj0KffC98wJSe5f9YXh04MWPXCCGp361ButQ0IVpZ5jF_zhTmtl3ougk4rgpEnO70G6U963BdoZ6DUNpunkAdHnEVHGNgfutfdDFLdsT1mxI0nC6qNsv0cjLP2GiQnY2vzYJnqh9zHO',
    imageAlt: 'Competitive arena atmosphere under stadium lights',
    link: 'https://github.com/elkitegarsaputra503-laxTzy',
    metrics: '1st Place Se-Jabodetabek',
    featuredOnCover: false,
  },
];

export const ESSAYS: EssayItem[] = [
  {
    id: 'pesantren-to-systems',
    index: '01',
    title: 'From Pesantren Discipline to Systems Architecture',
    category: 'Leadership',
    publishedAt: 'November 2026',
    readTime: '5 min read',
    excerpt:
      'What coordinating 1,000+ participants at GAGAK XIX taught me about state transitions, fallback protocols, and writing resilient code.',
    pullQuote:
      'An event with a thousand moving parts fails for the exact same reason software fails: unguarded assumptions between teams.',
    body: [
      'Before writing my first Python automation script at Institut Teknologi PLN, I learned systems thinking on a grass field in Bogor. Serving as Koordinator Lomba Pramuka Nasional for GAGAK XIX at Pondok Pesantren Darul Muttaqien meant translating broad ceremonial goals into minute-by-minute operational dependencies.',
      'When over a thousand delegates arrive from different provinces, ambiguity is expensive. Every registration desk, scoring rubric, and stage cue functions like an API contract: if one division changes its timing format without notifying downstream teams, bottlenecks cascade immediately.',
      'Transitioning into Informatics Engineering made that parallel unmistakable. Good software architecture is quiet operational discipline made explicit in code—clear interfaces, explicit error states, and documentation that respects the next person reading it.',
      'Whether managing a tournament arena or refactoring a command-line parser, the principle stays constant: verify your edge cases before the curtain rises.',
    ],
  },
  {
    id: 'obsidian-typography',
    index: '02',
    title: 'Why Condensed Editorial Typography Works for Engineers',
    category: 'Visual Systems',
    publishedAt: 'October 2026',
    readTime: '4 min read',
    excerpt:
      'Balancing monumental Anton display headlines with warm obsidian surfaces and airy Plus Jakarta Sans body prose.',
    pullQuote:
      'Typography is the architecture of attention—scale creates authority, while whitespace creates room to think.',
    body: [
      'Most developer portfolios converge on the same template: a cool gray gradient, floating pill tags, and generic sans-serif headings. While functional, they rarely communicate deliberate taste or visual restraint.',
      'Drawing from print magazines and architectural monographs changes the dynamic. Pairing a tall, condensed display face like Anton at tight line-heights against Plus Jakarta Sans creates immediate hierarchy without needing loud gradients or animation clutter.',
      'Dark surfaces require extra care. Pure black (#000000) feels harsh and clinical; shifting the base canvas slightly warm (#0D0C0A) and pairing it with cream text (#F4EFE6) and muted bronze-gold accents (#C5A065) maintains WCAG contrast while evoking quiet print craft.',
      'When every decorative badge is stripped away, what remains is proportion, alignment, and honest work.',
    ],
  },
  {
    id: 'clean-python-cli',
    index: '03',
    title: 'Structuring Clean Python CLI Pipelines for Coursework',
    category: 'Informatics',
    publishedAt: 'September 2026',
    readTime: '6 min read',
    excerpt:
      'Turning one-off campus scripts into composable, readable modules using Python standard library primitives.',
    pullQuote:
      'A script written cleanly for today’s lab assignment becomes tomorrow’s reusable utility.',
    body: [
      'Early programming assignments often encourage quick monolithic scripts—everything inside a single file with hardcoded paths and print statements. They pass once, then become unreadable two weeks later.',
      'By separating input parsing (argparse), pure transformation functions, and output formatting, even small Informatics coursework scripts become effortless to test and extend. Using Python dataclasses makes intermediate data shapes explicit rather than hiding meaning inside nested dictionaries.',
      'Paired with clear terminal tables and predictable exit codes, command-line utilities can feel just as refined and intentional as a graphical web interface.',
    ],
  },
  {
    id: 'court-to-code',
    index: '04',
    title: 'Tempo, Communication, and Team Dynamics from DMO 7',
    category: 'Leadership',
    publishedAt: 'August 2026',
    readTime: '4 min read',
    excerpt:
      'Lessons in calm execution under bracket pressure from winning Juara 1 Basket Se-Jabodetabek.',
    pullQuote:
      'In the final two minutes of a tied match, clarity beats volume every single time.',
    body: [
      'Winning first place at Event DMO 7 across Jabodetabek taught our squad that talent alone rarely survives bracket pressure. What carried us through tight fourth quarters was shared trust and concise communication.',
      'The exact same dynamic applies to group engineering projects and student committees. When deadlines compress, teams do not need frantic messages—they need clear ownership, calm status checks, and willingness to cover a teammate’s blind spot.',
      'Disciplined preparation before game day is what buys composure when the clock is ticking.',
    ],
  },
];

export const ARCHIVE_ITEMS: ArchiveItem[] = [
  {
    id: 'arch-01',
    index: '01',
    title: 'Studio Editorial Cutout — Edition 01',
    year: '2026',
    medium: 'Photography & Lighting Direction',
    category: 'Visual Design',
    context: 'Cover Portrait · Jakarta Barat',
    image: PORTRAIT_IMAGE,
    imageAlt: 'Studio portrait of Muhammad Elky Tegar Saputra with warm gold rim lighting',
    notes:
      'Minimalist studio portrait framed with warm metallic rim lighting and seamless obsidian floor gradient.',
  },
  {
    id: 'arch-02',
    index: '02',
    title: 'Python CLI Syntax & Pipeline Concept',
    year: '2026',
    medium: 'Systems & Terminal Tooling',
    category: 'Code & Systems',
    context: 'ITPLN Informatics Coursework',
    image: PROJECTS[0].image,
    imageAlt: 'Python CLI interface visualization',
    notes:
      'Visual documentation for modular command-line parsing tools built during Informatics coursework.',
  },
  {
    id: 'arch-03',
    index: '03',
    title: 'GAGAK XIX Night Arena Assembly',
    year: '2024',
    medium: 'Live Event Production',
    category: 'Leadership',
    context: 'Pondok Pesantren Darul Muttaqien · Bogor',
    image: PROJECTS[1].image,
    imageAlt: 'GAGAK XIX scout event night ceremony',
    notes:
      'Main ceremonial stage for GAGAK XIX National Scout Competition welcoming 1,000+ participants.',
  },
  {
    id: 'arch-04',
    index: '04',
    title: 'Typographic Poster Series',
    year: '2025',
    medium: 'Print & Social Graphic Design',
    category: 'Visual Design',
    context: 'Brand Identity & Event Collateral',
    image: PROJECTS[2].image,
    imageAlt: 'Typography poster mockups in dark studio',
    notes:
      'Exploration of condensed grotesque titles paired with metallic gold accents for official event posters.',
  },
  {
    id: 'arch-05',
    index: '05',
    title: 'Obsidian Web Architecture System',
    year: '2026',
    medium: 'Front-End Interface Design',
    category: 'Web Interface',
    context: 'Personal Portfolio Edition 01',
    image: PROJECTS[3].image,
    imageAlt: 'Dark luxury web interface displayed on monitor',
    notes:
      'Responsive grid study translating print magazine spreads into accessible dark-mode web components.',
  },
  {
    id: 'arch-06',
    index: '06',
    title: 'ITPLN Peer Collaboration Portrait',
    year: '2026',
    medium: 'Documentary Study',
    category: 'Leadership',
    context: 'Institut Teknologi PLN · Jakarta',
    image: BAGUS_AVATAR_IMAGE,
    imageAlt: 'Portrait of ITPLN Informatics peer Bagus Fitra',
    notes:
      'Peer engineering collaboration across Informatics Engineering group sprints and coursework reviews.',
  },
];

export const WHAT_I_DO = [
  {
    id: 'python',
    title: 'Python & Programming',
    desc: 'Logic building, algorithms & clean code',
    icon: 'code' as const,
  },
  {
    id: 'web',
    title: 'Web Development',
    desc: 'Responsive front-end interfaces (HTML/CSS/JS)',
    icon: 'web' as const,
  },
  {
    id: 'design',
    title: 'Graphic Design',
    desc: 'Event posters, social media & visual layouts',
    icon: 'brush' as const,
  },
  {
    id: 'leadership',
    title: 'Event Leadership',
    desc: 'National-scale event coordinator (GAGAK XIX)',
    icon: 'campaign' as const,
  },
  {
    id: 'office',
    title: 'Office & Documentation',
    desc: 'Structured reporting, Excel & presentations',
    icon: 'description' as const,
  },
  {
    id: 'team',
    title: 'Team Collaboration',
    desc: 'Agile communication & cross-team coordination',
    icon: 'diversity' as const,
  },
];

export const TOOLS: ToolItem[] = [
  {
    id: 'python',
    name: 'Python',
    iconName: 'terminal',
    category: 'Core Language',
    proficiency: 'Algorithmic Logic & CLI',
    summary: 'Primary language for ITPLN Informatics coursework, file automation, and structured data parsing.',
  },
  {
    id: 'vscode',
    name: 'VSCode',
    iconName: 'code',
    category: 'Environment',
    proficiency: 'Daily IDE & Debugging',
    summary: 'Configured with Python linters, TypeScript language server, and streamlined Git diffs.',
  },
  {
    id: 'canva',
    name: 'Canva',
    iconName: 'pen',
    category: 'Visual Layout',
    proficiency: 'Editorial Posters & Kits',
    summary: 'Rapid production of event identities, typographic posters, and social media collateral.',
  },
  {
    id: 'office',
    name: 'MS Office',
    iconName: 'table',
    category: 'Operations',
    proficiency: 'Excel & Documentation',
    summary: 'Competition scoring matrices, operational scheduling, and executive slide decks.',
  },
  {
    id: 'github',
    name: 'GitHub',
    iconName: 'git',
    category: 'Version Control',
    proficiency: 'Repositories & Collaboration',
    summary: 'Branch management, issue tracking, and open-source portfolio publishing.',
  },
  {
    id: 'htmlcss',
    name: 'HTML/CSS',
    iconName: 'layers',
    category: 'Web Standards',
    proficiency: 'Semantic & Responsive UI',
    summary: 'Accessible markup, CSS Grid/Flexbox bento layouts, and Tailwind design token systems.',
  },
];

export const TESTIMONIALS = [
  {
    id: 'bagus',
    quote:
      '“Bekerja sama dengan Elky selalu menyenangkan. Dia tipe rekan yang sangat komunikatif, teliti dalam mengerjakan tugas, dan selalu punya solusi kreatif di setiap proyek kampus.”',
    name: 'Bagus Fitra',
    role: 'Rekan Mahasiswa Teknik Informatika, ITPLN',
    avatar: BAGUS_AVATAR_IMAGE,
  },
  {
    id: 'opdm',
    quote:
      '“Kepemimpinan Elky sebagai koordinator acara nasional sangat terstruktur. Ia mampu menjaga kekompakan tim di bawah tekanan hingga acara berjalan sukses.”',
    name: 'Rekan Panitia OPDM',
    role: 'Organisasi Pelajar Darul Muttaqien (GAGAK XIX)',
    avatar: null,
  },
];

export const DESIGN_TOKENS = [
  { name: 'Base Canvas', token: 'bg-base', hex: '#0D0C0A', usage: 'Full-bleed editorial substrate' },
  { name: 'Elevated Surface', token: 'bg-card', hex: '#151310', usage: 'Bento panels & showcase cards' },
  { name: 'Hover Surface', token: 'bg-card-hover', hex: '#1D1A15', usage: 'Interactive card elevation' },
  { name: 'Antique Gold', token: 'gold-primary', hex: '#C5A065', usage: 'Index numerals, glyphs & CTAs' },
  { name: 'Champagne Light', token: 'gold-light', hex: '#E8D5B7', usage: 'Hero display headlines & highlights' },
  { name: 'Cream Ink', token: 'text-main', hex: '#F4EFE6', usage: 'Primary readable prose' },
  { name: 'Warm Taupe', token: 'text-muted', hex: '#9A9284', usage: 'Metadata, captions & labels' },
];
