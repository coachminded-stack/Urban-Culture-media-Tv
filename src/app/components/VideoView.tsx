import { useState } from 'react';
import { X, Play, ThumbsUp, ThumbsDown, MessageCircle, Share2, Bell, BellOff, Send } from 'lucide-react';

interface VideoViewProps {
  show: {
    id: number;
    title: string;
    creator: string;
    thumbnail: string;
    views: string;
    duration: string;
    videoId?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export function VideoView({ show, isOpen, onClose }: VideoViewProps) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 50000) + 5000);
  const [subscribed, setSubscribed] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    { id: 1, user: 'JD', handle: '@johndoe', text: "This content is amazing! 🔥", likes: 124, time: '2h ago' },
    { id: 2, user: 'SM', handle: '@sarahm', text: "Best show on the platform!", likes: 89, time: '5h ago' },
    { id: 3, user: 'KW', handle: '@kwilliams', text: "Need more episodes ASAP 👏", likes: 56, time: '8h ago' },
  ]);
  const [shared, setShared] = useState(false);

  const handleLike = () => {
    if (disliked) setDisliked(false);
    setLiked(!liked);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
  };

  const handleDislike = () => {
    if (liked) { setLiked(false); setLikeCount(prev => prev - 1); }
    setDisliked(!disliked);
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href).catch(() => {});
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  const handleComment = () => {
    if (!comment.trim()) return;
    setComments(prev => [{
      id: Date.now(), user: 'You', handle: '@you',
      text: comment, likes: 0, time: 'Just now'
    }, ...prev]);
    setComment('');
  };

  const fmt = (n: number) => n >= 1000000 ? `${(n/1000000).toFixed(1)}M` : n >= 1000 ? `${(n/1000).toFixed(1)}K` : n.toString();
  const youtubeUrl = show.videoId ? `https://www.youtube.com/watch?v=${show.videoId}` : null;

  if (!isOpen) return null;

  return (
    <>
      <div onClick={onClose} className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50" />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4 overflow-y-auto">
        <div className="bg-gradient-to-b from-gray-900 to-black border border-purple-500/30 rounded-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto">

          {/* Header */}
          <div className="sticky top-0 bg-black/95 backdrop-blur-sm p-4 flex items-center justify-between border-b border-gray-800 z-10">
            <h2 className="text-lg font-bold text-white truncate pr-4">{show.title}</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors flex-shrink-0">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Video Player */}
          <div className="relative aspect-video bg-black">
            {show.videoId ? (
              <>
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${show.videoId}?autoplay=1&rel=0&playsinline=1`}
                  title={show.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
                {/* Fallback: Watch on YouTube button always visible */}
                <div className="absolute bottom-3 right-3">
                  <a
                    href={youtubeUrl!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors shadow-lg"
                    onClick={e => e.stopPropagation()}
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>
                    Watch on YouTube
                  </a>
                </div>
              </>
            ) : (
              <>
                <img src={show.thumbnail} alt={show.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-4">
                  <div className="text-center px-4">
                    <p className="text-white font-semibold mb-1">Video Coming Soon</p>
                    <p className="text-gray-400 text-sm">This creator's content will be available shortly</p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Creator Info */}
          <div className="px-4 md:px-6 pt-4 pb-2">
            <h3 className="text-xl font-bold text-white mb-1">{show.title}</h3>
            <p className="text-gray-400 text-sm">{show.views} views · {show.duration}</p>
          </div>

          {/* ── SOCIAL ACTION BAR ── */}
          <div className="px-4 md:px-6 py-3 border-b border-gray-800">
            <div className="flex items-center gap-2 flex-wrap">

              {/* Like + Dislike group */}
              <div className="flex items-center rounded-full overflow-hidden border border-white/20">
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-2 px-5 py-2.5 font-semibold transition-all active:scale-95 ${
                    liked ? 'bg-purple-600 text-white' : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  <ThumbsUp className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                  <span>{fmt(likeCount)}</span>
                </button>
                <div className="w-px h-6 bg-white/20" />
                <button
                  onClick={handleDislike}
                  className={`flex items-center px-4 py-2.5 transition-all active:scale-95 ${
                    disliked ? 'bg-red-600 text-white' : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  <ThumbsDown className={`w-5 h-5 ${disliked ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Comment */}
              <button
                onClick={() => setShowComments(!showComments)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all active:scale-95 ${
                  showComments ? 'bg-purple-600 text-white' : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                <MessageCircle className="w-5 h-5" />
                <span>{fmt(comments.length)}</span>
              </button>

              {/* Share */}
              <button
                onClick={handleShare}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all active:scale-95 ${
                  shared ? 'bg-green-600 text-white' : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                <Share2 className="w-5 h-5" />
                <span>{shared ? 'Copied!' : 'Share'}</span>
              </button>

              {/* Subscribe */}
              <button
                onClick={() => setSubscribed(!subscribed)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold transition-all active:scale-95 ml-auto ${
                  subscribed
                    ? 'bg-gray-700 hover:bg-gray-600 text-white'
                    : 'bg-red-600 hover:bg-red-700 text-white'
                }`}
              >
                {subscribed ? <BellOff className="w-5 h-5" /> : <Bell className="w-5 h-5" />}
                <span>{subscribed ? 'Subscribed' : `Subscribe`}</span>
              </button>
            </div>

            {/* Creator name under subscribe */}
            <p className="text-xs text-gray-500 mt-2 text-right">
              {!subscribed ? `Subscribe to ${show.creator}` : `You're subscribed to ${show.creator} ✓`}
            </p>
          </div>

          {/* Comments Section */}
          {showComments && (
            <div className="px-4 md:px-6 py-4 border-b border-gray-800">
              <h4 className="font-bold text-white mb-4 text-lg">Comments</h4>

              {/* Comment Input */}
              <div className="flex gap-3 mb-5">
                <div className="w-9 h-9 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  You
                </div>
                <div className="flex-1 flex gap-2">
                  <input
                    type="text"
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    onKeyPress={e => e.key === 'Enter' && handleComment()}
                    placeholder="Add a comment..."
                    className="flex-1 bg-white/10 text-white px-4 py-2.5 rounded-full border border-white/20 focus:outline-none focus:border-purple-500 placeholder-gray-500 text-sm"
                  />
                  <button
                    onClick={handleComment}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2.5 rounded-full transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Comment List */}
              <div className="space-y-4">
                {comments.map(c => (
                  <div key={c.id} className="flex gap-3">
                    <div className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      {c.user}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-semibold text-white">{c.handle}</span>
                        <span className="text-xs text-gray-500">{c.time}</span>
                      </div>
                      <p className="text-sm text-gray-300">{c.text}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <button className="text-xs text-gray-400 hover:text-purple-400 flex items-center gap-1 transition-colors">
                          <ThumbsUp className="w-3 h-3" /><span>{c.likes}</span>
                        </button>
                        <button className="text-xs text-gray-400 hover:text-white transition-colors">Reply</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* About Section */}
          <div className="px-4 md:px-6 py-4">
            <h4 className="font-semibold text-white mb-2">About this show</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Exclusive content from <span className="text-purple-400 font-semibold">{show.creator}</span> on Urban Culture Media TV.
              Like, comment, and subscribe to support this creator and get notified when new episodes drop!
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
