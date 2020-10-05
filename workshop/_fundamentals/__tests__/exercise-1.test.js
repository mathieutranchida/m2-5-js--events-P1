const letterCount = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(letterCount(["crisp", "bacon"])).toBe(10);
  // add more tests here...
  expect(letterCount(["crispy", "skis"])).toBe(10);
  expect(letterCount(["lol", "skis"])).toBe(7);
  expect(letterCount(["funny", "time"])).toBe(9);
});
