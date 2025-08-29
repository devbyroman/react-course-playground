import { useState } from 'react';

import CafeInfo from './components/CafeInfo/CafeInfo';
import css from './App.module.css';
import { type Votes, type VoteType } from './types/votes';
import VoteOptions from './components/VoteOptions/VoteOptions.tsx';
import VoteStats from './components/VoteStats/VoteStats.tsx';
import Notification from './components/Notification/Notification.tsx';

function App() {
  const [stats, setStats] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleType = (type: VoteType) => {
    setStats((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const resetVotes = () => {
    setStats({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalVotes = stats.good + stats.neutral + stats.bad;

  const positiveRate = totalVotes
    ? Math.round((stats.good / totalVotes) * 100)
    : 0;

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions
          onVote={handleType}
          canReset={totalVotes > 0}
          onReset={resetVotes}
        />
        {(totalVotes > 0 && (
          <VoteStats
            positiveRate={positiveRate}
            totalVotes={totalVotes}
            stats={stats}
          />
        )) || <Notification />}
      </div>
    </>
  );
}

export default App;
