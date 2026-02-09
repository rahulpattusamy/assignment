export interface Match {
  date_and_time: string;
  map: string;
  agent: string;
  result: 'Won' | 'Lost' | 'Draw';
  kills: number;
  deaths: number;
  assists: number;
  kd_ratio: number;
  headshot_percentage: number;
  ACS: number;
  damage_made: number;
}

export interface PlayerData {
  player_name: string;
  player_card_link: string;
  player_account_level: number;
  current_rank: string;
  peak_rank: string;
  leaderboard_placement: number;
  overall_headshot_percentage: number;
  overall_kd_ratio: number;
  overall_ACS: number;
  overall_win_percent: number;
  top_agent: string;
  best_map: string;
  worst_map: string;
  matches: Match[];
}

export type FilterType = 'All' | 'Won' | 'Lost' | 'Draw';
