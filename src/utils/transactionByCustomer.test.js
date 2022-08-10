import transactionByCustomer from "./transactionByCustomer";

const testObject = {
  id: "629f798f-2cc1-4bff-9d3d-5a19d6ab3edc",
  cost: 117,
  currencyCode: "EUR",
  title: "Cyborg",
  date: "2022-09-18",
  customerId: 3
};

const customerIds = [3];

test("Should return and array with with objects containg customerId and transactions for each customer", () => {
  expect(transactionByCustomer([testObject], customerIds)[0]).toMatchObject({
    customerId: 3,
    transactions: [testObject]
  });
});
