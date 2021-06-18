/* eslint-disable */

import iFinder from "../modules/iFinder";

test("getting value of e.target in sidebar ", () => {
  localStorage.setItem("+iFinder", "House Project");

  expect(iFinder()).toBe("House Project");
});
