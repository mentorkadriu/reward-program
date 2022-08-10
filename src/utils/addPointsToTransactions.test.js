import addPointsToTransactions from "./addPointsToTransactions";

const testObject = {
  id: "629f798f-2cc1-4bff-9d3d-5a19d6ab3edc",
  cost: 117,
  currencyCode: "EUR",
  title: "Cyborg",
  date: "2022-09-18",
  customerId: 3
};

test("", () => {
  expect(addPointsToTransactions([testObject])[0]).toMatchObject({
    ...testObject,
    points: 84
  });
});
