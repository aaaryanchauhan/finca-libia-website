import { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { BrandMonogram } from './BrandMonogram';

interface NavbarProps {
  onOpenInquiry: () => void;
  onOpenPhotos: () => void;
}

export function Navbar({ onOpenInquiry, onOpenPhotos }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/95 backdrop-blur-md py-4 border-b border-ivory-200/10 shadow-2xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Brand Logo with Monogram Mark */}
        <a href="#" className="group flex items-center gap-3 shrink-0">
          <BrandMonogram size="sm" className="text-ivory-100 group-hover:text-champagne-300 transition-colors" />
          <div className="flex flex-col">
            <span className="font-serif text-xl xl:text-2xl font-light tracking-[0.25em] text-ivory-50 transition-colors group-hover:text-champagne-300">
              FINCA LIBIA
            </span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-[#E8E2D6]/70 font-mono -mt-0.5">
              Medellín · Private Estate
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10">
          <a
            href="#estate"
            className="group relative py-1 text-xs uppercase font-medium tracking-[0.2em] text-ivory-200 transition-colors duration-300 hover:text-ivory-50"
          >
            <span>The Estate</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E8E2D6] transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="#suites"
            className="group relative py-1 text-xs uppercase font-medium tracking-[0.2em] text-ivory-200 transition-colors duration-300 hover:text-ivory-50"
          >
            <span>Suites</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E8E2D6] transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="#amenities"
            className="group relative py-1 text-xs uppercase font-medium tracking-[0.2em] text-ivory-200 transition-colors duration-300 hover:text-ivory-50"
          >
            <span>Amenities</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E8E2D6] transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="#services"
            className="group relative py-1 text-xs uppercase font-medium tracking-[0.2em] text-ivory-200 transition-colors duration-300 hover:text-ivory-50"
          >
            <span>Services</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E8E2D6] transition-all duration-300 group-hover:w-full" />
          </a>
          <button
            onClick={onOpenPhotos}
            className="group relative py-1 text-xs uppercase font-medium tracking-[0.2em] text-ivory-200 transition-colors duration-300 hover:text-ivory-50 cursor-pointer"
          >
            <span>Photos</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E8E2D6] transition-all duration-300 group-hover:w-full" />
          </button>
          <a
            href="#reviews"
            className="group relative py-1 text-xs uppercase font-medium tracking-[0.2em] text-ivory-200 transition-colors duration-300 hover:text-ivory-50"
          >
            <span>Reviews</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E8E2D6] transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="#location"
            className="group relative py-1 text-xs uppercase font-medium tracking-[0.2em] text-ivory-200 transition-colors duration-300 hover:text-ivory-50"
          >
            <span>Location</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E8E2D6] transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        {/* Primary CTA: Solid Gold Fill */}
        <div className="hidden md:flex items-center shrink-0">
          <button
            onClick={onOpenInquiry}
            className="no-tap-highlight group flex items-center gap-2 bg-champagne-500 hover:bg-champagne-400 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-ink-900 shadow-lg transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <ExternalLink className="h-3.5 w-3.5 text-ink-900" />
            <span>Book Now</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-ivory-100 transition-colors hover:text-ivory-50 cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-ink-950/98 backdrop-blur-xl border-b border-ivory-200/10 py-8 px-6 shadow-2xl animate-fade-in">
          <div className="flex flex-col gap-5 text-center">
            <a
              href="#estate"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 font-serif text-lg tracking-[0.15em] text-ivory-100 hover:text-ivory-50 transition-colors uppercase"
            >
              The Estate
            </a>
            <a
              href="#suites"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 font-serif text-lg tracking-[0.15em] text-ivory-100 hover:text-ivory-50 transition-colors uppercase"
            >
              Suites
            </a>
            <a
              href="#amenities"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 font-serif text-lg tracking-[0.15em] text-ivory-100 hover:text-ivory-50 transition-colors uppercase"
            >
              Amenities
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPhotos();
              }}
              className="py-1 font-serif text-lg tracking-[0.15em] text-ivory-100 hover:text-ivory-50 transition-colors uppercase cursor-pointer"
            >
              Photos
            </button>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 font-serif text-lg tracking-[0.15em] text-ivory-100 hover:text-ivory-50 transition-colors uppercase"
            >
              Reviews
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 font-serif text-lg tracking-[0.15em] text-ivory-100 hover:text-ivory-50 transition-colors uppercase"
            >
              Location
            </a>
            <div className="pt-4 border-t border-ivory-200/10 flex justify-center">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="flex items-center gap-2 bg-champagne-500 hover:bg-champagne-400 px-6 py-3 text-xs uppercase tracking-[0.2em] font-semibold text-ink-900 shadow-xl cursor-pointer"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Book Now</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
