import { ExternalLink } from 'lucide-react';

export function LocationSection() {
  const googleMapShareLink = 'https://share.google/lJfNMTPhO0D66JmgT';
  
  // Google Maps Embed URL pointing to exact Plus Code location: 6H64+8M Guarne, Antioquia, Colombia
  const googleMapEmbedUrl =
    'https://maps.google.com/maps?q=6H64%2B8M%20Guarne%2C%20Antioquia%2C%20Colombia&t=&z=15&ie=UTF8&iwloc=&output=embed';

  return (
    <section id="location" className="relative bg-ink-950 px-6 md:px-16 lg:px-24 py-28 border-b border-ivory-200/10">
      <div className="mx-auto max-w-7xl">
        {/* Asymmetric Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-[#E8E2D6]/70 font-medium mb-3">
              Location & Access
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-ivory-50 leading-tight">
              Where You'll Be
            </h2>
            <p className="mt-4 font-sans text-sm sm:text-base text-stone-300 font-light leading-relaxed">
              Guarne, Antioquia, Colombia · Plus Code: <span className="text-ivory-100 font-mono">6H64+8M</span> · 25 Minutes from Medellín
            </p>
          </div>

          <a
            href={googleMapShareLink}
            target="_blank"
            rel="noopener noreferrer"
            className="no-tap-highlight inline-flex items-center gap-2 border border-ivory-200/30 bg-ink-900 hover:bg-ink-800 px-6 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-ivory-100 transition-all cursor-pointer shrink-0 self-start sm:self-auto"
          >
            <span>Open Google Maps</span>
            <ExternalLink className="h-4 w-4 text-[#E8E2D6]" />
          </a>
        </div>

        {/* Map Container */}
        <div className="relative overflow-hidden border border-ivory-200/15 bg-ink-950 shadow-2xl">
          <div className="relative h-[380px] sm:h-[480px] w-full">
            <iframe
              title="Finca Libia Location Map"
              src={googleMapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full opacity-90 transition-all duration-500 hover:opacity-100"
            />
          </div>

          {/* Location Badge */}
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-ink-950/95 border border-ivory-200/20 p-3 px-4 backdrop-blur-md shadow-xl text-xs text-stone-300">
            <span>Exact location: <strong className="text-ivory-100 font-mono">6H64+8M Guarne, Antioquia, Colombia</strong></span>
          </div>
        </div>

        {/* Key Proximities Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="border border-ivory-200/10 bg-ink-900/60 p-6">
            <span className="text-xs uppercase tracking-[0.2em] text-stone-400 font-mono">Airport Access</span>
            <h3 className="mt-2 font-serif text-xl font-light text-ivory-50">MDE International</h3>
            <p className="mt-1 text-xs text-stone-300 font-light">25 Mins via Private SUV Transfer</p>
          </div>

          <div className="border border-ivory-200/10 bg-ink-900/60 p-6">
            <span className="text-xs uppercase tracking-[0.2em] text-stone-400 font-mono">Metropolis</span>
            <h3 className="mt-2 font-serif text-xl font-light text-ivory-50">Medellín City</h3>
            <p className="mt-1 text-xs text-stone-300 font-light">25–30 Mins to El Poblado & Provenza</p>
          </div>

          <div className="border border-ivory-200/10 bg-ink-900/60 p-6">
            <span className="text-xs uppercase tracking-[0.2em] text-stone-400 font-mono">Excursions</span>
            <h3 className="mt-2 font-serif text-xl font-light text-ivory-50">Guatapé & El Peñol</h3>
            <p className="mt-1 text-xs text-stone-300 font-light">45 Mins Scenic Country Drive</p>
          </div>
        </div>
      </div>
    </section>
  );
}
