import type { VoteType } from "../../types/votes";

export interface VoteButtons {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}