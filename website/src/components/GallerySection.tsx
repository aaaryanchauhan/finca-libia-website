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
    <section id="gallery" className="relative bg-ink-950 px-6 md:px-16 lg:px-24 py-28 border-b border-ivory-200/10">
      <div className="mx-auto max-w-7xl">
        {/* Asymmetric Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-[#E8E2D6]/70 font-medium mb-3">
            Visual Directory
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-ivory-50 leading-tight">
            Estate Photo Gallery
          </h2>
          <p className="mt-4 font-sans text-sm sm:text-base font-light text-stone-300 leading-relaxed">
            Explore every corner of Finca Libia prior to your arrival. Select any photo for full high-resolution viewing.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-12 flex flex-wrap gap-3">
          {photoGalleryCategories.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(idx)}
              className={`no-tap-highlight px-5 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-all cursor-pointer ${
                idx === activeTab
                  ? 'border border-ivory-200/40 bg-ink-900 text-ivory-50'
                  : 'border border-ivory-200/10 bg-ink-950 text-stone-400 hover:text-ivory-200'
              }`}
            >
              {cat.name} ({cat.photos.length})
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className="group relative h-72 cursor-pointer overflow-hidden border border-ivory-200/10 bg-ink-900 shadow-lg"
            >
              <img
                src={photo}
                alt="Finca Libia"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-ink-950/80 p-3 text-ivory-100 border border-ivory-200/20 backdrop-blur-md">
                  <Maximize2 className="h-5 w-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Gallery Trigger */}
        {onOpenPhotos && (
          <div className="mt-14 flex justify-start">
            <button
              onClick={onOpenPhotos}
              className="no-tap-highlight inline-flex items-center gap-3 border border-ivory-200/30 bg-ink-900 hover:bg-ink-800 px-8 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-ivory-100 transition-all cursor-pointer"
            >
              <Images className="h-4 w-4 text-[#E8E2D6]" />
              <span>Full High-Res Gallery</span>
            </button>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-ink-950/98 backdrop-blur-2xl flex items-center justify-center p-4 animate-fade-in">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 z-50 p-3 bg-ink-900 text-ivory-100 border border-ivory-200/20 hover:bg-ink-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={prevLightbox}
            className="absolute left-6 p-3 bg-ink-900 text-ivory-100 border border-ivory-200/20 hover:bg-ink-800 transition-colors cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="max-w-5xl max-h-[85vh] overflow-hidden shadow-2xl flex flex-col items-center border border-ivory-200/20">
            <img
              src={photos[lightboxIndex]}
              alt="Finca Libia Fullscreen"
              className="max-h-[80vh] max-w-full object-contain"
            />
            <div className="w-full bg-ink-900 border-t border-ivory-200/20 px-6 py-3 text-center flex justify-between items-center text-xs font-mono text-stone-400">
              <span>{currentCategory.name}</span>
              <span>Image {lightboxIndex + 1} of {photos.length}</span>
            </div>
          </div>

          <button
            onClick={nextLightbox}
            className="absolute right-6 p-3 bg-ink-900 text-ivory-100 border border-ivory-200/20 hover:bg-ink-800 transition-colors cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
