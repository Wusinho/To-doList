/* eslint-disable */

import {
  findInLocal,
  setLocal,
  getLocal,
  removeLocal,
  removeChildren,
  setLocalObject,
} from "../modules/localStorage";
import Task from "../modules/task";

const sample = new Task("fdsfds", "2021-06-29", "Very Important", "buy stuff");

test("edit Tasks", () => {
  setLocalObject("+default123", sample);
  expect(localStorage.getItem("+name123")).toBeDefined();
});

test("Adding to an Array", () => {
  findInLocal("default", "+default123");
  expect(localStorage.getItem("+name123")).toBeDefined();
});

test("Add to localStorage", () => {
  setLocal("default", "+default123");
  expect(localStorage.getItem("default")).not.toBeNull();
});

test("get values from localStorage", () => {
  getLocal("default");
  expect(localStorage.getItem("default")).toBeDefined();
});

test("deleting an item in localStorage", () => {
  getLocal("default");
  expect(localStorage.getItem("default")).toBeDefined();
  removeLocal("default");
  expect(localStorage.getItem("default")).toBeNull();
});

test("removing a child in localStorage", () => {
  getLocal("default2");
  removeChildren("default2");
  expect(localStorage.getItem("default2")).toBeNull();
});

// expect(z).not.toBeNull();
// expect(z).toBeDefined();
// expect(z).not.toBeUndefined();
// expect(z).not.toBeTruthy();
// expect(z).toBeFalsy();
