import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { SuitesShowcase } from './components/SuitesShowcase';
import { SuiteDetailModal } from './components/SuiteDetailModal';
import { EstateAmenities } from './components/EstateAmenities';
import { StorySection } from './components/StorySection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import type { InquiryPreFillData } from './components/InquiryModal';
import { DigitalTourModal } from './components/DigitalTourModal';
import type { Suite } from './data/villaData';

export default function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryData, setInquiryData] = useState<InquiryPreFillData | null>(null);
  
  const [isDigitalTourOpen, setIsDigitalTourOpen] = useState(false);
  const [inspectedSuite, setInspectedSuite] = useState<Suite | null>(null);

  const handleOpenInquiry = () => {
    setInquiryData(null);
    setIsInquiryOpen(true);
  };

  const handleReserveSuiteFromModal = (suiteName: string) => {
    setInquiryData({ suiteName });
    setIsInquiryOpen(true);
  };

  const handleCloseInquiry = () => setIsInquiryOpen(false);

  const handleOpenDigitalTour = () => setIsDigitalTourOpen(true);
  const handleCloseDigitalTour = () => setIsDigitalTourOpen(false);

  const handleOpenGallery = () => {
    const galleryEl = document.getElementById('gallery');
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-ink-900 text-ivory-100 selection:bg-champagne-500/30 selection:text-white">
      {/* Glassmorphism Header */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Cinematic Hero */}
      <Hero
        onOpenInquiry={handleOpenInquiry}
        onOpenGallery={handleOpenGallery}
        onOpenDigitalTour={handleOpenDigitalTour}
      />

      {/* Estate Highlights Bar */}
      <StatsBar />

      {/* Master Suites Section */}
      <SuitesShowcase
        onOpenInquiry={handleOpenInquiry}
        onInspectSuite={(suite) => setInspectedSuite(suite)}
      />

      {/* Resort Amenities Showcase */}
      <EstateAmenities onOpenInquiry={handleOpenInquiry} />

      {/* Heritage & Design Story */}
      <StorySection />

      {/* Interactive Photo Gallery */}
      <GallerySection />

      {/* Authentic Guest Testimonials */}
      <ReviewsSection />

      {/* Guest Pre-Arrival FAQ Section */}
      <FaqSection />

      {/* Luxury Footer */}
      <Footer onOpenInquiry={handleOpenInquiry} />

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

      {/* Interactive 15-Stop Digital Tour Modal */}
      <DigitalTourModal
        isOpen={isDigitalTourOpen}
        onClose={handleCloseDigitalTour}
      />
    </div>
  );
}
