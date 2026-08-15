import { MapPin, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';

export function LocationSection() {
  const googleMapShareLink = 'https://share.google/lJfNMTPhO0D66JmgT';
  
  // Google Maps Embed URL pointing to exact Plus Code location: 6H64+8M Guarne, Antioquia, Colombia
  const googleMapEmbedUrl =
    'https://maps.google.com/maps?q=6H64%2B8M%20Guarne%2C%20Antioquia%2C%20Colombia&t=&z=15&ie=UTF8&iwloc=&output=embed';

  return (
    <section id="location" className="relative bg-ink-900 px-6 py-20 lg:px-12 border-b border-ink-700/60">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 border border-champagne-400/40 bg-champagne-500/10 px-4 py-1.5 text-xs text-champagne-300 font-medium mb-3">
              <MapPin className="h-3.5 w-3.5" />
              <span>Location & Access</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-ivory-50">
              Where you’ll be
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-300 font-light">
              Guarne, Antioquia, Colombia · Plus Code: <span className="text-champagne-300 font-mono">6H64+8M</span> · 25 Minutes from Medellín
            </p>
          </div>

          <a
            href={googleMapShareLink}
            target="_blank"
            rel="noopener noreferrer"
            className="no-tap-highlight inline-flex items-center gap-2 border border-champagne-400/50 bg-champagne-500/10 px-5 py-3 text-xs font-medium uppercase tracking-wider text-champagne-300 backdrop-blur-md shadow-lg transition-all duration-300 hover:bg-champagne-500 hover:text-ink-900 active:scale-95 shrink-0 self-start sm:self-auto"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* Map Container */}
        <div className="relative overflow-hidden border border-ink-700/80 bg-ink-950 shadow-2xl">
          <div className="relative h-[380px] sm:h-[480px] w-full">
            <iframe
              title="Finca Libia Exact Location Map"
              src={googleMapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full grayscale-[20%] contrast-[1.05] opacity-90 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
            />
          </div>

          {/* Location Badge Pill */}
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-ink-900/95 border border-ink-700/80 p-3 px-4 backdrop-blur-md shadow-xl flex items-center gap-3 text-xs text-stone-300">
            <ShieldCheck className="h-4 w-4 text-champagne-400 shrink-0" />
            <span>Exact location: <strong className="text-ivory-100 font-mono">6H64+8M Guarne, Antioquia, Colombia</strong></span>
          </div>
        </div>

        {/* Key Proximities Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="border border-ink-700/60 bg-ink-800/40 p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-champagne-500/10 text-champagne-400 border border-champagne-500/20">
                <Navigation className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-light text-ivory-100">MDE Airport</h4>
                <p className="text-xs text-stone-400 font-light">25 Mins via Private SUV</p>
              </div>
            </div>
          </div>

          <div className="border border-ink-700/60 bg-ink-800/40 p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-champagne-500/10 text-champagne-400 border border-champagne-500/20">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-light text-ivory-100">Medellín City</h4>
                <p className="text-xs text-stone-400 font-light">25-30 Mins to El Poblado</p>
              </div>
            </div>
          </div>

          <div className="border border-ink-700/60 bg-ink-800/40 p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-champagne-500/10 text-champagne-400 border border-champagne-500/20">
                <ExternalLink className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-light text-ivory-100">Guatapé & El Peñol</h4>
                <p className="text-xs text-stone-400 font-light">45 Mins Scenic Drive</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
