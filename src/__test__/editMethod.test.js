/* eslint-disable */

import { afterInput, realDetail } from "../modules/editMethod";
import Task from "../modules/task";

// const sample = new Task("fdsfds", "2021-06-29", "Very Important", "buy stuff");

test("get realDetail", () => {
  expect(realDetail("X")).toBe("chore");
});

test("get realDetail, with a wrong parameter", () => {
  expect(realDetail("fdsfdsa")).toBeUndefined();
});

// test(" getting the object", () => {
//   expect(localStorage.getItem("+default123")).toBeNull();
// });
