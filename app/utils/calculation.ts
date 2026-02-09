import { Match } from "@/types/player";

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return 'Today';
  if (diffInDays === 1) return 'Yesterday';
  if (diffInDays < 7) return `${diffInDays} days ago`;
  
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

export const getPerformanceLabel = (kd: number, acs: number): string | null => {
  if (kd >= 3) return 'Legendary';
  if (kd >= 2.5) return 'Dominating';
  if (kd >= 2) return 'Excellent';
  if (acs >= 300) return 'High Impact';
  return null;
};

export const getRankColor = (rank: string): string => {
  const rankLower = rank.toLowerCase();
  
  if (rankLower.includes('radiant')) return '#ffee58';
  if (rankLower.includes('immortal')) return '#ba68c8';
  if (rankLower.includes('ascendant')) return '#4fc3f7';
  if (rankLower.includes('diamond')) return '#9c27b0';
  if (rankLower.includes('platinum')) return '#00bcd4';
  if (rankLower.includes('gold')) return '#ffd700';
  if (rankLower.includes('silver')) return '#c0c0c0';
  if (rankLower.includes('bronze')) return '#cd7f32';
  
  return '#ff4655';
};

export const calculateMapPerformance = (matches: Match[]) => {
  const mapStats: { [key: string]: any } = {};

  matches.forEach(match => {
    if (!mapStats[match.map]) {
      mapStats[match.map] = {
        map: match.map,
        wins: 0,
        losses: 0,
        totalMatches: 0,
        winRate: 0,
        avgKD: 0,
        avgACS: 0,
      };
    }

    const stat = mapStats[match.map];
    stat.totalMatches++;
    
    if (match.result === 'Won') stat.wins++;
    if (match.result === 'Lost') stat.losses++;
    
    stat.avgKD += match.kd_ratio;
    stat.avgACS += match.ACS;
  });

  Object.values(mapStats).forEach((stat: any) => {
    stat.winRate = (stat.wins / stat.totalMatches) * 100;
    stat.avgKD = stat.avgKD / stat.totalMatches;
    stat.avgACS = stat.avgACS / stat.totalMatches;
  });

  return Object.values(mapStats).sort((a: any, b: any) => b.winRate - a.winRate);
};