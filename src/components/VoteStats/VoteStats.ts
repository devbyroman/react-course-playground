export interface VoteStatsProps {
  totalVotes: number;
  stats: {
    good: number;
    neutral: number;
    bad: number;
  };
  positiveRate: number;
}
