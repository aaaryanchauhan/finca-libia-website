import { useState, useMemo } from 'react';
import { Calendar, Check, ArrowRight } from 'lucide-react';
import { luxuryAddonsList } from '../data/villaData';

interface RatesCalculatorSectionProps {
  onOpenInquiryWithData?: (data: { checkIn: string; checkOut: string; guests: string; total: number; selectedAddons: string[] }) => void;
}

export function RatesCalculatorSection({ onOpenInquiryWithData }: RatesCalculatorSectionProps) {
  const today = new Date();
  const defaultIn = new Date(today);
  defaultIn.setDate(today.getDate() + 7);
  const defaultOut = new Date(today);
  defaultOut.setDate(today.getDate() + 10);

  const [checkIn, setCheckIn] = useState(defaultIn.toISOString().split('T')[0]);
  const [checkOut, setCheckOut] = useState(defaultOut.toISOString().split('T')[0]);
  const [guests, setGuests] = useState(8);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['private-chef']);

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 3;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  }, [checkIn, checkOut]);

  const nightlyRate = useMemo(() => {
    if (!checkIn) return 2800;
    const month = new Date(checkIn).getMonth();
    if ([11, 0, 6, 7].includes(month)) {
      return 3200;
    }
    return 2800;
  }, [checkIn]);

  const baseVillaTotal = nights * nightlyRate;

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

  return (
    <section id="rates" className="relative bg-ink-950 px-6 md:px-16 lg:px-24 py-28 border-b border-ivory-200/10">
      <div className="mx-auto max-w-7xl">
        {/* Asymmetric Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-[#E8E2D6]/70 font-medium mb-3">
            Pricing & Booking
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-ivory-50 leading-tight">
            Rates & Availability
          </h2>
        </div>

        {/* Clear Rates & Inclusions Summary Block */}
        <div className="mb-14 grid grid-cols-1 md:grid-cols-4 gap-6 border border-ivory-200/15 bg-ink-900/80 p-8 shadow-2xl">
          <div className="space-y-1 md:border-r border-ivory-200/10 md:pr-6">
            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-mono">From Rate</span>
            <p className="font-serif text-3xl font-light text-ivory-50">$2,800 <span className="text-xs font-sans text-stone-400">/ night</span></p>
            <p className="text-[11px] text-[#E8E2D6]/70">Covers entire 3.5-acre estate & all 6 suites</p>
          </div>

          <div className="space-y-1 md:border-r border-ivory-200/10 md:pr-6">
            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-mono">Minimum Stay</span>
            <p className="font-serif text-3xl font-light text-ivory-50">3 Nights</p>
            <p className="text-[11px] text-[#E8E2D6]/70">Peak holiday season: 5 nights minimum</p>
          </div>

          <div className="space-y-1 md:border-r border-ivory-200/10 md:pr-6">
            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-mono">What's Included</span>
            <ul className="text-[11px] text-stone-300 space-y-1 font-light">
              <li className="flex items-center gap-1.5"><Check className="h-3 w-3 text-[#E8E2D6]" /> Cleaning & Grounds Keeper Services</li>
              <li className="flex items-center gap-1.5"><Check className="h-3 w-3 text-[#E8E2D6]" /> Estate Manager & Concierge</li>
              <li className="flex items-center gap-1.5"><Check className="h-3 w-3 text-[#E8E2D6]" /> 6 Mins from MDE Airport</li>
            </ul>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-mono">Optional Extras</span>
            <ul className="text-[11px] text-stone-300 space-y-1 font-light">
              <li>· Custom Grocery Stocking</li>
              <li>· Helicopter Transfers</li>
              <li>· Guided Medellin Tours</li>
            </ul>
          </div>
        </div>

        {/* Interactive Rates Estimator & Booking Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-ink-900/50 border border-ivory-200/10 p-8 sm:p-12 shadow-2xl">
          {/* Controls Form Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl font-light text-ivory-50">
              Estimate Your Stay
            </h3>

            {/* Date Pickers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] text-stone-400 font-mono mb-2">Check-in</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-stone-400" />
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full border border-ivory-200/20 bg-ink-950 pl-10 pr-3 py-2.5 text-xs text-ivory-100 focus:border-[#E8E2D6] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.15em] text-stone-400 font-mono mb-2">Check-out</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-stone-400" />
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full border border-ivory-200/20 bg-ink-950 pl-10 pr-3 py-2.5 text-xs text-ivory-100 focus:border-[#E8E2D6] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Guests Selector */}
            <div>
              <label className="block text-xs uppercase tracking-[0.15em] text-stone-400 font-mono mb-2">
                Guests ({guests} Adults/Children)
              </label>
              <input
                type="range"
                min="1"
                max="14"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                className="w-full accent-[#E8E2D6]"
              />
              <div className="flex justify-between text-[11px] font-mono text-stone-400 mt-1">
                <span>1 Guest</span>
                <span>14 Guests (Full Capacity)</span>
              </div>
            </div>

            {/* Add-ons Checklist */}
            <div className="pt-4 border-t border-ivory-200/10 space-y-3">
              <label className="block text-xs uppercase tracking-[0.15em] text-stone-400 font-mono">
                Bespoke Service Add-ons
              </label>
              <div className="space-y-2">
                {luxuryAddonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-center justify-between p-3 border cursor-pointer transition-all ${
                        isChecked ? 'border-ivory-200/30 bg-ink-900' : 'border-ivory-200/10 bg-ink-950/60'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`h-4 w-4 border flex items-center justify-center ${
                          isChecked ? 'border-[#E8E2D6] bg-[#E8E2D6] text-ink-900' : 'border-stone-600'
                        }`}>
                          {isChecked && <Check className="h-3 w-3" />}
                        </div>
                        <div>
                          <span className="text-xs text-ivory-100 font-medium block">{addon.name}</span>
                          <span className="text-[11px] text-stone-400 font-light block">{addon.description}</span>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-[#E8E2D6] shrink-0 ml-3">
                        +${addon.pricePerStay.toLocaleString()}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Pricing Breakdown & Primary CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full bg-ink-950 border border-ivory-200/15 p-6 sm:p-8">
            <div className="space-y-6">
              <div className="border-b border-ivory-200/10 pb-4">
                <span className="text-xs uppercase tracking-[0.2em] text-stone-400 font-mono">Summary Estimate</span>
                <p className="mt-2 font-serif text-4xl font-light text-ivory-50">
                  ${estimatedTotal.toLocaleString()}{' '}
                  <span className="text-xs font-sans text-stone-400 font-normal">USD</span>
                </p>
                <p className="text-xs text-[#E8E2D6]/80 font-mono mt-1">
                  ~${perGuestTotal.toLocaleString()} per guest for {nights} nights
                </p>
              </div>

              <div className="space-y-3 text-xs text-stone-300 font-mono">
                <div className="flex justify-between">
                  <span>{nights} nights @ ${nightlyRate.toLocaleString()}/night</span>
                  <span>${baseVillaTotal.toLocaleString()}</span>
                </div>
                {addonsTotal > 0 && (
                  <div className="flex justify-between text-[#E8E2D6]">
                    <span>Selected Luxury Add-ons</span>
                    <span>+${addonsTotal.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-stone-400 pt-2 border-t border-ivory-200/10">
                  <span>Taxes & Staff Gratuities</span>
                  <span>Included</span>
                </div>
              </div>
            </div>

            {/* Primary Solid Gold CTA Button */}
            <div className="pt-8">
              <button
                onClick={() =>
                  onOpenInquiryWithData &&
                  onOpenInquiryWithData({
                    checkIn,
                    checkOut,
                    guests: `${guests} Guests`,
                    total: estimatedTotal,
                    selectedAddons,
                  })
                }
                className="no-tap-highlight w-full group flex items-center justify-center gap-3 bg-champagne-500 hover:bg-champagne-400 px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink-900 shadow-2xl transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <span>Inquire Reservation</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mt-3 text-[10px] text-center text-stone-400 font-mono">
                Direct booking · Instant host response within 1 hour
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
