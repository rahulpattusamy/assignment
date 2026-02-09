'use client';

import { useEffect } from 'react';
import { Match } from "@/types/player"
import { formatDate } from '../utils/calculation';

interface MatchModalProps {
    match: Match | null;
    onClose: () => void;
}

export default function MatchModal({ match, onClose }: MatchModalProps) {
    useEffect(() => {
        if (match) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [match]);

    if (!match) return null;

    const topBorderColor = match.result === 'Won'
        ? 'bg-valo-cyan'
        : match.result === 'Lost'
            ? 'bg-valo-red'
            : 'bg-valo-yellow';

    const resultColor = match.result === 'Won'
        ? 'text-valo-cyan'
        : match.result === 'Lost'
            ? 'text-valo-red'
            : 'text-valo-yellow';

    return (
        <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fade-in"
            onClick={onClose}
        >
            <div
                className="bg-valo-card border border-valo-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative animate-scale-in"
                onClick={(e) => e.stopPropagation()}
            >
                <div className={`h-2 ${topBorderColor} rounded-t-2xl`} />

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-valo-darker border border-valo-border hover:border-valo-red hover:bg-valo-red transition-all duration-300 flex items-center justify-center group"
                >
                    <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>

                {/* Header */}
                <div className="p-8 pb-6 border-b border-valo-border">
                    <span className="text-xs text-gray-400 uppercase tracking-wide block mb-2">Match Result</span>
                    <h2 className={`text-5xl font-black font-orbitron ${resultColor} mb-3`}>
                        {match.result}
                    </h2>
                    <p className="text-gray-400">{formatDate(match.date_and_time)}</p>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                    {/* Map & Agent */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-valo-darker border border-valo-border rounded-xl p-5">
                            <span className="text-xs text-gray-400 uppercase tracking-wide block mb-2">Map</span>
                            <span className="text-2xl font-bold font-orbitron">{match.map}</span>
                        </div>
                        <div className="bg-valo-darker border border-valo-border rounded-xl p-5">
                            <span className="text-xs text-gray-400 uppercase tracking-wide block mb-2">Agent</span>
                            <span className="text-2xl font-bold font-orbitron">{match.agent}</span>
                        </div>
                    </div>

                    {/* Performance Stats */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Performance Statistics</h3>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                            <div className="bg-valo-darker border border-valo-border rounded-xl p-4 flex items-center gap-3 hover:border-valo-cyan transition-colors duration-300">
                                <span className="text-2xl">⚔️</span>
                                <div>
                                    <span className="text-xs text-gray-400 uppercase block">Kills</span>
                                    <span className="text-xl font-bold font-orbitron">{match.kills}</span>
                                </div>
                            </div>

                            <div className="bg-valo-darker border border-valo-border rounded-xl p-4 flex items-center gap-3 hover:border-valo-cyan transition-colors duration-300">
                                <span className="text-2xl">💀</span>
                                <div>
                                    <span className="text-xs text-gray-400 uppercase block">Deaths</span>
                                    <span className="text-xl font-bold font-orbitron">{match.deaths}</span>
                                </div>
                            </div>

                            <div className="bg-valo-darker border border-valo-border rounded-xl p-4 flex items-center gap-3 hover:border-valo-cyan transition-colors duration-300">
                                <span className="text-2xl">🤝</span>
                                <div>
                                    <span className="text-xs text-gray-400 uppercase block">Assists</span>
                                    <span className="text-xl font-bold font-orbitron">{match.assists}</span>
                                </div>
                            </div>

                            <div className="bg-valo-darker border border-valo-border rounded-xl p-4 flex items-center gap-3 hover:border-valo-cyan transition-colors duration-300">
                                <span className="text-2xl">📊</span>
                                <div>
                                    <span className="text-xs text-gray-400 uppercase block">K/D</span>
                                    <span className="text-xl font-bold font-orbitron">{match.kd_ratio.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <div className="bg-valo-darker border border-valo-border rounded-xl p-4 flex items-center gap-3 hover:border-valo-purple transition-colors duration-300">
                                <span className="text-2xl">🎯</span>
                                <div>
                                    <span className="text-xs text-gray-400 uppercase block">HS %</span>
                                    <span className="text-xl font-bold font-orbitron">{match.headshot_percentage.toFixed(1)}%</span>
                                </div>
                            </div>

                            <div className="bg-valo-darker border border-valo-border rounded-xl p-4 flex items-center gap-3 hover:border-valo-purple transition-colors duration-300">
                                <span className="text-2xl">📈</span>
                                <div>
                                    <span className="text-xs text-gray-400 uppercase block">ACS</span>
                                    <span className="text-xl font-bold font-orbitron">{Math.round(match.ACS)}</span>
                                </div>
                            </div>

                            <div className="bg-valo-darker border border-valo-border rounded-xl p-4 flex items-center gap-3 hover:border-valo-purple transition-colors duration-300">
                                <span className="text-2xl">💥</span>
                                <div>
                                    <span className="text-xs text-gray-400 uppercase block">Damage</span>
                                    <span className="text-xl font-bold font-orbitron">{match.damage_made.toLocaleString()}</span>
                                </div>
                            </div>

                            <div className="bg-valo-darker border border-valo-border rounded-xl p-4 flex items-center gap-3 hover:border-valo-purple transition-colors duration-300">
                                <span className="text-2xl">⚡</span>
                                <div>
                                    <span className="text-xs text-gray-400 uppercase block">ADR</span>
                                    <span className="text-xl font-bold font-orbitron">
                                        {Math.round(match.damage_made / ((match.kills + match.deaths) || 1))}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
