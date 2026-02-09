'use client';

import { Match } from '@/types/player';
import { calculateMapPerformance } from '../utils/calculation';

interface PerformanceChartProps {
    matches: Match[];
}

export default function PerformanceChart({ matches }: PerformanceChartProps) {
    const mapPerformance = calculateMapPerformance(matches).slice(0, 5);
    const maxWinRate = Math.max(...mapPerformance.map((m: any) => m.winRate));

    return (
        <div className="card animate-slide-up animate-delay-200">
            <h2 className="text-2xl font-bold mb-2">Map Performance</h2>
            <p className="text-gray-400 text-sm mb-6">Win rate across your top 5 maps</p>

            <div className="space-y-6">
                {mapPerformance.map((map: any, index: number) => (
                    <div
                        key={map.map}
                        className="bg-valo-darker border border-valo-border rounded-xl p-5 hover:border-valo-cyan transition-all duration-300 animate-fade-in"
                        style={{ animationDelay: `${(index + 3) * 100}ms` }}
                    >
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-lg font-bold font-orbitron">{map.map}</span>
                            <span className="text-sm text-gray-400">{map.wins}W - {map.losses}L</span>
                        </div>

                        <div className="relative w-full h-8 bg-valo-dark rounded-lg overflow-hidden mb-3">
                            <div
                                className={`h-full flex items-center justify-end px-3 rounded-lg transition-all duration-1000 ease-out ${map.winRate >= 50 ? 'bg-gradient-secondary' : 'bg-gradient-primary'
                                    }`}
                                style={{
                                    width: `${(map.winRate / maxWinRate) * 100}%`,
                                    animationDelay: `${(index + 4) * 100}ms`
                                }}
                            >
                                <span className="text-white font-bold text-sm">{map.winRate.toFixed(1)}%</span>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div>
                                <span className="text-xs text-gray-400 uppercase tracking-wide block">Avg K/D</span>
                                <span className="text-sm font-bold font-orbitron">{map.avgKD.toFixed(2)}</span>
                            </div>
                            <div>
                                <span className="text-xs text-gray-400 uppercase tracking-wide block">Avg ACS</span>
                                <span className="text-sm font-bold font-orbitron">{Math.round(map.avgACS)}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
