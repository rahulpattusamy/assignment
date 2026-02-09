'use client';

import { useState } from 'react';
import { Match, FilterType } from '@/types/player';

import MatchModal from './MatchModal';
import MatchCard from './MatchCard';

interface MatchHistoryProps {
    matches: Match[];
}

export default function MatchHistory({ matches }: MatchHistoryProps) {
    const [filter, setFilter] = useState<FilterType>('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);

    const filteredMatches = matches.filter((match) => {
        const matchesFilter = filter === 'All' || match.result === filter;
        const matchesSearch =
            searchQuery === '' ||
            match.map.toLowerCase().includes(searchQuery.toLowerCase()) ||
            match.agent.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesFilter && matchesSearch;
    });

    const filters: FilterType[] = ['All', 'Won', 'Lost', 'Draw'];

    return (
        <div className="space-y-6 animate-slide-up animate-delay-300">
            <div>
                <h2 className="text-3xl font-bold mb-2">Match History</h2>
                <p className="text-gray-400">Detailed performance breakdown across all matches</p>
            </div>

            {/* Filter Bar */}
            <div className="card">
                <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                        {filters.map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`btn-filter ${filter === f ? 'btn-filter-active' : 'btn-filter-inactive'}`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full lg:w-96">
                        <input
                            type="text"
                            placeholder="Search by map or agent..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-valo-darker border border-valo-border rounded-lg px-4 py-2 pl-10 focus:outline-none focus:border-valo-cyan transition-colors"
                        />
                        <svg
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <circle cx="11" cy="11" r="8" strokeWidth="2" />
                            <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>

                    <div className="text-sm text-gray-400">
                        Showing <span className="text-valo-cyan font-bold">{filteredMatches.length}</span> of{' '}
                        <span className="text-valo-cyan font-bold">{matches.length}</span> matches
                    </div>
                </div>
            </div>

            {/* Match Grid */}
            {filteredMatches.length === 0 ? (
                <div className="card text-center py-20 border-2 border-dashed animate-scale-in">
                    <span className="text-6xl block mb-4 opacity-50">🔍</span>
                    <h3 className="text-xl font-bold mb-2">No Matches Found</h3>
                    <p className="text-gray-400">Try adjusting your filters or search query</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                    {filteredMatches.map((match, index) => (
                        <MatchCard
                            key={`${match.date_and_time}-${index}`}
                            match={match}
                            onClick={() => setSelectedMatch(match)}
                            index={index}
                        />
                    ))}
                </div>
            )}

            {selectedMatch && (
                <MatchModal
                    match={selectedMatch}
                    onClose={() => setSelectedMatch(null)}
                />
            )}
        </div>
    );
}