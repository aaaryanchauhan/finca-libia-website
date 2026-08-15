import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { SuitesShowcase } from './components/SuitesShowcase';
import { EstateAmenities } from './components/EstateAmenities';
import { StorySection } from './components/StorySection';
import { GallerySection } from './components/GallerySection';
import { ConciergeSection } from './components/ConciergeSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { DigitalTourModal } from './components/DigitalTourModal';

export default function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isDigitalTourOpen, setIsDigitalTourOpen] = useState(false);

  const handleOpenInquiry = () => setIsInquiryOpen(true);
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
      <SuitesShowcase onOpenInquiry={handleOpenInquiry} />

      {/* Resort Amenities Showcase */}
      <EstateAmenities onOpenInquiry={handleOpenInquiry} />

      {/* Heritage & Design Story */}
      <StorySection />

      {/* Interactive Photo Gallery */}
      <GallerySection />

      {/* Bespoke Private Concierge Services */}
      <ConciergeSection onOpenInquiry={handleOpenInquiry} />

      {/* Authentic Guest Testimonials */}
      <ReviewsSection />

      {/* Luxury Footer */}
      <Footer onOpenInquiry={handleOpenInquiry} />

      {/* Interactive Booking Inquiry Modal */}
      <InquiryModal isOpen={isInquiryOpen} onClose={handleCloseInquiry} />

      {/* Interactive 15-Stop Digital Tour Modal */}
      <DigitalTourModal isOpen={isDigitalTourOpen} onClose={handleCloseDigitalTour} />
    </div>
  );
}
