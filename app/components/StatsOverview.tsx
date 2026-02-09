'use client';

import { PlayerData } from "@/types/player";

interface StatsOverviewProps {
    player: PlayerData;
}

const StatCard = ({ label, value, icon, color, delay }: any) => (
    <div
        className={`relative bg-valo-darker border border-valo-border rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 overflow-hidden group animate-scale-in ${delay}`}
        onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = color;
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '';
        }}
    >
        <div
            className="absolute top-1/2 -right-8 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"
            style={{ backgroundColor: color }}
        />

        <div className="relative z-10 flex items-center gap-4">
            <span className="text-4xl">{icon}</span>
            <div>
                <span className="text-xs text-gray-400 uppercase tracking-wide block mb-1">{label}</span>
                <span className="text-3xl font-black font-orbitron" style={{ color }}>
                    {value}
                </span>
            </div>
        </div>
    </div>
);

export default function StatsOverview({ player }: StatsOverviewProps) {
    const stats = [
        {
            label: 'K/D Ratio',
            value: player.overall_kd_ratio.toFixed(2),
            icon: '⚔️',
            color: '#ff4655',
            delay: 'animate-delay-100',
        },
        {
            label: 'Headshot %',
            value: `${player.overall_headshot_percentage.toFixed(1)}%`,
            icon: '🎯',
            color: '#00d4aa',
            delay: 'animate-delay-200',
        },
        {
            label: 'Win Rate',
            value: `${player.overall_win_percent.toFixed(1)}%`,
            icon: '🏆',
            color: '#ffce00',
            delay: 'animate-delay-300',
        },
        {
            label: 'Avg ACS',
            value: Math.round(player.overall_ACS),
            icon: '📊',
            color: '#9d4edd',
            delay: 'animate-delay-400',
        },
    ];

    return (
        <div className="card animate-slide-up animate-delay-100">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Overall Performance</h2>
                <span className="text-sm text-gray-400">{player.matches.length} Matches Played</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat) => (
                    <StatCard key={stat.label} {...stat} />
                ))}
            </div>
        </div>
    );
}
