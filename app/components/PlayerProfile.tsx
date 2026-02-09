"use client";
import Image from "next/image";
import { PlayerData } from "@/types/player";
import { getRankColor } from "../utils/calculation";

interface PlayerProfileProps {
  player: PlayerData;
}

export default function PlayerProfile({ player }: PlayerProfileProps) {
  return (
    <div className="card animate-slide-up relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary" />

      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        {/* Avatar */}
        <div className="relative animate-scale-in animate-delay-100">
          <div
            className="absolute inset-0 rounded-full blur-xl opacity-50 animate-pulse-glow"
            style={{ backgroundColor: getRankColor(player.current_rank) }}
          />
          <Image
            src={player.player_card_link}
            alt={player.player_name}
            width={120}
            height={120}
            className="relative rounded-full border-4 border-valo-border"
          />
        </div>

        {/* Player Info */}
        <div className="flex-1 text-center md:text-left animate-fade-in animate-delay-200">
          <h1 className="text-4xl md:text-5xl gradient-text mb-4">
            {player.player_name}
          </h1>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-4">
            <div
              className="bg-valo-darker border-2 rounded-xl px-4 py-2 hover:-translate-y-1 transition-transform duration-300"
              style={{ borderColor: getRankColor(player.current_rank) }}
            >
              <span className="text-xs text-gray-400 uppercase tracking-wide block">Current Rank</span>
              <span className="text-lg font-bold" style={{ color: getRankColor(player.current_rank) }}>
                {player.current_rank}
              </span>
            </div>

            <div className="bg-valo-darker border-2 border-valo-border rounded-xl px-4 py-2 hover:-translate-y-1 transition-transform duration-300">
              <span className="text-xs text-gray-400 uppercase tracking-wide block">Peak Rank</span>
              <span className="text-lg font-bold" style={{ color: getRankColor(player.peak_rank) }}>
                {player.peak_rank}
              </span>
            </div>
          </div>

          <div className="flex gap-6 justify-center md:justify-start">
            <div>
              <span className="text-xs text-gray-400 uppercase tracking-wide block">Level</span>
              <span className="text-2xl font-bold text-valo-cyan">{player.player_account_level}</span>
            </div>
            {player.leaderboard_placement > 0 && (
              <div>
                <span className="text-xs text-gray-400 uppercase tracking-wide block">Leaderboard</span>
                <span className="text-2xl font-bold text-valo-cyan">#{player.leaderboard_placement}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Favorites */}
      <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-valo-border animate-fade-in animate-delay-300">
        <div className="bg-valo-darker border border-valo-border rounded-lg p-3 hover:border-valo-red transition-colors duration-300">
          <span className="text-xs text-gray-400 uppercase tracking-wide block mb-1">Top Agent</span>
          <span className="text-sm font-semibold">{player.top_agent}</span>
        </div>
        <div className="bg-valo-darker border border-valo-border rounded-lg p-3 hover:border-valo-red transition-colors duration-300">
          <span className="text-xs text-gray-400 uppercase tracking-wide block mb-1">Best Map</span>
          <span className="text-sm font-semibold">{player.best_map}</span>
        </div>
        <div className="bg-valo-darker border border-valo-border rounded-lg p-3 hover:border-valo-red transition-colors duration-300">
          <span className="text-xs text-gray-400 uppercase tracking-wide block mb-1">Worst Map</span>
          <span className="text-sm font-semibold">{player.worst_map}</span>
        </div>
      </div>
    </div>
  );
}

