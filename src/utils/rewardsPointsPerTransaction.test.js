import {
  MAX_TRANSACTION_TO_REWARD,
  MIN_TRANSACTION_TO_REWARD
} from "./constants";
import rewardsPointsPerTransaction from "./rewardsPointsPerTransaction";

test("Transactions for 120 should return 90 reward points", () => {
  expect(
    rewardsPointsPerTransaction(
      120,
      MIN_TRANSACTION_TO_REWARD,
      MAX_TRANSACTION_TO_REWARD
    )
  ).toBe(90);
});

test("Transactions for 10 should return 0 reward points", () => {
  expect(
    rewardsPointsPerTransaction(
      10,
      MIN_TRANSACTION_TO_REWARD,
      MAX_TRANSACTION_TO_REWARD
    )
  ).toBe(0);
});

test("Transactions for 50 should return 0 reward points", () => {
  expect(
    rewardsPointsPerTransaction(
      50,
      MIN_TRANSACTION_TO_REWARD,
      MAX_TRANSACTION_TO_REWARD
    )
  ).toBe(0);
});

test("Transactions for 51 should return 1 reward points", () => {
  expect(
    rewardsPointsPerTransaction(
      51,
      MIN_TRANSACTION_TO_REWARD,
      MAX_TRANSACTION_TO_REWARD
    )
  ).toBe(1);
});

test("Transactions for 100 should return 50 reward points", () => {
  expect(
    rewardsPointsPerTransaction(
      100,
      MIN_TRANSACTION_TO_REWARD,
      MAX_TRANSACTION_TO_REWARD
    )
  ).toBe(50);
});

test("Transactions for 300 should return 450 reward points", () => {
  expect(
    rewardsPointsPerTransaction(
      300,
      MIN_TRANSACTION_TO_REWARD,
      MAX_TRANSACTION_TO_REWARD
    )
  ).toBe(450);
});
