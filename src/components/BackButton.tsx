import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  onClick: () => void;
  label?: string;
  dark?: boolean;
}

export function BackButton({ onClick, label = 'Back', dark = false }: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`no-tap-highlight group inline-flex items-center gap-2 transition-opacity duration-300 hover:opacity-60 ${
        dark ? 'text-ink-900' : 'text-ivory-100'
      }`}
    >
      <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" strokeWidth={1.5} />
      <span className="text-xs uppercase tracking-widest-2">{label}</span>
    </button>
  );
}
