export default function customersIdsFromTransactions(
  transactions = [],
  field = ""
) {
  const customersIds = transactions.map(
    (transaction) => transaction[`${field}`]
  );

  return [...new Set(customersIds)];
}
