import { useState } from 'react';
import { Play, Eye, Clock } from 'lucide-react';
import { VideoView } from './VideoView';

interface Show {
  id: number;
  title: string;
  creator: string;
  thumbnail: string;
  views: string;
  duration: string;
  videoId?: string;
}

export function ShowCard({ show }: { show: Show }) {
  const [showVideoView, setShowVideoView] = useState(false);

  return (
    <>
      <div
        className="group cursor-pointer transition-all duration-300 hover:scale-105"
        onClick={() => setShowVideoView(true)}
      >
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          {/* Thumbnail */}
          <div className="relative aspect-video bg-gray-800">
            <img
              src={show.thumbnail}
              alt={show.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            {/* Duration badge */}
            <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs flex items-center gap-1 text-white">
              <Clock className="w-3 h-3" />
              {show.duration}
            </div>

            {/* Play button - always visible */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-purple-600/90 group-hover:bg-purple-600 rounded-full flex items-center justify-center transition-all group-hover:scale-110 shadow-lg">
                <Play className="w-6 h-6 fill-current text-white ml-1" />
              </div>
            </div>

            {/* Video indicator badge */}
            {show.videoId && (
              <div className="absolute bottom-2 left-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded font-semibold">
                ▶ PLAY
              </div>
            )}
          </div>

          {/* Info */}
          <div className="p-3 bg-gradient-to-b from-gray-900 to-black">
            <h4 className="text-sm font-semibold truncate mb-1 text-white">{show.title}</h4>
            <p className="text-xs text-gray-400 truncate mb-1">{show.creator}</p>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Eye className="w-3 h-3" />
              <span>{show.views} views</span>
            </div>
          </div>
        </div>
      </div>

      <VideoView
        show={show}
        isOpen={showVideoView}
        onClose={() => setShowVideoView(false)}
      />
    </>
  );
}
