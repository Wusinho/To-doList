/* eslint-disable */

import { afterInput, realDetail } from "../modules/editMethod";

test("get realDetail", () => {
  expect(realDetail("X")).toBe("chore");
});

test("get realDetail, with a wrong parameter", () => {
  expect(realDetail("fdsfdsa")).toBeUndefined();
});

// test(" getting the object", () => {
//   expect(localStorage.getItem("+default123")).toBeNull();
// });
