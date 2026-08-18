import { Calendar, MessageCircle } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenInquiry: () => void;
  whatsappNumber?: string;
}

export function MobileBottomBar({ onOpenInquiry, whatsappNumber = '573000000000' }: MobileBottomBarProps) {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hello Finca Libia team, I would like to inquire about availability and rates.'
  )}`;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-ink-950/95 border-t border-ivory-200/10 backdrop-blur-xl p-3 px-4 shadow-[0_-10px_25px_rgba(0,0,0,0.5)]">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <button
          onClick={onOpenInquiry}
          className="no-tap-highlight flex items-center justify-center gap-2 bg-champagne-500 hover:bg-champagne-400 text-ink-900 font-medium py-3 px-4 text-xs uppercase tracking-[0.18em] shadow-lg transition-all active:scale-95 cursor-pointer"
        >
          <Calendar className="h-4 w-4" />
          <span>Inquire</span>
        </button>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="no-tap-highlight flex items-center justify-center gap-2 border border-ivory-200/30 bg-ink-900/80 hover:bg-ink-800 text-ivory-100 font-medium py-3 px-4 text-xs uppercase tracking-[0.18em] backdrop-blur-md transition-all active:scale-95 cursor-pointer"
        >
          <MessageCircle className="h-4 w-4 text-emerald-400" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
