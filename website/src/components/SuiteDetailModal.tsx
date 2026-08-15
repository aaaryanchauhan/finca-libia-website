import { useState } from 'react';
import { X, Bed, Users, Maximize2, Check, ArrowRight, Shield } from 'lucide-react';
import type { Suite } from '../data/villaData';

interface SuiteDetailModalProps {
  suite: Suite | null;
  onClose: () => void;
  onReserveSuite: (suiteName: string) => void;
}

export function SuiteDetailModal({ suite, onClose, onReserveSuite }: SuiteDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'bedroom' | 'bathroom'>('bedroom');
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  if (!suite) return null;

  const currentGallery = activeTab === 'bedroom' ? suite.gallery : (suite.bathroomGallery || suite.gallery);
  const mainPhoto = selectedPhoto || currentGallery[0] || suite.image;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-950/90 backdrop-blur-xl animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-3xl border border-ink-700 bg-ink-800 p-6 sm:p-10 shadow-2xl my-8 text-ivory-100 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-ink-700/80 text-stone-300 hover:text-ivory-50 hover:bg-ink-600 transition-colors"
          aria-label="Close suite detail"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Gallery Viewer */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative h-72 sm:h-96 w-full overflow-hidden rounded-2xl border border-ink-700/60 shadow-xl">
              <img
                src={mainPhoto}
                alt={suite.name}
                className="h-full w-full object-cover transition-all duration-500"
              />
              <div className="absolute top-4 left-4 rounded-full bg-ink-900/80 px-3.5 py-1 text-xs font-medium text-champagne-300 border border-ink-700 backdrop-blur-md">
                {suite.pdfName}
              </div>
            </div>

            {/* Gallery Tabs & Thumbnails */}
            {suite.bathroomGallery && suite.bathroomGallery.length > 0 && (
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setActiveTab('bedroom');
                    setSelectedPhoto(suite.gallery[0]);
                  }}
                  className={`no-tap-highlight rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition-all ${
                    activeTab === 'bedroom'
                      ? 'bg-champagne-500 text-ink-900 shadow-md'
                      : 'bg-ink-700/60 text-ivory-200 hover:bg-ink-700'
                  }`}
                >
                  Bedroom ({suite.gallery.length})
                </button>
                <button
                  onClick={() => {
                    setActiveTab('bathroom');
                    setSelectedPhoto(suite.bathroomGallery![0]);
                  }}
                  className={`no-tap-highlight rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition-all ${
                    activeTab === 'bathroom'
                      ? 'bg-champagne-500 text-ink-900 shadow-md'
                      : 'bg-ink-700/60 text-ivory-200 hover:bg-ink-700'
                  }`}
                >
                  Ensuite Bathroom ({suite.bathroomGallery.length})
                </button>
              </div>
            )}

            {/* Thumbnail Strip */}
            <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-thin">
              {currentGallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPhoto(img)}
                  className={`h-20 w-24 shrink-0 overflow-hidden rounded-xl border transition-all ${
                    mainPhoto === img ? 'border-champagne-400 scale-105 shadow-md' : 'border-ink-700/60 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Suite Specifications */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest-3 text-champagne-400 font-medium">
                Master Suite Specifications
              </span>
              <h2 className="mt-2 font-serif text-3xl font-light text-ivory-50">
                {suite.name}
              </h2>
              <p className="mt-1 font-serif text-base italic text-stone-300">
                {suite.subtitle}
              </p>

              <p className="mt-4 text-xs leading-relaxed text-stone-300 font-light">
                {suite.description}
              </p>

              {/* Spec Pill Grid */}
              <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl bg-ink-900/60 p-4 border border-ink-700/60">
                <div className="flex flex-col items-center text-center">
                  <Maximize2 className="h-4 w-4 text-champagne-400 mb-1" />
                  <span className="text-[10px] uppercase text-stone-400">Size</span>
                  <span className="text-xs font-medium text-ivory-100">{suite.size}</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Bed className="h-4 w-4 text-champagne-400 mb-1" />
                  <span className="text-[10px] uppercase text-stone-400">Bed</span>
                  <span className="text-xs font-medium text-ivory-100">{suite.bed}</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Users className="h-4 w-4 text-champagne-400 mb-1" />
                  <span className="text-[10px] uppercase text-stone-400">Capacity</span>
                  <span className="text-xs font-medium text-ivory-100">{suite.capacity}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-6">
                <h4 className="text-xs uppercase tracking-widest-2 text-stone-400 font-medium mb-3">
                  Key Amenities & Features
                </h4>
                <div className="space-y-2">
                  {suite.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-ivory-100">
                      <Check className="h-4 w-4 text-champagne-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 text-xs text-stone-400">
                    <Shield className="h-4 w-4 text-champagne-400 shrink-0" />
                    <span>Daily Housekeeping & Turndown Service Included</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Reserve Suite CTA */}
            <div className="pt-4 border-t border-ink-700/60 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase text-stone-400 tracking-wider">Inclusive Private Rental</p>
                <p className="text-xs text-champagne-300 font-serif italic">Full Villa Exclusive Access</p>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onReserveSuite(suite.name);
                }}
                className="no-tap-highlight inline-flex items-center gap-2.5 rounded-full bg-champagne-500 px-6 py-3 text-xs font-medium uppercase tracking-widest-2 text-ink-900 shadow-xl transition-all hover:bg-champagne-300 hover:scale-105"
              >
                <span>Inquire Suite</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
