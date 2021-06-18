/* eslint-disable */

import Task from "../modules/task";

test("create a Task", () => {
  const newTask = new Task("buy", "2021-07-02", "Normal", "something");
  expect(newTask).toBeTruthy();
});

test("create a Task with missing information", () => {
  const newTask = new Task("buy", "2021-07-02");
  expect(newTask).toBeTruthy();
});
