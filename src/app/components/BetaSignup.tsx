import { Sparkles, Users, Star, Zap, X, ExternalLink, Check, ChevronRight } from 'lucide-react';

interface BetaSignupProps {
  variant?: 'banner' | 'section' | 'modal';
  onClose?: () => void;
}

const perks = [
  { icon: Star, text: "Early access before public launch" },
  { icon: Zap, text: "Free premium features during beta" },
  { icon: Users, text: "Direct input on platform features" },
  { icon: Sparkles, text: "Founding member badge & recognition" },
];

const BETA_URL = "https://docs.google.com/forms/d/e/1FAIpQLSesDCqhfjgvjMhMnPmOGplVsRNs72A38E9473cid5xZALcjOg/viewform?usp=header";

export function BetaSignup({ variant = 'section', onClose }: BetaSignupProps) {
  if (variant === 'banner') {
    return (
      <div className="w-full bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700 text-white">
        {/* Top row */}
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <Sparkles className="w-5 h-5 flex-shrink-0 animate-pulse" />
            <p className="text-sm font-bold">🚨 Beta Applications OPEN — Limited Spots!</p>
          </div>
          {onClose && (
            <button onClick={onClose} className="text-white/70 hover:text-white transition-colors flex-shrink-0">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
        {/* Bottom row with full message + button */}
        <div className="bg-black/20 px-4 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/90 text-center sm:text-left">
            Join 50-100 founding members shaping Urban Culture Media TV. Free to apply — takes 2 minutes.
          </p>
          <a
            href={BETA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-1.5 bg-white text-purple-700 px-5 py-2 rounded-full text-sm font-bold hover:bg-yellow-100 transition-colors w-full sm:w-auto justify-center"
          >
            Apply for Beta Access <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    );
  }

  if (variant === 'modal') {
    return (
      <div className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
        <div className="bg-gradient-to-b from-gray-900 to-black border border-purple-500/40 rounded-2xl p-8 max-w-md w-full relative animate-fadeIn" onClick={e => e.stopPropagation()}>
          {onClose && (
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          )}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Join the Beta</h2>
            <p className="text-gray-400 text-sm">We're selecting 50-100 founding members to help shape the future of Urban Culture Media TV.</p>
          </div>
          <ul className="space-y-3 mb-6">
            {perks.map((p, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-purple-400" />
                </div>
                <span className="text-sm text-gray-300">{p.text}</span>
              </li>
            ))}
          </ul>
          <a href={BETA_URL} target="_blank" rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-xl font-bold text-lg transition-all">
            Apply for Beta Access <ExternalLink className="w-5 h-5" />
          </a>
          <p className="text-center text-xs text-gray-500 mt-3">Takes less than 2 minutes · Free to join</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-600/20 rounded-full blur-3xl" />
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/40 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Beta Applications Open — Limited Spots
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Be a <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Founding Member</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We're hand-selecting 50-100 creators and viewers to experience Urban Culture Media TV before the world does. Your feedback shapes everything.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6 text-purple-300">What You Get</h3>
            <ul className="space-y-4">
              {perks.map((p, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-purple-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <p.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-gray-300">{p.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-b from-purple-900/40 to-pink-900/20 border border-purple-500/40 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex -space-x-2">
                  {['🎭','🍔','👟','🏆'].map((e, i) => (
                    <div key={i} className="w-9 h-9 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full border-2 border-black flex items-center justify-center text-base">{e}</div>
                  ))}
                </div>
                <span className="text-sm text-gray-400">Creators & viewers already in</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Spots are limited.</h3>
              <p className="text-gray-400 text-sm mb-6">Once we hit 100 beta members, applications close. Don't miss your chance to be part of something real.</p>
              <div className="bg-black/40 rounded-xl p-4 mb-6 space-y-2">
                {["No credit card required", "Application takes under 2 minutes", "We review and reach back within 48 hours"].map((t, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" /><span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <a href={BETA_URL} target="_blank" rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.02] active:scale-95">
              Apply for Beta Access <ExternalLink className="w-5 h-5" />
            </a>
            <p className="text-center text-xs text-gray-500 mt-3">Beta Application Form</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          {['Comedy & Skits','Foodie Shows','Sneakers & Fashion','Sports','Financial Wealth'].map(c => (
            <span key={c} className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />{c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
