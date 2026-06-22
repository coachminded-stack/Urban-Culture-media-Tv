import { useState } from 'react';
import { Sparkles, Wand2, Film, Scissors, Image, TrendingUp, Zap, Send, Camera, Volume2, FileText, X, Lock, Crown } from 'lucide-react';
import { SubscriptionModal } from './SubscriptionModal';

interface Message {
  id: number;
  type: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

export function CreatorStudio() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAIAccess, setHasAIAccess] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{
    id: 1, type: 'ai',
    text: "👋 Hi! I'm your AI Creative Assistant. I can help you with script ideas, editing suggestions, thumbnail creation, trending topics, and more. What are you working on today?",
    timestamp: new Date()
  }]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const aiSuggestions = [
    { icon: Film, label: "Script Ideas", prompt: "Help me brainstorm comedy skit ideas" },
    { icon: Scissors, label: "Edit Timing", prompt: "Analyze my video pacing and suggest cuts" },
    { icon: Image, label: "Thumbnail Design", prompt: "Create a click-worthy thumbnail concept" },
    { icon: TrendingUp, label: "Trending Topics", prompt: "What's trending in my niche right now?" },
    { icon: Volume2, label: "Audio Tips", prompt: "How can I improve my audio quality?" },
    { icon: Camera, label: "Shot Angles", prompt: "Suggest creative camera angles for my scene" },
  ];

  const handleSelectPlan = (plan: string) => {
    if (plan === 'creator' || plan === 'pro') {
      setHasAIAccess(true);
      setShowSubscriptionModal(false);
      setMessages(prev => [...prev, {
        id: Date.now(), type: 'ai',
        text: "🎉 Welcome to AI Creative Assistant! You now have unlimited access to all AI features. Let's create something amazing together!",
        timestamp: new Date()
      }]);
    }
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    if (!hasAIAccess) { setShowSubscriptionModal(true); return; }

    setMessages(prev => [...prev, { id: Date.now(), type: 'user', text, timestamp: new Date() }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const responses: Record<string, string> = {
        script: "🎬 Here are 3 comedy skit ideas:\n\n1. **'The Tech Support Nightmare'** - A customer trying to explain a simple problem but the support agent keeps misunderstanding in hilarious ways.\n\n2. **'Delivery Driver Chronicles'** - A series about the wild things delivery drivers encounter.\n\n3. **'Social Media Reality Check'** - Behind the scenes of creating 'perfect' content vs reality.\n\nWhich direction interests you most?",
        edit: "✂️ For better pacing:\n\n• Cut dead air between 0:15-0:23\n• Speed up the intro by 1.2x\n• Add a quick cut every 3-4 seconds during high-energy moments\n• Your punchline at 1:45 needs 2 more seconds of reaction time\n• Consider B-roll during the 2:10 talking section",
        thumbnail: "🎨 Winning thumbnail strategy:\n\n• Close-up of your surprised/excited face (70% of frame)\n• Bold yellow text: \"YOU WON'T BELIEVE THIS\"\n• High contrast: Orange background + Purple accent\n• Add motion blur effect behind subject\n• Use 3-5 words max in large font",
        trending: "🔥 Hot topics RIGHT NOW:\n\n1. Street Food Challenges (↑ 340%)\n2. Behind-the-Scenes Comedy Writing (↑ 215%)\n3. Sneaker Unboxing Reactions (↑ 180%)\n4. Day-in-the-Life Athlete Training (↑ 165%)\n5. Quick Recipe Hacks (↑ 145%)",
        audio: "🎤 Audio Quality Tips:\n\n• Record in smaller rooms (less echo)\n• Keep mic 6-12 inches from mouth\n• Apply gentle compression (3:1 ratio)\n• Boost mids (1-4kHz) for voice clarity\n• Cut low frequencies below 80Hz",
        camera: "📹 Creative Shot Ideas:\n\n1. Dutch Angle - Tilt 15-30° for comedy scenes\n2. Low Angle Hero Shot - Camera on ground looking up\n3. Over-the-Shoulder - Perfect for reaction shots\n4. POV Handheld - Creates intimacy\n5. Bird's Eye - Great for food/unboxing content",
      };

      const lower = text.toLowerCase();
      let aiText = "I'm here to help! Ask me about script ideas, editing tips, thumbnails, trending content, audio improvements, or camera work!";
      if (lower.includes('script') || lower.includes('idea')) aiText = responses.script;
      else if (lower.includes('edit') || lower.includes('cut')) aiText = responses.edit;
      else if (lower.includes('thumbnail') || lower.includes('visual')) aiText = responses.thumbnail;
      else if (lower.includes('trend') || lower.includes('viral')) aiText = responses.trending;
      else if (lower.includes('audio') || lower.includes('sound')) aiText = responses.audio;
      else if (lower.includes('camera') || lower.includes('shot')) aiText = responses.camera;

      setMessages(prev => [...prev, { id: Date.now() + 1, type: 'ai', text: aiText, timestamp: new Date() }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      <SubscriptionModal isOpen={showSubscriptionModal} onClose={() => setShowSubscriptionModal(false)} onSelectPlan={handleSelectPlan} />

      {/* Floating AI Button */}
      <button
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Sparkles className="w-8 h-8 text-white" />
        {!hasAIAccess && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
            <Lock className="w-3 h-3 text-black" />
          </div>
        )}
      </button>

      {/* AI Assistant Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[95vw] md:w-[450px] h-[600px] bg-gradient-to-b from-gray-900 to-black border border-purple-500/30 rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Wand2 className="w-6 h-6 text-white" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full" />
              </div>
              <div>
                <h3 className="font-bold text-white">AI Creative Assistant</h3>
                <p className="text-xs text-purple-100">Powered by UCMTV AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-purple-200 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Actions */}
          <div className="p-3 bg-black/50 border-b border-purple-500/20">
            <div className="grid grid-cols-3 gap-2">
              {aiSuggestions.map((s, i) => (
                <button key={i} onClick={() => handleSend(s.prompt)}
                  className="flex flex-col items-center gap-1 p-2 bg-purple-500/10 hover:bg-purple-500/20 rounded-lg transition-colors">
                  <s.icon className="w-4 h-4 text-purple-400" />
                  <span className="text-xs text-gray-300 text-center">{s.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[380px]">
            {!hasAIAccess && (
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <Crown className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-2">Unlock AI Creative Assistant</h4>
                    <p className="text-sm text-gray-300 mb-3">Get unlimited access to AI-powered script writing, editing tips, thumbnail creation, and trending analysis.</p>
                    <div className="space-y-2 text-sm text-gray-300 mb-4">
                      <div>💎 <strong>Creator Plan:</strong> $9.99/mo + $4.99/mo AI add-on</div>
                      <div>⭐ <strong>Pro Plan:</strong> $19.99/mo (AI included free!)</div>
                    </div>
                    <button onClick={() => setShowSubscriptionModal(true)}
                      className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                      View Plans & Upgrade
                    </button>
                  </div>
                </div>
              </div>
            )}

            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl p-3 ${msg.type === 'user' ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' : 'bg-gray-800 text-gray-100'}`}>
                  {msg.type === 'ai' && (
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-purple-400" />
                      <span className="text-xs text-purple-400 font-semibold">AI Assistant</span>
                    </div>
                  )}
                  <p className="text-sm whitespace-pre-line">{msg.text}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-800 rounded-2xl p-3">
                  <div className="flex gap-1">
                    {[0,1,2].map(i => (
                      <div key={i} className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-black/80 border-t border-purple-500/20">
            {!hasAIAccess ? (
              <div className="text-center">
                <button onClick={() => setShowSubscriptionModal(true)}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-semibold transition-colors flex items-center justify-center gap-2">
                  <Lock className="w-5 h-5" />Unlock AI Assistant
                </button>
                <p className="text-xs text-gray-500 mt-2">Available with Creator or Pro plans</p>
              </div>
            ) : (
              <>
                <div className="flex gap-2">
                  <input type="text" value={input} onChange={e => setInput(e.target.value)}
                    onKeyPress={e => e.key === 'Enter' && handleSend(input)}
                    placeholder="Ask me anything about your content..."
                    className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-full border border-purple-500/30 focus:outline-none focus:border-purple-500 placeholder-gray-500" />
                  <button onClick={() => handleSend(input)}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-full hover:scale-105 transition-transform">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                  <FileText className="w-3 h-3" />
                  <span>AI can help with scripts, editing, thumbnails, trends & more</span>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
