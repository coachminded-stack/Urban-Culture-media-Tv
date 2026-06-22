import { useState } from 'react';
import { Play, Sparkles, TrendingUp, Users, Zap, Check, X, Shield, Globe, Heart } from 'lucide-react';
import { BetaSignup } from './BetaSignup';

interface LandingPageProps {
  onEnterApp: () => void;
}

export function LandingPage({ onEnterApp }: LandingPageProps) {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Hero */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl animate-pulse" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Your Stage. Your Stories. Your Culture.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The streaming platform built exclusively for urban creators and culture lovers. No algorithms burying your content. No competing with corporate studios. Just 100% authentic shows, skits, and stories that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={onEnterApp} className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg shadow-purple-500/50 active:scale-95">
              Start Watching Free
            </button>
            <button onClick={onEnterApp} className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full text-lg font-semibold hover:bg-white/20 transition-all border border-white/20 active:scale-95">
              I'm a Creator - Join Now
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">No credit card required • 7-day free trial</p>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="py-20 px-4 md:px-8 bg-black/40">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-400">For Viewers</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Watch exclusive content you won't find anywhere else. Comedy skits that hit different. Food shows from your neighborhood. Real financial wealth building. Fashion that speaks your language. Sports from your perspective.
            </p>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-400">For Creators</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Finally, a platform that puts YOU first. Upload unlimited content. Keep your audience. Build your brand. Get paid for your creativity - not just views from strangers.
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">What Makes Us Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "100% Niche Content", description: "No random recommendations. Every show is handpicked from creators in Comedy, Entertainment, Food, Animals, Fashion, Financial Wealth, and Sports." },
              { icon: Sparkles, title: "AI Creative Assistant", description: "Get help writing scripts, editing timing, designing thumbnails, finding trending topics, and perfecting your audio. Your personal creative partner." },
              { icon: Zap, title: "Fair Creator Monetization", description: "We don't take 45% like other platforms. You upload. You grow. You earn. Simple." },
              { icon: Globe, title: "Watch Anywhere", description: "Built for TV, mobile, and desktop. Your content looks amazing on every screen." },
              { icon: Heart, title: "Real Community", description: "Likes, comments, subscriptions that actually matter. Build genuine connections with your audience." },
              { icon: Shield, title: "No Corporate Interference", description: "Your content. Your voice. We don't shadow ban. We don't demonetize for arbitrary reasons." },
            ].map((f, i) => (
              <div key={i} className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all">
                <f.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-gray-400">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="py-20 px-4 md:px-8 bg-gradient-to-b from-purple-900/20 to-black/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Choose Your Plan</h2>
          <p className="text-center text-gray-400 mb-12">7-day free trial on all paid plans. Cancel anytime.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <div className="mb-6"><span className="text-5xl font-bold">$0</span><span className="text-gray-400">/forever</span></div>
              <ul className="space-y-3 mb-8">
                {["Watch unlimited content","SD quality streaming","Upload 5 shows/month","Basic analytics"].map((f,i) => (
                  <li key={i} className="flex items-start gap-2"><Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-gray-300">{f}</span></li>
                ))}
                {["AI Creative Assistant","HD/4K streaming"].map((f,i) => (
                  <li key={i} className="flex items-start gap-2"><X className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" /><span className="text-gray-600">{f}</span></li>
                ))}
              </ul>
              <button onClick={onEnterApp} className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition-all">Get Started Free</button>
            </div>
            {/* Creator */}
            <div className="bg-gradient-to-b from-purple-600 to-pink-600 rounded-2xl p-8 border-2 border-purple-400 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold">MOST POPULAR</div>
              <h3 className="text-2xl font-bold mb-2">Creator</h3>
              <div className="mb-6"><span className="text-5xl font-bold">$9.99</span><span className="text-purple-100">/month</span></div>
              <ul className="space-y-3 mb-8">
                {["Everything in Free","HD streaming","Unlimited uploads","Advanced analytics","Custom branding","Ad-free viewing"].map((f,i) => (
                  <li key={i} className="flex items-start gap-2"><Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" /><span className="text-white">{f}</span></li>
                ))}
                <li className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <div><span className="text-white">AI Assistant</span><span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded">+$4.99/mo</span></div>
                </li>
              </ul>
              <button onClick={onEnterApp} className="w-full py-3 bg-white text-purple-600 hover:bg-gray-100 rounded-lg font-semibold transition-all">Start Free Trial</button>
            </div>
            {/* Pro */}
            <div className="bg-gradient-to-b from-yellow-600 to-orange-600 rounded-2xl p-8 border border-yellow-500">
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="mb-6"><span className="text-5xl font-bold">$19.99</span><span className="text-yellow-100">/month</span></div>
              <ul className="space-y-3 mb-8">
                {["Everything in Creator","4K Ultra HD streaming","Advanced AI editing tools","Unlimited AI generations","Priority support","Early access features","Revenue sharing program"].map((f,i) => (
                  <li key={i} className="flex items-start gap-2"><Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" /><span className="text-white">{f}</span></li>
                ))}
                <li className="flex items-start gap-2"><Sparkles className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" /><span className="text-white font-semibold">AI Assistant INCLUDED FREE</span></li>
              </ul>
              <button onClick={onEnterApp} className="w-full py-3 bg-white text-orange-600 hover:bg-gray-100 rounded-lg font-semibold transition-all">Start Free Trial</button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Your Culture, Your Way</h2>
          <p className="text-center text-gray-400 mb-12">Explore content across 7 curated categories</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[{name:"Comedy & Skits",emoji:"🎭"},{name:"Entertainment",emoji:"🎤"},{name:"Foodie Shows",emoji:"🍔"},{name:"Animals & Wildlife",emoji:"🦁"},
              {name:"Sneakers & Fashion",emoji:"👟"},{name:"Financial Wealth",emoji:"💰"},{name:"Sports",emoji:"⚽"}
            ].map((c,i) => (
              <div key={i} onClick={onEnterApp} className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 hover:scale-105 transition-all cursor-pointer">
                <div className="text-4xl mb-2">{c.emoji}</div>
                <div className="font-semibold">{c.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Beta Signup */}
      <BetaSignup variant="section" />

      {/* Financial Disclaimer */}
      <div className="py-12 px-4 md:px-8 bg-yellow-900/20 border-t border-b border-yellow-600/30">
        <div className="max-w-4xl mx-auto flex items-start gap-4">
          <Shield className="w-8 h-8 text-yellow-500 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Financial Content Disclaimer</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Urban Culture Media TV does not provide financial advice. Content in our Financial Wealth category is for entertainment and educational purposes only. We are not responsible for any investment decisions or monetary losses. Always consult with a licensed financial advisor before making investment decisions.
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 px-4 md:px-8 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Experience Culture Differently?</h2>
          <p className="text-xl text-gray-400 mb-8">Join 10,000+ creators and viewers already on the platform.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button onClick={onEnterApp} className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg shadow-purple-500/50 active:scale-95">
              Start Watching Free
            </button>
            <button onClick={onEnterApp} className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full text-lg font-semibold hover:bg-white/20 transition-all border border-white/20 active:scale-95">
              I'm a Creator - Start Building
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            {["Secure payment processing","Cancel anytime","7-day free trial","No hidden fees"].map((t,i) => (
              <span key={i} className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" />{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Urban Culture Media TV</h3>
            <p className="text-gray-400 text-sm">By Creators, For Culture</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>ucmtv.offical@gmail.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => setShowTerms(true)} className="hover:text-white transition-colors">Terms of Service</button></li>
              <li><button onClick={() => setShowTerms(true)} className="hover:text-white transition-colors">Privacy Policy</button></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-gray-600 pt-8 border-t border-gray-800">
          © 2026 Urban Culture Media TV. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
