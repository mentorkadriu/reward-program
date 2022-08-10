import { MONTHS } from "./constants";
import isDateWithinMonth from "./isDateWithinMonth";

export function calculateTotalPoints(transactionByCustomer = []) {
  return transactionByCustomer.map((trbc) => {
    const { transactions, customerId } = trbc;
    let totalPoints = transactions.reduce(
      (prev, curr) => prev + curr.points,
      0
    );
    const pointsPerMonths = {};
    MONTHS.forEach((month) => {
      pointsPerMonths[`${month}`] = transactions.filter((t) => {
        return isDateWithinMonth(t.date, new Date(`2022-${month}-01`));
      });
      pointsPerMonths[`${month}`] = pointsPerMonths[`${month}`].reduce(
        (prev, curr) => prev + curr.points,
        0
      );
    });
    return {
      customerId,
      pointsPerMonths,
      totalPoints
    };
  });
}
