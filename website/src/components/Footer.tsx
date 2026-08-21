import { MapPin, ArrowUp } from 'lucide-react';
import { villaInfo } from '../data/villaData';
import { BrandMonogram } from './BrandMonogram';

interface FooterProps {
  onOpenInquiry: () => void;
}

export function Footer({ onOpenInquiry }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-ink-950 text-stone-300 border-t border-ivory-200/10 pt-20 pb-16 px-6 md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-ivory-200/10">
          {/* Brand Col */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <BrandMonogram size="sm" className="text-ivory-100" />
              <span className="font-serif text-2xl font-light tracking-[0.25em] text-ivory-50">
                FINCA LIBIA
              </span>
            </div>
            <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm">
              A private 3.5-acre mountain sanctuary in the Medellín valley. Modernist architecture, 6 master suites, and complete seclusion.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenInquiry}
                className="no-tap-highlight bg-[#E8E2D6] hover:bg-ivory-50 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-950 transition-all cursor-pointer"
              >
                Book Your Stay
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-light text-ivory-100 mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-xs text-stone-400 font-light">
              <li><a href="#estate" className="hover:text-ivory-50 transition-colors">The Estate</a></li>
              <li><a href="#suites" className="hover:text-ivory-50 transition-colors">Master Suites</a></li>
              <li><a href="#amenities" className="hover:text-ivory-50 transition-colors">Amenities</a></li>
              <li><a href="#story" className="hover:text-ivory-50 transition-colors">About</a></li>
              <li><a href="#gallery" className="hover:text-ivory-50 transition-colors">Gallery</a></li>
              <li><a href="#location" className="hover:text-ivory-50 transition-colors">Location</a></li>
              <li><a href="#reviews" className="hover:text-ivory-50 transition-colors">Reviews</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-lg font-light text-ivory-100 mb-4">Location</h4>
            <ul className="space-y-3 text-xs text-stone-400 font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#E8E2D6] shrink-0 mt-0.5" />
                <span>{villaInfo.location}</span>
              </li>
            </ul>
          </div>

          {/* Airport Details */}
          <div>
            <h4 className="font-serif text-lg font-light text-ivory-100 mb-4">Airport Access</h4>
            <p className="text-xs text-stone-400 font-light leading-relaxed mb-3">
              Just 6 minutes from MDE International Airport (Rionegro).
            </p>
            <span className="inline-block text-[11px] font-mono text-[#E8E2D6] border border-ivory-200/20 px-3 py-1 bg-ink-900">
              6 Min to MDE Airport
            </span>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-light">
          <p>© {new Date().getFullYear()} Finca Libia Estate. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-stone-400 hover:text-ivory-50 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
