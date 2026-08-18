interface FullBleedImageProps {
  src: string;
  alt: string;
  heightClass?: string;
  caption?: string;
}

export function FullBleedImage({
  src,
  alt,
  heightClass = 'h-[60vh] sm:h-[75vh] lg:h-[85vh]',
  caption,
}: FullBleedImageProps) {
  return (
    <section className="relative w-full overflow-hidden bg-ink-950">
      <div className={`w-full ${heightClass} relative`}>
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/30 via-transparent to-ink-950/40 pointer-events-none" />
        {caption && (
          <div className="absolute bottom-6 left-8 md:left-16 lg:left-24 z-10">
            <span className="text-[11px] uppercase tracking-[0.25em] text-ivory-200/80 font-mono backdrop-blur-md bg-ink-950/40 px-3 py-1 border border-ivory-200/10">
              {caption}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
