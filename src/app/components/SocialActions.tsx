import { useState } from 'react';
import { ThumbsUp, MessageCircle, Bell, BellOff, Share2 } from 'lucide-react';

interface SocialActionsProps {
  initialLikes?: number;
  initialComments?: number;
  creatorName: string;
  isSubscribed?: boolean;
  onSubscribe?: (subscribed: boolean) => void;
}

export function SocialActions({
  initialLikes = 0,
  initialComments = 0,
  creatorName,
  isSubscribed = false,
  onSubscribe
}: SocialActionsProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikes);
  const [subscribed, setSubscribed] = useState(isSubscribed);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    if (liked) { setLikeCount(likeCount - 1); setLiked(false); }
    else { setLikeCount(likeCount + 1); setLiked(true); }
  };

  const handleSubscribe = () => {
    const newState = !subscribed;
    setSubscribed(newState);
    onSubscribe?.(newState);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 flex-wrap">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all active:scale-95 ${
            liked ? 'bg-purple-600 text-white' : 'bg-white/10 hover:bg-white/20 text-white'
          }`}
        >
          <ThumbsUp className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
          <span className="text-sm font-semibold">{formatNumber(likeCount)}</span>
        </button>

        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all active:scale-95"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-sm font-semibold">{formatNumber(initialComments)}</span>
        </button>

        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all active:scale-95">
          <Share2 className="w-4 h-4" />
          <span className="text-sm font-semibold">Share</span>
        </button>

        <button
          onClick={handleSubscribe}
          className={`flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all active:scale-95 ml-auto ${
            subscribed ? 'bg-gray-600 hover:bg-gray-700 text-white' : 'bg-red-600 hover:bg-red-700 text-white'
          }`}
        >
          {subscribed ? <><BellOff className="w-4 h-4" /><span>Subscribed</span></> : <><Bell className="w-4 h-4" /><span>Subscribe to {creatorName}</span></>}
        </button>
      </div>

      {showComments && (
        <div className="animate-fadeIn bg-white/5 rounded-lg p-4 space-y-4">
          <h4 className="font-semibold text-white">Comments</h4>
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-sm">You</span>
            </div>
            <div className="flex-1">
              <textarea
                placeholder="Add a comment..."
                className="w-full bg-white/10 text-white px-4 py-2 rounded-lg border border-white/20 focus:outline-none focus:border-purple-500 resize-none"
                rows={2}
              />
              <div className="flex justify-end gap-2 mt-2">
                <button className="px-4 py-1 text-sm text-gray-400 hover:text-white transition-colors">Cancel</button>
                <button className="px-4 py-1 text-sm bg-purple-600 hover:bg-purple-700 rounded-full transition-colors">Comment</button>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            {[{ initials: 'JD', handle: '@johndoe', time: '2 hours ago', text: "This content is amazing! Can't wait for the next episode.", likes: 124 },
              { initials: 'SM', handle: '@sarahm', time: '5 hours ago', text: 'Best show on the platform! 🔥', likes: 89 }
            ].map((c, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs">{c.initials}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold">{c.handle}</span>
                    <span className="text-xs text-gray-500">{c.time}</span>
                  </div>
                  <p className="text-sm text-gray-300">{c.text}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <button className="text-xs text-gray-400 hover:text-white flex items-center gap-1">
                      <ThumbsUp className="w-3 h-3" /><span>{c.likes}</span>
                    </button>
                    <button className="text-xs text-gray-400 hover:text-white">Reply</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">Show more comments</button>
        </div>
      )}
    </div>
  );
}
