import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { AppHeader } from './components/AppHeader';
import { CategoryRow } from './components/CategoryRow';
import { HeroSection } from './components/HeroSection';
import { CreatorStudio } from './components/CreatorStudio';
import { FinancialDisclaimer } from './components/FinancialDisclaimer';
import { ShowCard } from './components/ShowCard';
import { BetaSignup } from './components/BetaSignup';

const comedyShows = [
  { id: 1, title: "Laugh Night Live", creator: "Comedy Central", thumbnail: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "2.3M", duration: "45:20", videoId: "l4qDOF3RbCw" },
  { id: 2, title: "Comedy Club Sessions", creator: "Stand Up Pro", thumbnail: "https://images.unsplash.com/photo-1558970439-add78fc68990?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "1.8M", duration: "32:15", videoId: "1pTQCYaTIZY" },
  { id: 3, title: "Street Comedy", creator: "Urban Laughs", thumbnail: "https://images.unsplash.com/photo-1565798846807-2af22c843402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "980K", duration: "28:40", videoId: "qiAIQebkuZo" },
  { id: 4, title: "Night Show Special", creator: "Comedy Kings", thumbnail: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "1.5M", duration: "52:10" },
  { id: 5, title: "Mic Drop Moments", creator: "Standup Stars", thumbnail: "https://images.unsplash.com/photo-1611956425642-d5a8169abd63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "3.2M", duration: "38:25" },
];

const foodieShows = [
  { id: 6, title: "Chef's Table", creator: "Culinary Masters", thumbnail: "https://images.unsplash.com/photo-1696805566858-fe4a670d5df3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "4.1M", duration: "42:30", videoId: "cdWA9cO6b4" },
  { id: 7, title: "Plated Perfection", creator: "Food Artists", thumbnail: "https://images.unsplash.com/photo-1621494042364-e0e6ba89c21d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "2.7M", duration: "35:15", videoId: "wIZe1aR06I4" },
  { id: 8, title: "Street Food Tours", creator: "Global Eats", thumbnail: "https://images.unsplash.com/photo-1778057522012-0071acdce1dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "3.5M", duration: "48:20" },
  { id: 9, title: "Feast Mode", creator: "Foodie Adventures", thumbnail: "https://images.unsplash.com/photo-1732589306925-b26b2153a9c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "1.9M", duration: "29:45" },
  { id: 10, title: "Grill & Chill", creator: "BBQ Nation", thumbnail: "https://images.unsplash.com/photo-1732589307047-c97891a243b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "2.2M", duration: "41:10" },
];

const animalShows = [
  { id: 11, title: "Wild Kingdom", creator: "Nature Watch", thumbnail: "https://images.unsplash.com/photo-1570463662416-7d8e39fc67e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "5.6M", duration: "55:30", videoId: "qprNraWQZF4" },
  { id: 12, title: "Safari Stories", creator: "Wildlife Pro", thumbnail: "https://images.unsplash.com/photo-1503656142023-618e7d1f435a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "4.3M", duration: "47:20", videoId: "4iCTHuLEteo" },
  { id: 13, title: "Forest Friends", creator: "Animal Planet", thumbnail: "https://images.unsplash.com/photo-1629837270594-fabe06c83d5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "3.1M", duration: "39:15" },
  { id: 14, title: "Savanna Secrets", creator: "Wild Life TV", thumbnail: "https://images.unsplash.com/photo-1623743424601-12be3807f99b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "2.8M", duration: "44:50" },
  { id: 15, title: "Nature's Best", creator: "Wildlife Docs", thumbnail: "https://images.unsplash.com/photo-1647202321530-dd3f0c1b1be0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "6.2M", duration: "58:40" },
];

const sneakerShows = [
  { id: 16, title: "Sneaker Culture", creator: "Kicks Daily", thumbnail: "https://images.unsplash.com/photo-1556906781-9a412961c28c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "3.9M", duration: "25:30", videoId: "Ulx1vjAREu0" },
  { id: 17, title: "Heat Check", creator: "Sneakerhead TV", thumbnail: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "4.5M", duration: "31:20" },
  { id: 18, title: "Sole Stories", creator: "Street Fashion", thumbnail: "https://images.unsplash.com/photo-1496202703211-aa28e9500c30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "2.6M", duration: "22:45" },
  { id: 19, title: "Kicks & Fits", creator: "Urban Style", thumbnail: "https://images.unsplash.com/photo-1615440321519-dda3d4b5ccab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "3.3M", duration: "28:15" },
  { id: 20, title: "Fashion Forward", creator: "Style Watch", thumbnail: "https://images.unsplash.com/photo-1619466122087-e1ff06cf234b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "2.1M", duration: "35:50" },
];

const sportsShows = [
  { id: 21, title: "Game Day", creator: "Sports Network", thumbnail: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "7.8M", duration: "62:30", videoId: "BmHKdkuyCWM" },
  { id: 22, title: "Track Legends", creator: "Athletics TV", thumbnail: "https://images.unsplash.com/photo-1502904550040-7534597429ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "5.2M", duration: "48:20", videoId: "7UQQRZodq7I" },
  { id: 23, title: "Championship Series", creator: "Pro Sports", thumbnail: "https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "6.9M", duration: "71:15" },
  { id: 24, title: "Starting Line", creator: "Track & Field", thumbnail: "https://images.unsplash.com/photo-1526676317768-d9b14f15615a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "4.1M", duration: "39:45" },
  { id: 25, title: "Race Day", creator: "Athletic Zone", thumbnail: "https://images.unsplash.com/photo-1538146888063-3ecf5e002d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "5.5M", duration: "52:30" },
];

const entertainmentShows = [
  { id: 26, title: "Live Concert Series", creator: "Music Network", thumbnail: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "8.2M", duration: "68:15", videoId: "rURBtLIV56E" },
  { id: 27, title: "Stage Lights", creator: "Performance TV", thumbnail: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "6.5M", duration: "55:40", videoId: "urNFCLdOyIE" },
  { id: 28, title: "Festival Vibes", creator: "Live Events", thumbnail: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "7.3M", duration: "72:30" },
  { id: 29, title: "Artist Spotlight", creator: "Music Docs", thumbnail: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "5.8M", duration: "45:20" },
  { id: 30, title: "The Show Must Go On", creator: "Entertainment Hub", thumbnail: "https://images.unsplash.com/photo-1565035010268-a3816f98589a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "6.9M", duration: "58:15" },
];

const financialWealthShows = [
  { id: 31, title: "Money Moves", creator: "Wealth Builders", thumbnail: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "9.1M", duration: "42:30", videoId: "BmHKdkuyCWM" },
  { id: 32, title: "Stacking Wealth", creator: "Financial Freedom", thumbnail: "https://images.unsplash.com/photo-1593672755342-741a7f868732?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "7.8M", duration: "38:45" },
  { id: 33, title: "Investment Insights", creator: "Market Masters", thumbnail: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "6.4M", duration: "35:20" },
  { id: 34, title: "Golden Opportunities", creator: "Crypto & Stocks", thumbnail: "https://images.unsplash.com/photo-1534951009808-766178b47a4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "8.5M", duration: "41:15" },
  { id: 35, title: "The Millionaire Mindset", creator: "Success Stories", thumbnail: "https://images.unsplash.com/photo-1568581357391-c71a1675ef93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", views: "10.2M", duration: "50:30" },
];

export default function App() {
  const [showLandingPage, setShowLandingPage] = useState(true);
  const [showBetaBanner, setShowBetaBanner] = useState(true);

  if (showLandingPage) {
    return <LandingPage onEnterApp={() => setShowLandingPage(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Beta banner sits in document flow — visible on ALL devices */}
      {showBetaBanner && (
        <BetaSignup variant="banner" onClose={() => setShowBetaBanner(false)} />
      )}

      <div className={showBetaBanner ? 'pt-16' : ''}>
        <AppHeader />
        <CreatorStudio />

        <HeroSection
          title="Urban Culture Media TV"
          subtitle="100% Niche Content from Creators"
          description="Watch exclusive shows, comedy skits, and premium content across Comedy, Entertainment, Food, Animals, Fashion, Financial Wealth, and Sports."
          backgroundImage="https://images.unsplash.com/photo-1514306191717-452ec28c7814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        />

        <main className="px-4 md:px-8 lg:px-16 py-8 space-y-12 pb-20">
          <CategoryRow title="Comedy & Skits" shows={comedyShows} />
          <CategoryRow title="Entertainment" shows={entertainmentShows} />
          <CategoryRow title="Foodie Shows" shows={foodieShows} />
          <CategoryRow title="Animals & Wildlife" shows={animalShows} />
          <CategoryRow title="Sneakers & Fashion" shows={sneakerShows} />

          <section>
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Financial Wealth</h3>
            <FinancialDisclaimer />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
              {financialWealthShows.map((show) => (
                <ShowCard key={show.id} show={show} />
              ))}
            </div>
          </section>

          <CategoryRow title="Sports" shows={sportsShows} />

          {/* Beta Signup Section */}
          <BetaSignup variant="section" />
        </main>
      </div>
    </div>
  );
}
