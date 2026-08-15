import { MapPin, Phone, Mail, MessageSquare, ArrowUp } from 'lucide-react';
import { villaInfo } from '../data/villaData';

interface FooterProps {
  onOpenInquiry: () => void;
}

export function Footer({ onOpenInquiry }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-ink-950 text-stone-300 border-t border-ink-700/80 pt-20 pb-12 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-ink-700/60">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="inline-block">
              <span className="font-serif text-3xl font-light tracking-widest-3 text-ivory-50">
                FINCA LIBIA
              </span>
              <p className="text-[10px] uppercase tracking-widest-4 text-champagne-400 font-medium -mt-1">
                Medellín · Private Estate
              </p>
            </a>
            <p className="text-xs leading-relaxed text-stone-400 font-light max-w-md">
              A 100% exclusive 12-acre mountain estate featuring 6 master suites, 25m heated infinity pool, red clay tennis court, Finnish cedar sauna, speakeasy bar, soundproof games room, and full private staff.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenInquiry}
                className="rounded-full bg-champagne-500/90 px-6 py-2.5 text-xs font-medium uppercase tracking-widest-2 text-ink-900 transition-colors hover:bg-champagne-300"
              >
                Inquire Stay
              </button>
            </div>
          </div>

          {/* Direct Navigation */}
          <div>
            <h4 className="font-serif text-lg font-light text-ivory-100 mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-xs text-stone-400 font-light">
              <li><a href="#overview" className="hover:text-champagne-300 transition-colors">Overview</a></li>
              <li><a href="#estate" className="hover:text-champagne-300 transition-colors">The Estate</a></li>
              <li><a href="#suites" className="hover:text-champagne-300 transition-colors">Master Suites</a></li>
              <li><a href="#amenities" className="hover:text-champagne-300 transition-colors">Resort Amenities</a></li>
              <li><a href="#story" className="hover:text-champagne-300 transition-colors">History & Design</a></li>
              <li><a href="#gallery" className="hover:text-champagne-300 transition-colors">Photo Gallery</a></li>
              <li><a href="#faq" className="hover:text-champagne-300 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-lg font-light text-ivory-100 mb-4">Contact & Location</h4>
            <ul className="space-y-3 text-xs text-stone-400 font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-champagne-400 shrink-0 mt-0.5" />
                <span>{villaInfo.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-champagne-400 shrink-0" />
                <a href="tel:+573001234567" className="hover:text-champagne-300 transition-colors">+57 300 123 4567</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="h-4 w-4 text-champagne-400 shrink-0" />
                <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer" className="hover:text-champagne-300 transition-colors">WhatsApp Concierge</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-champagne-400 shrink-0" />
                <a href="mailto:concierge@fincalibia.com" className="hover:text-champagne-300 transition-colors">concierge@fincalibia.com</a>
              </li>
            </ul>
          </div>

          {/* Arrival & Airport */}
          <div>
            <h4 className="font-serif text-lg font-light text-ivory-100 mb-4">Airport Access</h4>
            <p className="text-xs text-stone-400 font-light leading-relaxed mb-3">
              45 minutes from José María Córdova International Airport (MDE) in Rionegro. Private SUV & Helicopter transfers arranged upon request.
            </p>
            <span className="inline-block text-[11px] uppercase tracking-wider text-champagne-400 font-medium border border-champagne-500/30 rounded-full px-3 py-1 bg-champagne-500/10">
              Private Helipad On-Site
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-light">
          <p>© {new Date().getFullYear()} Finca Libia Estate. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-stone-400 hover:text-champagne-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
