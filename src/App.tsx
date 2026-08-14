import { useState, useEffect } from 'react';
import { Sparkles, Home, Map, BookOpen, Calendar, LogOut } from 'lucide-react';
import { HomeView } from '@/views/HomeView';
import { StayView } from '@/views/StayView';
import { ExploreView } from '@/views/ExploreView';
import { ConciergeView } from '@/views/ConciergeView';
import { MemoriesView } from '@/views/MemoriesView';
import { ItineraryView } from '@/views/ItineraryView';
import { PreArrivalView } from '@/views/PreArrivalView';
import { CheckoutView } from '@/views/CheckoutView';

type View = 'home' | 'stay' | 'explore' | 'concierge' | 'memories' | 'itinerary' | 'pre-arrival' | 'checkout';

const navItems: { id: View; label: string; icon: typeof Home }[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'stay', label: 'Stay', icon: Map },
  { id: 'explore', label: 'Explore', icon: BookOpen },
  { id: 'memories', label: 'Memories', icon: BookOpen },
];

export default function App() {
  const [view, setView] = useState<View>('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [view]);

  const navigate = (v: string) => setView(v as View);
  const goHome = () => setView('home');

  const showBottomNav = view !== 'home';
  const showConciergeButton = view !== 'concierge' && view !== 'home';

  return (
    <div className="min-h-screen bg-ink-900 text-ivory-100">
      {/* Top bar — pre-arrival & checkout buttons */}
      {view === 'home' && (
        <header
          className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-5 py-4 transition-opacity duration-300"
          style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
        >
          <div className="flex items-center gap-2">
            <span className="font-serif text-sm sm:text-base font-medium tracking-widest-2 text-ivory-100 drop-shadow-md">
              FINCA LIBIA
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setView('pre-arrival')}
              className="no-tap-highlight group flex items-center gap-1.5 rounded-full border border-ivory-200/30 bg-ink-900/60 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-wider text-ivory-100 backdrop-blur-md shadow-md transition-all duration-300 hover:border-champagne-400 hover:bg-champagne-500 hover:text-ink-900 active:scale-95"
              aria-label="Pre-arrival"
            >
              <Calendar className="h-3.5 w-3.5 text-champagne-400 transition-colors group-hover:text-ink-900" strokeWidth={1.5} />
              <span>Pre-Arrival</span>
            </button>
            <button
              onClick={() => setView('checkout')}
              className="no-tap-highlight group flex items-center gap-1.5 rounded-full border border-ivory-200/30 bg-ink-900/60 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-wider text-ivory-100 backdrop-blur-md shadow-md transition-all duration-300 hover:border-champagne-400 hover:bg-champagne-500 hover:text-ink-900 active:scale-95"
              aria-label="Checkout"
            >
              <LogOut className="h-3.5 w-3.5 text-champagne-400 transition-colors group-hover:text-ink-900" strokeWidth={1.5} />
              <span>Checkout</span>
            </button>
          </div>
        </header>
      )}

      {/* Views */}
      {view === 'home' && <HomeView onNavigate={navigate} />}
      {view === 'stay' && <StayView onBack={goHome} />}
      {view === 'explore' && <ExploreView onBack={goHome} onNavigate={navigate} />}
      {view === 'concierge' && <ConciergeView onBack={goHome} />}
      {view === 'memories' && <MemoriesView onBack={goHome} />}
      {view === 'itinerary' && <ItineraryView onBack={goHome} />}
      {view === 'pre-arrival' && <PreArrivalView onBack={goHome} onNavigate={navigate} />}
      {view === 'checkout' && <CheckoutView onBack={goHome} onNavigate={navigate} />}

      {/* Persistent Concierge button */}
      {showConciergeButton && (
        <button
          onClick={() => setView('concierge')}
          className="no-tap-highlight group fixed bottom-24 right-6 z-40 flex items-center gap-2 rounded-full bg-champagne-500/90 px-5 py-3 text-ink-900 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-champagne-400 hover:shadow-xl"
          aria-label="Concierge"
        >
          <Sparkles className="h-4 w-4" strokeWidth={1.5} />
          <span className="text-xs font-medium uppercase tracking-widest-2">Concierge</span>
        </button>
      )}

      {/* Bottom Navigation */}
      {showBottomNav && (
        <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-ink-700 bg-ink-900/95 backdrop-blur-lg">
          <div className="mx-auto flex max-w-md items-center justify-around px-6 py-3 pb-5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = view === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setView(item.id)}
                  className="no-tap-highlight group flex flex-col items-center gap-1.5 transition-colors"
                >
                  <Icon
                    className={`h-5 w-5 transition-colors duration-300 ${
                      isActive ? 'text-champagne-400' : 'text-stone-600 group-hover:text-stone-400'
                    }`}
                    strokeWidth={1.5}
                  />
                  <span
                    className={`text-[10px] uppercase tracking-widest-2 transition-colors duration-300 ${
                      isActive ? 'text-champagne-400' : 'text-stone-600 group-hover:text-stone-400'
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
}
