import { useState, useMemo } from 'react';
import { Calculator, Calendar, Sparkles, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { luxuryAddonsList } from '../data/villaData';

interface RatesCalculatorSectionProps {
  onOpenInquiryWithData?: (data: { checkIn: string; checkOut: string; guests: string; total: number; selectedAddons: string[] }) => void;
}

export function RatesCalculatorSection({ onOpenInquiryWithData }: RatesCalculatorSectionProps) {
  // Default check-in: 7 days from now, check-out: 10 days from now
  const today = new Date();
  const defaultIn = new Date(today);
  defaultIn.setDate(today.getDate() + 7);
  const defaultOut = new Date(today);
  defaultOut.setDate(today.getDate() + 10);

  const [checkIn, setCheckIn] = useState(defaultIn.toISOString().split('T')[0]);
  const [checkOut, setCheckOut] = useState(defaultOut.toISOString().split('T')[0]);
  const [guests, setGuests] = useState(8);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['private-chef']);

  // Calculate nights
  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 3;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  }, [checkIn, checkOut]);

  // Seasonal Nightly Rate computation
  const nightlyRate = useMemo(() => {
    if (!checkIn) return 2800;
    const month = new Date(checkIn).getMonth();
    // Peak season: Dec, Jan, Jul, Aug (Month 11, 0, 6, 7) -> $3,200/night
    if ([11, 0, 6, 7].includes(month)) {
      return 3200;
    }
    return 2800;
  }, [checkIn]);

  // Base villa price calculation (covers entire 12-acre villa & staff up to 14 guests)
  const baseVillaTotal = nights * nightlyRate;

  // Selected add-ons total
  const addonsTotal = useMemo(() => {
    return selectedAddons.reduce((sum, addonId) => {
      const addon = luxuryAddonsList.find((a) => a.id === addonId);
      return sum + (addon ? addon.pricePerStay : 0);
    }, 0);
  }, [selectedAddons]);

  const estimatedTotal = baseVillaTotal + addonsTotal;
  const perGuestTotal = Math.round(estimatedTotal / (guests || 1));

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const handleInquireNow = () => {
    if (onOpenInquiryWithData) {
      onOpenInquiryWithData({
        checkIn,
        checkOut,
        guests: String(guests),
        total: estimatedTotal,
        selectedAddons: selectedAddons.map((id) => luxuryAddonsList.find((a) => a.id === id)?.name || id),
      });
    }
  };

  return (
    <section id="calculator" className="relative bg-ink-900 px-6 py-24 lg:px-12 border-b border-ink-700/60">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-champagne-400/40 bg-champagne-500/10 px-4 py-1.5 text-xs text-champagne-300 font-medium mb-3">
            <Calculator className="h-3.5 w-3.5" />
            <span>Interactive Rates & Booking Estimator</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-ivory-50">
            Estimate Your Bespoke Stay
          </h2>
          <p className="mt-4 font-serif text-lg font-light italic text-stone-300">
            Finca Libia is rented strictly on a 100% exclusive estate basis. All 6 master suites, 12 acres, 25m pool, tennis court, sauna, and private butler staff are included.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form Panel */}
          <div className="lg:col-span-7 rounded-3xl border border-ink-700/80 bg-ink-800/50 p-6 sm:p-8 backdrop-blur-md shadow-2xl space-y-6">
            <h3 className="font-serif text-2xl font-light text-ivory-50 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-champagne-400" />
              <span>Select Dates & Party Size</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-widest-2 text-stone-400 mb-1.5">
                  Check-In Date
                </label>
                <input
                  type="date"
                  value={checkIn}
                  min={today.toISOString().split('T')[0]}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full rounded-xl border border-ink-600 bg-ink-900 px-4 py-3 text-xs text-ivory-100 focus:border-champagne-400 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest-2 text-stone-400 mb-1.5">
                  Check-Out Date
                </label>
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full rounded-xl border border-ink-600 bg-ink-900 px-4 py-3 text-xs text-ivory-100 focus:border-champagne-400 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest-2 text-stone-400 mb-1.5">
                  Guests ({guests})
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full rounded-xl border border-ink-600 bg-ink-900 px-4 py-3 text-xs text-ivory-100 focus:border-champagne-400 focus:outline-none transition-colors"
                >
                  {[...Array(14)].map((_, i) => (
                    <option key={i + 1} value={i + 1} className="bg-ink-800 text-ivory-100">
                      {i + 1} {i === 0 ? 'Guest' : 'Guests'} (6 Suites)
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Optional Luxury Concierge Addons */}
            <div className="pt-4 border-t border-ink-700/60">
              <h4 className="font-serif text-xl font-light text-ivory-50 mb-3 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-champagne-400" />
                <span>Enhance Your Experience with Add-Ons</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {luxuryAddonsList.map((addon) => {
                  const isSelected = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`cursor-pointer rounded-2xl border p-4 transition-all duration-300 flex flex-col justify-between ${
                        isSelected
                          ? 'border-champagne-400 bg-champagne-500/10 shadow-lg'
                          : 'border-ink-700/60 bg-ink-900/60 hover:border-ink-600'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <span className="font-serif text-sm font-medium text-ivory-100">{addon.name}</span>
                        <div
                          className={`h-5 w-5 rounded-md border flex items-center justify-center transition-colors ${
                            isSelected ? 'bg-champagne-500 border-champagne-400 text-ink-900' : 'border-ink-600 bg-ink-800'
                          }`}
                        >
                          {isSelected && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                        </div>
                      </div>
                      <p className="mt-2 text-[11px] text-stone-400 font-light leading-relaxed">{addon.description}</p>
                      <p className="mt-3 text-xs font-semibold text-champagne-300">+${addon.pricePerStay.toLocaleString()} / stay</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Pricing Summary Breakdown Card */}
          <div className="lg:col-span-5 rounded-3xl border border-champagne-500/30 bg-gradient-to-b from-ink-800 via-ink-800 to-ink-950 p-6 sm:p-8 backdrop-blur-md shadow-2xl flex flex-col justify-between space-y-6">
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-ink-700/60">
                <div>
                  <span className="text-[10px] uppercase tracking-widest-3 text-champagne-400 font-medium">Estimated Rental Breakdown</span>
                  <h3 className="font-serif text-3xl font-light text-ivory-50">{nights} {nights === 1 ? 'Night' : 'Nights'} Stay</h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-stone-400">Nightly Rate</span>
                  <p className="text-sm font-medium text-champagne-300">${nightlyRate.toLocaleString()} / night</p>
                </div>
              </div>

              {/* Line Items */}
              <div className="mt-6 space-y-3 text-xs">
                <div className="flex justify-between text-stone-300">
                  <span>Exclusive Villa Rental ({nights} nights × ${nightlyRate.toLocaleString()})</span>
                  <span className="text-ivory-100 font-medium">${baseVillaTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span>24/7 Housekeeper, Chef & Butler Staff</span>
                  <span className="text-emerald-400 font-medium">Included</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span>Full 12-Acre Grounds & Spa Access</span>
                  <span className="text-emerald-400 font-medium">Included</span>
                </div>

                {selectedAddons.length > 0 && (
                  <div className="pt-2 border-t border-ink-700/60 space-y-2">
                    <span className="text-[11px] text-champagne-400 font-medium">Selected Add-Ons:</span>
                    {selectedAddons.map((id) => {
                      const addon = luxuryAddonsList.find((a) => a.id === id);
                      if (!addon) return null;
                      return (
                        <div key={id} className="flex justify-between text-stone-300 pl-2">
                          <span>+ {addon.name}</span>
                          <span className="text-ivory-100">${addon.pricePerStay.toLocaleString()}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Total Price Display */}
              <div className="mt-8 rounded-2xl bg-ink-900/90 border border-ink-700/80 p-5 text-center">
                <span className="text-[11px] uppercase tracking-widest-2 text-stone-400">Estimated Total (USD)</span>
                <p className="font-serif text-4xl sm:text-5xl font-light text-champagne-300 mt-1">
                  ${estimatedTotal.toLocaleString()}
                </p>
                <p className="text-xs text-stone-400 font-light mt-1">
                  ≈ ${perGuestTotal.toLocaleString()} per guest for {guests} guests ({nights} nights)
                </p>
              </div>

              <div className="mt-4 flex items-center gap-2 text-[11px] text-stone-400 font-light justify-center">
                <ShieldCheck className="h-4 w-4 text-champagne-400 shrink-0" />
                <span>No hidden fees · Free airport transfer on 4+ night bookings</span>
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-4 border-t border-ink-700/60">
              <button
                onClick={handleInquireNow}
                className="no-tap-highlight group w-full inline-flex items-center justify-center gap-3 rounded-full bg-champagne-500 py-4 text-xs font-medium uppercase tracking-widest-2 text-ink-900 shadow-2xl transition-all duration-300 hover:bg-champagne-300 hover:scale-[1.02] active:scale-95"
              >
                <span>Request Reservation for These Dates</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
