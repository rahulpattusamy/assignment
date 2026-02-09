'use client';

import { useEffect, useState } from 'react';
import { PlayerData } from '@/types/player';
import PlayerProfile from './PlayerProfile';
import StatsOverview from './StatsOverview';
import PerformanceChart from './PerformanceChart';
import MatchHistory from './MatchHistory';

export default function Dashboard() {
  const [playerData, setPlayerData] = useState<PlayerData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/player.json')
      .then(res => res.json())
      .then(data => {
        setPlayerData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  }

  if (!playerData) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="bg-valo-card border-2 border-valo-border rounded-2xl p-12 text-center max-w-md animate-scale-in">
          <span className="text-6xl mb-4 block">⚠️</span>
          <h2 className="text-2xl font-bold text-valo-red mb-2">Error Loading Data</h2>
          <p className="text-gray-400 mb-6">Failed to load player data</p>
          <button
            onClick={() => window.location.reload()}
            className="btn-primary"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative bg-gradient-to-b from-valo-darker to-transparent py-16 overflow-hidden animate-slide-down">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-valo-red/10 rounded-full blur-3xl animate-pulse-glow" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-4 animate-fade-in">
            VALO<span className="gradient-text">COACH</span>
          </h1>
          <p className="text-gray-400 uppercase tracking-widest text-sm animate-fade-in animate-delay-200">
            Elite Performance Tracking
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 space-y-8">
        <PlayerProfile player={playerData} />
        <StatsOverview player={playerData} />
        <PerformanceChart matches={playerData.matches} />
        <MatchHistory matches={playerData.matches} />

      </main>

      {/* Footer */}
      <footer className="bg-valo-darker border-t border-valo-border py-8 mt-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">© 2026 ValoCoach. Built for competitive excellence.</p>
        </div>
      </footer>
    </div>
  );
}