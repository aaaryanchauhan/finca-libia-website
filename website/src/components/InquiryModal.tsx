import { useState, useEffect } from 'react';
import { X, CheckCircle2, Loader2, Sparkles, ShieldCheck } from 'lucide-react';

export interface InquiryPreFillData {
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  total?: number;
  selectedAddons?: string[];
  suiteName?: string;
  experienceTitle?: string;
  message?: string;
}

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: InquiryPreFillData | null;
}

export function InquiryModal({ isOpen, onClose, initialData }: InquiryModalProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: initialData?.checkIn || '',
    checkOut: initialData?.checkOut || '',
    guests: initialData?.guests || '8',
    specialRequests: '',
  });

  useEffect(() => {
    if (initialData) {
      setForm((prev) => ({
        ...prev,
        checkIn: initialData.checkIn || prev.checkIn,
        checkOut: initialData.checkOut || prev.checkOut,
        guests: initialData.guests || prev.guests,
        specialRequests: initialData.suiteName
          ? `Interested in reserving ${initialData.suiteName}.`
          : initialData.experienceTitle
          ? `Interested in experience: ${initialData.experienceTitle}.`
          : initialData.selectedAddons && initialData.selectedAddons.length > 0
          ? `Include add-ons: ${initialData.selectedAddons.join(', ')}.`
          : prev.specialRequests,
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-950/90 backdrop-blur-xl animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-xl rounded-3xl border border-ink-700 bg-ink-800 p-6 sm:p-10 shadow-2xl my-8 text-ivory-100">
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-ink-700/60 text-stone-300 hover:text-ivory-50 hover:bg-ink-700 transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4 animate-fade-in">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-champagne-500/20 text-champagne-400 border border-champagne-500/40">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="font-serif text-3xl font-light text-ivory-50">Inquiry Confirmed</h3>
            <p className="font-serif text-base italic text-champagne-300">
              Thank you, {form.name || 'distinguished guest'}.
            </p>
            <p className="text-xs text-stone-300 max-w-md mx-auto leading-relaxed font-light">
              Our private concierge manager will review your requested dates ({form.checkIn || 'TBD'} to {form.checkOut || 'TBD'}) for {form.guests} guests and reach out via WhatsApp / Email within 2 hours with customized rate details and reservation confirmation.
            </p>
            {initialData?.total && (
              <div className="inline-block rounded-2xl bg-ink-900 px-6 py-2.5 border border-champagne-500/30 text-xs text-champagne-300">
                Estimated Reservation Total: ${initialData.total.toLocaleString()} USD
              </div>
            )}
            <div>
              <button
                onClick={handleClose}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-champagne-500 px-7 py-3 text-xs uppercase tracking-widest-2 font-medium text-ink-900 shadow-xl hover:bg-champagne-300 transition-colors"
              >
                <span>Return to Showcase</span>
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest-3 text-champagne-400 font-medium mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Private Reservation Inquiry</span>
            </div>
            <h3 className="font-serif text-3xl font-light text-ivory-50">
              Reserve Finca Libia
            </h3>
            <p className="mt-1 text-xs text-stone-400 font-light">
              100% Exclusive Villa Rental · Up to 14 Guests · Medellín, Colombia
            </p>

            {initialData?.total && (
              <div className="mt-4 rounded-xl bg-champagne-500/10 border border-champagne-400/40 p-3.5 text-xs text-champagne-300 flex items-center justify-between">
                <span>Estimated Reservation Total ({form.guests} guests):</span>
                <span className="font-serif text-lg font-medium text-ivory-50">${initialData.total.toLocaleString()} USD</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-widest-2 text-stone-400 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Alexander Sterling"
                  className="w-full rounded-xl border border-ink-600 bg-ink-900/80 px-4 py-3 text-sm text-ivory-100 placeholder-stone-600 focus:border-champagne-400 focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-widest-2 text-stone-400 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="alexander@example.com"
                    className="w-full rounded-xl border border-ink-600 bg-ink-900/80 px-4 py-3 text-sm text-ivory-100 placeholder-stone-600 focus:border-champagne-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-widest-2 text-stone-400 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+1 (555) 019-2834"
                    className="w-full rounded-xl border border-ink-600 bg-ink-900/80 px-4 py-3 text-sm text-ivory-100 placeholder-stone-600 focus:border-champagne-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-widest-2 text-stone-400 mb-1">
                    Check-In *
                  </label>
                  <input
                    type="date"
                    required
                    min={today}
                    value={form.checkIn}
                    onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
                    className="w-full rounded-xl border border-ink-600 bg-ink-900/80 px-3 py-3 text-xs text-ivory-100 focus:border-champagne-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-widest-2 text-stone-400 mb-1">
                    Check-Out *
                  </label>
                  <input
                    type="date"
                    required
                    min={form.checkIn || today}
                    value={form.checkOut}
                    onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
                    className="w-full rounded-xl border border-ink-600 bg-ink-900/80 px-3 py-3 text-xs text-ivory-100 focus:border-champagne-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-widest-2 text-stone-400 mb-1">
                    Guests
                  </label>
                  <select
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className="w-full rounded-xl border border-ink-600 bg-ink-900/80 px-3 py-3 text-xs text-ivory-100 focus:border-champagne-400 focus:outline-none transition-colors"
                  >
                    {[...Array(14)].map((_, i) => (
                      <option key={i + 1} value={String(i + 1)} className="bg-ink-800 text-ivory-100">
                        {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest-2 text-stone-400 mb-1">
                  Special Requests / Concierge Preferences
                </label>
                <textarea
                  rows={3}
                  value={form.specialRequests}
                  onChange={(e) => setForm({ ...form, specialRequests: e.target.value })}
                  placeholder="e.g. Private chef for dinner, airport SUV transfer, wine list..."
                  className="w-full rounded-xl border border-ink-600 bg-ink-900/80 px-4 py-3 text-xs text-ivory-100 placeholder-stone-600 focus:border-champagne-400 focus:outline-none transition-colors"
                />
              </div>

              <div className="flex items-center gap-2 text-[11px] text-stone-400 font-light">
                <ShieldCheck className="h-4 w-4 text-champagne-400 shrink-0" />
                <span>Discreet handling · Direct response from Estate Concierge</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 flex items-center justify-center gap-2 rounded-full bg-champagne-500 py-3.5 text-xs font-medium uppercase tracking-widest-2 text-ink-900 shadow-2xl transition-all hover:bg-champagne-300 disabled:opacity-50"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                <span>{loading ? 'Submitting Request...' : 'Submit Inquiry to Concierge'}</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
