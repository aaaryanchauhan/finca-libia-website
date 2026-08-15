import { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

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
          ? 'bg-ink-950/95 backdrop-blur-md py-3.5 border-b border-ink-700/80 shadow-2xl'
          : 'bg-gradient-to-b from-ink-950/90 via-ink-950/40 to-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Brand Logo */}
        <a href="#" className="group flex flex-col shrink-0">
          <span className="font-serif text-2xl xl:text-3xl font-light tracking-widest-3 text-ivory-50 transition-colors group-hover:text-champagne-300">
            FINCA LIBIA
          </span>
          <span className="text-[9px] uppercase tracking-widest-4 text-champagne-400 font-medium -mt-0.5">
            Medellín · Private Estate
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 border border-ink-700/60 bg-ink-900/60 p-1.5 backdrop-blur-md shadow-xl">
          <a
            href="#estate"
            className="px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-ivory-200 transition-all duration-300 hover:bg-champagne-500/10 hover:text-champagne-300"
          >
            The Estate
          </a>
          <a
            href="#suites"
            className="px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-ivory-200 transition-all duration-300 hover:bg-champagne-500/10 hover:text-champagne-300"
          >
            Suites
          </a>
          <a
            href="#amenities"
            className="px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-ivory-200 transition-all duration-300 hover:bg-champagne-500/10 hover:text-champagne-300"
          >
            Amenities
          </a>
          <button
            onClick={onOpenPhotos}
            className="px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-ivory-200 transition-all duration-300 hover:bg-champagne-500/10 hover:text-champagne-300"
          >
            Photos
          </button>
          <a
            href="#reviews"
            className="px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-ivory-200 transition-all duration-300 hover:bg-champagne-500/10 hover:text-champagne-300"
          >
            Reviews
          </a>
          <a
            href="#location"
            className="px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-ivory-200 transition-all duration-300 hover:bg-champagne-500/10 hover:text-champagne-300"
          >
            Location
          </a>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center shrink-0">
          <button
            onClick={onOpenInquiry}
            className="no-tap-highlight group flex items-center gap-2 border border-champagne-400/50 bg-champagne-500/10 px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-ivory-50 backdrop-blur-md shadow-lg transition-all duration-300 hover:border-champagne-300 hover:bg-champagne-500 hover:text-ink-900 active:scale-95"
          >
            <Calendar className="h-3.5 w-3.5 text-champagne-400 transition-colors group-hover:text-ink-900" strokeWidth={1.5} />
            <span>Inquire Stay</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-ivory-100 transition-colors hover:text-champagne-300"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-ink-950/98 backdrop-blur-xl border-b border-ink-700/80 py-6 px-6 animate-fade-in shadow-2xl">
          <div className="flex flex-col gap-4 text-center">
            <a
              href="#estate"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 font-serif text-xl font-light tracking-wide text-ivory-100 hover:text-champagne-300 transition-colors"
            >
              The Estate
            </a>
            <a
              href="#suites"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 font-serif text-xl font-light tracking-wide text-ivory-100 hover:text-champagne-300 transition-colors"
            >
              Suites
            </a>
            <a
              href="#amenities"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 font-serif text-xl font-light tracking-wide text-ivory-100 hover:text-champagne-300 transition-colors"
            >
              Amenities
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPhotos();
              }}
              className="py-2 font-serif text-xl font-light tracking-wide text-ivory-100 hover:text-champagne-300 transition-colors"
            >
              Photos
            </button>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 font-serif text-xl font-light tracking-wide text-ivory-100 hover:text-champagne-300 transition-colors"
            >
              Reviews
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 font-serif text-xl font-light tracking-wide text-ivory-100 hover:text-champagne-300 transition-colors"
            >
              Location
            </a>
            <div className="pt-4 border-t border-ink-800 flex justify-center">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="flex items-center gap-2 border border-champagne-400/50 bg-champagne-500 px-6 py-3 text-xs uppercase tracking-widest font-medium text-ink-900 shadow-xl"
              >
                <Calendar className="h-4 w-4" />
                <span>Inquire Stay</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
