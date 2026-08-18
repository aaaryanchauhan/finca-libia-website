import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { FullBleedImage } from './components/FullBleedImage';
import { StorySection } from './components/StorySection';
import { SuitesShowcase } from './components/SuitesShowcase';
import { SuiteDetailModal } from './components/SuiteDetailModal';
import { WhatThisPlaceOffersSection } from './components/WhatThisPlaceOffersSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { ReviewsSection } from './components/ReviewsSection';
import { HostSection } from './components/HostSection';
import { RatesCalculatorSection } from './components/RatesCalculatorSection';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import type { InquiryPreFillData } from './components/InquiryModal';
import { DigitalTourModal } from './components/DigitalTourModal';
import { PhotosPage } from './components/PhotosPage';
import { MobileBottomBar } from './components/MobileBottomBar';
import type { Suite } from './data/villaData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'photos'>(() => {
    return window.location.hash === '#photos' || window.location.pathname === '/photos' ? 'photos' : 'home';
  });

  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryData, setInquiryData] = useState<InquiryPreFillData | null>(null);

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
    setInquiryData(null);
    setIsInquiryOpen(true);
  };

  const handleReserveSuiteFromModal = (suiteName: string) => {
    setInquiryData({ suiteName });
    setIsInquiryOpen(true);
  };

  const handleOpenInquiryWithCalculator = (data: { checkIn: string; checkOut: string; guests: string; total: number; selectedAddons: string[] }) => {
    setInquiryData({
      checkIn: data.checkIn,
      checkOut: data.checkOut,
      guests: data.guests,
      message: `Estimated Total: $${data.total.toLocaleString()} USD (Add-ons: ${data.selectedAddons.join(', ')})`,
    });
    setIsInquiryOpen(true);
  };

  const handleCloseInquiry = () => setIsInquiryOpen(false);
  const handleOpenDigitalTour = () => setIsDigitalTourOpen(true);
  const handleCloseDigitalTour = () => setIsDigitalTourOpen(false);

  if (currentPage === 'photos') {
    return (
      <div className="min-h-screen bg-ink-950 text-ivory-100 selection:bg-champagne-500/30 selection:text-white pb-16 md:pb-0">
        <PhotosPage onBackToHome={handleBackToHome} onOpenInquiry={handleOpenInquiry} />

        <InquiryModal
          isOpen={isInquiryOpen}
          onClose={handleCloseInquiry}
          initialData={inquiryData}
        />

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

      {/* 9. Visual Photo Gallery */}
      <GallerySection onOpenPhotos={handleOpenPhotos} />

      {/* 10. Location Section (Google Maps & Access) */}
      <LocationSection />

      {/* 11. Guest Reviews (Light Surface #F4F0E9, Typographic Pull Quote) */}
      <ReviewsSection />

      {/* 12. Host Profile Section */}
      <HostSection />

      {/* 13. Rates & Availability (Rates Block + Estimator) */}
      <RatesCalculatorSection onOpenInquiryWithData={handleOpenInquiryWithCalculator} />

      {/* 14. Luxury Footer */}
      <Footer onOpenInquiry={handleOpenInquiry} />

      {/* Sticky Bottom Bar on Mobile */}
      <MobileBottomBar onOpenInquiry={handleOpenInquiry} />

      {/* Interactive Booking Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={handleCloseInquiry}
        initialData={inquiryData}
      />

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
