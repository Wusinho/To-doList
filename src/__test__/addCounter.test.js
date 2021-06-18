/* eslint-disable */
import addCounter from "../modules/addCounter";

it("Random number greater than 99", () => {
  const value = addCounter();
  expect(value).toBeGreaterThan(99);
});

it("Random number less than 1000", () => {
  const value = addCounter();
  expect(value).toBeLessThan(1000);
});
