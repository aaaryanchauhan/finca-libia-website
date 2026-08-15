import { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, Bot, Calendar } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  hasInquiryAction?: boolean;
}

export function VirtualConciergeWidget({ onOpenInquiry }: { onOpenInquiry: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Greetings. I am your Finca Libia Digital Assistant. How may I assist you regarding our private 12-acre estate, master suites, or concierge services today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const quickPrompts = [
    'What amenities are included?',
    'How far is MDE airport?',
    'Tell me about the 6 suites',
    'How do I book a helicopter?',
    'What is the nightly rate?',
  ];

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');

    // Generate intelligent AI concierge response
    setTimeout(() => {
      let reply = "Finca Libia is a 100% exclusive 12-acre mountain estate featuring 6 master suites, 25m heated infinity pool, red clay tennis court, Finnish cedar sauna, speakeasy bar, and full private staff. Would you like to check availability for your dates?";
      let showInquiryAction = true;

      const lower = text.toLowerCase();
      if (lower.includes('airport') || lower.includes('transfer') || lower.includes('mde')) {
        reply = "Finca Libia is just 45 minutes by private SUV from Medellín's José María Córdova International Airport (MDE), or a 6-minute helicopter flight directly onto our on-site helipad.";
      } else if (lower.includes('suite') || lower.includes('bedroom') || lower.includes('capacity') || lower.includes('room')) {
        reply = "We offer 6 private master suites accommodating up to 14 guests: The Gold Room (Grand Master with open-air jacuzzi), The Grey Room (Garden Suite), Valley View Suite, Courtyard Sanctuary Suite, The Black Room (Obsidian Suite), and Guest Wing Suite.";
      } else if (lower.includes('helicopter') || lower.includes('guatapé') || lower.includes('fly') || lower.includes('helipad')) {
        reply = "Our on-site helipad handles private arrivals and scenic helicopter tours over Guatapé Rock and Antioquia's green mountain range. Our concierge handles all flight permits.";
      } else if (lower.includes('rate') || lower.includes('price') || lower.includes('cost') || lower.includes('night')) {
        reply = "Exclusive estate rates range from $2,500 to $3,200 USD per night depending on season, covering all 6 master suites, 12 private acres, heated pool, sauna, tennis court, and full butler staff.";
      } else if (lower.includes('amenit') || lower.includes('pool') || lower.includes('sauna') || lower.includes('tennis')) {
        reply = "Estate amenities include: 25m saltwater infinity pool (heated to 28°C), Finnish cedar sauna & steam spa, professional red clay tennis court, soundproof games room with bowling & billiards, speakeasy bar, and 12 acres of gardens with alpacas.";
      } else if (lower.includes('chef') || lower.includes('food') || lower.includes('dining')) {
        reply = "In-villa private chef service is available to prepare multi-course breakfast, lunch, and candlelit dinners tailored to your dietary preferences, paired with fine wines from our cellar.";
      }

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        hasInquiryAction: showInquiryAction,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="no-tap-highlight group flex items-center gap-2.5 rounded-full bg-champagne-500 p-4 sm:px-5 sm:py-3.5 text-ink-900 shadow-2xl transition-all duration-300 hover:bg-champagne-300 hover:scale-105 active:scale-95"
          aria-label="Open Virtual Concierge"
        >
          <Sparkles className="h-5 w-5 text-ink-900 animate-pulse" />
          <span className="hidden sm:inline text-xs font-semibold uppercase tracking-widest-2">Virtual Concierge</span>
        </button>
      </div>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-[92vw] sm:w-[400px] h-[520px] rounded-3xl border border-ink-700/80 bg-ink-900/95 backdrop-blur-2xl shadow-2xl flex flex-col justify-between overflow-hidden animate-fade-in text-ivory-100">
          {/* Header */}
          <div className="bg-ink-800 p-4 border-b border-ink-700/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-champagne-500/20 text-champagne-400 border border-champagne-500/30">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-serif text-base font-medium text-ivory-50">Virtual Concierge</h4>
                <p className="text-[10px] uppercase tracking-wider text-champagne-400 font-medium">Finca Libia Private Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-stone-400 hover:text-ivory-50 hover:bg-ink-700 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 scrollbar-thin">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="h-7 w-7 rounded-full bg-champagne-500/10 text-champagne-400 flex items-center justify-center shrink-0 border border-champagne-500/30 mt-1">
                    <Bot className="h-3.5 w-3.5" />
                  </div>
                )}
                <div
                  className={`max-w-[82%] rounded-2xl p-3.5 text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-champagne-500 text-ink-900 font-medium rounded-tr-none shadow-md'
                      : 'bg-ink-800 border border-ink-700/80 text-ivory-100 rounded-tl-none space-y-2'
                  }`}
                >
                  <p>{msg.text}</p>

                  {msg.sender === 'bot' && msg.hasInquiryAction && (
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        onOpenInquiry();
                      }}
                      className="mt-2 flex items-center gap-1.5 rounded-full bg-champagne-500/20 border border-champagne-400/40 px-3 py-1 text-[10px] uppercase tracking-wider text-champagne-300 font-medium hover:bg-champagne-500 hover:text-ink-900 transition-colors"
                    >
                      <Calendar className="h-3 w-3" />
                      <span>Inquire Stay Now</span>
                    </button>
                  )}

                  <span className={`block text-[9px] mt-1 ${msg.sender === 'user' ? 'text-ink-900/70' : 'text-stone-400'}`}>
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Questions Pills */}
          <div className="px-4 py-2 border-t border-ink-700/40 bg-ink-950/60 overflow-x-auto flex gap-2 scrollbar-none">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="whitespace-nowrap rounded-full bg-ink-800 border border-ink-700 px-3 py-1 text-[10px] text-stone-300 hover:text-champagne-300 hover:border-champagne-400/40 transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <div className="p-3 border-t border-ink-700/80 bg-ink-800/90 flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about suites, amenities, rates..."
              className="flex-1 rounded-xl bg-ink-900 border border-ink-600 px-3.5 py-2.5 text-xs text-ivory-100 placeholder-stone-500 focus:border-champagne-400 focus:outline-none"
            />
            <button
              onClick={() => handleSend()}
              className="p-2.5 rounded-xl bg-champagne-500 text-ink-900 hover:bg-champagne-300 transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
