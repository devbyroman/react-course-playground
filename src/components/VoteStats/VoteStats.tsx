import styles from './VoteStats.module.css';
import { type VoteStatsProps } from './VoteStats';

const VoteStats = ({ stats, totalVotes, positiveRate }: VoteStatsProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.stat}>
        Good: <strong>{stats.good ?? 0}</strong>
      </p>
      <p className={styles.stat}>
        Neutral: <strong>{stats.neutral ?? 0}</strong>
      </p>
      <p className={styles.stat}>
        Bad: <strong>{stats.bad ?? 0}</strong>
      </p>
      <p className={styles.stat}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={styles.stat}>
        Positive: <strong>{positiveRate}%</strong>
      </p>
    </div>
  );
};

export default VoteStats;
