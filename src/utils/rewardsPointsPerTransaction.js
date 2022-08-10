import { MIN_REWARD_POINTS, MAX_REWARD_POINTS } from "./constants";

export default function rewardPointsPerTransaction(transactionCost, min, max) {
  let minReward = 0;
  let maxReward = 0;

  if (transactionCost <= min) {
    return 0;
  }

  if (transactionCost > min && transactionCost <= max) {
    return (transactionCost - min) * MIN_REWARD_POINTS;
  }

  if (transactionCost > max) {
    minReward = min * MIN_REWARD_POINTS;
    maxReward = (transactionCost - max) * MAX_REWARD_POINTS;

    return minReward + maxReward;
  }
}
