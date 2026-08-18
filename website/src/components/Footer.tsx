import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-ivory-200/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <BrandMonogram size="md" className="text-ivory-100" />
              <div>
                <span className="font-serif text-2xl font-light tracking-[0.25em] text-ivory-50 block">
                  FINCA LIBIA
                </span>
                <span className="text-[8px] uppercase tracking-[0.3em] text-[#E8E2D6]/70 font-mono">
                  Medellín · Private Estate
                </span>
              </div>
            </a>
            <p className="text-xs leading-relaxed text-stone-400 font-light max-w-md">
              A 100% exclusive 3.5-acre mountain sanctuary featuring 6 master suites, 25m heated pool, Finnish cedar sauna, red clay tennis, private bowling alley, and full private staff.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenInquiry}
                className="bg-champagne-500 hover:bg-champagne-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink-900 shadow-lg transition-all cursor-pointer"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-serif text-lg font-light text-ivory-100 mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-xs text-stone-400 font-light">
              <li><a href="#overview" className="hover:text-ivory-50 transition-colors">Overview</a></li>
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
            <h4 className="font-serif text-lg font-light text-ivory-100 mb-4">Contact & Access</h4>
            <ul className="space-y-3 text-xs text-stone-400 font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#E8E2D6] shrink-0 mt-0.5" />
                <span>{villaInfo.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#E8E2D6] shrink-0" />
                <a href="tel:+573001234567" className="hover:text-ivory-50 transition-colors">+57 300 123 4567</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#E8E2D6] shrink-0" />
                <a href="mailto:concierge@fincalibia.com" className="hover:text-ivory-50 transition-colors">concierge@fincalibia.com</a>
              </li>
            </ul>
          </div>

          {/* Airport Details */}
          <div>
            <h4 className="font-serif text-lg font-light text-ivory-100 mb-4">Airport Access</h4>
            <p className="text-xs text-stone-400 font-light leading-relaxed mb-3">
              25 minutes from MDE International Airport (Rionegro). Private SUV transfers arranged upon request.
            </p>
            <span className="inline-block text-[11px] font-mono text-[#E8E2D6] border border-ivory-200/20 px-3 py-1 bg-ink-900">
              25 Min to MDE Airport
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
