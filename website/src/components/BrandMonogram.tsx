interface BrandMonogramProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function BrandMonogram({ className = '', size = 'md' }: BrandMonogramProps) {
  const dimensions = {
    sm: 'h-6 w-6',
    md: 'h-9 w-9',
    lg: 'h-14 w-14',
  }[size];

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${dimensions} ${className}`}
      aria-label="Finca Libia Monogram"
    >
      {/* Outer Fine Arch Line */}
      <path
        d="M 20 82 V 42 A 30 30 0 0 1 80 42 V 82"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Inner Stylized Mountain Ridge */}
      <path
        d="M 28 72 L 44 48 L 56 62 L 72 40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Central Monogram L Leaf Motif */}
      <circle cx="50" cy="30" r="3" fill="currentColor" />
      <path
        d="M 50 82 V 68"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Subtle Base Line */}
      <line x1="16" y1="82" x2="84" y2="82" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
