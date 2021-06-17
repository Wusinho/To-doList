/* eslint-disable */

import {
  afterInputChore,
  afterInputDate,
  afterInputImportance,
  afterInputDescription,
  changeChore,
  changeDate,
  changeImportance,
  changeDescription,
} from "../modules/editMethod";
import Task from "../modules/task";

test("edit Item", () => {
  const defaultName = "Default";
  const name = new Task("buy", "2021-07-02", "Normal", "something");
  localStorage.setItem(defaultName, JSON.stringify(name));

  expect(changeChore(defaultName, "Buy")).toHaveBeenCalledTimes(1);
});
