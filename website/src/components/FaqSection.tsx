import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { websiteFaqs } from '../data/villaData';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative bg-ink-900 px-6 py-24 lg:px-12 border-b border-ink-700/60">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-champagne-400/40 bg-champagne-500/10 px-4 py-1.5 text-xs text-champagne-300 font-medium mb-3">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-ivory-50">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 font-serif text-lg font-light italic text-stone-300">
            Everything you need to know about reserving and experiencing Finca Libia Private Estate.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="mt-12 space-y-4">
          {websiteFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border transition-all duration-300 ${
                  isOpen
                    ? 'border-champagne-400/60 bg-ink-800/80 shadow-xl'
                    : 'border-ink-700/60 bg-ink-800/40 hover:border-ink-600 hover:bg-ink-800/60'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left text-ivory-50 focus:outline-none"
                >
                  <span className="font-serif text-lg sm:text-xl font-light pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center border transition-transform duration-300 ${
                      isOpen
                        ? 'bg-champagne-500 text-ink-900 border-champagne-400 rotate-180'
                        : 'bg-ink-900/60 text-champagne-300 border-ink-700'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-ink-700/40 text-xs sm:text-sm text-stone-300 font-light leading-relaxed animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
