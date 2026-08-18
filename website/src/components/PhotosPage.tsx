import { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, X, Calendar } from 'lucide-react';
import { photoTourCategories } from '../data/allPhotosData';

interface PhotosPageProps {
  onBackToHome: () => void;
  onOpenInquiry: () => void;
}

export function PhotosPage({ onBackToHome, onOpenInquiry }: PhotosPageProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Flatten all photos into a single list for global lightbox navigation
  const allPhotosList = photoTourCategories.flatMap((cat) =>
    cat.photos.map((url) => ({ url, category: cat.name }))
  );

  const handleOpenLightbox = (categoryName: string, photoUrl: string) => {
    const foundIdx = allPhotosList.findIndex((item) => item.url === photoUrl && item.category === categoryName);
    if (foundIdx !== -1) {
      setLightboxIndex(foundIdx);
    }
  };

  const handlePrevPhoto = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! === 0 ? allPhotosList.length - 1 : prev! - 1));
    }
  }, [lightboxIndex, allPhotosList.length]);

  const handleNextPhoto = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! === allPhotosList.length - 1 ? 0 : prev! + 1));
    }
  }, [lightboxIndex, allPhotosList.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowLeft') handlePrevPhoto();
      if (e.key === 'ArrowRight') handleNextPhoto();
      if (e.key === 'Escape') setLightboxIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handlePrevPhoto, handleNextPhoto]);

  const scrollToCategory = (catId: string) => {
    const el = document.getElementById(`cat-${catId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-ink-950 text-ivory-100 selection:bg-champagne-500/30">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-ink-900/95 backdrop-blur-md border-b border-ink-700/80 py-4 px-6 lg:px-12 transition-all">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <button
            onClick={onBackToHome}
            className="group flex items-center gap-2 text-xs uppercase tracking-widest-2 text-ivory-200 hover:text-champagne-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Estate</span>
          </button>

          <a href="#" onClick={(e) => { e.preventDefault(); onBackToHome(); }} className="flex flex-col text-center">
            <span className="font-serif text-xl sm:text-2xl font-light tracking-widest-3 text-ivory-50">
              FINCA LIBIA
            </span>
            <span className="text-[9px] uppercase tracking-widest-4 text-champagne-400 font-medium -mt-0.5">
              Complete Photo Tour
            </span>
          </a>

          <button
            onClick={onOpenInquiry}
            className="flex items-center gap-2 border border-champagne-400/50 bg-champagne-500/10 px-4 py-2 text-xs font-medium uppercase tracking-widest text-ivory-50 backdrop-blur-md shadow-lg transition-all hover:bg-champagne-500 hover:text-ink-900"
          >
            <Calendar className="h-3.5 w-3.5 text-champagne-400 group-hover:text-ink-900" />
            <span>Book Now</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-6 lg:px-12 py-10 space-y-12">
        {/* Top "Photo tour" Jump Grid */}
        <section className="space-y-4">
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-ivory-50">
            Photo tour
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-3">
            {photoTourCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className="group flex flex-col text-left border border-ink-700/60 bg-ink-900/60 transition-all hover:border-champagne-400/60 hover:scale-[1.02] active:scale-95 shadow-md"
              >
                <div className="w-full aspect-[16/10] overflow-hidden bg-ink-800">
                  <img
                    src={cat.coverImage}
                    alt={cat.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-2">
                  <span className="font-serif text-xs font-medium text-ivory-100 group-hover:text-champagne-300 transition-colors block truncate">
                    {cat.name}
                  </span>
                  <span className="text-[10px] text-stone-400 font-light block">
                    {cat.photos.length} photo{cat.photos.length > 1 ? 's' : ''}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Detailed Category Sections in Exact Order */}
        <div className="space-y-14 pt-4">
          {photoTourCategories.map((cat) => (
            <section key={cat.id} id={`cat-${cat.id}`} className="scroll-mt-24 space-y-4 border-t border-ink-800/80 pt-8">
              <div className="flex items-baseline justify-between">
                <h2 className="font-serif text-2xl sm:text-3xl font-light text-ivory-50">
                  {cat.name}
                </h2>
                <span className="text-xs text-stone-400 font-light">
                  {cat.photos.length} photo{cat.photos.length > 1 ? 's' : ''}
                </span>
              </div>

              {/* Seamless Masonry Layout: Preserves exact real shapes (vertical & landscape) while packing tightly with ZERO empty gaps */}
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {cat.photos.map((photoUrl, idx) => (
                  <div
                    key={photoUrl}
                    onClick={() => handleOpenLightbox(cat.name, photoUrl)}
                    className="break-inside-avoid group relative overflow-hidden border border-ink-700/60 bg-ink-900 cursor-pointer shadow-lg transition-all duration-300 hover:border-champagne-400/60 hover:shadow-2xl"
                  >
                    <img
                      src={photoUrl}
                      alt={`${cat.name} ${idx + 1}`}
                      className="w-full h-auto block object-contain transition-transform duration-500 group-hover:scale-102"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-ink-950/0 group-hover:bg-ink-950/30 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-ink-900/90 border border-champagne-400/40 text-champagne-300 text-xs px-4 py-2 uppercase tracking-wider font-medium shadow-xl backdrop-blur-md">
                        Enlarge Photo
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Full-Screen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/98 backdrop-blur-xl animate-fade-in">
          {/* Top Bar */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-50">
            <span className="text-xs uppercase tracking-widest text-champagne-300 font-medium bg-ink-900/80 px-4 py-2 border border-ink-700/60 backdrop-blur-md">
              {allPhotosList[lightboxIndex].category} · Photo {lightboxIndex + 1} of {allPhotosList.length}
            </span>

            <button
              onClick={() => setLightboxIndex(null)}
              className="p-3 bg-ink-900/80 border border-ink-700/80 text-ivory-100 transition-colors hover:bg-ink-800 hover:text-champagne-300 shadow-xl"
              aria-label="Close photo"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevPhoto}
            className="absolute left-6 z-50 p-4 bg-ink-900/80 border border-ink-700/80 text-ivory-100 transition-all hover:bg-champagne-500 hover:text-ink-900 shadow-2xl"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={handleNextPhoto}
            className="absolute right-6 z-50 p-4 bg-ink-900/80 border border-ink-700/80 text-ivory-100 transition-all hover:bg-champagne-500 hover:text-ink-900 shadow-2xl"
            aria-label="Next photo"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Active Lightbox Image */}
          <div className="relative max-h-[85vh] max-w-[90vw] overflow-hidden border border-ink-700/60 shadow-2xl">
            <img
              src={allPhotosList[lightboxIndex].url}
              alt="Finca Libia Photo"
              className="max-h-[85vh] max-w-[90vw] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
