/* eslint-disable */

import {
  findInLocal,
  setLocal,
  getLocal,
  removeLocal,
  removeChildren,
  setLocalObject,
} from "../modules/localStorage";
import { realDetail, editTask } from "../modules/editMethod";
import Task from "../modules/task";

test("get realDetail", () => {
  expect(realDetail("X")).toBe("chore");
});

test("get realDetail, with a wrong parameter", () => {
  expect(realDetail("fdsfdsa")).toBeUndefined();
});

test("creating a chore with a wrong value and chaging it to: Buy Tomato", () => {
  const sample = new Task("fdsafsadsd", "2021-07-02", "Normal", "something");
  setLocalObject("Buy", sample);
  editTask("Buy", "Buy Tomato", "chore");
  const object = JSON.parse(getLocal("Buy")).chore;

  expect(object).toBe("Buy Tomato");
});

// expect(z).not.toBeNull();
// expect(z).toBeDefined();
// expect(z).not.toBeUndefined();
// expect(z).not.toBeTruthy();
// expect(z).toBeFalsy();
