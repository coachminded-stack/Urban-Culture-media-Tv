import { Play, Plus, TrendingUp, Flame } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
}

const trendingContent = [
  { id: 1, title: "🔥 VIRAL: Street Comedy Goes Wild", image: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", tag: "TRENDING NOW", color: "from-red-500 to-orange-500" },
  { id: 2, title: "🍔 Chef's Secret Recipe Revealed", image: "https://images.unsplash.com/photo-1696805566858-fe4a670d5df3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", tag: "HOT TOPIC", color: "from-yellow-500 to-orange-500" },
  { id: 3, title: "🦁 Lions Hunt: Exclusive Footage", image: "https://images.unsplash.com/photo-1570463662416-7d8e39fc67e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", tag: "MUST WATCH", color: "from-green-500 to-teal-500" },
  { id: 4, title: "👟 Limited Edition Drop Alert", image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", tag: "BREAKING", color: "from-purple-500 to-pink-500" },
  { id: 5, title: "⚡ Championship Finals Live", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", tag: "LIVE NOW", color: "from-blue-500 to-cyan-500" },
];

export function HeroSection({ description }: HeroSectionProps) {
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setCurtainOpen(true), 500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!curtainOpen) return;
    const interval = setInterval(() => setCurrentIndex(p => (p + 1) % trendingContent.length), 3000);
    return () => clearInterval(interval);
  }, [curtainOpen]);

  const current = trendingContent[currentIndex];

  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full mt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={current.image} alt="Hero background" className="w-full h-full object-cover transition-opacity duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Curtains */}
      <div className={`absolute inset-0 z-10 pointer-events-none flex transition-all duration-1000 ${curtainOpen ? 'opacity-0' : 'opacity-100'}`}>
        <div className="w-1/2 h-full bg-gradient-to-r from-red-900 via-red-800 to-red-900"
          style={{ backgroundImage: 'repeating-linear-gradient(90deg, #7f1d1d 0px, #991b1b 20px, #7f1d1d 40px)', boxShadow: 'inset -20px 0 50px rgba(0,0,0,0.8)' }}>
          <div className="h-8 bg-gradient-to-b from-yellow-700 to-yellow-900" />
        </div>
        <div className="w-1/2 h-full bg-gradient-to-l from-red-900 via-red-800 to-red-900"
          style={{ backgroundImage: 'repeating-linear-gradient(90deg, #7f1d1d 0px, #991b1b 20px, #7f1d1d 40px)', boxShadow: 'inset 20px 0 50px rgba(0,0,0,0.8)' }}>
          <div className="h-8 bg-gradient-to-b from-yellow-700 to-yellow-900" />
        </div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center px-4 md:px-8 lg:px-16">
        <div className="w-full max-w-6xl mx-auto">
          <div className="space-y-4 md:space-y-6">
            <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${current.color} px-4 py-2 rounded-full`}>
              <Flame className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wider">{current.tag}</span>
              <TrendingUp className="w-4 h-4" />
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">{current.title}</h2>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">{description}</p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 pt-4">
              <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all w-full sm:w-auto justify-center active:scale-95">
                <Play className="w-5 h-5 fill-current" /><span className="font-semibold">Watch Now</span>
              </button>
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all w-full sm:w-auto justify-center active:scale-95">
                <Plus className="w-5 h-5" /><span className="font-semibold">My List</span>
              </button>
            </div>
          </div>

          {/* Thumbnail Indicators */}
          <div className="flex items-center gap-2 mt-8">
            {trendingContent.map((item, i) => (
              <button key={item.id} onClick={() => setCurrentIndex(i)} className="relative group">
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${i === currentIndex ? 'border-purple-500 shadow-lg shadow-purple-500/50' : 'border-white/20 hover:border-white/40'}`}>
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  {i === currentIndex && <div className="absolute inset-0 bg-purple-500/20" />}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
