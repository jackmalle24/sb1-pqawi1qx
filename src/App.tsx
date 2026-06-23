import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Cabinet from './pages/Cabinet';
import Expertises from './pages/Expertises';
import Equipe from './pages/Equipe';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import MentionsLegales from './pages/MentionsLegales';

const App: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <LanguageSwitcher />
      <WhatsAppButton />
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cabinet" element={<Cabinet />} />
          <Route path="/expertises" element={<Expertises />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
