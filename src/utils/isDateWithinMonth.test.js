import isDateWithinMonth from "./isDateWithinMonth";

test("2022-10-31, 2022-10-15", () => {
  expect(
    isDateWithinMonth(new Date("2022-10-25"), new Date("2022-10-15"))
  ).toBeTruthy();
});

test("2022-10-01, 2022-10-02", () => {
  expect(
    isDateWithinMonth(new Date("2022-10-01"), new Date("2022-10-02"))
  ).toBeTruthy();
});

test("2022-10-01, 2022-10-01", () => {
  expect(
    isDateWithinMonth(new Date("2022-10-01"), new Date("2022-10-01"))
  ).toBeTruthy();
});

test("2022-10-01, 2022-11-01", () => {
  expect(
    isDateWithinMonth(new Date("2022-10-01"), new Date("2022-11-01"))
  ).toBeFalsy();
});
