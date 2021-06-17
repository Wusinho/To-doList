/* eslint-disable */
// import "jest-localstorage-mock";
import createProject from "../modules/createProject";

test("storage.getItem", () => {
  const name = "House";
  const KEY = createProject(name);

  localStorage.setItem(KEY);
  expect(localStorage.getItem(name)).toBeTruthy();
});
