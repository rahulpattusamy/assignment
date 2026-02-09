'use client';

import { Match } from '@/types/player';
import { formatDate, getPerformanceLabel } from '../utils/calculation';

interface MatchCardProps {
    match: Match;
    onClick: () => void;
    index: number;
}

export default function MatchCard({ match, onClick, index }: MatchCardProps) {
    const borderColor = match.result === 'Won'
        ? 'border-l-valo-cyan'
        : match.result === 'Lost'
            ? 'border-l-valo-red'
            : 'border-l-valo-yellow';

    const resultColor = match.result === 'Won'
        ? 'text-valo-cyan'
        : match.result === 'Lost'
            ? 'text-valo-red'
            : 'text-valo-yellow';

    const performanceLabel = getPerformanceLabel(match.kd_ratio, match.ACS);

    return (
        <div
            className={`bg-gradient-to-br from-valo-card to-valo-card-hover border border-valo-border border-l-4 ${borderColor} rounded-xl p-5 cursor-pointer hover:-translate-y-1 hover:shadow-glow-red transition-all duration-300 group animate-fade-in`}
            onClick={onClick}
            style={{ animationDelay: `${index * 50}ms` }}
        >
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
                <div>
                    <span className={`text-xl font-black font-orbitron ${resultColor}`}>
                        {match.result}
                    </span>
                    <p className="text-xs text-gray-400 mt-1">{formatDate(match.date_and_time)}</p>
                </div>
                {performanceLabel && (
                    <span className="bg-gradient-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                        {performanceLabel}
                    </span>
                )}
            </div>

            {/* Map & Agent */}
            <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                    <span className="text-xs text-gray-400 uppercase tracking-wide">Map</span>
                    <span className="font-semibold">{match.map}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-xs text-gray-400 uppercase tracking-wide">Agent</span>
                    <span className="font-semibold">{match.agent}</span>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-2 p-3 bg-valo-darker rounded-lg border border-valo-border">
                <div className="text-center">
                    <span className="text-xs text-gray-400 block">K/D</span>
                    <span className="text-sm font-bold font-orbitron">{match.kd_ratio.toFixed(2)}</span>
                </div>
                <div className="text-center">
                    <span className="text-xs text-gray-400 block">KDA</span>
                    <span className="text-sm font-bold font-orbitron text-xs">{match.kills}/{match.deaths}/{match.assists}</span>
                </div>
                <div className="text-center">
                    <span className="text-xs text-gray-400 block">HS%</span>
                    <span className="text-sm font-bold font-orbitron">{match.headshot_percentage.toFixed(0)}%</span>
                </div>
                <div className="text-center">
                    <span className="text-xs text-gray-400 block">ACS</span>
                    <span className="text-sm font-bold font-orbitron">{Math.round(match.ACS)}</span>
                </div>
            </div>

            {/* Click Hint */}
            <div className="flex items-center justify-end mt-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs mr-1">View Details</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    );
}
