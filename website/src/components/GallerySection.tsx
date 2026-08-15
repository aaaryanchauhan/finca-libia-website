import { useState, useEffect, useCallback } from 'react';
import { photoGalleryCategories } from '../data/villaData';
import { Maximize2, X, ChevronLeft, ChevronRight, Images } from 'lucide-react';

interface GallerySectionProps {
  onOpenPhotos?: () => void;
}

export function GallerySection({ onOpenPhotos }: GallerySectionProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const currentCategory = photoGalleryCategories[activeTab];
  const photos = currentCategory.photos;

  const nextLightbox = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % photos.length);
    }
  }, [lightboxIndex, photos.length]);

  const prevLightbox = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length);
    }
  }, [lightboxIndex, photos.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        nextLightbox();
      } else if (e.key === 'ArrowLeft') {
        prevLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, nextLightbox, prevLightbox]);

  return (
    <section id="gallery" className="relative bg-ink-900 px-6 py-24 lg:px-12 border-b border-ink-700/60">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest-3 text-champagne-400 font-medium">
            Visual Tour
          </p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-ivory-50">
            Estate Photo Gallery
          </h2>
          <p className="mt-4 font-serif text-lg font-light italic text-stone-300">
            Explore every corner of Finca Libia prior to your arrival. Click any photo for full high-resolution view.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {photoGalleryCategories.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(idx)}
              className={`no-tap-highlight px-5 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                idx === activeTab
                  ? 'bg-champagne-500 text-ink-900 shadow-md scale-105'
                  : 'bg-ink-800/60 text-ivory-200 hover:bg-ink-700/60'
              }`}
            >
              {cat.name} ({cat.photos.length})
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className="group relative h-72 cursor-pointer overflow-hidden border border-ink-700/50 bg-ink-800 shadow-lg"
            >
              <img
                src={photo}
                alt="Finca Libia"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-ink-900/80 p-3 text-champagne-300 border border-champagne-400/40 backdrop-blur-md">
                  <Maximize2 className="h-5 w-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action for Full Photos Page */}
        {onOpenPhotos && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={onOpenPhotos}
              className="no-tap-highlight inline-flex items-center gap-3 border border-champagne-400/60 bg-champagne-500/10 px-8 py-3.5 text-xs font-medium uppercase tracking-widest-2 text-ivory-50 shadow-xl backdrop-blur-md transition-all hover:bg-champagne-500 hover:text-ink-900"
            >
              <Images className="h-4 w-4 text-champagne-400 group-hover:text-ink-900" />
              <span>View Full Photo Tour</span>
            </button>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-ink-950/98 backdrop-blur-2xl flex items-center justify-center p-4 animate-fade-in">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 z-50 p-3 bg-ink-800/80 text-ivory-100 border border-ink-700 hover:bg-ink-700 transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={prevLightbox}
            className="absolute left-6 p-3 bg-ink-800/80 text-ivory-100 border border-ink-700 hover:bg-ink-700 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="max-w-5xl max-h-[85vh] overflow-hidden shadow-2xl flex flex-col items-center border border-ink-700/80">
            <img
              src={photos[lightboxIndex]}
              alt="Finca Libia Fullscreen"
              className="max-h-[80vh] max-w-full object-contain"
            />
            <div className="w-full bg-ink-900 border-t border-ink-700/80 px-6 py-3 text-center flex justify-between items-center text-xs text-stone-400">
              <span>{currentCategory.name}</span>
              <span>Image {lightboxIndex + 1} of {photos.length} · Use ← → keys to navigate</span>
            </div>
          </div>

          <button
            onClick={nextLightbox}
            className="absolute right-6 p-3 bg-ink-800/80 text-ivory-100 border border-ink-700 hover:bg-ink-700 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
