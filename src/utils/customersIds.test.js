import customerIds from "./customersIds";
import data from "../../public/MOCK_DATA.json";

test("customerIds to equal 5", () => {
  expect(customerIds(data, "customerId").length).toBe(5);
});
