import { ExternalLink } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenInquiry: () => void;
}

export function MobileBottomBar({ onOpenInquiry }: MobileBottomBarProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-ink-950/95 border-t border-ivory-200/10 backdrop-blur-xl p-3 px-4 shadow-[0_-10px_25px_rgba(0,0,0,0.5)]">
      <div className="max-w-md mx-auto">
        <button
          onClick={onOpenInquiry}
          className="w-full no-tap-highlight flex items-center justify-center gap-2 bg-champagne-500 hover:bg-champagne-400 text-ink-900 font-semibold py-3.5 px-4 text-xs uppercase tracking-[0.2em] shadow-lg transition-all active:scale-95 cursor-pointer"
        >
          <ExternalLink className="h-4 w-4 text-ink-900" />
          <span>Book Now</span>
        </button>
      </div>
    </div>
  );
}
