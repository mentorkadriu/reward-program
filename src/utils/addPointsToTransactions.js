import {
  MIN_TRANSACTION_TO_REWARD,
  MAX_TRANSACTION_TO_REWARD
} from "./constants";
import rewardPointsPerTransaction from "./rewardsPointsPerTransaction";

export default function addPointsToTransactions(transactions) {
  return transactions.map((transaction) => {
    const { cost = 0 } = transaction;
    return {
      ...transaction,
      points: rewardPointsPerTransaction(
        cost,
        MIN_TRANSACTION_TO_REWARD,
        MAX_TRANSACTION_TO_REWARD
      )
    };
  });
}
