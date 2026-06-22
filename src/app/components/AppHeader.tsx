import { Search, Bell, User, Menu } from 'lucide-react';
import { useState } from 'react';

export function AppHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="px-4 md:px-8 lg:px-16 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            UCMTV
          </h1>

          <nav className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-sm hover:text-purple-400 transition-colors">Home</a>
            <a href="#" className="text-sm hover:text-purple-400 transition-colors">Shows</a>
            <a href="#" className="text-sm hover:text-purple-400 transition-colors">Creators</a>
            <a href="#" className="text-sm hover:text-purple-400 transition-colors">Categories</a>
            <a href="#" className="text-sm hover:text-purple-400 transition-colors">My List</a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block hover:text-purple-400 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="hidden md:block hover:text-purple-400 transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="hover:text-purple-400 transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button
            className="lg:hidden hover:text-purple-400 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-black/98 border-t border-gray-800 px-4 py-4">
          <nav className="flex flex-col gap-4">
            <a href="#" className="text-sm hover:text-purple-400 transition-colors">Home</a>
            <a href="#" className="text-sm hover:text-purple-400 transition-colors">Shows</a>
            <a href="#" className="text-sm hover:text-purple-400 transition-colors">Creators</a>
            <a href="#" className="text-sm hover:text-purple-400 transition-colors">Categories</a>
            <a href="#" className="text-sm hover:text-purple-400 transition-colors">My List</a>
            <a href="#" className="text-sm hover:text-purple-400 transition-colors">Search</a>
          </nav>
        </div>
      )}
    </header>
  );
}
