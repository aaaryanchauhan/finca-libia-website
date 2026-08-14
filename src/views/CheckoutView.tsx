import { useState } from 'react';
import { Check, Heart, Loader2 } from 'lucide-react';
import { checkoutSteps } from '@/data/content';
import { supabase } from '@/lib/supabase';
import { Reveal } from '@/components/Reveal';
import { BackButton } from '@/components/BackButton';

interface CheckoutViewProps {
  onBack: () => void;
  onNavigate: (view: string) => void;
}

export function CheckoutView({ onBack, onNavigate }: CheckoutViewProps) {
  const [checkedSteps, setCheckedSteps] = useState<number[]>([]);
  const [showGuestbook, setShowGuestbook] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    best_meal: '',
    best_experience: '',
    discovered: '',
    must_do: '',
  });

  const toggleStep = (i: number) => {
    setCheckedSteps((prev) =>
      prev.includes(i) ? prev.filter((s) => s !== i) : [...prev, i]
    );
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.from('guestbook_entries').insert({
        best_meal: form.best_meal || null,
        best_experience: form.best_experience || null,
        discovered: form.discovered || null,
        must_do: form.must_do || null,
      });
      setLoading(false);
      if (!error) {
        setSubmitted(true);
        setTimeout(() => onNavigate('memories'), 2500);
      } else {
        setSubmitted(true);
        setTimeout(() => onNavigate('memories'), 2500);
      }
    } catch {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => onNavigate('memories'), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-ink-900">
      {/* Hero */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <img
          src="/photos/patio/patio_01.jpeg"
          alt="Checkout"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 to-ink-900" />
        <div className="absolute top-6 left-6 z-10">
          <BackButton onClick={onBack} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 pb-10">
          <Reveal>
            <p className="font-serif text-4xl font-light italic text-ivory-50 hero-text-shadow">
              Before you leave <Heart className="inline h-5 w-5 text-champagne-400" strokeWidth={1.5} />
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-2xl px-6 py-16 pb-32">
        {/* Checkout steps */}
        <Reveal>
          <p className="text-xs uppercase tracking-widest-3 text-stone-500">Checkout</p>
        </Reveal>
        <div className="mt-8 space-y-3">
          {checkoutSteps.map((step, i) => (
            <Reveal key={i} delay={i * 60}>
              <button
                onClick={() => toggleStep(i)}
                className="no-tap-highlight group flex w-full items-center gap-4 border-b border-ink-700 py-5 text-left transition-colors hover:border-champagne-500/30"
              >
                <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                  checkedSteps.includes(i)
                    ? 'border-champagne-400 bg-champagne-400/20'
                    : 'border-stone-600'
                }`}>
                  {checkedSteps.includes(i) && (
                    <Check className="h-3.5 w-3.5 text-champagne-300" strokeWidth={2} />
                  )}
                </span>
                <span className="font-serif text-lg font-light text-stone-500">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className={`font-serif text-xl font-light transition-colors ${
                  checkedSteps.includes(i) ? 'text-stone-600 line-through' : 'text-ivory-100'
                }`}>
                  {step}
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        {/* All done */}
        {checkedSteps.length === checkoutSteps.length && !showGuestbook && !submitted && (
          <div className="animate-fade-up mt-12 border-t border-ink-700 pt-12">
            <p className="font-serif text-2xl font-light italic text-ivory-200">
              Before you go…
            </p>
            <p className="mt-2 text-sm text-stone-400">
              Leave something for the next guest.
            </p>
            <button
              onClick={() => setShowGuestbook(true)}
              className="no-tap-highlight group mt-6 inline-flex items-center gap-2 text-champagne-400 transition-colors hover:text-champagne-300"
            >
              <Heart className="h-4 w-4" strokeWidth={1.5} />
              <span className="text-sm tracking-wide">Share your experience</span>
            </button>
          </div>
        )}

        {/* Guestbook form */}
        {showGuestbook && !submitted && (
          <div className="animate-fade-up mt-12 border-t border-ink-700 pt-12 space-y-8">
            <p className="font-serif text-2xl font-light italic text-ivory-200">
              Before you go…
            </p>
            <p className="text-sm text-stone-400">
              Leave something for the next guest.
            </p>
            {[
              { key: 'best_meal', label: 'Best meal' },
              { key: 'best_experience', label: 'Best experience' },
              { key: 'discovered', label: 'Something we discovered' },
              { key: 'must_do', label: 'One thing every guest should do' },
            ].map((field) => (
              <div key={field.key}>
                <label className="text-xs uppercase tracking-widest-2 text-stone-500">{field.label}</label>
                <input
                  type="text"
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="no-tap-highlight mt-2 w-full border-b border-ink-600 bg-transparent pb-2 font-serif text-lg font-light italic text-ivory-100 placeholder:text-stone-700 focus:border-champagne-500/50 focus:outline-none transition-colors"
                />
              </div>
            ))}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="no-tap-highlight group inline-flex items-center gap-2 text-champagne-400 transition-colors hover:text-champagne-300 disabled:text-stone-700"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" strokeWidth={1.5} /> : null}
              <span className="text-sm tracking-wide">{loading ? 'Saving…' : 'Share with future guests'}</span>
            </button>
          </div>
        )}

        {submitted && (
          <div className="animate-fade-up mt-12 flex items-center gap-2 text-champagne-400">
            <Check className="h-5 w-5" strokeWidth={1.5} />
            <p className="font-serif text-xl font-light italic">Thank you. Your memories will live on here.</p>
          </div>
        )}
      </div>
    </div>
  );
}
