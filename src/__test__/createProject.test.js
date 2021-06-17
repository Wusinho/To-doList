/* eslint-disable */
// import "jest-localstorage-mock";
import createProject from "../modules/createProject";

test("storage create Item", () => {
  const name = "House";
  createProject(name);

  expect(localStorage.getItem(name)).toBeTruthy();
});
