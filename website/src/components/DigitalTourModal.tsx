import { useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { websiteTourStops } from '../data/villaData';

interface DigitalTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DigitalTourModal({ isOpen, onClose }: DigitalTourModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const currentStop = websiteTourStops[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === websiteTourStops.length - 1;

  return (
    <div className="fixed inset-0 z-50 bg-ink-950 flex flex-col justify-between overflow-hidden animate-fade-in text-ivory-100">
      {/* Full screen background image */}
      <div className="absolute inset-0 h-full w-full">
        <img
          src={currentStop.image}
          alt={currentStop.title}
          className="h-full w-full object-cover transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/80 via-ink-900/40 to-ink-950/95" />
      </div>

      {/* Top Left Exit Button */}
      <div className="absolute top-6 left-6 z-30">
        <button
          onClick={onClose}
          className="no-tap-highlight flex items-center gap-2 rounded-full border border-ivory-200/30 bg-ink-900/70 px-4 py-2 text-xs font-medium uppercase tracking-widest-2 text-ivory-100 backdrop-blur-md transition-all duration-300 hover:border-champagne-400 hover:bg-champagne-500 hover:text-ink-900 shadow-xl"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Exit Tour</span>
        </button>
      </div>

      {/* Center Content */}
      <div className="relative z-20 flex flex-col items-center justify-center px-6 text-center max-w-2xl mx-auto my-auto pt-16">
        <span className="text-xs uppercase tracking-widest-3 text-champagne-400 font-medium">
          {currentStop.category}
        </span>
        <p className="font-serif text-5xl sm:text-6xl font-light text-champagne-300/90 mt-1">
          Stop {currentStop.number}
        </p>
        <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-light text-ivory-50 hero-text-shadow">
          {currentStop.title}
        </h2>
        <p className="mt-4 font-serif text-base sm:text-lg font-light italic text-ivory-200/90 hero-text-shadow leading-relaxed">
          {currentStop.description}
        </p>
        {currentStop.details && (
          <div className="mt-4 rounded-full border border-champagne-400/30 bg-ink-900/70 px-5 py-2 backdrop-blur-md">
            <p className="text-xs text-champagne-300 font-light">{currentStop.details}</p>
          </div>
        )}
      </div>

      {/* Bottom Bar Controls */}
      <div className="relative z-20 flex items-center justify-between p-6 sm:p-8 border-t border-ivory-200/10 bg-ink-950/80 backdrop-blur-md">
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
          disabled={isFirst}
          className="no-tap-highlight inline-flex items-center gap-2 text-xs uppercase tracking-widest-2 text-ivory-200/80 transition-opacity hover:text-champagne-300 disabled:opacity-30 disabled:pointer-events-none"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Previous</span>
        </button>

        <div className="text-center">
          <p className="text-xs uppercase tracking-widest-2 text-stone-400 font-mono">
            {currentIndex + 1} / {websiteTourStops.length}
          </p>
        </div>

        {isLast ? (
          <button
            onClick={onClose}
            className="no-tap-highlight inline-flex items-center gap-2 text-xs uppercase tracking-widest-2 text-champagne-300 transition-colors hover:text-champagne-200"
          >
            <span>Finish Tour</span>
            <X className="h-4 w-4" />
          </button>
        ) : (
          <button
            onClick={() => setCurrentIndex((prev) => Math.min(websiteTourStops.length - 1, prev + 1))}
            className="no-tap-highlight inline-flex items-center gap-2 text-xs uppercase tracking-widest-2 text-ivory-100 transition-colors hover:text-champagne-300"
          >
            <span>Next Stop</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
