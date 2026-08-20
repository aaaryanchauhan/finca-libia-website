import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { FullBleedImage } from './components/FullBleedImage';
import { StorySection } from './components/StorySection';
import { SuitesShowcase } from './components/SuitesShowcase';
import { SuiteDetailModal } from './components/SuiteDetailModal';
import { WhatThisPlaceOffersSection } from './components/WhatThisPlaceOffersSection';
import { ServicesOnRequestSection } from './components/ServicesOnRequestSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { ReviewsSection } from './components/ReviewsSection';
import { HostSection } from './components/HostSection';
import { Footer } from './components/Footer';
import { DigitalTourModal } from './components/DigitalTourModal';
import { PhotosPage } from './components/PhotosPage';
import { MobileBottomBar } from './components/MobileBottomBar';
import type { Suite } from './data/villaData';

const AIRBNB_URL = 'https://www.airbnb.co.in/rooms/1023470890334383414?locale=en&source_impression_id=p3_1786777674_P3i8I1bGKt_w99PD&review_page_entrypoint=show_all';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'photos'>(() => {
    return window.location.hash === '#photos' || window.location.pathname === '/photos' ? 'photos' : 'home';
  });

  const [isDigitalTourOpen, setIsDigitalTourOpen] = useState(false);
  const [inspectedSuite, setInspectedSuite] = useState<Suite | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#photos' || window.location.pathname === '/photos') {
        setCurrentPage('photos');
      } else if (window.location.hash === '' || window.location.hash === '#estate') {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenPhotos = () => {
    setCurrentPage('photos');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = () => {
    window.open(AIRBNB_URL, '_blank', 'noopener,noreferrer');
  };

  const handleReserveSuiteFromModal = () => {
    window.open(AIRBNB_URL, '_blank', 'noopener,noreferrer');
  };

  const handleOpenDigitalTour = () => setIsDigitalTourOpen(true);
  const handleCloseDigitalTour = () => setIsDigitalTourOpen(false);

  if (currentPage === 'photos') {
    return (
      <div className="min-h-screen bg-ink-950 text-ivory-100 selection:bg-champagne-500/30 selection:text-white pb-16 md:pb-0">
        <PhotosPage onBackToHome={handleBackToHome} onOpenInquiry={handleOpenInquiry} />
        <MobileBottomBar onOpenInquiry={handleOpenInquiry} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink-950 text-ivory-100 selection:bg-champagne-500/30 selection:text-white pb-16 md:pb-0">
      {/* 1. Glassmorphism Navigation */}
      <Navbar onOpenInquiry={handleOpenInquiry} onOpenPhotos={handleOpenPhotos} />

      {/* 2. Hero (Pool image first, 1.8s crossfade, centered text) */}
      <Hero onOpenDigitalTour={handleOpenDigitalTour} />

      {/* 3. Stats Bar (4 items: 3.5 Acres, 6 Suites, 14 Guests, 25 Min from Medellín) */}
      <StatsBar />

      {/* 4. Full-Bleed Image Editorial Moment #1 */}
      <FullBleedImage
        src="/photos/exterior/exterior_10.jpeg"
        alt="Finca Libia Estate Grounds"
        caption="Private 3.5-Acre Mountain Sanctuary"
      />

      {/* 5. About Finca Libia (Light Surface #F4F0E9, 60/40 Asymmetric Split) */}
      <StorySection />

      {/* 6. Suites Showcase (Filmstrip Thumbnail Navigation) */}
      <SuitesShowcase onInspectSuite={(suite) => setInspectedSuite(suite)} />

      {/* 7. Full-Bleed Image Editorial Moment #2 */}
      <FullBleedImage
        src="/photos/courtyard/courtyard_01.jpeg"
        alt="Finca Libia Courtyard & Architecture"
        caption="Contemporary Colombian Architecture"
      />

      {/* 8. Amenities by Category (6 Named Categories) */}
      <WhatThisPlaceOffersSection />

      {/* 9. Available Services On Request */}
      <ServicesOnRequestSection />

      {/* 9. Visual Photo Gallery */}
      <GallerySection onOpenPhotos={handleOpenPhotos} />

      {/* 10. Location Section (Google Maps & Access) */}
      <LocationSection />

      {/* 11. Guest Reviews (Light Surface #F4F0E9, Typographic Pull Quote) */}
      <ReviewsSection />

      {/* 12. Host Profile Section */}
      <HostSection />

      {/* 13. Luxury Footer */}
      <Footer onOpenInquiry={handleOpenInquiry} />

      {/* Sticky Bottom Bar on Mobile */}
      <MobileBottomBar onOpenInquiry={handleOpenInquiry} />

      {/* Suite Details Spotlight Modal */}
      <SuiteDetailModal
        suite={inspectedSuite}
        onClose={() => setInspectedSuite(null)}
        onReserveSuite={handleReserveSuiteFromModal}
      />

      {/* Interactive 18-Stop Digital Tour Modal */}
      <DigitalTourModal
        isOpen={isDigitalTourOpen}
        onClose={handleCloseDigitalTour}
      />
    </div>
  );
}
