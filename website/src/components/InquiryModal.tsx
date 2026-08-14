import { useState } from 'react';
import { X, CheckCircle2, Loader2, Sparkles } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '8',
    specialRequests: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-900/90 backdrop-blur-xl animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-xl rounded-3xl border border-ink-700 bg-ink-800 p-6 sm:p-10 shadow-2xl my-8">
        <button
          onClick={onClose}
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
            <h3 className="font-serif text-3xl font-light text-ivory-50">Inquiry Received</h3>
            <p className="font-serif text-base italic text-champagne-300">
              Thank you, {form.name || 'distinguished guest'}.
            </p>
            <p className="text-xs text-stone-300 max-w-md mx-auto leading-relaxed">
              Our private concierge manager will review your requested dates ({form.checkIn || 'TBD'} to {form.checkOut || 'TBD'}) and reach out via WhatsApp / Email within 2 hours with customized rates and availability.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-champagne-500 px-7 py-3 text-xs uppercase tracking-widest-2 font-medium text-ink-900 shadow-xl"
            >
              <span>Return to Showcase</span>
            </button>
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
                  placeholder="e.g. Lord Alexander Sterling"
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
                  placeholder="e.g. Private chef for dinner, airport helicopter transfer, wine list..."
                  className="w-full rounded-xl border border-ink-600 bg-ink-900/80 px-4 py-3 text-xs text-ivory-100 placeholder-stone-600 focus:border-champagne-400 focus:outline-none transition-colors"
                />
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
