/**
 * @param {object[]}  transactions
 * @param {number[]} customerIds
 * @returns {object}
 */
export default function transactionByCustomer(
  transactions = [],
  customerIds = []
) {
  let normalizedTransactions = [];
  if (customerIds.length && transactions.length) {
    customerIds.forEach((customer) => {
      let customerTransactions = transactions.filter((transaction) => {
        return transaction.customerId === customer;
      });

      normalizedTransactions.push({
        customerId: customer,
        transactions: customerTransactions
      });
    });
  }

  return normalizedTransactions;
}
