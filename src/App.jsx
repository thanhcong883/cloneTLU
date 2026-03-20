import React from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import NewsSection from './components/NewsSection';
import AnnouncementsSection from './components/AnnouncementsSection';
import ImpressiveNumbers from './components/ImpressiveNumbers';
import SectionsGrid from './components/SectionsGrid';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        <HeroCarousel />
        <NewsSection />
        <AnnouncementsSection />
        <ImpressiveNumbers />
        <SectionsGrid />
        <PhotoGallery />
      </main>

      <Footer />
    </div>
  );
}

export default App;
