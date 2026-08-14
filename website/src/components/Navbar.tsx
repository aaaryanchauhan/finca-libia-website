import { useState, useEffect } from 'react';
import { Menu, X, Calendar, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: () => void;
}

export function Navbar({ onOpenInquiry }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'The Estate', href: '#estate' },
    { name: 'Suites', href: '#suites' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'History & Design', href: '#story' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Concierge', href: '#concierge' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-900/90 backdrop-blur-md py-4 border-b border-ink-700/60 shadow-2xl'
          : 'bg-gradient-to-b from-ink-900/85 via-ink-900/40 to-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Brand Logo */}
        <a href="#" className="group flex flex-col shrink-0">
          <span className="font-serif text-2xl xl:text-3xl font-light tracking-widest-3 text-ivory-50 transition-colors group-hover:text-champagne-300">
            FINCA LIBIA
          </span>
          <span className="text-[10px] uppercase tracking-widest-4 text-champagne-400 font-medium -mt-1">
            Medellín · Private Estate
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] xl:text-xs uppercase tracking-wider xl:tracking-widest-2 text-ivory-200/80 whitespace-nowrap shrink-0 transition-all duration-300 hover:text-champagne-300 hover:scale-105"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenInquiry}
            className="no-tap-highlight group flex shrink-0 items-center gap-2 rounded-full border border-champagne-400/50 bg-champagne-500/10 px-4 xl:px-5 py-2.5 text-[11px] xl:text-xs font-medium uppercase tracking-wider xl:tracking-widest-2 text-ivory-50 whitespace-nowrap backdrop-blur-md shadow-lg transition-all duration-300 hover:border-champagne-300 hover:bg-champagne-500 hover:text-ink-900 active:scale-95"
          >
            <Calendar className="h-3.5 w-3.5 text-champagne-400 transition-colors group-hover:text-ink-900 shrink-0" strokeWidth={1.5} />
            <span className="whitespace-nowrap">Inquire Stay</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-ivory-100 transition-colors hover:text-champagne-300"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-ink-900/98 backdrop-blur-xl border-b border-ink-700 py-8 px-6 animate-fade-in shadow-2xl">
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-xl font-light tracking-wide text-ivory-100 hover:text-champagne-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-ink-700 flex justify-center">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="flex items-center gap-2 rounded-full bg-champagne-500 px-7 py-3 text-xs uppercase tracking-widest-2 font-medium text-ink-900 shadow-xl"
              >
                <Sparkles className="h-4 w-4" />
                <span>Inquire Stay</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
