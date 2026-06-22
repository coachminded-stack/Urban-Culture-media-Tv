import { X, Check, Sparkles, Crown, Star, Zap } from 'lucide-react';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlan: (plan: string) => void;
}

const plans = [
  {
    id: 'free', name: 'Free', price: '$0', period: 'forever', icon: Star,
    color: 'from-gray-600 to-gray-700',
    features: [
      { text: 'Watch unlimited content', included: true },
      { text: 'SD quality streaming', included: true },
      { text: 'Limited creator uploads (5/month)', included: true },
      { text: 'Basic analytics', included: true },
      { text: 'AI Creative Assistant', included: false },
      { text: 'HD/4K streaming', included: false },
    ]
  },
  {
    id: 'creator', name: 'Creator', price: '$9.99', period: 'per month', icon: Crown,
    color: 'from-purple-600 to-pink-600', popular: true,
    features: [
      { text: 'Everything in Free', included: true },
      { text: 'HD streaming', included: true },
      { text: 'Unlimited creator uploads', included: true },
      { text: 'Advanced analytics & insights', included: true },
      { text: 'Custom branding', included: true },
      { text: 'Ad-free viewing', included: true },
      { text: 'AI Creative Assistant', included: false, addon: true, addonPrice: '+$4.99/mo' },
    ]
  },
  {
    id: 'pro', name: 'Pro', price: '$19.99', period: 'per month', icon: Zap,
    color: 'from-yellow-500 to-orange-600',
    features: [
      { text: 'Everything in Creator', included: true },
      { text: '4K Ultra HD streaming', included: true },
      { text: 'AI Creative Assistant', included: true, highlight: true },
      { text: 'Advanced AI editing tools', included: true },
      { text: 'Unlimited AI generations', included: true },
      { text: 'Priority support & training', included: true },
      { text: 'Revenue sharing program', included: true },
    ]
  }
];

export function SubscriptionModal({ isOpen, onClose, onSelectPlan }: SubscriptionModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-gradient-to-b from-gray-900 to-black border border-purple-500/30 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto animate-fadeIn">
          <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-pink-600 p-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Choose Your Plan</h2>
              <p className="text-purple-100 mt-1">Unlock premium features and AI-powered creativity</p>
            </div>
            <button onClick={onClose} className="text-white hover:text-purple-200 transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-b border-purple-500/20">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-bold text-white">AI Creative Assistant Add-On</h3>
            </div>
            <p className="text-gray-300 mb-4">Get instant help with scripts, editing, thumbnails, trending topics, and more.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[['🎬 Script Generation', 'AI-powered comedy skit and show ideas'],
                ['✂️ Smart Editing', 'Auto-detect best cuts and pacing tips'],
                ['📈 Trend Analysis', 'Real-time trending topics in your niche']
              ].map(([title, desc]) => (
                <div key={title} className="bg-black/40 rounded-lg p-4">
                  <div className="text-purple-400 font-semibold mb-2">{title}</div>
                  <div className="text-sm text-gray-400">{desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <div key={plan.id} className={`relative rounded-2xl overflow-hidden transition-transform hover:scale-[1.02] ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold text-center py-2">
                      MOST POPULAR
                    </div>
                  )}
                  <div className={`bg-gradient-to-b ${plan.color} p-6 ${plan.popular ? 'pt-12' : ''}`}>
                    <Icon className="w-12 h-12 text-white mb-3" />
                    <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-white/80 text-sm">{plan.period}</span>
                    </div>
                  </div>
                  <div className="bg-gray-900/50 backdrop-blur p-6">
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          {feature.included
                            ? <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${feature.highlight ? 'text-yellow-400' : 'text-green-500'}`} />
                            : <X className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />}
                          <div className="flex-1">
                            <span className={`text-sm ${feature.included ? 'text-white' : 'text-gray-500'} ${feature.highlight ? 'font-semibold text-yellow-400' : ''}`}>
                              {feature.text}
                            </span>
                            {feature.addon && <div className="mt-1"><span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Add-on: {feature.addonPrice}</span></div>}
                            {feature.highlight && <div className="flex items-center gap-1 mt-1"><Sparkles className="w-3 h-3 text-yellow-400" /><span className="text-xs text-yellow-400">Included Free!</span></div>}
                          </div>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => onSelectPlan(plan.id)}
                      className={`w-full py-3 rounded-lg font-semibold transition-all active:scale-95 ${
                        plan.id === 'pro' ? 'bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white'
                        : plan.popular ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                      }`}
                    >
                      {plan.id === 'free' ? 'Current Plan' : 'Upgrade Now'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-6 bg-black/40 border-t border-purple-500/20 text-center">
            <p className="text-gray-400 text-sm">All plans include a 7-day free trial. Cancel anytime.</p>
            <div className="flex items-center justify-center gap-6 mt-4 text-xs text-gray-500">
              <span>🔒 Secure Payment</span><span>💳 All Cards Accepted</span><span>🔄 Cancel Anytime</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
