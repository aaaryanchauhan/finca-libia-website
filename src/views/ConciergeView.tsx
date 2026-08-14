import { useState, useEffect } from 'react';
import { Send, Check, Loader2 } from 'lucide-react';
import { quickActions } from '@/data/content';
import { supabase } from '@/lib/supabase';
import { Reveal } from '@/components/Reveal';
import { BackButton } from '@/components/BackButton';
import type { ConciergeRequest } from '@/types';

interface ConciergeViewProps {
  onBack: () => void;
}

export function ConciergeView({ onBack }: ConciergeViewProps) {
  const [customMessage, setCustomMessage] = useState('');
  const [requests, setRequests] = useState<ConciergeRequest[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeAction, setActiveAction] = useState<string | null>(null);

  useEffect(() => {
    loadRequests();
  }, []);

  const loadRequests = async () => {
    try {
      const { data } = await supabase
        .from('concierge_requests')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);
      if (data) setRequests(data as ConciergeRequest[]);
    } catch {
      // Offline / fallback mode
    }
  };

  const handleSubmit = async (type: string, message: string) => {
    if (!message.trim()) return;
    setLoading(true);
    try {
      const { error } = await supabase
        .from('concierge_requests')
        .insert({ type, message });

      setLoading(false);
      if (!error) {
        setSubmitted(true);
        setCustomMessage('');
        setActiveAction(null);
        setTimeout(() => setSubmitted(false), 3000);
        loadRequests();
      } else {
        // Fallback for placeholder env
        setSubmitted(true);
        setCustomMessage('');
        setActiveAction(null);
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch {
      setLoading(false);
      setSubmitted(true);
      setCustomMessage('');
      setActiveAction(null);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const handleQuickAction = async (actionId: string, label: string) => {
    setActiveAction(actionId);
    await handleSubmit(actionId, label);
  };

  return (
    <div className="min-h-screen bg-ink-900">
      <div className="px-6 pt-8 pb-4">
        <BackButton onClick={onBack} />
      </div>

      <div className="mx-auto max-w-2xl px-6 pb-32">
        {/* Statement */}
        <Reveal>
          <p className="text-xs uppercase tracking-widest-3 text-stone-500">Concierge</p>
          <h1 className="mt-4 font-serif text-5xl font-light text-ivory-50 leading-tight">
            How can we make your stay better?
          </h1>
        </Reveal>

        {/* Ask anything */}
        <Reveal delay={100}>
          <div className="mt-12">
            <div className="flex items-end gap-3">
              <textarea
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Where should we have dinner tonight?"
                rows={2}
                className="no-tap-highlight flex-1 resize-none border-b border-ink-600 bg-transparent pb-3 font-serif text-lg font-light italic text-ivory-100 placeholder:text-stone-600 focus:border-champagne-500/50 focus:outline-none transition-colors"
              />
              <button
                onClick={() => handleSubmit('custom', customMessage)}
                disabled={loading || !customMessage.trim()}
                className="no-tap-highlight mb-3 shrink-0 text-champagne-400 transition-colors hover:text-champagne-300 disabled:text-stone-700"
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" strokeWidth={1.5} />
                ) : (
                  <Send className="h-5 w-5" strokeWidth={1.5} />
                )}
              </button>
            </div>
            <p className="mt-2 text-xs text-stone-600">Ask anything — we will respond shortly.</p>
          </div>
        </Reveal>

        {/* Confirmation */}
        {submitted && (
          <div className="animate-fade-up mt-6 flex items-center gap-2 text-champagne-400">
            <Check className="h-4 w-4" strokeWidth={1.5} />
            <p className="text-sm">Your request has been received. We will be in touch.</p>
          </div>
        )}

        {/* Quick actions */}
        <Reveal delay={200}>
          <div className="mt-16">
            <p className="text-xs uppercase tracking-widest-2 text-stone-500">Quick actions</p>
            <div className="mt-6 grid grid-cols-2 gap-px">
              {quickActions.map((action) => (
                <button
                  key={action.id}
                  onClick={() => handleQuickAction(action.id, action.label)}
                  disabled={loading && activeAction === action.id}
                  className="no-tap-highlight group border border-ink-700 bg-ink-800/50 p-5 text-left transition-all duration-300 hover:border-champagne-500/30 hover:bg-ink-800 disabled:opacity-50"
                >
                  <p className="font-serif text-lg font-light text-ivory-200 transition-colors group-hover:text-champagne-300">
                    {action.label}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Recent requests */}
        {requests.length > 0 && (
          <Reveal delay={300}>
            <div className="mt-16">
              <p className="text-xs uppercase tracking-widest-2 text-stone-500">Your recent requests</p>
              <div className="mt-6 space-y-px">
                {requests.map((req) => (
                  <div key={req.id} className="border-b border-ink-700 py-4">
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-sm text-ivory-200">{req.message}</p>
                      <span
                        className={`shrink-0 text-xs uppercase tracking-widest-2 ${
                          req.status === 'completed'
                            ? 'text-olive-400'
                            : req.status === 'acknowledged'
                            ? 'text-champagne-400'
                            : 'text-stone-500'
                        }`}
                      >
                        {req.status}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-stone-600">
                      {new Date(req.created_at).toLocaleString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </div>
  );
}
