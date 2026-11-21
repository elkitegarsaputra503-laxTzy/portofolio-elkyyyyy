import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';
import { EditorialScreen } from './screens/EditorialScreen';
import { WorksScreen } from './screens/WorksScreen';
import { EssaysScreen } from './screens/EssaysScreen';
import { ArchiveScreen } from './screens/ArchiveScreen';
import { ColophonScreen } from './screens/ColophonScreen';
import { ProjectItem, ScreenId } from './data/portfolioData';

const VALID_SCREENS: ScreenId[] = ['editorial', 'works', 'essays', 'archive', 'colophon'];

function getInitialScreen(): ScreenId {
  const hash = window.location.hash.replace('#', '') as ScreenId;
  if (VALID_SCREENS.includes(hash)) return hash;
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '') as ScreenId;
  return VALID_SCREENS.includes(path) ? path : 'editorial';
}

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ScreenId>(getInitialScreen);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '') as ScreenId;
      if (VALID_SCREENS.includes(hash)) {
        setActiveScreen(hash);
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleNavigate = (screen: ScreenId) => {
    setActiveScreen(screen);
    if (window.location.hash !== `#${screen}`) {
      window.history.pushState(null, '', `#${screen}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0D0C0A] text-[#F4EFE6]">
      <Header
        activeScreen={activeScreen}
        onNavigate={handleNavigate}
        onOpenContact={() => setContactOpen(true)}
      />

      <main className="flex-1 w-full pt-20">
        {activeScreen === 'editorial' && (
          <EditorialScreen
            onSelectProject={setSelectedProject}
            onNavigate={handleNavigate}
            onOpenContact={() => setContactOpen(true)}
          />
        )}
        {activeScreen === 'works' && <WorksScreen onSelectProject={setSelectedProject} />}
        {activeScreen === 'essays' && <EssaysScreen />}
        {activeScreen === 'archive' && <ArchiveScreen />}
        {activeScreen === 'colophon' && (
          <ColophonScreen onOpenContact={() => setContactOpen(true)} />
        )}
      </main>

      <Footer onNavigate={handleNavigate} onOpenContact={() => setContactOpen(true)} />

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
