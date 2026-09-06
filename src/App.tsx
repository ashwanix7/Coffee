import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Home } from './pages/Home';
import { OurStory } from './pages/OurStory';
import { CroustilleClub } from './pages/CroustilleClub';
import { OurMenu } from './pages/OurMenu';
import { WhatsNew } from './pages/WhatsNew';

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/croustille-club" element={<CroustilleClub />} />
          <Route path="/our-menu" element={<OurMenu />} />
          <Route path="/whats-new" element={<WhatsNew />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
